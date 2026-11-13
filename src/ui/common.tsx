import { useEffect,useState,useId,useRef,cloneElement,isValidElement,type ReactNode,type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { X,Search,ArrowUpRight } from 'lucide-react';
import { money,type API,type Invoice } from '../shared/model';
declare global { interface Window {billing:API; shriBillDirty?:boolean} }
export const api=window.billing;
export function Button({children,onClick,kind='',disabled=false,type='button',title}:{children:ReactNode;onClick?:()=>void;kind?:string;disabled?:boolean;type?:'button'|'submit';title?:string}){return <button type={type} title={title} className={`button ${kind}`} onClick={onClick} disabled={disabled}>{children}</button>;}
export function Field({label,children}:{label:string;children:ReactNode}){const id=useId();const control=isValidElement(children)&&['input','select','textarea'].includes(String(children.type));return <div className="field"><label htmlFor={control?id:undefined}>{label}</label>{control?cloneElement(children as ReactElement<{id:string}>,{id}):children}</div>;}
let openModalCount=0;
let priorBodyOverflow='';
export function Modal({title,onClose,children,wide=false}:{title:string;onClose:()=>void;children:ReactNode;wide?:boolean}) {
 const layer=useRef<HTMLDivElement>(null),close=useRef(onClose);
 close.current=onClose;
 useEffect(()=>{
  const previous=document.activeElement as HTMLElement|null;
  if(openModalCount++===0){priorBodyOverflow=document.body.style.overflow;document.body.style.overflow='hidden';}
  const frame=requestAnimationFrame(()=>{if(!layer.current?.contains(document.activeElement))layer.current?.querySelector<HTMLElement>('button,input,select,textarea')?.focus();});
  const handle=(event:KeyboardEvent)=>{
   const layers=document.querySelectorAll('[data-modal-layer]');
   if(layers[layers.length-1]!==layer.current)return;
   if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close.current();}
   if(event.key==='Tab'){
    const controls=Array.from(layer.current?.querySelectorAll<HTMLElement>('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),a[href],[tabindex="0"]')??[]).filter(element=>element.getClientRects().length);
    const first=controls[0],last=controls.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
   }
  };
  window.addEventListener('keydown',handle);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('keydown',handle);if(--openModalCount===0)document.body.style.overflow=priorBodyOverflow;if(previous?.isConnected)previous.focus();};
 },[]);
 return createPortal(<div ref={layer} data-modal-layer className="overlay"><section role="dialog" aria-modal="true" aria-label={title} className={`modal ${wide?'wide':''}`}><header><h2>{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog"><X size={20}/></button></header><div className="modal-body">{children}</div></section></div>,document.body);
}
export function Badge({invoice}:{invoice:Invoice}){const label=invoice.status==='issued'?(invoice.paymentStatus==='Unpaid'?'Udhar':invoice.paymentStatus==='Partially Paid'?'Partial · Udhar':invoice.paymentStatus):invoice.status==='draft'?'Draft':'Cancelled';return <span className={`badge ${label.toLowerCase().replaceAll(' ','-')}`}>{label}</span>;}
export function Empty({title,detail,action}:{title:string;detail:string;action?:ReactNode}){return <div className="empty"><div className="empty-mark">S</div><h3>{title}</h3><p>{detail}</p>{action}</div>;}
export function SearchBox({value,onChange,placeholder='Search…'}:{value:string;onChange:(s:string)=>void;placeholder?:string}){return <div className="search-box"><Search size={17}/><input aria-label={placeholder} value={value} placeholder={placeholder} onChange={e=>onChange(e.target.value)}/></div>;}
export function InvoiceTable({rows,onOpen}:{rows:Invoice[];onOpen:(i:Invoice)=>void}){return <div className="table-wrap"><table><thead><tr><th>Invoice</th><th>Customer</th><th>Date</th><th className="right">Total</th><th className="right">Paid</th><th className="right">Balance</th><th>Status</th><th/></tr></thead><tbody>{rows.map(i=><tr key={i.id} onClick={()=>onOpen(i)} className="clickable"><td><strong>{i.number??'Unsaved number · Draft'}</strong></td><td>{i.customer.name}<small>{i.customer.phone}</small></td><td>{i.date.split('-').reverse().join('/')}</td><td className="right">{money(i.total)}</td><td className="right">{money(i.paid)}</td><td className="right">{money(i.due)}</td><td><Badge invoice={i}/></td><td><button className="icon-button" aria-label={`Open ${i.number??'draft'}`}><ArrowUpRight size={17}/></button></td></tr>)}</tbody></table></div>;}
export function useDebounce(value:string,ms=180){const [v,setV]=useState(value);useEffect(()=>{const t=setTimeout(()=>setV(value),ms);return()=>clearTimeout(t);},[value,ms]);return v;}
export type Notify=(message:string,error?:boolean)=>void;
export const errorText=(e:unknown)=>e instanceof Error?e.message:String(e);
