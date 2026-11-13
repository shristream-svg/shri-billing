import { DatabaseSync,backup as sqliteBackup } from 'node:sqlite';
import { appendFileSync,cpSync,existsSync,mkdirSync,readdirSync,rmSync,statSync } from 'node:fs';
import { dirname,join,resolve } from 'node:path';

type Candidate={root:string;database:string;invoices:number;customers:number;modified:number};

function inspect(root:string):Candidate|null{
 const database=join(root,'data','billing.sqlite');
 if(!existsSync(database))return null;
 let db:DatabaseSync|undefined;
 try{db=new DatabaseSync(database,{readOnly:true});if(String(db.prepare('PRAGMA integrity_check').get()?.integrity_check)!=='ok')return null;const tables=new Set(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(r=>String(r.name)));if(!tables.has('invoices')||!tables.has('customers'))return null;return {root,database,invoices:Number(db.prepare('SELECT COUNT(*) n FROM invoices').get()?.n??0),customers:Number(db.prepare('SELECT COUNT(*) n FROM customers').get()?.n??0),modified:statSync(database).mtimeMs};}catch{return null;}finally{db?.close();}
}

export function legacyDataRoots(home:string,appData:string){
 const roots=[join(appData,'ShriBilling'),join(home,'AppData','Roaming','ShriBilling')];
 const packages=join(home,'AppData','Local','Packages');
 if(existsSync(packages))for(const name of readdirSync(packages))roots.push(join(packages,name,'LocalCache','Roaming','ShriBilling'));
 return [...new Set(roots.map(root=>resolve(root)))];
}

/** Copy the richest valid legacy database once. Existing stable data is never replaced. */
export async function migrateLegacyData(stableRoot:string,legacyRoots:string[]){
 const target=join(stableRoot,'data','billing.sqlite');
 if(existsSync(target))return null;
 const stable=resolve(stableRoot);const candidates=legacyRoots.map(inspect).filter((v):v is Candidate=>!!v&&resolve(v.root)!==stable).sort((a,b)=>b.invoices-a.invoices||b.customers-a.customers||b.modified-a.modified);
 const source=candidates[0];if(!source)return null;
 mkdirSync(dirname(target),{recursive:true});let db:DatabaseSync|undefined;
 try{db=new DatabaseSync(source.database,{readOnly:true});await sqliteBackup(db,target);}catch(error){rmSync(target,{force:true});throw error;}finally{db?.close();}
 for(const folder of ['backups','invoices','exports']){const from=join(source.root,folder),to=join(stableRoot,folder);if(existsSync(from))cpSync(from,to,{recursive:true,force:false,errorOnExist:false});}
 mkdirSync(join(stableRoot,'logs'),{recursive:true});appendFileSync(join(stableRoot,'logs','application.log'),`${new Date().toISOString()} Migrated ${source.invoices} invoices and ${source.customers} customers from ${source.root}\n`);
 return source;
}
