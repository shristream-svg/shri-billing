import { useEffect, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { api, Button, Empty, Field, InvoiceTable, errorText, type Notify } from './common';
import { money, today, type Invoice, type Report } from '../shared/model';

const shift = (date: string, days: number) => { const value = new Date(date + 'T00:00:00Z'); value.setUTCDate(value.getUTCDate() + days); return value.toISOString().slice(0, 10); };
const display = (date: string) => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'));

export function DailyLog({ onOpen, onNew, notify }: { onOpen: (invoice: Invoice) => void; onNew: () => void; notify: Notify }) {
  const [date, setDate] = useState(today()), [end, setEnd] = useState(today()), [page, setPage] = useState(0);
  const [days, setDays] = useState<Report['rows']>([]);
  const [data, setData] = useState<{ rows: Invoice[]; count: number; summary: Report['summary'] }>();
  const [error, setError] = useState('');
  useEffect(() => { let active = true; api.report({ type: 'Daily', from: shift(end, -7), to: end }).then(report => { if (active) setDays(report.rows); }).catch(e => notify(errorText(e), true)); return () => { active = false; }; }, [end]);
  useEffect(() => {
    let active = true; setData(undefined); setError('');
    Promise.all([api.invoices({ from: date, to: date, page, limit: 30 }), api.report({ type: 'Sales', from: date, to: date })]).then(([invoices, report]) => { if (active) setData({ ...invoices, summary: report.summary }); }).catch(e => { if (active) setError(errorText(e)); });
    return () => { active = false; };
  }, [date, page]);
  const select = (value: string) => { if (!value) return; setDate(value); setPage(0); };
  return <>
    <div className="page-heading"><div><div className="eyebrow">SALES · DAY-WISE REGISTER</div><h1>Daily Log</h1><p>Find a day's bills, check pending amounts and open the original invoice.</p></div><Button kind="primary" onClick={onNew}><Plus size={17}/>New Bill</Button></div>
    <section className="panel daily-log"><div className="panel-heading"><h2><CalendarDays size={18}/>Daily billing log</h2><div className="daily-log-controls"><Button title="Previous eight days" onClick={() => setEnd(shift(end, -8))}><ChevronLeft size={16}/></Button><Button onClick={() => { setEnd(today()); select(today()); }}>Today</Button><Button title="Next eight days" onClick={() => setEnd(shift(end, 8))}><ChevronRight size={16}/></Button><Field label="Billing date"><input type="date" value={date} onChange={e => { if(e.target.value){select(e.target.value);setEnd(e.target.value);} }}/></Field></div></div>
      <div className="day-cards">{Array.from({ length: 8 }, (_, n) => shift(end, -n)).map(day => { const row = days.find(item => item.Group === day); return <button key={day} aria-pressed={day === date} onClick={() => select(day)}><span>{display(day)}</span><strong>{Number(row?.Invoices ?? 0)} bills</strong><small>{money(Number(row?.Total ?? 0))} sales</small><small>{money(Number(row?.Outstanding ?? 0))} pending</small></button>; })}</div>
      <div className="daily-log-totals">{[['Issued bills', 'invoices'], ['Sales on this date', 'total'], ['Collected on this date', 'netCollections'], ['Still pending on these bills', 'outstanding']].map(([label, key]) => <div key={key}><span>{label}</span><strong>{!data ? '—' : key === 'invoices' ? data.summary[key] : money(data.summary[key])}</strong></div>)}</div>
      <div className="panel-heading"><div><h2>Bills for {display(date)} {date.slice(0,4)}</h2><p>Includes drafts and cancellations. Sales totals include issued bills only.</p></div></div>
      {error ? <p role="alert" className="inline-warning">{error}</p> : !data ? <p className="daily-log-loading" role="status">Loading saved bills…</p> : data.rows.length ? <InvoiceTable rows={data.rows} onOpen={onOpen}/> : <Empty title="No bills on this date" detail="Choose another day above or create a new customer bill."/>}
      <div className="pagination"><Button disabled={!page || !data} onClick={() => setPage(page - 1)}>Previous</Button><span>{data?.count ?? 0} records · Page {page + 1}</span><Button disabled={!data || (page + 1) * 30 >= data.count} onClick={() => setPage(page + 1)}>Next</Button></div>
    </section>
    <p className="hint">Collections use payment dates and can include older bills. Pending amounts show the current balance.</p>
  </>;
}
