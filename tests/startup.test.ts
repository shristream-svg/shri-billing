import test from 'node:test';
import assert from 'node:assert/strict';
import {openWithRetry,configureStartupSafely} from '../electron/startup';

test('temporary startup database lock recovers without replacing data',async()=>{
 let attempts=0;const waits:number[]=[];const warnings:number[]=[];const database={id:'existing database'};
 const result=await openWithRetry(()=>{if(++attempts<3)throw new Error('database is locked');return database;},(_,n)=>warnings.push(n),async ms=>{waits.push(ms);});
 assert.equal(result,database);assert.equal(attempts,3);assert.deepEqual(waits,[1000,2000]);assert.deepEqual(warnings,[1,2]);
});
test('startup retries are bounded and preserve the original failure',async()=>{
 const error=new Error('database is locked');let attempts=0;
 await assert.rejects(openWithRetry(()=>{attempts++;throw error;},()=>{},async()=>{}),e=>e===error);assert.equal(attempts,4);
});
test('corruption and denied permissions fail immediately instead of creating a new database',async()=>{
 for(const message of ['database disk image is malformed','EACCES: permission denied']){let attempts=0;await assert.rejects(openWithRetry(()=>{attempts++;throw new Error(message);},()=>{},async()=>{}));assert.equal(attempts,1);}
});
test('Windows login-setting failure does not prevent opening the application',()=>{
 const error=new Error('Windows login settings unavailable');const warnings:unknown[]=[];
 assert.equal(configureStartupSafely(()=>{throw error;},e=>warnings.push(e)),false);assert.deepEqual(warnings,[error]);
 assert.equal(configureStartupSafely(()=>{},()=>assert.fail('unexpected warning')),true);
});
