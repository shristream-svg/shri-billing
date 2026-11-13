import { PrintJobForm } from './PrintJobForm';
import { printJobDetails, type PrintJob } from '../shared/print-job';
import { useState } from 'react';
import Decimal from 'decimal.js';
import { Copy, Layers3, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { Button, Field } from './common';
import { calculate } from '../shared/calculate';
import { money, type LineInput, type Service } from '../shared/model';

export function BillItems({ items, services, totals, interstate, mode = 'both', onConfigured, onChange, onSelect, onAddService, onNewService, onEditService, onAddBlank, onCopy, onRemove }: {
  onConfigured: (line:LineInput,index?:number)=>void;
  items: LineInput[]; services: Service[]; totals?: number[]; interstate: boolean;
  mode?: 'catalog' | 'cart' | 'both';
  onChange: (index: number, key: keyof LineInput, value: string) => void;
  onSelect: (index: number, id: string) => void; onAddService: (service: Service) => void;
  onNewService: () => void; onEditService: (service: Service, index: number) => void;
  onAddBlank: () => void; onCopy: (index: number) => void; onRemove: (index: number) => void;
}) {
  const [printing,setPrinting]=useState<{kind:PrintJob['kind'];index?:number}>();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All services');
  const [limit, setLimit] = useState(12);
  const activeServices = services.filter(service => service.active);
  const categories = [...new Set(activeServices.map(service => service.category).filter(Boolean))].sort();
  const matches = activeServices.filter(service => (category === 'All services' || service.category === category) && `${service.name} ${service.category} ${service.hsn}`.toLowerCase().includes(search.toLowerCase().trim()));
  return <>
    {printing&&<PrintJobForm kind={printing.kind} line={printing.index===undefined?undefined:items[printing.index]} onClose={()=>setPrinting(undefined)} onSave={line=>{onConfigured(line,printing.index);setPrinting(undefined);}}/>}
    {mode !== 'cart' && <>
    <div className="panel-heading items-heading"><div><span className="step-label">ITEM CATALOG</span><h2>Items & services</h2><p>Select an item to add it to the current bill.</p></div><Button onClick={onNewService}><Plus size={16}/>New catalog item</Button></div>
    <div className="printing-order-actions"><button onClick={()=>setPrinting({kind:"flex"})}><b>+ Flex printing</b><small>Size → square feet → price</small></button><button onClick={()=>setPrinting({kind:"cards"})}><b>+ Visiting cards</b><small>Card / pack quantity & specifications</small></button></div><div className="catalog-picker"><div className="catalog-search"><Search size={19}/><input aria-label="Search services to add" placeholder="Search printing, binding, forms…" value={search} onChange={e => setSearch(e.target.value)}/><select aria-label="Filter services by category" value={category} onChange={e => setCategory(e.target.value)}><option>All services</option>{categories.map(name => <option key={name}>{name}</option>)}</select></div>
      <div className="catalog-categories" aria-label="Service categories">{['All services', ...categories].map(name => <button key={name} aria-pressed={category === name} onClick={() => { setCategory(name); setLimit(12); }}>{name}</button>)}</div>
      <div className="catalog-matches">{matches.slice(0, limit).map(service => <button key={service.id} className="catalog-pick" onClick={() => onAddService(service)} aria-label={`Add ${service.name} to bill`}><span><b>{service.name}</b><small>{service.gst === null ? 'Confirm GST' : `${service.gst}% GST`} · per {service.unit}</small><strong>{service.rate === null ? 'Set price' : money(Number(service.rate) * 100)}</strong></span><Plus size={17}/></button>)}</div>
      {!matches.length && <p className="catalog-no-match">No service matches this search. Create a catalog item or add a one-time item below.</p>}
      <div className="picker-caption"><span>{Math.min(limit,matches.length)} of {matches.length} services</span>{matches.length > limit && <button className="link" onClick={() => setLimit(limit + 12)}>Show more services</button>}<button className="link" onClick={onAddBlank}>+ One-time item</button></div>
    </div>
    </>}
    {mode !== 'catalog' && <>
    <div className="items-register"><div className="items-register-title"><h3>Items on this bill</h3><span>{items.length} {items.length === 1 ? 'line' : 'lines'} · prices before GST</span></div>
      {items.map((line, index) => {
        let error = '', standalone: number | undefined;
        try { standalone = calculate([line], 'fixed', '0', interstate, false).totals.total; } catch (e) { error = e instanceof Error ? e.message : String(e); }
        const total = totals?.[index] ?? standalone;
        return <article className={`bill-item-card ${error ? 'needs-details' : ''}`} key={index}>
          <header><div className="item-identity"><span className="item-index">{String(index + 1).padStart(2, '0')}</span><div><b>{line.description || 'Choose a service or enter an item'}</b><small>{line.serviceId ? 'Catalog service · changes here apply to this bill' : 'One-time item · saved with this bill'}</small></div></div><div className="item-tools"><button type="button" aria-label={`Copy item ${index + 1}`} title="Copy this line with its quantity and price" onClick={() => onCopy(index)}><Copy size={15}/>Copy</button><button type="button" aria-label={`Modify item ${index + 1}`} disabled={!line.serviceId} title="Update the saved catalog service" onClick={() => { const service = services.find(s => s.id === line.serviceId); if (service) onEditService(service, index); }}><Pencil size={15}/>Catalog</button><button type="button" className="danger-text" aria-label={`Remove item ${index + 1}`} onClick={() => onRemove(index)}><Trash2 size={16}/></button></div></header>

          {line.printJob&&<div className="printing-job-summary"><p>{printJobDetails(line.printJob)}</p><Button onClick={()=>setPrinting({kind:line.printJob!.kind,index})}>Edit printing details</Button></div>}
          <div className="item-numbers"><Field label="Quantity"><input readOnly={!!line.printJob} aria-label={`Quantity ${index + 1}`} inputMode="decimal" value={line.quantity} onChange={e => onChange(index, 'quantity', e.target.value)}/></Field><Field label="GST %"><input aria-label={`GST ${index + 1}`} inputMode="decimal" list="gst-rates" placeholder="Confirm GST" value={line.gst} onChange={e => onChange(index, 'gst', e.target.value)}/></Field><Field label="Price per unit ₹"><input aria-label={`Rate ${index + 1}`} inputMode="decimal" placeholder="Enter price" value={line.rate} onChange={e => onChange(index, 'rate', e.target.value)}/></Field><div className="item-total"><span>{totals ? 'Line total incl. GST' : 'Before bill discount'}</span><strong>{total === undefined ? '—' : money(total)}</strong></div></div>
          {!line.printJob&&<div className="quantity-shortcuts"><span>Quick quantity</span>{[1,5,10].map(amount => <button key={amount} type="button" aria-label={`Add ${amount} to item ${index + 1} quantity`} onClick={() => { if (/^\d+(\.\d{1,6})?$/.test(line.quantity)) onChange(index,'quantity',new Decimal(line.quantity).plus(amount).toFixed()); }}>+{amount}</button>)}</div>}
<details className="item-options"><summary>Edit item description, unit & discount</summary>          <div className="item-description-grid"><Field label="Choose a saved service"><select aria-label={`Service ${index + 1}`} value={line.serviceId ?? ''} onChange={e => { if (e.target.value) onSelect(index, e.target.value); else onChange(index, 'serviceId', ''); }}><option value="">One-time / custom item</option>{services.filter(s => s.active || s.id === line.serviceId).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></Field><Field label="Description printed on invoice"><input aria-label={`Description ${index + 1}`} placeholder="e.g. A4 black & white printouts" value={line.description} onChange={e => onChange(index, 'description', e.target.value)}/></Field></div><Field label="Unit"><input readOnly={!!line.printJob} aria-label={`Unit ${index + 1}`} list="item-units" value={line.unit} onChange={e => onChange(index, 'unit', e.target.value)}/></Field>          <div className="item-tax-grid"><Field label="Item discount"><div className="discount-input"><input aria-label={`Discount ${index + 1}`} inputMode="decimal" value={line.discount} onChange={e => onChange(index, 'discount', e.target.value)}/><select aria-label={`Discount type ${index + 1}`} value={line.discountKind} onChange={e => onChange(index, 'discountKind', e.target.value)}><option value="percent">%</option><option value="fixed">₹</option></select></div></Field><Field label="HSN / SAC code"><input aria-label={`HSN ${index + 1}`} placeholder="If applicable" value={line.hsn} onChange={e => onChange(index, 'hsn', e.target.value)}/></Field></div></details>
          {error && <p className="item-help">{!line.description.trim() ? 'Start by selecting a service above, or type a description for a one-time item.' : error}</p>}
        </article>;
      })}
    </div>
    <datalist id="gst-rates">{['0', '5', '12', '18', '28'].map(rate => <option key={rate} value={rate}/>)}</datalist><datalist id="item-units">{['page', 'piece', 'set', 'copy', 'hour', 'job', 'sq ft', 'card', 'pack'].map(unit => <option key={unit} value={unit}/>)}</datalist>
    <div className="line-footer"><Button kind="add-item" onClick={onAddBlank}><Plus size={17}/>Add another item</Button><span><Layers3 size={15}/>Each line keeps its own price, tax and discount.</span></div>
    </>}
  </>;
}

