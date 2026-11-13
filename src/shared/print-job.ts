import { z } from 'zod';
import Decimal from 'decimal.js';
const number = z.string().regex(/^\d+(\.\d{1,6})?$/);
const text = z.string().max(250);
export const printJobSchema = z.object({kind:z.enum(['flex','cards']),width:number,height:number,sizeUnit:z.enum(['ft','in']),pieces:number,pricing:z.enum(['card','pack']),cardsPerPack:number,material:text,sides:z.enum(['Single side','Both sides']),finish:text,notes:text});
export type PrintJob = z.infer<typeof printJobSchema>;
export const newPrintJob=(kind:PrintJob['kind']):PrintJob=>({kind,width:kind==='flex'?'':'0',height:kind==='flex'?'':'0',sizeUnit:'ft',pieces:'1',pricing:'card',cardsPerPack:'100',material:'',sides:'Single side',finish:'',notes:''});
export function printJobValues(input:PrintJob) {
 const parsed=printJobSchema.safeParse(input);if(!parsed.success)throw new Error('Complete the printing dimensions, quantities and job details.');const job=parsed.data;
 const positive=(s:string,label:string,integer=false)=>{const n=new Decimal(s);if(n.lte(0)||n.gt(1000000)||(integer&&!n.isInteger()))throw new Error(`${label} must be a positive ${integer?'whole ':''}number, up to 1,000,000.`);return n;};
 const pieces=positive(job.pieces,job.kind==='flex'?'Pieces':job.pricing==='pack'?'Packs':'Cards',true);
 if(job.kind==='flex') {
  const area=positive(job.width,'Width').mul(positive(job.height,'Height')).div(job.sizeUnit==='in'?144:1);
  const quantity=area.mul(pieces).toDecimalPlaces(6).toFixed();
  if(new Decimal(quantity).lte(0))throw new Error('Dimensions are too small.');
  return {quantity,unit:'sq ft',summary:`${job.width} × ${job.height} ${job.sizeUnit} × ${job.pieces} pieces = ${quantity} sq ft`,area:area.toDecimalPlaces(6).toFixed(),cards:''};
 }
 const cards=pieces.mul(job.pricing==='pack'?positive(job.cardsPerPack,'Cards per pack',true):1).toFixed();
 return {quantity:pieces.toFixed(),unit:job.pricing==='pack'?'pack':'card',summary:job.pricing==='pack'?`${job.pieces} packs × ${job.cardsPerPack} cards = ${cards} cards`:`${cards} cards`,area:'',cards};
}
export function printJobDetails(job:PrintJob) {return [printJobValues(job).summary,job.material,job.kind==='cards'?job.sides:'',job.finish,job.notes].filter(Boolean).join(' · ');}
