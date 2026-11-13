/** Only retry temporary file/SQLite locks; invalid data and permissions must stay visible. */
export async function openWithRetry<T>(open:()=>T,onRetry:(error:unknown,attempt:number)=>void,wait:(ms:number)=>Promise<void>=ms=>new Promise(resolve=>setTimeout(resolve,ms))):Promise<T>{
 for(let attempt=1;;attempt++){
  try{return open();}catch(error){
   const e=error as {code?:string;message?:string};
   const transient=['EBUSY','SQLITE_BUSY','SQLITE_LOCKED'].includes(e.code??'')||/database (?:is )?(?:locked|busy)/i.test(e.message??'');
   if(!transient||attempt>=4)throw error;
   onRetry(error,attempt);await wait(attempt*1000);
  }
 }
}

export function configureStartupSafely(configure:()=>void,warn:(error:unknown)=>void){
 try{configure();return true;}catch(error){warn(error);return false;}
}
