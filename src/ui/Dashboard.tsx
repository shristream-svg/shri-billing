import { useEffect, useState } from 'react';
import { ArrowRight, Banknote, Clock, IndianRupee, Layers3, Plus, Smartphone, Wallet, TrendingUp } from 'lucide-react';
import { api, Button, Empty, InvoiceTable, errorText, type Notify } from './common';
import { money, type Invoice } from '../shared/model';

type Day = { date: string; sales: number; collections: number };
const dateLabel = (date: string) => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'));

export function Dashboard({ onNew, onOpen, onAll, onPayments, notify }: {
  onNew: () => void; onOpen: (invoice: Invoice) => void; onAll: () => void;
  onPayments: () => void; notify: Notify;
}) {
  const [data, setData] = useState<Awaited<ReturnType<typeof api.dashboard>>>();
  const [error, setError] = useState('');
  const [days, setDays] = useState(7);
  const load = () => { setError(''); api.dashboard().then(setData).catch(e => { setError(errorText(e)); notify(errorText(e), true); }); };
  useEffect(load, []);
  if (!data) return <section className="panel dashboard-loading" role="status"><h2>{error ? 'Your dashboard could not load' : 'Loading your business activity…'}</h2><p>{error || 'Reading saved bills and payments.'}</p>{error && <Button onClick={load}>Reload dashboard</Button>}</section>;
  const s = data.today.summary, m = data.month.summary;
  const rows = data.trend.slice(-days);
  const outstanding = data.ageing.reduce((sum, bucket) => sum + bucket.total, 0);
  const overdue = data.ageing.slice(1).reduce((sum, bucket) => sum + bucket.total, 0);
  const methodTotal = (method: string) => data.methods.find(row => row.method === method)?.total ?? 0;
  const otherMethods = data.methods.filter(row => !['Cash', 'UPI'].includes(row.method));
  return <>
    <div className="dashboard-hero counter-hero">
      <div><div className="eyebrow">SHRI CYBER CAFE · YOUR COUNTER AT A GLANCE</div><h1>Business <span>analytics.</span></h1><p>A clear view of what you billed, collected and still need to receive.</p><div className="hero-actions"><Button kind="primary" onClick={onNew}><Plus size={18}/>Start a new bill <kbd>Ctrl N</kbd></Button><Button onClick={onPayments}><Wallet size={17}/>Collect customer udhar</Button></div></div>
      <div className="month-sales"><span>SALES THIS MONTH</span><strong>{money(m.total)}</strong><small>{m.invoices} issued bills · {data.customers} saved customers</small></div>
    </div>
    <div className="kpi-grid dashboard-kpis">{[
      { label: "Today's sales", value: money(s.total), sub: `${s.invoices} bills issued today`, Icon: IndianRupee, tone: 'teal' },
      { label: 'Money collected today', value: money(s.netCollections), sub: 'After refunds and reversals', Icon: Wallet, tone: 'blue' },
      { label: 'Customer udhar pending', value: money(outstanding), sub: `${data.pending} unpaid or part-paid bills`, Icon: Clock, tone: 'orange' },
      { label: 'Average bill this month', value: money(m.invoices ? m.total / m.invoices : 0), sub: 'Sales ÷ issued bills', Icon: TrendingUp, tone: 'purple' },
    ].map(({ label, value, sub, Icon, tone }) => <div className="kpi" key={label}><div><span>{label}</span><span className={`kpi-icon ${tone}`}><Icon size={19}/></span></div><h2>{value}</h2><small>{sub}</small></div>)}</div>
    <div className="analytics-grid counter-analytics">
      <section className="panel chart-panel"><div className="panel-heading"><div><h2>Daily sales & collections</h2><p>Compare each day's billing with money received.</p></div><div className="period-switch" aria-label="Chart period">{[7, 14].map(n => <button key={n} aria-pressed={days === n} onClick={() => setDays(n)}>{n} days</button>)}</div></div>
        <div className="chart-summary"><div><span>Sales in {days} days</span><b>{money(rows.reduce((sum, row) => sum + row.sales, 0))}</b></div><div><span>Net collections in {days} days</span><b>{money(rows.reduce((sum, row) => sum + row.collections, 0))}</b></div><div className="chart-legend"><span className="sales">Sales</span><span className="collection">Collections</span></div></div>
        <ColumnChart rows={rows}/>
        <p className="chart-footnote">Sales use the bill date. Collections use the payment date, including older udhar.</p>
      </section>
      <section className="panel collection-panel"><div className="panel-heading"><div><h2>Money received</h2><p>This month · by payment date</p></div><Wallet size={22}/></div><div className="collection-total"><span>NET COLLECTIONS</span><strong>{money(m.netCollections)}</strong></div>
        <div className="payment-split">{[{ name: 'Cash', Icon: Banknote }, { name: 'UPI', Icon: Smartphone }].map(({ name, Icon }) => <div key={name}><Icon size={21}/><span>{name}</span><b>{money(methodTotal(name))}</b></div>)}</div>
        {otherMethods.map(row => <div className="collection-line" key={row.method}><span>{row.method}</span><b>{money(row.total)}</b></div>)}
        <div className="collection-line"><span>Refunds recorded</span><b>{money(m.refunds)}</b></div><p className="collection-note">Cash and UPI figures are net of refunds and reversals. UPI receipts are recorded manually.</p>
        <div className="collect-next"><div><span>Overdue customer udhar</span><strong>{money(overdue)}</strong></div><Button onClick={onPayments}>View pending payments <ArrowRight size={16}/></Button></div>
      </section>
    </div>
    <section className="panel ageing-panel"><div className="panel-heading"><div><h2>Which payments need a follow-up?</h2><p>All pending bills, grouped by days past the due date.</p></div><Button kind="text" onClick={onPayments}>Review customer udhar <ArrowRight size={15}/></Button></div><div className="ageing-grid">{data.ageing.map((bucket, n) => <div key={bucket.label} className={`ageing-${n}`}><span>{n === 0 ? 'Due today or later' : `${bucket.label} overdue`}</span><strong>{money(bucket.total)}</strong><small>{bucket.count} {bucket.count === 1 ? 'bill' : 'bills'}</small></div>)}</div></section>
    <div className="dashboard-columns"><section className="panel recent"><div className="panel-heading"><div><h2>Recent bills</h2><p>Open a bill to print it, record a payment or review its history.</p></div><Button kind="text" onClick={onAll}>Open Bill Book <ArrowRight size={15}/></Button></div>{data.recent.length ? <InvoiceTable rows={data.recent} onOpen={onOpen}/> : <Empty title="Your next sale starts here" detail="Saved bills and drafts will appear in this register." action={<Button onClick={onNew}>Create a customer bill <ArrowRight size={16}/></Button>}/>}</section>
      <section className="panel top-services"><div className="panel-heading"><div><h2>Best-selling services</h2><p>Sales value this month</p></div><Layers3 size={19}/></div>{data.top.length ? <div className="service-ranks">{data.top.map((row, n) => <div key={String(row.Group)}><span className="rank">{String(n + 1).padStart(2, '0')}</span><section><b>{String(row.Group)}</b><div className="bar"><span style={{ width: `${Math.max(4, Number(row.Total) / Math.max(1, Number(data.top[0].Total)) * 100)}%` }}/></div></section><strong>{money(Number(row.Total))}</strong></div>)}</div> : <div className="quiet-empty"><Layers3 size={30}/><p>Issue a bill to see which<br/>services bring in sales.</p></div>}</section></div>
  </>;
}

function ColumnChart({ rows }: { rows: Day[] }) {
  const [selected, setSelected] = useState<string>();
  const active = rows.find(row => row.date === selected) ?? rows.at(-1);
  const high = Math.max(100, ...rows.flatMap(row => [row.sales, row.collections]));
  const low = Math.min(0, ...rows.flatMap(row => [row.sales, row.collections]));
  const range = high - low;
  const y = (amount: number) => 20 + (high - amount) / range * 180;
  const baseline = y(0), step = 620 / Math.max(1, rows.length), width = Math.min(22, step * .28);
  const empty = rows.every(row => row.sales === 0 && row.collections === 0);
  return <div className="column-chart">
    <svg viewBox="0 0 740 242" role="group" aria-label="Daily sales and collections column chart">
      {[high, high / 2, 0, ...(low < 0 ? [low] : [])].map((value, i) => <g key={i}><line x1="88" x2="720" y1={y(value)} y2={y(value)} className="chart-gridline"/><text x="78" y={y(value) + 4} textAnchor="end">{new Intl.NumberFormat('en-IN', { notation: 'compact', maximumFractionDigits: 1, style: 'currency', currency: 'INR' }).format(value / 100)}</text></g>)}
      {rows.map((row, n) => { const x = 94 + n * step + step / 2; return <g key={row.date} tabIndex={0} role="button" aria-pressed={active?.date === row.date} aria-label={`${dateLabel(row.date)}: sales ${money(row.sales)}, net collections ${money(row.collections)}`} onFocus={() => setSelected(row.date)} onMouseEnter={() => setSelected(row.date)} onClick={() => setSelected(row.date)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(row.date); } }}>
        <rect x={x - step / 2 + 2} y="12" width={step - 4} height="216" rx="8" fill={active?.date === row.date ? '#e3f1fd' : 'transparent'}/>
        {[{ value: row.sales, color: '#2f8fe3', offset: -width - 2, name: 'sales' }, { value: row.collections, color: '#1fa888', offset: 2, name: 'collections' }].map(bar => <rect className="daily-column" key={bar.name} x={x + bar.offset} y={bar.value >= 0 ? y(bar.value) : baseline} width={width} height={Math.max(2, Math.abs(y(bar.value) - baseline))} rx="3" fill={bar.color}><title>{dateLabel(row.date)} · {bar.name}: {money(bar.value)}</title></rect>)}
        <text x={x} y="239" textAnchor="middle">{row.date.slice(8)}/{row.date.slice(5, 7)}</text>
      </g>; })}
    </svg>
    {active && <div className="selected-day" aria-live="polite"><b>{dateLabel(active.date)}</b><span>Sales <strong>{money(active.sales)}</strong></span><span>Collected <strong>{money(active.collections)}</strong></span></div>}
    <p className="chart-instruction">{empty ? 'No billing or payment activity in this period. Your saved transactions will build these columns.' : 'Point to a column or use Tab to inspect a day’s exact amounts.'}</p>
  </div>;
}
