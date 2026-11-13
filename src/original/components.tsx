// @ts-nocheck
import React from "react";
import {calculate} from "../shared/calculate";
import {states} from "../shared/model";
import {PrintJobForm} from "../ui/PrintJobForm";
import {printJobDetails} from "../shared/print-job";
const Icon = ({ name, size = 16, ...props }) => {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", ...props };
  const paths = {
    dashboard: <><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></>,
    invoice: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></>,
    pos: <><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 14h4"/></>,
    customers: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    inventory: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
    udhaar: <><path d="M16 12V8a4 4 0 0 0-8 0v4"/><rect x="3" y="12" width="18" height="10" rx="2"/></>,
    expense: <><path d="M6 3h12"/><path d="M6 8h12"/><path d="M6 13h3"/><path d="M9 13c6.67 0 6.67-10 0-10"/><path d="m6 13 8.5 8"/></>,
    reports: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    minus: <line x1="5" y1="12" x2="19" y2="12"/>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    chevronDown: <polyline points="6 9 12 15 18 9"/>,
    chevronRight: <polyline points="9 18 15 12 9 6"/>,
    chevronLeft: <polyline points="15 18 9 12 15 6"/>,
    sidebar: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></>,
    print: <><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    cash: <><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></>,
    card: <><rect x="2" y="6" width="20" height="13" rx="2"/><line x1="2" y1="11" x2="22" y2="11"/></>,
    upi: <><path d="M3 3h18l-3 18H6L3 3z"/><path d="M9 9l3 3 3-3"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    arrowUp: <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></>,
    arrowDown: <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></>,
    moreVertical: <><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></>,
    building: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="9" y2="9.01"/><line x1="15" y1="9" x2="15" y2="9.01"/><line x1="9" y1="13" x2="9" y2="13.01"/><line x1="15" y1="13" x2="15" y2="13.01"/><line x1="9" y1="17" x2="9" y2="17.01"/><line x1="15" y1="17" x2="15" y2="17.01"/></>,
    box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></>,
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    printer: <><polyline points="6 9 6 2 18 2 18 9"/><rect x="6" y="14" width="12" height="8"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/></>,
    scan: <><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="3" y1="12" x2="21" y2="12"/></>,
    type: <><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></>,
    laminate: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18"/></>,
    coffee: <><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></>,
    package: <><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
    filter: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    refresh: <><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></>,
    save: <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>,
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    keyboard: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/></>,
    barcode: <><path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14"/></>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
    info: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><polyline points="3 3 3 8 8 8"/><path d="M12 7v5l3 2"/></>,
    upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
  };
  return <svg viewBox="0 0 24 24" {...s}>{paths[name] || null}</svg>;
};

// Brand logo — a rounded receipt mark with a rupee glyph and a QR corner.
// Self-contained SVG with per-instance gradient ids so multiple copies render cleanly.
const BrandLogo = ({ size = 40, rounded = true, className = "" }) => {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const bg = `bg-${uid}`;
  const paper = `pa-${uid}`;
  return (
    <svg
      className={`brand-logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      role="img"
      aria-label="Shri Billing logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={bg} x1="32" y1="20" x2="224" y2="236" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-2, #38bdf8)" />
          <stop offset=".55" stopColor="var(--brand, #2563eb)" />
          <stop offset="1" stopColor="var(--brand-deep, #0f766e)" />
        </linearGradient>
        <linearGradient id={paper} x1="80" y1="52" x2="176" y2="204" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#eaf4ff" />
        </linearGradient>
      </defs>
      {rounded && <rect width="256" height="256" rx="60" fill={`url(#${bg})`} />}
      {rounded && <circle cx="200" cy="58" r="34" fill="#fff" opacity=".16" />}
      {rounded && <circle cx="52" cy="204" r="46" fill="#a7f3d0" opacity=".16" />}
      <g transform={rounded ? "" : "translate(0,0)"}>
        <path
          fill={rounded ? `url(#${paper})` : `url(#${bg})`}
          d="M76 46h104c11 0 20 9 20 20v140l-17-10-17 10-17-10-17 10-17-10-17 10-17-10-17 10V66c0-11 9-20 20-20Z"
        />
        <path fill={rounded ? "#d7e7f7" : "#fff"} opacity={rounded ? 1 : 0} d="M98 85h60a8 8 0 0 1 0 16H98a8 8 0 0 1 0-16Zm0 84h70a8 8 0 0 1 0 16H98a8 8 0 0 1 0-16Z" />
        <path
          fill={rounded ? "var(--brand, #1455d9)" : "#fff"}
          d="M119 76h42a7 7 0 0 1 0 14h-14c5 5 8 11 8 19h6a7 7 0 0 1 0 14h-8c-4 19-22 31-49 31a7 7 0 0 1-5-12l32-34H98a7 7 0 0 1 0-14h38c-3-3-7-4-13-4h-25a7 7 0 0 1 0-14h21Zm18 47h-12l-13 14c13-2 21-6 25-14Z"
        />
        <g fill={rounded ? "var(--brand-deep, #0f766e)" : "#fff"}>
          <rect x="154" y="132" width="12" height="12" rx="3" />
          <rect x="170" y="132" width="12" height="12" rx="3" />
          <rect x="154" y="148" width="12" height="12" rx="3" />
          <rect x="176" y="154" width="8" height="8" rx="2" />
        </g>
      </g>
    </svg>
  );
};

// Currency formatter (INR)
const fmtINR = (n, opts = {}) => {
  const num = Number(n) || 0;
  const sign = num < 0 ? "-" : "";
  const abs = Math.abs(num);
  const formatted = abs.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${sign}${opts.noSymbol ? "" : "₹"}${formatted}`;
};

const rateUnitLabel = (unit) => {
  const clean = String(unit || "unit").trim() || "unit";
  return clean.toLowerCase().startsWith("per ") ? clean : `per ${clean}`;
};

const fmtDate = (d) => {
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const fmtDateTime = (d) => {
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: true });
};

const fmtTime = (d) => {
  if (!d) return "—";
  const dt = typeof d === "string" ? new Date(d) : d;
  if (Number.isNaN(dt.getTime())) return "—";
  return dt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
};

const isoDay = (d = new Date()) => {
  const dt = typeof d === "string" ? new Date(d) : new Date(d);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
};

const startOfDay = (d = new Date()) => {
  const dt = typeof d === "string" ? new Date(d) : new Date(d);
  dt.setHours(0, 0, 0, 0);
  return dt;
};

const endOfDay = (d = new Date()) => {
  const dt = typeof d === "string" ? new Date(d) : new Date(d);
  dt.setHours(23, 59, 59, 999);
  return dt;
};

const getDateRange = (period = "day", custom = {}) => {
  const now = new Date();
  if (period === "all") return { start: null, end: null, label: "All time", shortLabel: "All" };
  if (period === "custom") {
    const start = custom.start ? startOfDay(custom.start) : null;
    const end = custom.end ? endOfDay(custom.end) : null;
    const label = start && end ? `${fmtDate(start)} - ${fmtDate(end)}` : "Custom range";
    return { start, end, label, shortLabel: "Custom" };
  }
  const start = startOfDay(now);
  const end = endOfDay(now);
  if (period === "week") {
    const day = now.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    start.setDate(now.getDate() + mondayOffset);
    end.setTime(start.getTime());
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start, end, label: "This week", shortLabel: "Week" };
  }
  if (period === "month") {
    start.setDate(1);
    end.setFullYear(now.getFullYear(), now.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return { start, end, label: "This month", shortLabel: "Month" };
  }
  return { start, end, label: "Today", shortLabel: "Day" };
};

const inDateRange = (date, range) => {
  if (!date) return false;
  const dt = new Date(date);
  if (Number.isNaN(dt.getTime())) return false;
  if (range?.start && dt < range.start) return false;
  if (range?.end && dt > range.end) return false;
  return true;
};

const dayLabelsForRange = (range, period) => {
  const end = range?.end || endOfDay(new Date());
  const start = range?.start || startOfDay(new Date(end.getTime() - 6 * 86400000));
  const dayCount = Math.max(1, Math.min(31, Math.round((endOfDay(end) - startOfDay(start)) / 86400000) + 1));
  const count = period === "day" ? 1 : period === "week" ? 7 : Math.min(dayCount, 31);
  return Array.from({ length: count }, (_, i) => {
    const d = startOfDay(end);
    d.setDate(end.getDate() - (count - 1 - i));
    return d;
  });
};

const rangeTotal = (rows, range, field = "total") =>
  (rows || []).filter((r) => inDateRange(r.date, range)).reduce((s, r) => s + (Number(r[field]) || 0), 0);

const invoicePaymentTotal = (invoice) => {
  const paymentSum = Array.isArray(invoice?.payments)
    ? invoice.payments.reduce((sum, p) => sum + (Number(p?.amount) || 0), 0)
    : 0;
  return paymentSum > 0 ? paymentSum : (Number(invoice?.paid) || 0);
};

const invoiceOutstanding = (invoice) =>
  invoice?.cancelled ? 0 : invoice?._raw ? invoice._raw.due/100 : Math.max(0,(Number(invoice?.total)||0)-invoicePaymentTotal(invoice)-(Number(invoice?.writtenOff)||0));

const collectedForInvoiceInRange = (invoice, range) => {
  if (!invoice) return 0;
  if (Array.isArray(invoice.payments) && invoice.payments.length > 0) {
    return invoice.payments.reduce((sum, p) => {
      if (!inDateRange(p?.date || invoice.date, range)) return sum;
      return sum + (Number(p?.amount) || 0);
    }, 0);
  }
  if (!inDateRange(invoice.date, range)) return 0;
  return Number(invoice.paid) || 0;
};

const collectedForInvoiceOnDate = (invoice, date) => {
  if (!invoice) return 0;
  const key = isoDay(date);
  if (Array.isArray(invoice.payments) && invoice.payments.length > 0) {
    return invoice.payments.reduce((sum, p) => {
      if (isoDay(p?.date || invoice.date) !== key) return sum;
      return sum + (Number(p?.amount) || 0);
    }, 0);
  }
  return isoDay(invoice.date) === key ? (Number(invoice.paid) || 0) : 0;
};

const minutesBetween = (start, end = new Date()) => {
  if (!start) return 0;
  const a = new Date(start);
  const b = end ? new Date(end) : new Date();
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime()) || b < a) return 0;
  return Math.round((b - a) / 60000);
};

const fmtDuration = (minutes) => {
  const total = Math.max(0, Math.round(Number(minutes) || 0));
  if (!total) return "—";
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (!h) return `${m}m`;
  return `${h}h ${m}m`;
};

const attendanceForDate = (records = [], date = isoDay()) =>
  (records || []).find((row) => row?.date === date) || null;

const attendanceRowsForRange = (records = [], range, period = "week") => {
  const list = Array.isArray(records) ? records : [];
  if (period === "all") {
    return [...list]
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
      .map(row => ({ ...row, durationMinutes: row.durationMinutes ?? minutesBetween(row.openedAt, row.closedAt || new Date()) }));
  }
  const days = dayLabelsForRange(range, period).filter(day=>isoDay(day)<=isoDay());
  const byDate = new Map(list.map(row => [row.date, row]));
  return days.reverse().map((day) => {
    const date = isoDay(day);
    const row = byDate.get(date);
    if (!row) return { id: `missed_${date}`, date, status: "missed", openedAt: null, closedAt: null, note: "", durationMinutes: 0 };
    return { ...row, durationMinutes: row.durationMinutes ?? minutesBetween(row.openedAt, row.closedAt || new Date()) };
  });
};

const attendanceSummaryForRange = (records = [], range, period = "week") => {
  const rows = attendanceRowsForRange(records, range, period);
  const presentRows = rows.filter(row => row.status === "present" || row.status === "closed");
  const closedRows = rows.filter(row => row.status === "closed");
  const missedRows = rows.filter(row => row.status === "missed");
  const totalMinutes = presentRows.reduce((sum, row) => sum + (Number(row.durationMinutes) || 0), 0);
  const today = attendanceForDate(records, isoDay());
  return {
    todayMarked: Boolean(today),
    todayStatus: today?.status || "not marked",
    presentDays: presentRows.length,
    closedDays: closedRows.length,
    missedDays: missedRows.length,
    averageOpenMinutes: presentRows.length ? Math.round(totalMinutes / presentRows.length) : 0,
    rows,
  };
};

const DateRangeFilter = ({ period, setPeriod, customRange, setCustomRange }) => (
  <div className="range-filter">
    <div className="range-tabs" role="group" aria-label="Date range">
      {[
        ["day", "Day"],
        ["week", "Week"],
        ["month", "Month"],
        ["all", "All"],
        ["custom", "Custom"],
      ].map(([id, label]) => (
        <button key={id} className={period === id ? "active" : ""} onClick={() => setPeriod(id)}>{label}</button>
      ))}
    </div>
    {period === "custom" && (
      <div className="range-custom">
        <input className="input" type="date" value={customRange.start} onChange={(e) => setCustomRange((r) => ({ ...r, start: e.target.value }))} />
        <span>to</span>
        <input className="input" type="date" value={customRange.end} onChange={(e) => setCustomRange((r) => ({ ...r, end: e.target.value }))} />
      </div>
    )}
  </div>
);

// Collision-proof unique id: timestamp + random suffix, namespaced by prefix.
// Old uid was a counter starting at 1000 — it collided with seed item ids "i1001..i1012",
// causing React key clashes that made user-added items un-clickable in the table.
const uid = (p = "") => {
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 8);
  return `${p}${ts}${rnd}`;
};

// Toast system
const ToastContext = React.createContext(null);
const useToast = () => React.useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);
  const push = React.useCallback((msg, kind = "success") => {
    const id = uid("t");
    setToasts((ts) => [...ts, { id, msg, kind }]);
    setTimeout(() => setToasts((ts) => ts.filter((t) => t.id !== id)), 2800);
  }, []);
  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="toast-stack">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.kind}`}>
            <Icon name={t.kind === "error" ? "x" : "check"} size={14} />
            {t.msg}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Modal
const Modal = ({ open, onClose, title, children, footer, width = 560 }) => {
  React.useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} style={{ width }}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="icon-btn" aria-label="Close dialog" onClick={onClose}><Icon name="x" /></button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

// Switch
const Switch = ({ on, onChange }) => (
  <span className={`switch ${on ? "on" : ""}`} onClick={() => onChange(!on)} role="switch" aria-checked={on} />
);

/* ============================================================
   LEDGER UTILITIES — Numbering, FY, Customer Balance, Payment Allocation
   ============================================================ */

// Indian Financial Year: Apr 1 – Mar 31. Returns "2026-27" style string.
const fyForDate = (d = new Date()) => {
  const dt = typeof d === "string" ? new Date(d) : d;
  const y = dt.getFullYear();
  const fyStart = dt.getMonth() >= 3 ? y : y - 1; // March = month 2
  return `${fyStart}-${String((fyStart + 1) % 100).padStart(2, "0")}`;
};

// Generate next sequential bill number: SCC/2026-27/0001 style
// All bills (POS + manual invoice) share the same counter for clarity.
const nextBillNumber = (settings, allBills, date = new Date()) => {
  const fy = fyForDate(date);
  const prefix = (settings.invoicePrefix || "SCC/").replace(/\/?$/, "/");
  // Find max sequence in current FY across existing bills
  let maxSeq = 0;
  for (const b of allBills || []) {
    if (!b.number) continue;
    const m = b.number.match(/\/(\d{4}-\d{2})\/(\d+)$/);
    if (m && m[1] === fy) {
      const n = parseInt(m[2], 10);
      if (n > maxSeq) maxSeq = n;
    }
  }
  // Also respect settings.nextInvoiceNo as a floor (so user can reset)
  const fromSettings = parseInt(settings.nextInvoiceNo || "0", 10) || 0;
  const next = Math.max(maxSeq, fromSettings) + 1;
  return `${prefix}${fy}/${String(next).padStart(4, "0")}`;
};

// Walk-in customer detection — id === "c1" or marked isWalkIn
const isWalkIn = (customer) => !customer || customer.id === "c1" || customer.isWalkIn === true;

// Compute customer's true outstanding balance from invoices (source of truth)
// Returns sum of (total - paid) for non-cancelled bills assigned to this customer.
const computeCustomerBalance = (customerId, invoices) =>
  (invoices || [])
    .filter((i) => i.customerId === customerId && !i.cancelled)
    .reduce((sum,i)=>sum+invoiceOutstanding(i),0);

// Compute customer's total spend (lifetime business)
const computeCustomerSpend = (customerId, invoices) =>
  (invoices || [])
    .filter((i) => i.customerId === customerId && !i.cancelled)
    .reduce((s, i) => s + (i.total || 0), 0);

// Allocate a payment amount to a customer's unpaid bills (FIFO — oldest first)
// Returns { updatedInvoices, leftover, allocations: [{billNumber, amount}] }
const allocatePayment = (customerId, amount, invoices, mode = "cash", note = "") => {
  let remaining = Number(amount) || 0;
  const allocations = [];
  const ts = new Date().toISOString();
  const updatedInvoices = invoices.map((inv) => {
    if (remaining <= 0) return inv;
    if (inv.customerId !== customerId) return inv;
    if (inv.cancelled || inv.writtenOff) return inv;
    const due = Math.max(0, (inv.total || 0) - (inv.paid || 0));
    if (due <= 0) return inv;
    const apply = Math.min(due, remaining);
    remaining -= apply;
    const newPaid = (inv.paid || 0) + apply;
    const newStatus = newPaid >= inv.total ? "paid" : newPaid > 0 ? "partial" : "unpaid";
    const payments = [...(inv.payments || []), { id: uid("p"), date: ts, amount: apply, mode, note }];
    allocations.push({ billNumber: inv.number, amount: apply });
    return { ...inv, paid: newPaid, status: newStatus, payments };
  });
  return { updatedInvoices, leftover: remaining, allocations };
};

// Sync customer.balance and totalSpend from invoices array (call after any change)
const syncCustomerTotals = (customers, invoices) =>
  customers.map((c) => ({
    ...c,
    balance: computeCustomerBalance(c.id, invoices),
    totalSpend: computeCustomerSpend(c.id, invoices),
  }));




/* ============================================================
   Seed data — minimal, user fills in their own
   ============================================================ */

const SEED_CUSTOMERS = [
  { id: "c1", name: "Walk-in Customer", phone: "—", email: "", gstin: "", address: "", state: "", stateCode: "", balance: 0, totalSpend: 0, since: new Date().toISOString(), isWalkIn: true },
];

// Common cyber-cafe items pre-loaded so daily billing doesn't require re-adding.
// AEPS commission: ₹10 per ₹1000 transacted — set as `per ₹1000` so quantity = thousands moved.
// Seed item IDs use a "seed_" prefix so they can never collide with user-added IDs.
const SEED_ITEMS = [
  { id: "seed_aeps", name: "AEPS Cash Withdrawal", category: "Other", price: 10, unit: "per ₹1000", gst: 0, hsn: "997159", icon: "edit", trackStock: false, stock: null, note: "Slab commission: ₹10 per ₹1000 (₹1001 = next slab)" },
  { id: "seed_photocopy", name: "Photocopy", category: "Photocopy", price: 3, unit: "page", gst: 0, hsn: "998421", icon: "copy", trackStock: false, stock: null },
  { id: "seed_print_bw", name: "Print B&W A4", category: "Printing", price: 5, unit: "page", gst: 0, hsn: "998313", icon: "printer", trackStock: false, stock: null },
  { id: "seed_print_color", name: "Print Color A4", category: "Printing", price: 15, unit: "page", gst: 0, hsn: "998313", icon: "printer", trackStock: false, stock: null },
  { id: "seed_lamination", name: "Lamination A4", category: "Scan & Lamination", price: 20, unit: "page", gst: 0, hsn: "998313", icon: "laminate", trackStock: false, stock: null },
  { id: "seed_scanning", name: "Scanning", category: "Scan & Lamination", price: 5, unit: "page", gst: 0, hsn: "998313", icon: "scan", trackStock: false, stock: null },
  { id: "seed_form", name: "Form Filling", category: "Other", price: 100, unit: "form", gst: 0, hsn: "998599", icon: "type", trackStock: false, stock: null },
  { id: "seed_epfo", name: "EPFO Form", category: "Other", price: 100, unit: "form", gst: 0, hsn: "998599", icon: "file", trackStock: false, stock: null },
  { id: "seed_aadhaar", name: "Aadhaar Print", category: "Other", price: 30, unit: "pc", gst: 0, hsn: "998313", icon: "file", trackStock: false, stock: null },
  { id: "seed_pan", name: "PAN Card Application", category: "Other", price: 150, unit: "form", gst: 0, hsn: "998599", icon: "type", trackStock: false, stock: null },
  { id: "seed_photo", name: "Passport Photo", category: "Other", price: 60, unit: "set", gst: 0, hsn: "998312", icon: "image", trackStock: false, stock: null },
  { id: "seed_computer", name: "Computer Time", category: "Computer Time", price: 30, unit: "hr", gst: 0, hsn: "998431", icon: "monitor", trackStock: false, stock: null },
];
const SEED_INVOICES = [];
const SEED_LOG = [];
const SEED_EXPENSES = [];

const CATEGORIES = ["All", "Printing", "Photocopy", "Scan & Lamination", "Computer Time", "Stationery", "Refreshments", "Other"];
const GST_RATES = [0, 5, 12, 18, 28];
const LOCAL_TAX_RULE_SOURCE = "Local shop rule. Owner/accountant final verify kar sakte hain.";
const LOCAL_TAX_RULES = [
  {
    id: "photocopy-printing-998912",
    matchAny: ["photo copy", "photocopy", "xerox", "zerox", "copy", "black white copy", "colour copy", "color copy", "printout", "print out", "document print", "a4 print", "laser print"],
    excludeAny: ["photo print", "passport photo", "photo paper", "copy paper", "a4 paper", "notebook", "register"],
    gstRate: 18,
    hsnSac: "998912",
    classification: "Printing / reproduction service",
    confidence: "high",
    reason: "Photocopy/printout ko shop rule me printing/reproduction service bucket me map kiya gaya.",
  },
  {
    id: "lamination-9989",
    matchAny: ["lamination", "laminate", "laminating"],
    gstRate: 18,
    hsnSac: "9989",
    classification: "Document finishing service",
    confidence: "medium",
    reason: "Lamination document finishing service pattern me aata hai; owner review allowed.",
  },
  {
    id: "photo-processing-998386",
    matchAny: ["passport photo", "photo print", "photo printing", "photograph", "id photo"],
    gstRate: 18,
    hsnSac: "998386",
    classification: "Photo processing service",
    confidence: "medium",
    reason: "Photo printing/processing ke liye saved local pattern.",
  },
  {
    id: "scan-digital-service",
    matchAny: ["scan", "scanning", "document scan"],
    gstRate: 18,
    hsnSac: "",
    classification: "Document digitisation service",
    confidence: "medium",
    reason: "Scanning digital/document service pattern me mark hua; exact SAC review kar sakte hain.",
  },
  {
    id: "online-form-service",
    matchAny: ["form filling", "online form", "application form", "registration form", "typing", "data entry"],
    gstRate: 18,
    hsnSac: "",
    classification: "Business support / data entry service",
    confidence: "medium",
    reason: "Form filling/data entry service pattern ke hisab se suggestion.",
  },
  {
    id: "stationery-review",
    matchAny: ["pen", "pencil", "notebook", "register", "file folder", "paper ream", "a4 paper", "stationery"],
    gstRate: 18,
    hsnSac: "",
    classification: "Stationery goods",
    confidence: "low",
    reason: "Stationery me exact HSN item-specific hota hai, isliye review required.",
  },
];

const localTaxSuggestionForItem = (item = {}) => {
  const text = `${item.name || ""} ${item.category || ""} ${item.unit || ""}`.toLowerCase().replace(/\s+/g, " ").trim();
  if (text.length < 3) return null;
  const rule = LOCAL_TAX_RULES.find(entry => {
    const matches = entry.matchAny.some(term => text.includes(term));
    const excluded = (entry.excludeAny || []).some(term => text.includes(term));
    return matches && !excluded;
  });
  if (!rule) return null;
  const confidence = rule.confidence || "medium";
  const autoApply = confidence === "high" || confidence === "medium";
  return {
    gstRate: sanitizeGstRate(rule.gstRate),
    hsnSac: rule.hsnSac || "",
    classification: rule.classification,
    confidence,
    reason: rule.reason,
    sources: [LOCAL_TAX_RULE_SOURCE],
    evidence: [LOCAL_TAX_RULE_SOURCE],
    source: "local-rule",
    autoApply,
    needsReview: confidence === "low" || !rule.hsnSac,
    ruleId: rule.id,
    warning: confidence === "low" ? "Manual review required." : "Owner GST ON/OFF choose kar sakta hai.",
  };
};
const UNIT_PRESETS = ["pc", "page", "form", "set", "hr", "min", "per ₹1000", "per ₹100", "txn", "kg", "ltr", "pack"];
const ITEM_ICONS = ["printer", "copy", "scan", "laminate", "monitor", "type", "file", "image", "box", "edit", "coffee", "layers", "package", "barcode"];




/* ============================================================
   Sidebar + Topbar
   ============================================================ */

const Sidebar = ({ collapsed, route, setRoute, profile, counts }) => {
  const navMain = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "billing", label: "New Bill", icon: "pos" },
    { id: "log", label: "Daily Log", icon: "calendar" },{ id: "invoices", label: "Invoices", icon: "invoice" },
  ];
  const navManage = [
    { id: "customers", label: "Customers", icon: "customers" },
    
    { id: "inventory", label: "Items & Services", icon: "inventory" },
    
    { id: "expenses", label: "Expenses", icon: "expense" },
    { id: "attendance", label: "Attendance", icon: "calendar" },
  ];
  const navSys = [
    { id: "reports", label: "Reports", icon: "reports" },
    { id: "settings", label: "Settings", icon: "settings" },{ id: "backup", label: "Backup & Restore", icon: "save" },
  ];

  const renderItem = (n) => (
    <div key={n.id}
      role="button" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter")setRoute(n.id);}} className={`nav-item ${route === n.id ? "active" : ""}`}
      onClick={() => setRoute(n.id)}
      title={collapsed ? n.label : undefined}>
      <Icon name={n.icon} />
      <span className="label">{n.label}</span>
      {n.badge ? <span className="badge">{n.badge}</span> : null}
    </div>
  );

  const shopName = (profile.shopName || "").trim();
  const ownerName = (profile.ownerName || "").trim();
  const tagline = (profile.tagline || "").trim();
  const ownerInitials = ownerName
    ? ownerName.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase()
    : "—";

  return (
    <aside className="sidebar">
      <div className="sidebar-brand" onClick={() => setRoute("settings")} style={{ cursor: "pointer" }} title={shopName ? "" : "Click to set up your business"}>
        <div className="sidebar-brand-mark"><BrandLogo size={38} /></div>
        <div className="sidebar-brand-text">
          <div className="name">{shopName || "Set up your business"}</div>
          <div className="sub">{tagline || (shopName ? "" : "Click here to begin")}</div>
        </div>
      </div>
      <div className="sidebar-nav">
        <div className="sidebar-section">Sales</div>
        {navMain.map(renderItem)}
        <div className="sidebar-section">Manage</div>
        {navManage.map(renderItem)}
        <div className="sidebar-section">Insights</div>
        {navSys.map(renderItem)}
      </div>
      <div className="sidebar-footer">
        <div className="avatar">{ownerInitials}</div>
        <div className="info">
          <div className="n">{ownerName || shopName}</div>
          <div className="r">{ownerName ? "Owner · Admin" : "Local business desk"}</div>
        </div>
      </div>
    </aside>
  );
};

const ROUTE_TITLES = {
  dashboard: { h: "Dashboard", b: "Overview" },
  billing: { h: "New Bill", b: "Sales · Point of sale" },
  log: { h: "Daily Log", b: "Sales · Quick entry" },
  invoices: { h: "Invoices", b: "Sales · All invoices" },
  customers: { h: "Customers", b: "Manage · Directory" },
  accounts: { h: "Accounts", b: "Manage · Customer billing" },
  inventory: { h: "Items & Services", b: "Manage · Catalog" },
  udhaar: { h: "Receivables", b: "Manage · Outstanding payments" },
  expenses: { h: "Expenses", b: "Manage · Cash out" },
  attendance: { h: "Attendance", b: "Manage · Daily shop log" },
  reports: { h: "Reports", b: "Insights · Analytics" },
  settings: { h: "Settings", b: "Configure your shop" },
};

const Topbar = ({ route, onToggleSidebar, onNewBill, onSearch }) => {
  const t = ROUTE_TITLES[route] || ROUTE_TITLES.dashboard;
  return (
    <header className="topbar">
      <button className="icon-btn" onClick={onToggleSidebar} title="Toggle sidebar"><Icon name="sidebar" /></button>
      <div className="topbar-title">
        <h1>{t.h}</h1>
        <div className="breadcrumb">{t.b}</div>
      </div>
      <div className="topbar-spacer" />
      <button className="btn primary" onClick={onNewBill}><Icon name="plus" />New Bill</button>
    </header>
  );
};




/* ============================================================
   Dashboard — KPIs, charts, recent activity
   ============================================================ */

const Sparkline = ({ data, color = "var(--brand)", height = 40 }) => {
  const w = 120, h = height, pad = 2;
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = pad + (i * (w - pad * 2)) / (data.length - 1);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return [x, y];
  });
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const area = `${d} L${w - pad},${h} L${pad},${h} Z`;
  return (
    <svg width={w} height={h} style={{ display: "block" }}>
      <path d={area} fill={color} opacity="0.12" />
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" />
    </svg>
  );
};

const formatAxisMoney = (n) => {
  const value = Math.max(0, Math.round(Number(n) || 0));
  if (value >= 100000) {
    const v = value / 100000;
    return `₹${v % 1 ? v.toFixed(1) : Math.round(v)}L`;
  }
  if (value >= 1000) {
    const v = value / 1000;
    return `₹${v % 1 ? v.toFixed(1) : Math.round(v)}k`;
  }
  return `₹${value}`;
};

const BarChart = ({ data, height = 240, target = 0, onSelect }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const values = data.map(d => Math.max(0, Number(d.value) || 0));
  const max = Math.max(...values, target || 0, 1);
  const safeMax = max || 1;
  const hasAxisData = values.some(v => v > 0) || target > 0;
  const ticks = hasAxisData ? [0, 0.25, 0.5, 0.75, 1] : [0];
  const targetBottom = target > 0 ? Math.min(100, Math.max(0, (target / safeMax) * 100)) : null;
  const activeIndex = hoveredIndex;
  return (
    <div className="bar-chart" style={{ height, padding: "16px 16px 30px", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "flex-end", height: "100%", gap: 0, position: "relative" }}>
        {ticks.map(t => (
          <div key={t} style={{
            position: "absolute", left: 0, right: 0, bottom: `${t * 100}%`,
            borderTop: "1px dashed var(--border)", pointerEvents: "none"
          }}>
            <span style={{ position: "absolute", left: -2, top: -8, fontSize: 10, color: "var(--text-4)", fontFamily: "var(--font-mono)" }}>
              {formatAxisMoney(safeMax * t)}
            </span>
          </div>
        ))}
        {targetBottom !== null && (
          <div className="goal-line" style={{ bottom: `${targetBottom}%` }}>
            <span>Goal {fmtINR(target)}</span>
          </div>
        )}
        {data.map((d, i) => {
          const pct = (Math.max(0, d.value) / safeMax) * 100;
          const isActive = activeIndex === i;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: "relative" }}>
              {isActive && (
                <div className="chart-value-pop" style={{ bottom: `calc(${Math.max(3, pct)}% + 12px)` }}>
                  <strong>{fmtINR(d.value)}</strong>
                  <span>{d.label}</span>
                </div>
              )}
              <button
                className={`chart-bar ${isActive ? "active" : ""}`}
                style={{ height: `${pct}%` }}
                title={`${d.label}: ${fmtINR(d.value)}`}
                aria-label={`${d.label}: ${fmtINR(d.value)}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(i)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => {
                  onSelect && onSelect(i);
                }}
              />
              <div style={{ position: "absolute", bottom: -22, fontSize: 10.5, color: "var(--text-3)" }}>{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DigitReel = ({ value }) => {
  const clean = Math.round(Math.abs(Number(value) || 0)).toLocaleString("en-IN");
  return (
    <span className="reel">
      {clean.split("").map((ch, i) => {
        if (!/\d/.test(ch)) return <span key={`${ch}-${i}`} className="reel-sep">{ch}</span>;
        const n = Number(ch);
        return (
          <span key={`${ch}-${i}`} className="reel-slot">
            <span className="reel-strip" style={{ transform: `translateY(${-n * 1.05}em)` }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => <span key={d}>{d}</span>)}
            </span>
          </span>
        );
      })}
    </span>
  );
};

const Donut = ({ data, size = 220, animated = false, centerLabel = "Total", centerValue }) => {
  const [active, setActive] = React.useState(0);
  const [tap, setTap] = React.useState(false);
  React.useEffect(() => {
    if (!data[active]) setActive(Math.max(0, data.length - 1));
  }, [data.length, active]);
  const sliceTotal = data.reduce((a, b) => a + Math.abs(b.value || 0), 0);
  const displayTotal = centerValue ?? data.reduce((a, b) => a + (b.negative ? -(b.value || 0) : (b.value || 0)), 0);
  const r = size / 2 - 32;
  const c = 2 * Math.PI * r;
  let off = 0;
  const cycleActive = (next = active + 1) => {
    if (!data.length) return;
    setActive(next % data.length);
    setTap(true);
    window.setTimeout(() => setTap(false), 540);
  };
  const activeItem = data[active] || data[0];
  return (
    <div className={`donut-wrap ${animated ? "animated" : ""}`}>
      <button
        className={`pm-orb-wrap ${tap ? "tap" : ""}`}
        type="button"
        onClick={() => cycleActive()}
        aria-label="Cycle payment mode detail"
        style={{ width: size + 10, maxWidth: "100%" }}
      >
        <div className="pm-halo" />
        <svg className="donut-svg pm-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth="24" />
          <g className="donut-jelly">
            {data.map((d, i) => {
              const len = sliceTotal > 0 ? (Math.abs(d.value || 0) / sliceTotal) * c : 0;
              const dash = `${len} ${c - len}`;
              const dashOff = -off;
              off += len;
              return (
                <circle key={i} cx={size / 2} cy={size / 2} r={r}
                  className={`donut-segment ${i === active ? "active" : ""}`}
                  fill="none" stroke={d.color} strokeWidth={i === active ? "28" : "24"}
                  strokeDasharray={dash} strokeDashoffset={dashOff}
                  transform={`rotate(-90 ${size / 2} ${size / 2})`} />
              );
            })}
          </g>
          <circle cx={size / 2} cy={size / 2} r={r - 25} fill="var(--surface)" stroke="var(--brand-100)" strokeWidth="1.5" />
        </svg>
        <div className="pm-center">
          <div className="pm-center-lbl">{centerLabel}</div>
          <div className={`pm-center-val ${displayTotal < 0 ? "negative" : ""}`}>
            <span className="rupee">{displayTotal < 0 ? "-₹" : "₹"}</span>
            <DigitReel value={displayTotal} />
          </div>
          <div className="pm-center-share">{activeItem ? `${activeItem.label}: ${Math.round((Math.abs(activeItem.value || 0) / Math.max(1, sliceTotal)) * 100)}%` : "No data"}</div>
        </div>
      </button>
      <div className="pm-legend">
        {data.map((d, i) => (
          <button key={i} className={`pm-leg ${i === active ? "on" : ""}`} type="button" onClick={() => cycleActive(i)}>
            <span className="pm-leg-dot" style={{ background: d.color }} />
            <span className="pm-leg-label">
              {d.label}
            </span>
            <span className="pm-leg-val">{fmtINR(d.negative ? -Math.abs(d.value || 0) : d.value)}</span>
            <span className="pm-leg-pct">{Math.round((Math.abs(d.value || 0) / Math.max(1, sliceTotal)) * 100)}%</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const advisorText = (value) => {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value).replace(/\[object Object\]/g, "").trim();
  }
  if (Array.isArray(value)) return value.map(advisorText).filter(Boolean).join("; ");
  if (typeof value === "object") {
    const keys = ["text", "summary", "insight", "recommendation", "action", "reason", "message", "value", "description"];
    for (const key of keys) {
      const text = advisorText(value[key]);
      if (text) return text;
    }
    return Object.values(value).map(advisorText).filter(Boolean).join("; ");
  }
  return "";
};

const advisorList = (value) => {
  if (Array.isArray(value)) return value.map(advisorText).filter(Boolean).slice(0, 8);
  const text = advisorText(value);
  return text ? [text] : [];
};

const AutoTaxBackfill = ({ items, setItems }) => {
  const lastFingerprintRef = React.useRef("");

  const targets = React.useMemo(() => (items || [])
    .filter((item) => {
      if (!item || !String(item.name || "").trim() || String(item.name || "").trim().length < 3) return false;
      if (item.taxReview) return false;
      const hasCode = Boolean(String(item.hsn || "").trim());
      const hasSuggestion = Boolean(item.taxSuggestion || item.suggestedGstRate != null || item.suggestedHsnSac);
      return !hasCode || !hasSuggestion;
    })
    .slice(0, 12), [items]);

  const fingerprint = React.useMemo(() => targets
    .map(item => `${item.id}:${item.name}:${item.category}:${item.unit}:${item.price}:${item.gst}:${item.hsn}`)
    .join("|"), [targets]);

  React.useEffect(() => {
    if (!targets.length) return undefined;
    if (fingerprint && fingerprint === lastFingerprintRef.current) return undefined;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      lastFingerprintRef.current = fingerprint;
      setItems(prev => prev.map(current => {
        if (!current || current.taxReview) return current;
        const target = targets.find(item => item.id === current.id);
        if (!target) return current;
        const suggestion = normalizeTaxSuggestionForUi(localTaxSuggestionForItem(current));
        if (!suggestion) return { ...current, taxAutoCheckedAt: new Date().toISOString() };
        const ownerControlled = String(current.taxSource || "").startsWith("owner");
        return {
          ...current,
          hsn: suggestion.autoApply ? (suggestion.hsnSac || current.hsn) : current.hsn,
          suggestedGstRate: suggestion.gstRate,
          suggestedHsnSac: suggestion.hsnSac,
          gstChoiceMigratedV1: true,
          taxSource: ownerControlled ? current.taxSource : "local-rule",
          taxConfidence: suggestion.confidence || "medium",
          taxReview: Boolean(suggestion.needsReview),
          taxAutoCheckedAt: new Date().toISOString(),
          taxSuggestion: {
            gstRate: suggestion.gstRate,
            hsnSac: suggestion.hsnSac,
            classification: suggestion.classification,
            confidence: suggestion.confidence,
            reason: suggestion.reason,
            source: suggestion.source,
          },
        };
      }));
    }, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [fingerprint, setItems, targets]);

  return null;
};

const Dashboard = ({ invoices, customers, expenses, attendance = [], onMarkAttendance, onRoute, profile, setProfile }) => {
  const needsSetup = !((profile?.shopName || "").trim() && (profile?.address || "").trim());
  const todayAttendance = attendanceForDate(attendance, isoDay());
  const [period, setPeriod] = React.useState("day");
  const [customRange, setCustomRange] = React.useState({ start: isoDay(), end: isoDay() });
  const [selectedTrendIndex, setSelectedTrendIndex] = React.useState(null);
  const range = React.useMemo(() => getDateRange(period, customRange), [period, customRange]);
  const dailyGoal = Number(profile?.dailyGoal) > 0 ? Number(profile.dailyGoal) : 700;
  const [goalDraft, setGoalDraft] = React.useState(String(dailyGoal));
  React.useEffect(() => setGoalDraft(String(dailyGoal)), [dailyGoal]);
  const goalDraftNumber = Math.round(Number(String(goalDraft).replace(/[^\d]/g, "")) || 0);
  const isGoalValid = goalDraftNumber > 0;
  const goalDirty = String(goalDraft).trim() !== String(dailyGoal);
  const saveDailyGoal = () => {
    if (!isGoalValid) return;
    const nextGoal = Math.max(1, goalDraftNumber);
    setProfile(p => ({ ...p, dailyGoal: nextGoal }));
    setGoalDraft(String(nextGoal));
  };
  const resetDailyGoalDraft = () => setGoalDraft(String(dailyGoal));
  const liveInvoices = invoices.filter(i => !i.cancelled);
  const scopedInvoices = liveInvoices.filter(i => inDateRange(i.date, range));
  const scopedExpenses = expenses.filter(e => inDateRange(e.date, range));
  const invoiceValue = scopedInvoices.reduce((s, i) => s + (Number(i.total) || 0), 0);
  const collectedRevenue = invoices.reduce((s, i) => s + collectedForInvoiceInRange(i, range), 0);
  const expenseTotal = scopedExpenses.reduce((s, e) => s + (e.amount || 0), 0);
  const netRevenue = collectedRevenue - expenseTotal;
  const outstanding = scopedInvoices.reduce((s, i) => s + invoiceOutstanding(i), 0);
  const dueCustomers = new Set(scopedInvoices.filter(i => invoiceOutstanding(i) > 0).map(i => i.customerId)).size;
  const billCount = scopedInvoices.length;
  const scopeLabel = range.label;

  const trendDays = dayLabelsForRange(range, period);
  const trendData = trendDays.map((d) => {
    const key = d.toDateString();
    const sales = liveInvoices.reduce((s, inv) => s + collectedForInvoiceOnDate(inv, d), 0);
    const billValue = liveInvoices.filter(inv => new Date(inv.date).toDateString() === key).reduce((s, x) => s + (Number(x.total) || 0), 0);
    const spend = expenses.filter(e => new Date(e.date).toDateString() === key).reduce((s, x) => s + x.amount, 0);
    const net = sales - spend;
    return {
      label: d.toLocaleDateString("en-IN", period === "month" || period === "custom" ? { day: "2-digit", month: "short" } : { weekday: "short" }),
      dateLabel: fmtDate(d),
      sales,
      billValue,
      expenses: spend,
      net,
      value: Math.max(0, net),
    };
  });
  const activeTrendIndex = selectedTrendIndex !== null && trendData[selectedTrendIndex] ? selectedTrendIndex : Math.max(0, trendData.length - 1);
  const activeTrend = trendData[activeTrendIndex] || { dateLabel: scopeLabel, sales: 0, expenses: 0, net: 0, value: 0 };

  const modeTotals = {};
  liveInvoices.forEach((inv) => {
    if (Array.isArray(inv.payments) && inv.payments.length > 0) {
      inv.payments.forEach((p) => {
        if (!inDateRange(p.date || inv.date, range)) return;
        const mode = p.mode || inv.paymentMode || "cash";
        modeTotals[mode] = (modeTotals[mode] || 0) + (Number(p.amount) || 0);
      });
    } else if ((inv.paid || 0) > 0 && inDateRange(inv.date, range)) {
      const mode = inv.paymentMode === "partial" ? "cash" : (inv.paymentMode || "cash");
      modeTotals[mode] = (modeTotals[mode] || 0) + (Number(inv.paid) || 0);
    }
  });
  const modes = ["cash", "upi", "card", "bank"];
  const modeData = modes.map((m, i) => ({
    label: m === "upi" ? "UPI" : m[0].toUpperCase() + m.slice(1),
    value: modeTotals[m] || 0,
    color: ["#1f6feb", "#0f766e", "#7c3aed", "#c2410c"][i],
  })).filter(d => d.value !== 0);
  const moneyFlowData = [
    ...modeData,
    ...(expenseTotal > 0 ? [{ label: "Expenses", value: expenseTotal, color: "#dc2626", negative: true }] : []),
  ];
  const paymentModeTotal = Object.values(modeTotals).reduce((s, n) => s + Number(n), 0);
  const netModeTotal = paymentModeTotal - expenseTotal;
  const todayRange = getDateRange("day");
  const todayCollected = liveInvoices.reduce((s, i) => s + collectedForInvoiceInRange(i, todayRange), 0);
  const todaySpend = rangeTotal(expenses, todayRange, "amount");
  const todayNet = todayCollected - todaySpend;
  const goalPct = Math.min(100, Math.max(0, (todayNet / dailyGoal) * 100));

  // top items by collected revenue
  const itemRev = {};
  scopedInvoices.forEach(inv => {
    const collected = collectedForInvoiceInRange(inv, range);
    const total = Number(inv.total) || 0;
    const collectionRatio = total > 0 ? Math.min(1, Math.max(0, collected / total)) : 0;
    (inv.items || []).forEach(li => {
      itemRev[li.name] = (itemRev[li.name] || 0) + ((Number(li.amount) || 0) * collectionRatio);
    });
  });
  const topItems = Object.entries(itemRev).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const recentInvoices = [...scopedInvoices].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  return (
    <div className="page dashboard-page">
      <div className="page-header">
        <div>
          <h2>{(profile?.shopName || "").trim() ? `Welcome, ${profile.shopName}` : "Welcome"}</h2>
          <div className="sub">Dashboard showing {scopeLabel.toLowerCase()} data.</div>
        </div>
        <div className="actions">
          <DateRangeFilter period={period} setPeriod={setPeriod} customRange={customRange} setCustomRange={setCustomRange} />
          <button className="btn primary" onClick={() => onRoute("billing")}><Icon name="plus" />New Bill</button>
        </div>
      </div>

      {needsSetup && (
        <div className="setup-banner">
          <div className="setup-icon"><Icon name="settings" size={22} /></div>
          <div className="setup-body">
            <h3>Finish setup before billing</h3>
            <p>Add your <b>shop name</b>, <b>owner name</b>, GSTIN, address and UPI ID once — they appear automatically on every invoice and bill.</p>
          </div>
          <button className="btn primary" onClick={() => onRoute("settings")}>
            <Icon name="settings" size={14} />Open Settings
          </button>
        </div>
      )}

      {!todayAttendance && (
        <div className="attendance-nudge">
          <div className="attendance-nudge-icon"><Icon name="calendar" size={20} /></div>
          <div>
            <strong>Aaj attendance mark nahi hui</strong>
            <span>App startup par khul jayegi; bas opening ke time presence lock kar do.</span>
          </div>
          <button className="btn primary" onClick={onMarkAttendance}><Icon name="check" size={13} />Mark Present</button>
          <button className="btn" onClick={() => onRoute("attendance")}><Icon name="history" size={13} />History</button>
        </div>
      )}

      <div className="stat-grid dashboard-stat-grid">
        <div className="stat">
          <div className="label">Collected After Expenses</div>
          <div className="value">{fmtINR(netRevenue)}</div>
          <div className={netRevenue > 0 ? "delta up" : netRevenue < 0 ? "delta down" : "delta"}>
            Received {fmtINR(collectedRevenue)} - Expenses {fmtINR(expenseTotal)}
          </div>
        </div>
        <div className="stat">
          <div className="label">Collected ({scopeLabel})</div>
          <div className="value">{fmtINR(collectedRevenue)}</div>
          <div className="delta up">{billCount} bills · Invoice value {fmtINR(invoiceValue)}</div>
        </div>
        <div className="stat">
          <div className="label">Expenses ({scopeLabel})</div>
          <div className="value">{fmtINR(expenseTotal)}</div>
          <div className={expenseTotal > 0 ? "delta down" : "delta"}>{expenseTotal > 0 ? "Deducted from revenue" : "No expenses recorded"}</div>
        </div>
        <div className="stat">
          <div className="label">Invoices ({scopeLabel})</div><div className="value">{scopedInvoices.length}</div><div className="delta">Issued bill count</div>
        </div>
      </div>

      <div className="daily-goal-mini">
        <div>
          <span>Daily goal</span>
          <strong>{fmtINR(Math.max(0, todayNet))} / {fmtINR(dailyGoal)}</strong>
        </div>
        <div className="goal-mini-track" aria-label="Daily goal progress">
          <span style={{ width: `${goalPct}%` }} />
        </div>
        <em>{Math.round(goalPct)}%</em>
        <div className="daily-goal-edit">
          <label className="daily-goal-field">
            <span>Set goal</span>
            <div className={`goal-input-wrap ${goalDirty ? "dirty" : ""} ${goalDraft && !isGoalValid ? "invalid" : ""}`}>
              <b>₹</b>
              <input
                className="mono"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={goalDraft}
                placeholder="700"
                aria-label="Daily goal amount"
                onChange={(e) => setGoalDraft(e.target.value.replace(/[^\d]/g, ""))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveDailyGoal();
                  if (e.key === "Escape") resetDailyGoalDraft();
                }}
              />
            </div>
          </label>
          <button className="btn sm primary" disabled={!goalDirty || !isGoalValid} onClick={saveDailyGoal}>
            <Icon name="save" size={12} />Save
          </button>
          {goalDirty && (
            <button className="btn sm" onClick={resetDailyGoalDraft}>Cancel</button>
          )}
        </div>
      </div>

      <div className="split mb-16">
        <div className="card">
          <div className="card-header">
            <h3>Collected after expenses</h3>
            <div className="row">
              <div className="legend" style={{ padding: 0 }}>
                <span className="key"><span className="sw" style={{ background: "var(--brand)" }} />Daily net</span>
              </div>
              <span className="meta">{scopeLabel}</span>
            </div>
          </div>
          <BarChart data={trendData} height={205} target={dailyGoal} selectedIndex={activeTrendIndex} onSelect={setSelectedTrendIndex} />
          <div className="chart-detail-card">
            <div>
              <span>Selected day</span>
              <strong>{activeTrend.dateLabel}</strong>
            </div>
            <div>
              <span>Collected</span>
              <strong className="mono">{fmtINR(activeTrend.sales)}</strong>
            </div>
            <div>
              <span>Invoice value</span>
              <strong className="mono">{fmtINR(activeTrend.billValue || 0)}</strong>
            </div>
            <div>
              <span>Expenses</span>
              <strong className="mono expense">{fmtINR(activeTrend.expenses)}</strong>
            </div>
            <div>
              <span>Net</span>
              <strong className={`mono ${activeTrend.net < 0 ? "expense" : ""}`}>{fmtINR(activeTrend.net)}</strong>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Payments by Mode</h3>
            <span className="meta">{scopeLabel}</span>
          </div>
          <Donut data={moneyFlowData} size={194} centerLabel="Net" centerValue={netModeTotal} animated />
        </div>
      </div>

      <div className="split">
        <div className="card">
          <div className="card-header">
            <h3>Recent Invoices</h3>
            <button className="btn sm" onClick={() => onRoute("invoices")}>View all <Icon name="arrowRight" size={12} /></button>
          </div>
          <div className="table-wrap">
            <table className="data">
              <thead><tr>
                <th>Invoice #</th><th>Customer</th><th>Date</th><th>Status</th><th className="num">Amount</th>
              </tr></thead>
              <tbody>
                {recentInvoices.map(inv => {
                  const cust = customers.find(c => c.id === inv.customerId);
                  return (
                    <tr key={inv.id}>
                      <td className="strong mono" style={{ fontSize: 12 }}>{inv.number}</td>
                      <td>{cust?.name || "—"}</td>
                      <td style={{ color: "var(--text-3)" }}>{fmtDate(inv.date)}</td>
                      <td>
                        <span className={`badge ${inv.status === "paid" ? "success" : inv.status === "partial" ? "warning" : "danger"}`}>
                          <span className="dot" />{inv.status === "draft" ? "Draft" : inv.status === "cancelled" ? "Cancelled" : inv.status === "paid" ? "Paid" : inv.status === "partial" ? "Partial" : "Pay Later"}
                        </span>
                      </td>
                      <td className="num strong">{fmtINR(inv.total)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Top Items by Collected Revenue</h3>
            <span className="meta">{scopeLabel}</span>
          </div>
          <div style={{ padding: "10px 16px 16px" }}>
            {topItems.length === 0 ? (
              <div className="empty" style={{ padding: 20 }}>
                <Icon name="inventory" size={30} />
                <h4>No item sales</h4>
                <p>No invoice items in this period.</p>
              </div>
            ) : topItems.map(([name, rev]) => {
              const max = topItems[0][1];
              return (
                <div key={name} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 12.5 }}>
                    <span style={{ color: "var(--text)" }}>{name}</span>
                    <span className="mono" style={{ color: "var(--text-2)" }}>{fmtINR(rev)}</span>
                  </div>
                  <div style={{ height: 5, background: "var(--surface-3)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${(rev / max) * 100}%`, height: "100%", background: "var(--brand)", borderRadius: 3, transition: "width 0.5s" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};




/* ============================================================
   UPI QR — generates a UPI payment QR for the configured UPI ID
   Uses Google Chart API as fallback-free pure-SVG approach
   ============================================================ */

// Lightweight QR code generator (pure JS, no deps).
// Adapted minimal QR matrix builder for UPI strings.
// Source pattern: https://en.wikipedia.org/wiki/QR_code -- we use a tiny encoder.
// To stay simple, we use the "qrcode-svg" approach via an inlined small implementation.

// Simple QR using the well-known qrcodegen library (compact version) inlined:
// (License: MIT, Project Nayuki)
// We include a trimmed encoder for byte mode, error correction level M.

const QR = (() => {
  // ---- BEGIN qrcodegen (Nayuki) compact ----
  function QrCode(version, errCorLvl, dataCodewords, mask) {
    if (version < 1 || version > 40) throw new RangeError("Version out of range");
    if (mask < -1 || mask > 7) throw new RangeError("Mask value out of range");
    this.version = version; this.errorCorrectionLevel = errCorLvl;
    this.size = version * 4 + 17;
    this.modules = []; this.isFunction = [];
    for (let i = 0; i < this.size; i++) {
      this.modules.push(new Array(this.size).fill(false));
      this.isFunction.push(new Array(this.size).fill(false));
    }
    drawFunctionPatterns(this);
    const allCodewords = addEccAndInterleave(this, dataCodewords);
    drawCodewords(this, allCodewords);
    if (mask === -1) {
      let minPenalty = Infinity;
      for (let i = 0; i < 8; i++) {
        applyMask(this, i); drawFormatBits(this, i);
        const penalty = getPenaltyScore(this);
        if (penalty < minPenalty) { mask = i; minPenalty = penalty; }
        applyMask(this, i);
      }
    }
    applyMask(this, mask); drawFormatBits(this, mask);
    this.mask = mask;
    this.isFunction = null;
  }
  QrCode.encodeText = function (text, ecl) {
    const bytes = []; for (let ch of unescape(encodeURIComponent(text))) bytes.push(ch.charCodeAt(0));
    return QrCode.encodeSegments([{ mode: 4, numChars: bytes.length, getData: () => {
      const bb = []; for (const b of bytes) for (let i = 7; i >= 0; i--) bb.push((b >>> i) & 1);
      return bb;
    }}], ecl);
  };
  QrCode.encodeSegments = function (segs, ecl) {
    const ECL_MAP = { L: 0, M: 1, Q: 2, H: 3 };
    const eclIdx = ECL_MAP[ecl] ?? 1;
    let version, dataUsedBits;
    for (version = 1; ; version++) {
      const dataCapacityBits = getNumDataCodewords(version, eclIdx) * 8;
      const usedBits = getTotalBits(segs, version);
      if (usedBits <= dataCapacityBits) { dataUsedBits = usedBits; break; }
      if (version >= 40) throw new Error("Data too long");
    }
    const bb = [];
    for (const seg of segs) {
      appendBits(bb, seg.mode, 4);
      appendBits(bb, seg.numChars, getCharCountBits(seg.mode, version));
      for (const b of seg.getData()) bb.push(b);
    }
    const dataCapacityBits = getNumDataCodewords(version, eclIdx) * 8;
    appendBits(bb, 0, Math.min(4, dataCapacityBits - bb.length));
    appendBits(bb, 0, (8 - bb.length % 8) % 8);
    for (let pad = 0xEC; bb.length < dataCapacityBits; pad ^= 0xEC ^ 0x11) appendBits(bb, pad, 8);
    const dataCodewords = []; for (let i = 0; i < bb.length; i += 8) {
      let v = 0; for (let j = 0; j < 8; j++) v = (v << 1) | bb[i + j];
      dataCodewords.push(v);
    }
    return new QrCode(version, eclIdx, dataCodewords, -1);
  };
  function appendBits(bb, val, len) { for (let i = len - 1; i >= 0; i--) bb.push((val >>> i) & 1); }
  function getCharCountBits(mode, version) {
    const tbl = { 1: [10,12,14], 2: [9,11,13], 4: [8,16,16], 8: [8,10,12] };
    const r = tbl[mode]; return r[version < 10 ? 0 : version < 27 ? 1 : 2];
  }
  function getTotalBits(segs, version) {
    let result = 0;
    for (const seg of segs) {
      const ccbits = getCharCountBits(seg.mode, version);
      if (seg.numChars >= (1 << ccbits)) return Infinity;
      result += 4 + ccbits + seg.getData().length;
    }
    return result;
  }
  const ECC_CODEWORDS_PER_BLOCK = [
    [-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
    [-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],
    [-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
    [-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
  ];
  const NUM_ERROR_CORRECTION_BLOCKS = [
    [-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],
    [-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],
    [-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],
    [-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81],
  ];
  function getNumRawDataModules(ver) {
    let result = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
      const numAlign = Math.floor(ver / 7) + 2;
      result -= (25 * numAlign - 10) * numAlign - 55;
      if (ver >= 7) result -= 36;
    }
    return result;
  }
  function getNumDataCodewords(ver, ecl) {
    return Math.floor(getNumRawDataModules(ver) / 8) - ECC_CODEWORDS_PER_BLOCK[ecl][ver] * NUM_ERROR_CORRECTION_BLOCKS[ecl][ver];
  }
  function drawFunctionPatterns(qr) {
    for (let i = 0; i < qr.size; i++) { setFunctionModule(qr, 6, i, i % 2 === 0); setFunctionModule(qr, i, 6, i % 2 === 0); }
    drawFinderPattern(qr, 3, 3); drawFinderPattern(qr, qr.size - 4, 3); drawFinderPattern(qr, 3, qr.size - 4);
    const alignPositions = getAlignmentPatternPositions(qr.version);
    for (let i = 0; i < alignPositions.length; i++)
      for (let j = 0; j < alignPositions.length; j++) {
        if (!(i === 0 && j === 0 || i === 0 && j === alignPositions.length - 1 || i === alignPositions.length - 1 && j === 0))
          drawAlignmentPattern(qr, alignPositions[i], alignPositions[j]);
      }
    drawFormatBits(qr, 0); drawVersion(qr);
  }
  function drawFormatBits(qr, mask) {
    const data = qr.errorCorrectionLevel << 3 | mask;
    let rem = data; for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const bits = (data << 10 | rem) ^ 0x5412;
    for (let i = 0; i <= 5; i++) setFunctionModule(qr, 8, i, getBit(bits, i));
    setFunctionModule(qr, 8, 7, getBit(bits, 6));
    setFunctionModule(qr, 8, 8, getBit(bits, 7));
    setFunctionModule(qr, 7, 8, getBit(bits, 8));
    for (let i = 9; i < 15; i++) setFunctionModule(qr, 14 - i, 8, getBit(bits, i));
    for (let i = 0; i < 8; i++) setFunctionModule(qr, qr.size - 1 - i, 8, getBit(bits, i));
    for (let i = 8; i < 15; i++) setFunctionModule(qr, 8, qr.size - 15 + i, getBit(bits, i));
    setFunctionModule(qr, 8, qr.size - 8, true);
  }
  function drawVersion(qr) {
    if (qr.version < 7) return;
    let rem = qr.version; for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
    const bits = qr.version << 12 | rem;
    for (let i = 0; i < 18; i++) {
      const bit = getBit(bits, i); const a = qr.size - 11 + i % 3; const b = Math.floor(i / 3);
      setFunctionModule(qr, a, b, bit); setFunctionModule(qr, b, a, bit);
    }
  }
  function drawFinderPattern(qr, x, y) {
    for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
      const dist = Math.max(Math.abs(dx), Math.abs(dy));
      const xx = x + dx, yy = y + dy;
      if (0 <= xx && xx < qr.size && 0 <= yy && yy < qr.size) setFunctionModule(qr, xx, yy, dist !== 2 && dist !== 4);
    }
  }
  function drawAlignmentPattern(qr, x, y) {
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++)
      setFunctionModule(qr, x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }
  function setFunctionModule(qr, x, y, isDark) { qr.modules[y][x] = isDark; qr.isFunction[y][x] = true; }
  function getAlignmentPatternPositions(ver) {
    if (ver === 1) return [];
    const numAlign = Math.floor(ver / 7) + 2;
    const step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (numAlign * 2 - 2)) * 2;
    const result = [6]; for (let pos = ver * 4 + 10; result.length < numAlign; pos -= step) result.splice(1, 0, pos);
    return result;
  }
  function addEccAndInterleave(qr, data) {
    const ver = qr.version, ecl = qr.errorCorrectionLevel;
    const numBlocks = NUM_ERROR_CORRECTION_BLOCKS[ecl][ver];
    const blockEccLen = ECC_CODEWORDS_PER_BLOCK[ecl][ver];
    const rawCodewords = Math.floor(getNumRawDataModules(ver) / 8);
    const numShortBlocks = numBlocks - rawCodewords % numBlocks;
    const shortBlockLen = Math.floor(rawCodewords / numBlocks);
    const blocks = []; const rsDiv = reedSolomonComputeDivisor(blockEccLen);
    for (let i = 0, k = 0; i < numBlocks; i++) {
      const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
      k += dat.length;
      const ecc = reedSolomonComputeRemainder(dat, rsDiv);
      if (i < numShortBlocks) dat.push(0);
      blocks.push(dat.concat(ecc));
    }
    const result = [];
    for (let i = 0; i < blocks[0].length; i++) blocks.forEach((block, j) => {
      if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
    });
    return result;
  }
  function drawCodewords(qr, data) {
    let i = 0;
    for (let right = qr.size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < qr.size; vert++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j, upward = ((right + 1) & 2) === 0;
          const y = upward ? qr.size - 1 - vert : vert;
          if (!qr.isFunction[y][x] && i < data.length * 8) {
            qr.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7)); i++;
          }
        }
      }
    }
  }
  function applyMask(qr, mask) {
    for (let y = 0; y < qr.size; y++) for (let x = 0; x < qr.size; x++) {
      let invert;
      switch (mask) {
        case 0: invert = (x + y) % 2 === 0; break;
        case 1: invert = y % 2 === 0; break;
        case 2: invert = x % 3 === 0; break;
        case 3: invert = (x + y) % 3 === 0; break;
        case 4: invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break;
        case 5: invert = x * y % 2 + x * y % 3 === 0; break;
        case 6: invert = (x * y % 2 + x * y % 3) % 2 === 0; break;
        case 7: invert = ((x + y) % 2 + x * y % 3) % 2 === 0; break;
      }
      if (invert && !qr.isFunction[y][x]) qr.modules[y][x] = !qr.modules[y][x];
    }
  }
  function getPenaltyScore(qr) {
    let result = 0;
    for (let y = 0; y < qr.size; y++) {
      let runColor = false, runX = 0; const runHistory = [0,0,0,0,0,0,0];
      for (let x = 0; x < qr.size; x++) {
        if (qr.modules[y][x] === runColor) { runX++; if (runX === 5) result += 3; else if (runX > 5) result++; }
        else { finderPenaltyAddHistory(runX, runHistory, qr.size); if (!runColor) result += finderPenaltyCountPatterns(runHistory, qr.size) * 40; runColor = qr.modules[y][x]; runX = 1; }
      }
      result += finderPenaltyTerminateAndCount(runColor, runX, runHistory, qr.size) * 40;
    }
    return result;
  }
  function finderPenaltyAddHistory(currentRunLength, runHistory, size) {
    if (runHistory[0] === 0) currentRunLength += size;
    runHistory.copyWithin(1, 0); runHistory[0] = currentRunLength;
  }
  function finderPenaltyCountPatterns(runHistory, size) {
    const n = runHistory[1];
    const core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
    return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
  }
  function finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory, size) {
    if (currentRunColor) { finderPenaltyAddHistory(currentRunLength, runHistory, size); currentRunLength = 0; }
    currentRunLength += size;
    finderPenaltyAddHistory(currentRunLength, runHistory, size);
    return finderPenaltyCountPatterns(runHistory, size);
  }
  function reedSolomonComputeDivisor(degree) {
    const result = new Array(degree - 1).fill(0); result.push(1);
    let root = 1;
    for (let i = 0; i < degree; i++) {
      for (let j = 0; j < result.length; j++) {
        result[j] = reedSolomonMultiply(result[j], root);
        if (j + 1 < result.length) result[j] ^= result[j + 1];
      }
      root = reedSolomonMultiply(root, 0x02);
    }
    return result;
  }
  function reedSolomonComputeRemainder(data, divisor) {
    const result = new Array(divisor.length).fill(0);
    for (const b of data) {
      const factor = b ^ result.shift(); result.push(0);
      for (let i = 0; i < divisor.length; i++) result[i] ^= reedSolomonMultiply(divisor[i], factor);
    }
    return result;
  }
  function reedSolomonMultiply(x, y) {
    let z = 0; for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; } return z;
  }
  function getBit(x, i) { return ((x >>> i) & 1) !== 0; }
  return { encodeText: (t) => QrCode.encodeText(t, "M") };
})();

const cleanUpiId = (upiId = "") => String(upiId || "").trim();

const isLikelyUpiId = (upiId = "") =>
  /^[A-Za-z0-9._-]{2,256}@[A-Za-z][A-Za-z0-9._-]{2,64}$/.test(cleanUpiId(upiId));

const encodeUpiParam = (value = "") =>
  encodeURIComponent(String(value || "").trim())
    .replace(/%40/g, "@")
    .replace(/%2E/g, ".")
    .replace(/%2D/g, "-")
    .replace(/%5F/g, "_");

const formatUpiAmount = (amount) => {
  const numeric = Number(amount);
  return Number.isFinite(numeric) && numeric > 0 ? numeric.toFixed(2) : "";
};

const buildUpiPaymentUrl = ({ upiId, name, amount, note }) => {
  const pa = cleanUpiId(upiId);
  const params = [
    ["pa", pa],
    ["pn", String(name || "Merchant").trim() || "Merchant"],
    ["cu", "INR"],
  ];
  const formattedAmount = formatUpiAmount(amount);
  if (formattedAmount) params.push(["am", formattedAmount]);
  if (note) params.push(["tn", String(note).trim()]);
  return `upi://pay?${params.map(([key, value]) => `${key}=${encodeUpiParam(value)}`).join("&")}`;
};

// React component: renders an SVG QR for a UPI payment string
const UpiQR = ({ upiId, name, amount, size = 180, note = "", showUpiId = true }) => {
  const cleanedUpiId = cleanUpiId(upiId);
  const upiStr = React.useMemo(
    () => buildUpiPaymentUrl({ upiId: cleanedUpiId, name, amount, note }),
    [cleanedUpiId, name, amount, note]
  );

  const qr = React.useMemo(() => {
    try { return QR.encodeText(upiStr); } catch (e) { console.error("QR error", e); return null; }
  }, [upiStr]);

  if (!cleanedUpiId) return <div className="upi-qr-error">UPI ID missing</div>;
  if (!isLikelyUpiId(cleanedUpiId)) return <div className="upi-qr-error">Valid UPI ID daalo</div>;
  if (!qr) return <div style={{ color: "var(--danger)", fontSize: 12 }}>QR generation failed</div>;

  const cells = qr.size;
  const dark = "#101828";

  return (
    <div className="upi-qr-stack" data-upi-url={upiStr}>
      <svg width={size} height={size} viewBox={`0 0 ${cells} ${cells}`} style={{ display: "block" }} shapeRendering="crispEdges">
        <rect width={cells} height={cells} fill="#fff" />
        {qr.modules.map((row, y) =>
          row.map((isDark, x) => isDark ? <rect key={`${x},${y}`} x={x} y={y} width="1" height="1" fill={dark} /> : null)
        )}
      </svg>
      {showUpiId && <div className="upi-qr-id mono">{cleanedUpiId}</div>}
    </div>
  );
};



const safeFilePart = (value, fallback = "invoice") =>
  String(value || fallback)
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80) || fallback;

const collectPrintableCss = () => {
  const chunks = [];
  for (const sheet of Array.from(document.styleSheets || [])) {
    try {
      const rules = Array.from(sheet.cssRules || []).map(rule => rule.cssText).join("\n");
      if (rules) chunks.push(rules);
    } catch {
      // Ignore restricted sheets; local app CSS is enough for the invoice PDF.
    }
  }
  chunks.push(`
    body { margin: 0; background: #fff; color: #101828; }
    .invoice-preview { box-shadow: none !important; margin: 0 auto !important; }
    .invoice-preview.refrens { width: 760px; max-width: 100%; box-shadow: none !important; }
    @page { size: A4; margin: 10mm; }
  `);
  return chunks.join("\n");
};

const saveInvoicePdfFromDom = async (invoice, customer, toast) => {
  const node = document.querySelector(`.invoice-preview[data-invoice-id="${invoice.id}"]`) || document.querySelector(".invoice-preview");
  if (!node) {
    toast && toast("Invoice preview nahi mila", "error");
    return false;
  }
  const filename = `${safeFilePart(invoice.number, "Invoice")}-${safeFilePart(customer?.name || "Customer")}.pdf`;
  const desktop = window.shriDesktop?.invoice;
  if (!desktop?.savePdf) {
    window.print();
    toast && toast("Desktop PDF unavailable, print dialog opened");
    return false;
  }
  const result = await desktop.savePdf({
    invoiceId: invoice.id,
    html: node.outerHTML,
    css: collectPrintableCss(),
    filename,
  });
  if (result?.canceled) return false;
  if (!result?.ok) {
    toast && toast(result?.error || "PDF save failed", "error");
    return false;
  }
  toast && toast("Invoice PDF saved");
  return true;
};


/* ============================================================
   Item add/edit modal — user defines everything
   ============================================================ */

const normalizeTaxSuggestionForUi = (suggestion) => {
  if (!suggestion) return null;
  const rate = Number(suggestion.gstRate ?? suggestion.gst ?? suggestion.rate);
  return {
    gstRate: GST_RATES.includes(rate) ? rate : 0,
    hsnSac: String(suggestion.hsnSac || suggestion.hsn || suggestion.sac || "").replace(/[^0-9A-Za-z]/g, "").slice(0, 10),
    classification: advisorText(suggestion.classification || suggestion.category || suggestion.type),
    confidence: advisorText(suggestion.confidence || "medium").toLowerCase(),
    reason: advisorText(suggestion.reason || suggestion.explanation || suggestion.note),
    sources: advisorList(suggestion.sources).slice(0, 4),
    evidence: advisorList(suggestion.evidence || suggestion.sources).slice(0, 4),
    source: advisorText(suggestion.source || "local-rule").toLowerCase(),
    autoApply: Boolean(suggestion.autoApply),
    needsReview: suggestion.needsReview !== false,
    ruleId: advisorText(suggestion.ruleId || ""),
    warning: advisorText(suggestion.warning || "Final GST/HSN verify kar lena."),
  };
};

const sanitizeGstRate = (value) => {
  const rate = Number(value);
  return GST_RATES.includes(rate) ? rate : 0;
};

const getApplicableGstRate = (item = {}, suggestion = null) => {
  const candidates = [
    item.suggestedGstRate,
    suggestion?.gstRate,
    item.taxSuggestion?.gstRate,
    Number(item.gst) > 0 ? item.gst : null,
  ];
  for (const candidate of candidates) {
    const rate = sanitizeGstRate(candidate);
    if (rate > 0) return rate;
  }
  return 0;
};

const getGstChoiceState = (item = {}, suggestion = null) => {
  const applicable = getApplicableGstRate(item, suggestion);
  const enabled = Number(item.gst) > 0 && applicable > 0;
  return {
    applicable,
    enabled,
    billedRate: enabled ? applicable : 0,
  };
};

const ItemEditor = ({ open, onClose, onSave, existing }) => {
  const blank = { name: "", category: "Other", price: "", unit: "pc", gst: 0, hsn: "", stock: "", icon: "box", trackStock: false };
  const [draft, setDraft] = React.useState(existing || blank);
  const [taxSuggestion, setTaxSuggestion] = React.useState(null);
  const [taxLoading, setTaxLoading] = React.useState(false);
  const [taxError, setTaxError] = React.useState("");
  const [taxAutoState, setTaxAutoState] = React.useState("");
  const [showMoreOptions, setShowMoreOptions] = React.useState(false);
  const taxOverrideRef = React.useRef(false);
  const toast = useToast();
  const taxQueryKey = React.useMemo(() => [
    String(draft.name || "").trim().toLowerCase(),
    draft.category || "",
    draft.unit || "",
    Number(draft.price) || 0,
  ].join("|"), [draft.name, draft.category, draft.unit, draft.price]);

  React.useEffect(() => {
    taxOverrideRef.current = false;
    setDraft(existing || blank);
    const savedSuggestion = existing?.taxSuggestion
      ? normalizeTaxSuggestionForUi(existing.taxSuggestion)
      : (existing?.suggestedGstRate != null || existing?.suggestedHsnSac)
        ? normalizeTaxSuggestionForUi({
            gstRate: existing.suggestedGstRate ?? existing.gst,
            hsnSac: existing.suggestedHsnSac || existing.hsn,
            confidence: existing.taxConfidence || "medium",
            source: existing.taxSource || "auto-suggested",
            reason: "Saved tax suggestion",
          })
        : null;
    setTaxSuggestion(savedSuggestion);
    setTaxError("");
    setTaxAutoState(savedSuggestion ? "Saved suggestion ready" : "");
    setShowMoreOptions(Boolean(existing?.trackStock || existing?.taxReview));
  }, [existing, open]);

  const set = React.useCallback((k, v) => {
    if (k === "gst" || k === "hsn") taxOverrideRef.current = true;
    if (["name", "category", "unit", "price"].includes(k)) {
      taxOverrideRef.current = false;
      setTaxSuggestion(null);
      setTaxError("");
      setTaxAutoState("");
    }
    setDraft(d => {
      const next = { ...d, [k]: v };
      if (["name", "category", "unit", "price"].includes(k)) {
        next.taxSource = "";
        next.taxConfidence = "";
        next.taxReview = false;
        next.taxSuggestion = null;
        next.suggestedGstRate = null;
        next.suggestedHsnSac = "";
      }
      return next;
    });
  }, []);

  const runTaxSuggest = React.useCallback(async ({ silent = false, autoApply = false } = {}) => {
    const name = draft.name.trim();
    if (!name) {
      if (!silent) toast("Pehle item name daalo", "error");
      return null;
    }
    setTaxLoading(true);
    setTaxError("");
    setTaxAutoState(autoApply ? "Smart tax rule checking..." : "Smart tax rule checking...");
    try {
      await new Promise(resolve => window.setTimeout(resolve, 120));
      const suggestion = normalizeTaxSuggestionForUi(localTaxSuggestionForItem({
        name,
        category: draft.category,
        unit: draft.unit,
        price: Number(draft.price) || 0,
      }));
      if (!suggestion) {
        setTaxSuggestion(null);
        setTaxAutoState("No saved pattern - review manually");
        if (!silent) toast("Saved pattern nahi mila; manual review karo", "error");
        return null;
      }
      const nextSuggestion = { ...suggestion, usedInternet: false, webAvailable: false, cached: false };
      setTaxSuggestion(nextSuggestion);
      const confidence = String(nextSuggestion.confidence || "").toLowerCase();
      const canAutoApply = autoApply && nextSuggestion.autoApply && !taxOverrideRef.current;
      if (canAutoApply) {
        setDraft(d => ({
          ...d,
          hsn: nextSuggestion.hsnSac || d.hsn,
          suggestedGstRate: nextSuggestion.gstRate,
          suggestedHsnSac: nextSuggestion.hsnSac,
          gstChoiceMigratedV1: true,
          taxSuggestion: {
            gstRate: nextSuggestion.gstRate,
            hsnSac: nextSuggestion.hsnSac,
            classification: nextSuggestion.classification,
            confidence: nextSuggestion.confidence,
            reason: nextSuggestion.reason,
            source: nextSuggestion.source,
          },
          taxSource: d.taxSource || "auto-suggested",
          taxConfidence: confidence,
          taxReview: false,
        }));
        setTaxAutoState("HSN ready; GST suggestion available");
      } else {
        setTaxAutoState(nextSuggestion.needsReview ? "Needs review before applying" : "Suggestion ready");
      }
      if (!silent) toast("Smart tax suggestion ready");
      return nextSuggestion;
    } catch (err) {
      const message = err?.message || "GST/HSN suggestion failed";
      setTaxError(message);
      setTaxAutoState("Tax pattern check failed");
      if (!silent) toast(message, "error");
      return null;
    } finally {
      setTaxLoading(false);
    }
  }, [draft.category, draft.name, draft.price, draft.unit, toast]);

  React.useEffect(() => {
    if (!open || !draft.name?.trim() || draft.name.trim().length < 3 || taxOverrideRef.current) return undefined;
    const timer = window.setTimeout(() => {
      runTaxSuggest({ silent: true, autoApply: false });
    }, 900);
    return () => window.clearTimeout(timer);
  }, [draft.name, open, runTaxSuggest, taxQueryKey]);

  if (!open) return null;

  const gstChoice = getGstChoiceState(draft, taxSuggestion);

  const applyTaxSuggestion = () => {
    if (!taxSuggestion?.hsnSac) return;
    taxOverrideRef.current = true;
    setDraft(d => ({
      ...d,
      hsn: taxSuggestion.hsnSac,
      suggestedHsnSac: taxSuggestion.hsnSac,
      taxSource: d.taxSource || "owner-hsn",
      taxConfidence: taxSuggestion.confidence || "medium",
      taxReview: false,
    }));
    setTaxAutoState(`HSN/SAC ${taxSuggestion.hsnSac} selected`);
    toast(`HSN/SAC ${taxSuggestion.hsnSac} selected`);
  };

  const applySuggestedGst = () => {
    const applicable = getApplicableGstRate(draft, taxSuggestion);
    if (!applicable) {
      toast("Pehle smart rule se GST rate check karo", "error");
      return;
    }
    taxOverrideRef.current = true;
    setDraft(d => ({
      ...d,
      gst: applicable,
      suggestedGstRate: applicable,
      taxSource: "owner-gst-on",
      taxConfidence: "owner",
      taxReview: false,
    }));
    setTaxAutoState(`GST ON - ${applicable}% will be billed`);
    toast(`GST ON (${applicable}%)`);
  };

  const useZeroGst = () => {
    taxOverrideRef.current = true;
    setDraft(d => ({ ...d, gst: 0, hsn: d.hsn || "", taxSource: "owner-gst-off", taxConfidence: "owner", taxReview: false }));
    setTaxAutoState("GST OFF - bill me 0%");
    toast("GST OFF (0%)");
  };

  const save = async () => {
    if (!draft.name.trim()) { toast("Name is required", "error"); return; }
    if (!draft.price || Number(draft.price) <= 0) { toast("Price must be greater than 0", "error"); return; }
    const finalApplicableGst = draft.manualGst!==undefined?Number(draft.manualGst):getApplicableGstRate(draft, taxSuggestion);
    const finalGst = Number(draft.gst) > 0 && finalApplicableGst > 0 ? finalApplicableGst : 0;
    await onSave({
      ...draft,
      id: existing?.id || uid("i"),
      price: Number(draft.price),
      gst: finalGst,
      hsn: String(draft.hsn || "").trim(),
      gstChoiceMigratedV1: true,
      taxSource: draft.taxSource || (taxOverrideRef.current ? "owner" : ""),
      taxConfidence: draft.taxConfidence || "",
      taxReview: Boolean(draft.taxReview),
      suggestedGstRate: finalApplicableGst || draft.suggestedGstRate || taxSuggestion?.gstRate || null,
      suggestedHsnSac: draft.suggestedHsnSac || taxSuggestion?.hsnSac || "",
      taxSuggestion: draft.taxSuggestion || (taxSuggestion ? {
        gstRate: taxSuggestion.gstRate,
        hsnSac: taxSuggestion.hsnSac,
        classification: taxSuggestion.classification,
        confidence: taxSuggestion.confidence,
        reason: taxSuggestion.reason,
        source: taxSuggestion.source,
      } : null),
      stock: draft.trackStock ? Number(draft.stock) || 0 : null,
    });
    onClose();
  };

  const confidence = String(taxSuggestion?.confidence || draft.taxConfidence || "").toLowerCase();
  const sourceLabel = taxSuggestion?.source === "local-rule"
    ? "Local rule"
    : taxSuggestion?.source
      ? "Saved pattern"
      : "Auto";
  const taxStatusClass = taxLoading
    ? "working"
    : taxError
      ? "error"
      : taxSuggestion?.autoApply || (draft.hsn && !draft.taxReview)
        ? "ready"
        : taxSuggestion?.needsReview
          ? "review"
          : Number(draft.gst) === 0
            ? "zero"
            : "";
  const taxStatusText = taxLoading
    ? "Smart rule checking..."
    : taxError
      ? "Tax check failed"
      : taxAutoState
        ? taxAutoState
          : draft.hsn
            ? "Tax ready"
          : "Smart GST/HSN will appear here";

  return (
    <Modal open onClose={onClose} title={existing ? "Edit Item" : "Add New Item"} width={430}
      footer={<>
        <button className="btn" onClick={onClose}>Cancel</button>
        <button className="btn primary" onClick={save}><Icon name="save" />Save Item</button>
      </>}>
      <div className="field" style={{ marginBottom: 12 }}>
        <label>Item Name <span style={{ color: "var(--danger)" }}>*</span></label>
        <input className="input" autoFocus placeholder="e.g. Color Print A4, USB Drive 32GB"
          value={draft.name} onChange={(e) => set("name", e.target.value)} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
        <div className="field">
          <label>Price (₹) <span style={{ color: "var(--danger)" }}>*</span></label>
          <input className="input mono" type="number" min="0" step="0.01" placeholder="0.00"
            value={draft.price} onChange={(e) => set("price", e.target.value)} />
        </div>
        <div className="field">
          <label>Per</label>
          <select className="select" value={draft.unit} onChange={(e) => set("unit", e.target.value)}>
            {(UNIT_PRESETS.includes(draft.unit)?UNIT_PRESETS:[draft.unit,...UNIT_PRESETS]).map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
        <div className="field">
          <label>Category</label>
          <select className="select" value={draft.category} onChange={(e) => set("category", e.target.value)}>
            {CATEGORIES.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="field tax-current-field">
          <label>Tax</label><select aria-label="Confirmed GST rate" className="select" value={draft.manualGst??draft.gst??''} onChange={e=>setDraft(d=>({...d,manualGst:e.target.value,gst:Number(e.target.value),suggestedGstRate:Number(e.target.value)}))}><option value="">Confirm GST</option>{[0,5,12,18,28].map(n=><option key={n} value={n}>{n}%</option>)}</select>
          <div className="tax-current">
            <button type="button" className={`gst-toggle ${gstChoice.enabled ? "on" : ""}`} disabled={!gstChoice.applicable} onClick={gstChoice.enabled ? useZeroGst : applySuggestedGst}>
              <span>GST {gstChoice.enabled ? "ON" : "OFF"}</span>
              <strong>{gstChoice.enabled ? `${gstChoice.applicable}%` : "0%"}</strong>
            </button>
            <span className="tax-applicable-rate">
              {gstChoice.applicable ? `Applicable ${gstChoice.applicable}% - only ON/OFF` : "Tax rate pending"}
            </span>
            <input className="input mono tax-mini-input" value={draft.hsn || ""} placeholder="HSN/SAC" onChange={(e) => set("hsn", e.target.value.replace(/[^0-9A-Za-z]/g, "").slice(0, 10))} />
          </div>
        </div>
      </div>

      <div className="tax-assist-card compact">
        <div className="tax-assist-head">
          <div>
            <strong>Smart GST / HSN</strong>
            <span>{sourceLabel} - local pattern only</span>
          </div>
          <div className="tax-assist-actions">
            <button className="btn sm" disabled={taxLoading || !draft.name.trim()} onClick={() => runTaxSuggest({ silent: false, autoApply: false })}>
              <Icon name="refresh" size={12} />{taxLoading ? "Checking..." : "Check"}
            </button>
            <button type="button" className="btn sm primary" onClick={() => setShowMoreOptions(v => !v)}>
              <Icon name="chevronDown" size={12} />Review
            </button>
          </div>
        </div>
        <div className={`tax-auto-status ${taxStatusClass}`}>
          <Icon name={taxLoading ? "refresh" : taxStatusClass === "ready" ? "check" : "info"} size={12} />
          <span>{taxStatusText}</span>
        </div>
        {taxError && <div className="cart-alert danger tax-alert"><Icon name="info" />{taxError}</div>}
        {showMoreOptions && (
        <>
        <div className="tax-choice-row single">
          <button type="button" className={`gst-toggle review ${gstChoice.enabled ? "on" : ""}`} disabled={!gstChoice.applicable} onClick={gstChoice.enabled ? useZeroGst : applySuggestedGst}>
            <span>GST {gstChoice.enabled ? "ON" : "OFF"}</span>
            <strong>{gstChoice.enabled ? `${gstChoice.applicable}%` : "0%"}</strong>
            <em>{gstChoice.applicable ? `Only 0% / ${gstChoice.applicable}%` : "Tax rate pending"}</em>
          </button>
          {taxSuggestion ? (
            <button type="button" className="tax-choice suggested" onClick={applyTaxSuggestion} disabled={!taxSuggestion.hsnSac}>
              <span>Use HSN/SAC</span><strong>{taxSuggestion.hsnSac || "Pending"}</strong>
              <em>GST rate saved separately</em>
            </button>
          ) : (
            <div className="tax-choice empty">
              <span>Smart Rule</span><strong>Auto</strong>
              <em>GST/HSN yahan aayega</em>
            </div>
          )}
        </div>
        {taxSuggestion && (
          <div className="tax-suggestion-detail">
            <div><span>Classification</span><strong>{taxSuggestion.classification || "Not sure"}</strong></div>
            <div><span>Confidence</span><strong>{taxSuggestion.confidence || "medium"}</strong></div>
            <div><span>Source</span><strong>Local</strong></div>
            <p>{taxSuggestion.reason || "Item name aur category se tax suggestion nikla."}</p>
            {taxSuggestion.warning && <small>{taxSuggestion.warning}</small>}
            {taxSuggestion.sources?.length > 0 && <small>Sources/hints: {taxSuggestion.sources.join(" · ")}</small>}
          </div>
        )}
        </>
        )}
      </div>

      {showMoreOptions && (
      <>
      <div className="tax-manual-grid">
        <div className="field">
          <label>GST Billing</label>
          <button type="button" className={`gst-toggle full ${gstChoice.enabled ? "on" : ""}`} disabled={!gstChoice.applicable} onClick={gstChoice.enabled ? useZeroGst : applySuggestedGst}>
            <span>GST {gstChoice.enabled ? "ON" : "OFF"}</span>
            <strong>{gstChoice.enabled ? `${gstChoice.applicable}%` : "0%"}</strong>
          </button>
        </div>
        <div className="field">
          <label>Manual HSN/SAC Override</label>
          <input className="input mono" value={draft.hsn || ""} placeholder="Optional code" onChange={(e) => set("hsn", e.target.value.replace(/[^0-9A-Za-z]/g, "").slice(0, 10))} />
        </div>
      </div>

      <div className="field" style={{ marginBottom: 12 }}>
        <label>Icon</label>
        <div className="preset-chips">
          {ITEM_ICONS.map(ic => (
            <button key={ic} className="preset-chip"
              style={{ padding: "6px 8px", ...(draft.icon === ic ? { background: "var(--brand)", color: "#fff", borderColor: "var(--brand)" } : {}) }}
              onClick={() => set("icon", ic)}><Icon name={ic} size={13} /></button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--border)" }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 500 }}>Track stock for this item</div>
          <div style={{ fontSize: 11, color: "var(--text-3)" }}>Enable for physical goods like USB, paper</div>
        </div>
        <Switch on={draft.trackStock} onChange={(v) => set("trackStock", v)} />
      </div>
      {draft.trackStock && (
        <div className="field" style={{ marginTop: 8 }}>
          <label>Current Stock</label>
          <input className="input mono" type="number" min="0" value={draft.stock} onChange={(e) => set("stock", e.target.value)} />
        </div>
      )}
      </>
      )}
    </Modal>
  );
};




/* ============================================================
   Billing — POS-style with user-defined items + UPI QR
   ============================================================ */

const PAYMENT_OPTIONS = [
  { id: "cash", label: "Cash", icon: "cash" },
  { id: "upi", label: "UPI", icon: "upi" },
  { id: "card", label: "Card", icon: "card" },
  { id: "partial", label: "Partial", icon: "edit" },
  { id: "pending", label: "Pay Later", icon: "udhaar" },
];

const PAYMENT_LABELS = {
  cash: "Cash",
  upi: "UPI",
  card: "Card",
  bank: "Bank",
  partial: "Partial",
  pending: "Pay Later",
};

// ---- Custom payment methods (owner-defined in Settings) ----
// Stored on profile.customPayModes: [{ id, label, color }]. The registry mirrors
// them at module level so label/color lookups work everywhere (tables, reports,
// modals) without threading settings through every component.
const CUSTOM_MODE_REGISTRY = new Map();

const registerCustomPayModes = (modes) => {
  CUSTOM_MODE_REGISTRY.clear();
  (Array.isArray(modes) ? modes : []).forEach((m) => {
    if (m?.id && m?.label) CUSTOM_MODE_REGISTRY.set(String(m.id).toLowerCase(), m);
  });
};

const normalizeCustomPayModes = (modes) => (Array.isArray(modes) ? modes : [])
  .map((m) => ({
    id: String(m?.id || "").toLowerCase(),
    label: String(m?.label || "").trim().slice(0, 18),
    color: /^#[0-9a-fA-F]{6}$/.test(String(m?.color || "")) ? m.color : "#2f8fe3",
  }))
  .filter((m) => m.id && m.label);

// Billing payment picker: built-ins + custom modes (custom ones sit before Partial/Pay Later)
const paymentOptionsForSettings = (settings) => {
  const custom = normalizeCustomPayModes(settings?.customPayModes)
    .map((m) => ({ id: m.id, label: m.label, icon: "cash", color: m.color, custom: true }));
  return [
    ...PAYMENT_OPTIONS.slice(0, 3),
    ...custom,
    ...PAYMENT_OPTIONS.slice(3),
  ];
};

const paymentModeLabel = (mode) => {if(mode==='writeoff')return 'Write-off';if(mode==='draft')return 'Draft';if(mode==='none')return 'No receipt';
  const key = String(mode || "").toLowerCase();
  return PAYMENT_LABELS[key] || CUSTOM_MODE_REGISTRY.get(key)?.label || String(mode || "—").toUpperCase();
};

const paymentModeColor = (mode) => CUSTOM_MODE_REGISTRY.get(String(mode || "").toLowerCase())?.color || null;

// Small badge that automatically tints itself with a custom method's color.
const PayModeBadge = ({ mode }) => {
  const color = paymentModeColor(mode);
  return (
    <span className="badge neutral" style={color ? {
      color,
      borderColor: `color-mix(in oklab, ${color} 45%, var(--border))`,
      background: `color-mix(in oklab, ${color} 12%, var(--surface))`,
    } : undefined}>
      {paymentModeLabel(mode)}
    </span>
  );
};

const BillingScreen = ({ items, setItems, customers, addCustomer, invoices, onSaveInvoice, initialInvoice, settings }) => {
  const toast = useToast();
  const [printKind,setPrintKind]=React.useState(null);const [printEditing,setPrintEditing]=React.useState(null);const [editingLine,setEditingLine]=React.useState(null);const saving=React.useRef(false);
  const [activeCat, setActiveCat] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const [cart, setCart] = React.useState([]);
  React.useEffect(()=>{if(!initialInvoice)return;setCart(initialInvoice.items.map(l=>({lineId:uid('resume'),itemId:l.serviceId,name:l.description,qty:Number(l.quantity),rate:Number(l.rate),gst:l.gst,hsn:l.hsn,unit:l.unit,printJob:l.printJob})));setDiscount(Number(initialInvoice.discountValue));setBillDiscountKind(initialInvoice.discountKind);},[initialInvoice?.id]);
  React.useEffect(()=>{window.shriBillDirty=cart.length>0;return()=>{window.shriBillDirty=false;};},[cart]);const [placeCode,setPlaceCode]=React.useState(settings.stateCode||"06");
  const [customer, setCustomer] = React.useState(customers.find(c=>c.id===initialInvoice?.customerId)||customers[0]);
  const [custSearch, setCustSearch] = React.useState("");
  const [showCustList, setShowCustList] = React.useState(false);
  const [paymentMode, setPaymentMode] = React.useState("cash");
  const [partialPaid, setPartialPaid] = React.useState("");const [partialMethod,setPartialMethod]=React.useState("cash");
  const [discount, setDiscount] = React.useState(0);const [billDiscountKind,setBillDiscountKind]=React.useState("fixed");
  const [showPreview, setShowPreview] = React.useState(false);
  const [savedInvoice, setSavedInvoice] = React.useState(null);
  const [savedCustomer, setSavedCustomer] = React.useState(null);
  const [showItemPicker, setShowItemPicker] = React.useState(false);
  const [showItemEditor, setShowItemEditor] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState(null);
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [showQR, setShowQR] = React.useState(false);
  const [showAddCust, setShowAddCust] = React.useState(false);
  const [newCustDraft, setNewCustDraft] = React.useState({ name: "", phone: "", gstin: "" });

  React.useEffect(() => {
    if (!customer || !customers.find(c => c.id === customer.id)) setCustomer(customers[0]);
    else setCustomer(customers.find(c => c.id === customer.id));
  }, [customers]);

  React.useEffect(() => {
    if (cart.length === 0) setCheckoutOpen(false);
  }, [cart.length]);

  const filteredItems = items.filter(it => {
    const itemName = String(it?.name || "");
    const itemCategory = String(it?.category || "");
    const itemHsn = String(it?.hsn || "");
    const q = search.trim().toLowerCase();
    if (activeCat !== "All" && itemCategory !== activeCat) return false;
    if (q && !itemName.toLowerCase().includes(q) && !itemHsn.toLowerCase().includes(q)) return false;
    return true;
  });

  const filteredCustomers = customers.filter(c => {
    const q = custSearch.trim().toLowerCase();
    if (!q) return true;
    return [c.name, c.phone, c.email, c.gstin, c.address]
      .some(v => String(v || "").toLowerCase().includes(q));
  });

  const addItem = (item) => {
    if(item.price==null||item.gst==null){setEditingItem(item);setShowItemEditor(true);toast("Confirm this item price and GST before adding it");return false;}
    setCheckoutOpen(false);
    const safeItem = {
      id: item?.id || uid("item"),
      name: String(item?.name || "Unnamed item").trim() || "Unnamed item",
      price: Math.max(0, Number(item?.price) || 0),
      gst: item?.gst == null ? "" : String(item.gst),
      hsn: String(item?.hsn || ""),
      unit: String(item?.unit || "unit"),
      category: String(item?.category || "Services"),
    };
    setCart(prev => {
      const existing = prev.find(l => l.itemId === safeItem.id);
      if (existing) return prev.map(l => l.itemId === safeItem.id ? { ...l, qty: l.qty + 1 } : l);
      return [...prev, { lineId: uid("line"), itemId: safeItem.id, name: safeItem.name, qty: 1, rate: safeItem.price, gst: safeItem.gst, hsn: safeItem.hsn, unit: safeItem.unit, category: safeItem.category }];
    });
    toast(`${safeItem.name} added to bill`);
    return true;
  };

  const updateQty = (lineId, delta) => {
    setCart(prev => prev.map(l => l.lineId === lineId ? { ...l, qty: Math.max(1, l.qty + delta) } : l));
  };
  const setQty = (lineId, q) => {
    const n = Math.max(0, Number(q) || 0);
    setCart(prev => prev.map(l => l.lineId === lineId ? { ...l, qty: n } : l));
  };
  const removeItem = (lineId) => setCart(prev => prev.filter(l => l.lineId !== lineId));

  let calculation,calculationError='';try{calculation=calculate(cart.map(l=>({description:l.name,quantity:String(l.qty),rate:String(l.rate),gst:String(l.gst),hsn:l.hsn||'',unit:l.unit||'unit',discountKind:l.discountKind||'fixed',discount:String(l.discount||'0'),printJob:l.printJob})), billDiscountKind,String(discount),placeCode!==settings.stateCode,settings.roundRupee!==false);}catch(e){if(cart.length)calculationError=e.message;}
  const subtotal=(calculation?.totals.gross||0)/100,taxableAfterDisc=(calculation?.totals.taxable||0)/100,totalGst=((calculation?.totals.cgst||0)+(calculation?.totals.sgst||0)+(calculation?.totals.igst||0))/100,cgst=(calculation?.totals.cgst||0)/100,sgst=(calculation?.totals.sgst||0)/100,roundOff=(calculation?.totals.roundOff||0)/100,grandTotal=(calculation?.totals.total||0)/100;
  // Customer's existing balance shows up so user knows what they owe BEFORE this bill
  const existingBalance = customer ? (customer.balance || 0) : 0;
  const cartQty = cart.reduce((s, l) => s + l.qty, 0);
  const cartLabel = `${cartQty} ${cartQty === 1 ? "unit" : "units"}`;

  const onItemSaved = async (item) => {
    await setItems(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) return prev.map(p => p.id === item.id ? item : p);
      return [...prev, item];
    });
    setCart(prev => prev.map(l => l.itemId === item.id ? {
      ...l,
      name: item.name,
      rate: item.price,
      gst: item.gst,
      hsn: item.hsn || "",
      unit: item.unit,
      category: item.category || l.category || "Services",
    } : l));
    toast(editingItem ? "Item updated" : "Item saved");
    setEditingItem(null);
  };

  const deleteItem = (id, e) => {
    e.stopPropagation();
    if (confirm("Delete this item from your catalog?")) {
      setItems(prev => prev.filter(p => p.id !== id));
      setCart(prev => prev.filter(l => l.itemId !== id));
      toast("Item deleted");
    }
  };

  const openItemPicker = () => {
    setSearch("");
    setActiveCat("All");
    setShowItemPicker(true);
  };

  const chooseItemForBill = (item) => {
    const added = addItem(item);
    if (added) setShowItemPicker(false);
  };

  // Save a quick customer mid-flow and assign it to this bill.
  const saveNewCustomer = async () => {
    if (!newCustDraft.name.trim()) { toast("Customer name is required", "error"); return; }
    let c;try{c=await addCustomer(newCustDraft);}catch(e){toast(e.message,"error");return;}
    setCustomer(c);
    setNewCustDraft({ name: "", phone: "", gstin: "" });
    setCustSearch("");
    setShowAddCust(false);
    toast(`Customer ${c.name} added`);
  };

  const save = async (issue=true) => {
    const isDraft=issue===false;
    if(saving.current)return;
    if(calculationError){toast(calculationError,"error");return;}
    if (cart.length === 0) {
      toast("Cart khaali hai — koi item add karo pehle", "error"); return;
    }

    const billCustomer = customer || customers[0] || { id: "c1", name: "Walk-in Customer", isWalkIn: true };

    // Walk-in pe Pay Later/partial block: no name = no track.
    if (!isDraft && (paymentMode === "pending" || paymentMode === "partial") && isWalkIn(billCustomer)) {
      toast("Pay Later / partial ke liye customer chahiye — Walk-in nahi chalega", "error");
      return;
    }

    let paid;
    let status;
    if (paymentMode === "pending") {
      paid = 0; status = "unpaid";
    } else if (paymentMode === "partial") {
      const p = Number(partialPaid) || 0;
      if (p <= 0 || p >= grandTotal) {
        toast(`Partial amount 0 se ${grandTotal} ke beech hona chahiye`, "error"); return;
      }
      paid = p; status = "partial";
    } else {
      paid = grandTotal; status = "paid";
    }

    const bill = {discountKind:billDiscountKind,isDraft,businessPlaceOfSupply:states.find(s=>s.startsWith(placeCode+" ")),businessDate:new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date()),
      id: uid("bill"),
      number: nextBillNumber(settings, invoices, new Date()),
      customerId: billCustomer.id || "c1",
      date: new Date().toISOString(),
      dueDate: new Date(Date.now() + (Number(settings.paymentTerms) || 15) * 86400000).toISOString(),
      status,
      paymentMode:paymentMode==="partial"?partialMethod:paymentMode,
      subtotal: taxableAfterDisc,
      cgst, sgst, igst: 0,
      discount,
      total: grandTotal,
      paid,
      payments: paid > 0 ? [{ id: uid("p"), date: new Date().toISOString(), amount: paid, mode: paymentMode === "partial" ? partialMethod : paymentMode, note: "" }] : [],
      items: cart.map(l => ({ itemId: l.itemId, name: l.name, qty: l.qty, rate: l.rate, gst: l.gst, hsn: l.hsn, category: l.category || "Services", amount: l.qty * l.rate,discountKind:l.discountKind||"fixed",discount:String(l.discount||"0"),unit:l.unit,printJob:l.printJob })),
    };
    let finalized;saving.current=true;try{finalized=await onSaveInvoice(bill);}catch(e){toast(e.message,"error");return;}finally{saving.current=false;}
    setSavedInvoice(finalized);
    setSavedCustomer(finalized.party||billCustomer);
    setShowPreview(true);
    setCart([]);
    setDiscount(0);
    setCheckoutOpen(false);
    setShowItemPicker(false);
    setSearch("");
    setActiveCat("All");
    setCustomer(customers[0]);
    setPaymentMode("cash");
    setPartialPaid("");
    setCustSearch("");
    const due = grandTotal - paid;
    toast(isDraft?"Draft saved; number will be assigned on issue":due > 0
      ? `Bill ${bill.number} saved — ${billCustomer.name} ka Pay Later balance ${fmtINR(due)} jud gaya`
      : `Bill ${bill.number} saved — ${fmtINR(grandTotal)} paid`);
  };

  const newBill = () => {
    setCart([]); setDiscount(0); setShowPreview(false); setSavedInvoice(null); setSavedCustomer(null);
    setCheckoutOpen(false); setShowItemPicker(false); setSearch(""); setActiveCat("All");
    setCustomer(customers[0]); setPaymentMode("cash"); setPartialPaid(""); setCustSearch("");
  };

  const savePreviewPdf = async () => {
    if (!savedInvoice) return;
    await saveInvoicePdfFromDom(savedInvoice, savedCustomer || customer, toast);
  };

  return (
    <>
      {editingLine&&<Modal open title="Edit bill item" onClose={()=>setEditingLine(null)} width={460} footer={<><button className="btn" onClick={()=>setEditingLine(null)}>Cancel</button><button className="btn primary" onClick={()=>{try{calculate([{description:editingLine.name,quantity:String(editingLine.qty),rate:String(editingLine.rate),gst:String(editingLine.gst),unit:editingLine.unit||'job',hsn:editingLine.hsn||'',discountKind:editingLine.discountKind||'fixed',discount:String(editingLine.discount||'0'),printJob:editingLine.printJob}],'fixed','0',false,false);setCart(prev=>prev.map(l=>l.lineId===editingLine.lineId?editingLine:l));setEditingLine(null);}catch(e){toast(e.message,'error');}}}>Apply to bill</button></>}><p className="hint">These changes apply to this bill.</p><div className="grid-2"><div className="field"><label>Description</label><input className="input" value={editingLine.name} onChange={e=>setEditingLine({...editingLine,name:e.target.value})}/></div><div className="field"><label>Quantity</label><input className="input" readOnly={!!editingLine.printJob} value={editingLine.qty} onChange={e=>setEditingLine({...editingLine,qty:Number(e.target.value)})}/></div><div className="field"><label>Rate ₹</label><input className="input" value={editingLine.rate} onChange={e=>setEditingLine({...editingLine,rate:e.target.value})}/></div><div className="field"><label>GST %</label><input className="input" value={editingLine.gst} onChange={e=>setEditingLine({...editingLine,gst:e.target.value})}/></div><div className="field"><label>Item discount</label><input className="input" value={editingLine.discount||'0'} onChange={e=>setEditingLine({...editingLine,discount:e.target.value})}/><select className="select" value={editingLine.discountKind||'fixed'} onChange={e=>setEditingLine({...editingLine,discountKind:e.target.value})}><option value="fixed">₹</option><option value="percent">%</option></select></div><div className="field"><label>HSN / SAC</label><input className="input" maxLength={12} value={editingLine.hsn||''} onChange={e=>setEditingLine({...editingLine,hsn:e.target.value})}/></div></div></Modal>}
      {printKind&&<PrintJobForm kind={printKind} line={printEditing?(()=>{const l=cart.find(x=>x.lineId===printEditing);return {description:l.name,quantity:String(l.qty),rate:String(l.rate),gst:String(l.gst),unit:l.unit,hsn:l.hsn,discountKind:'fixed',discount:'0',printJob:l.printJob};})():undefined} onClose={()=>{setPrintKind(null);setPrintEditing(null);}} onSave={line=>{const next={lineId:printEditing||uid('print'),name:line.description,qty:Number(line.quantity),rate:Number(line.rate),gst:line.gst,hsn:line.hsn,unit:line.unit,printJob:line.printJob};setCart(prev=>printEditing?prev.map(l=>l.lineId===printEditing?next:l):[...prev,next]);setPrintKind(null);setPrintEditing(null);}}/>}
      <div className="pos-layout">
        <div className="pos-catalog bill-builder">
          <div className="bill-builder-head">
            <div>
              <div className="eyebrow">Step 1</div>
              <h3>Select services for this customer</h3>
              <p>Add every print, copy, form, scan or custom service before moving to payment.</p>
            </div>
            <button className="btn primary" onClick={openItemPicker}>
              <Icon name="inventory" />Select Items
            </button>
          </div>

          <div className="bill-builder-actions"><button className="btn" onClick={()=>setPrintKind("flex")}>Flex calculator</button><button className="btn" onClick={()=>setPrintKind("cards")}>Visiting cards</button>
            <button className="btn" onClick={openItemPicker}><Icon name="plus" />Select from catalog</button>
            <button className="btn" onClick={() => { setEditingItem(null); setShowItemEditor(true); }}><Icon name="edit" />Create new item</button>
          </div>

          <div className="bill-builder-body">
            {cart.length === 0 ? (
              <div className="bill-empty-state">
                <div className="ic"><Icon name="pos" size={24} /></div>
                <h4>No item selected yet</h4>
                <p>Click Select Items, choose one or many services, then continue to payment from the bill panel.</p>
                <button className="btn primary" onClick={openItemPicker}>
                  <Icon name="inventory" />Select Items
                </button>
              </div>
            ) : (
              <div className="selected-service-list">
                <div className="selected-service-head">
                  <span>{cart.length} service{cart.length === 1 ? "" : "s"} selected</span>
                  <button className="btn sm" onClick={openItemPicker}><Icon name="plus" />Add more</button>
                </div>
                {cart.map((l, index) => (
                  <div className="selected-service-row" key={l.lineId}>
                    <div className="serial">{index + 1}</div>
                    <div>
                      <div className="nm">{l.name}</div>
                      <div className="meta">{l.qty} × {fmtINR(l.rate)} {rateUnitLabel(l.unit)}</div>
                    </div>
                    <strong className="mono">{fmtINR(l.qty * l.rate)}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pos-cart">
          {/* Customer picker */}
          <div className="cart-customer combobox">
            <div className="input-group" style={{ flex: 1 }}>
              <Icon name="user" className="icon" />
              <input className="input" placeholder="Customer (Walk-in by default)…"
                value={custSearch !== "" ? custSearch : customer?.name || ""}
                onChange={(e) => { setCustSearch(e.target.value); setShowCustList(true); }}
                onFocus={() => { setCustSearch(""); setShowCustList(true); }}
                onBlur={() => setTimeout(() => { setShowCustList(false); setCustSearch(""); }, 150)} />
            </div>
            <button className="btn sm" onClick={() => setShowAddCust(true)} title="Add new customer">
              <Icon name="plus" size={13} />
            </button>
            {showCustList && (
              <div className="combobox-results" style={{ top: 44, left: 0, right: 44 }}>
                {filteredCustomers.length === 0 ? (
                  <div className="combobox-item">
                    <div className="nm">No matches</div>
                    <div className="meta">Click + to add a new customer</div>
                  </div>
                ) : filteredCustomers.slice(0, 8).map(c => (
                  <div key={c.id} className="combobox-item" onMouseDown={() => { setCustomer(c); setShowCustList(false); setCustSearch(""); }}>
                    <div className="nm">
                      {c.name} {c.isWalkIn && <span style={{ color: "var(--text-4)", fontSize: 11, fontWeight: 400 }}>· walk-in</span>}
                    </div>
                    <div className="meta">
                      {c.phone && c.phone !== "—" ? c.phone : "no phone"}
                      {c.balance > 0 && <span style={{ color: "var(--warning)", marginLeft: 8 }}>· udhaar {fmtINR(c.balance)}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Existing balance warning if customer has prior udhaar */}
          {customer && !customer.isWalkIn && existingBalance > 0 && (
            <div style={{
              margin: "8px 14px 0", padding: "8px 12px",
              background: "color-mix(in oklab, var(--warning) 12%, transparent)",
              border: "1px solid color-mix(in oklab, var(--warning) 30%, transparent)",
              borderRadius: 8, fontSize: 12.5, color: "var(--text-2)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <Icon name="udhaar" size={14} style={{ color: "var(--warning)" }} />
              <div>
                <strong style={{ color: "var(--text)" }}>{customer.name}</strong> ka pehle se {fmtINR(existingBalance)} udhaar hai
              </div>
            </div>
          )}

          {/* Cart */}
          {cart.length === 0 ? (
            <div className="empty" style={{ flex: 1 }}>
              <Icon name="pos" size={32} />
              <h4>No services selected</h4>
              <p>Select Items se customer ke saare kaam ek bill me add karo.</p>
              <button className="btn primary" style={{ marginTop: 12 }} onClick={openItemPicker}>
                <Icon name="inventory" />Select Items
              </button>
            </div>
          ) : (
            <>
              <div className="cart-order-head">
                <div>
                  <div className="eyebrow">Current bill</div>
                  <h3>{cartLabel}</h3>
                </div>
                <div className="cart-order-total">
                  <span>Total</span>
                  <strong>{fmtINR(grandTotal)}</strong>
                </div>
              </div>

              <div className="cart-lines">
                {cart.map(l => (
                  <div key={l.lineId} className="cart-line professional">
                    <div className="cart-line-main">
                      <div>
                        <div className="nm">{l.name}</div>
                        <div className="meta">{fmtINR(l.rate)} {rateUnitLabel(l.unit)} · GST {l.gst}%</div>
                      </div>
                      <div className="line-total mono">{fmtINR(l.qty * l.rate)}</div>
                    </div>

                    <div className="cart-line-editor">
                      {l.printJob&&<button className="btn sm" onClick={()=>{setPrintEditing(l.lineId);setPrintKind(l.printJob.kind);}}>Edit dimensions</button>}<button className="btn sm" onClick={()=>setEditingLine({...l})}>Edit bill item</button><div className="qty-control" aria-label={`Quantity for ${l.name}`}>
                        <button disabled={!!l.printJob} type="button" onClick={() => updateQty(l.lineId, -1)}><Icon name="minus" size={13} /></button>
                        <input readOnly={!!l.printJob} className="mono" value={l.qty} inputMode="numeric" onChange={(e) => setQty(l.lineId, e.target.value)} />
                        <button disabled={!!l.printJob} type="button" onClick={() => updateQty(l.lineId, 1)}><Icon name="plus" size={13} /></button>
                      </div>
                      <div className="quick-qty">
                        {[1, 5, 10].map(n => (
                          <button disabled={!!l.printJob} key={n} type="button" onClick={() => updateQty(l.lineId, n)}>+{n}</button>
                        ))}
                      </div>
                      <button className="remove-line" type="button" onClick={() => removeItem(l.lineId)} title="Remove item">
                        <Icon name="trash" size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {!checkoutOpen ? (
                <div className="cart-next-step">
                  <div>
                    <span>Selected total</span>
                    <strong className="mono">{fmtINR(grandTotal)}</strong>
                  </div>
                  <div className="cart-next-actions">
                    <button className="btn" onClick={openItemPicker}><Icon name="plus" />Add more</button>
                    <button className="btn primary" onClick={() => setCheckoutOpen(true)}><Icon name="arrowRight" />Continue to Payment</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="checkout-panel">
                    <div className="discount-row"><select className="select" aria-label="Bill discount type" style={{width:65}} value={billDiscountKind} onChange={e=>setBillDiscountKind(e.target.value)}><option value="fixed">₹</option><option value="percent">%</option></select>
                      <label>Discount</label>
                      <div className="discount-input">
                        <span>₹</span>
                        <input className="mono" type="number" min="0" max={subtotal} value={discount}
                          onChange={(e) => setDiscount(Math.max(0, Math.min(subtotal, Number(e.target.value) || 0)))} />
                      </div>
                    </div>

                    <div className="bill-summary">
                      <div className="row"><span>Subtotal</span><span className="mono">{fmtINR(subtotal)}</span></div>
                      {discount > 0 && <div className="row danger"><span>Discount</span><span className="mono">-{fmtINR(discount)}</span></div>}
                      <div className="row"><span>GST</span><span className="mono">{fmtINR(totalGst)}</span></div>
                      {Math.abs(roundOff) > 0.001 && <div className="row"><span>Round off</span><span className="mono">{roundOff > 0 ? "+" : ""}{fmtINR(roundOff)}</span></div>}
                      <div className="row grand"><span>Amount payable</span><span className="mono">{fmtINR(grandTotal)}</span></div>
                    </div>

                    {calculationError&&<div className="cart-alert danger">{calculationError}</div>}<div className="field"><label>Place of supply</label><select className="select" aria-label="Place of supply" value={placeCode} onChange={e=>setPlaceCode(e.target.value)}>{states.map(s=><option value={s.slice(0,2)} key={s}>{s.slice(3)}</option>)}</select></div><div className="payment-section">
                      <div className="section-label">Payment mode</div>
                      <div className="pay-grid">
                        {paymentOptionsForSettings(settings).map(p => (
                          <button key={p.id}
                            className={`pay-pick ${paymentMode === p.id ? "active" : ""} ${p.custom ? "custom" : ""}`}
                            style={p.custom ? { "--pm-color": p.color } : undefined}
                            onClick={() => setPaymentMode(p.id)}>
                            {p.custom
                              ? <span className="pm-dot" style={{ background: paymentMode === p.id ? "#fff" : p.color }} />
                              : <Icon name={p.icon} />}
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {paymentMode === "partial" && (
                    <div className="payment-note"><select className="select" aria-label="Partial payment method" value={partialMethod} onChange={e=>setPartialMethod(e.target.value)}><option value="cash">Cash</option><option value="upi">UPI</option><option value="card">Card</option></select>
                      <label style={{ display: "block", fontSize: 11.5, color: "var(--text-3)", marginBottom: 4, fontWeight: 500 }}>
                        Aaj kitna mila? (Total {fmtINR(grandTotal)})
                      </label>
                      <input className="input mono" type="number" min="1" max={grandTotal - 1} step="1"
                        placeholder="Aaj ka cash/UPI amount"
                        value={partialPaid} onChange={(e) => setPartialPaid(e.target.value)} />
                      {Number(partialPaid) > 0 && Number(partialPaid) < grandTotal && (
                        <div style={{ marginTop: 6, fontSize: 12, color: "var(--text-3)" }}>
                          Pay Later balance: <strong style={{ color: "var(--warning)" }}>{fmtINR(grandTotal - Number(partialPaid))}</strong>
                        </div>
                      )}
                    </div>
                  )}

                  {(paymentMode === "pending" || paymentMode === "partial") && isWalkIn(customer) && (
                    <div className="cart-alert danger">
                      <Icon name="info" size={14} />
                      Pay Later ke liye customer add karo — Walk-in pe credit nahi chalega
                    </div>
                  )}

                  {paymentMode === "upi" && (
                    <div className="upi-strip">
                      <Icon name="upi" size={14} style={{ color: "var(--brand)" }} />
                      <div style={{ flex: 1, fontSize: 12 }}>
                        <div style={{ fontWeight: 500 }}>Pay to: <span className="mono">{settings.upiId}</span></div>
                        <div style={{ color: "var(--text-3)", fontSize: 11 }}>{settings.shopName}</div>
                      </div>
                      
                    </div>
                  )}

                  <div className="cart-actions"><button className="btn" onClick={()=>save(false)}>Keep draft</button>
                    <button className="btn ghost" onClick={() => setCheckoutOpen(false)}>Back</button>
                    <button className="btn primary" onClick={save}><Icon name="check" />Save & Print Invoice</button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {showItemPicker && (
        <Modal open onClose={() => setShowItemPicker(false)} title="Select Items for Bill" width={860}
          footer={<>
            <button className="btn" onClick={() => { setEditingItem(null); setShowItemEditor(true); }}><Icon name="plus" />Create Item</button>
            <button className="btn primary" onClick={() => setShowItemPicker(false)}><Icon name="check" />Done</button>
          </>}>
          <div className="item-picker-shell">
            <div className="item-picker-toolbar">
              <div className="input-group">
                <Icon name="search" className="icon" />
                <input className="input" autoFocus placeholder="Search item name, service or HSN..."
                  value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <button className="btn" onClick={() => { setEditingItem(null); setShowItemEditor(true); }}>
                <Icon name="plus" />New Item
              </button>
            </div>

            {items.length > 0 && (
              <div className="cat-tabs picker-tabs">
                {CATEGORIES.map(c => (
                  <button key={c} className={`cat-tab ${activeCat === c ? "active" : ""}`} onClick={() => setActiveCat(c)}>{c}</button>
                ))}
              </div>
            )}

            <div className="item-picker-list">
              {items.length === 0 ? (
                <div className="empty">
                  <Icon name="inventory" size={34} />
                  <h4>No saved items</h4>
                  <p>Add your own services first. Rates stay editable; GST/HSN can be filled by local rules.</p>
                  <button className="btn primary" style={{ marginTop: 10 }} onClick={() => { setEditingItem(null); setShowItemEditor(true); }}>
                    <Icon name="plus" />Add First Item
                  </button>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="empty">
                  <Icon name="search" size={34} />
                  <h4>No matching item</h4>
                  <p>Search another word or create a new custom item.</p>
                </div>
              ) : filteredItems.map((it, index) => {
                const itemKey = it.id || `item-${index}`;
                const itemName = String(it.name || "Unnamed item").trim() || "Unnamed item";
                const itemCategory = String(it.category || "General");
                const itemPrice = Math.max(0, Number(it.price) || 0);
                const itemGst = Math.max(0, Number(it.gst) || 0);
                const itemUnit = String(it.unit || "unit");
                const itemHsn = String(it.hsn || "");
                const selectedQty = cart
                  .filter(l => l.itemId === it.id)
                  .reduce((s, l) => s + l.qty, 0);
                return (
                  <div key={itemKey}
                    className={`item-picker-row ${selectedQty > 0 ? "selected" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Add ${itemName} to current bill`}
                    onClick={() => chooseItemForBill(it)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        chooseItemForBill(it);
                      }
                    }}>
                    <div className="item-picker-icon"><Icon name={it.icon || "box"} size={16} /></div>
                    <div className="item-picker-main">
                      <div className="nm">{itemName}</div>
                      <div className="meta">{itemCategory} · {fmtINR(itemPrice)} {rateUnitLabel(itemUnit)} · GST {itemGst}%{itemHsn ? ` · HSN ${itemHsn}` : ""}</div>
                    </div>
                    {selectedQty > 0 && <span className="selected-pill">{selectedQty} selected</span>}
                    <button type="button" className="btn sm" onClick={(e) => { e.stopPropagation(); setEditingItem(it); setShowItemEditor(true); }}><Icon name="edit" />Edit</button>
                    <button className="icon-btn" title="Delete item" onClick={(e) => deleteItem(it.id, e)}><Icon name="trash" size={14} /></button>
                    <button type="button" className="btn primary sm" onClick={(e) => { e.stopPropagation(); chooseItemForBill(it); }}><Icon name="plus" />Add</button>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      )}

      <ItemEditor open={showItemEditor} onClose={() => { setShowItemEditor(false); setEditingItem(null); }}
        onSave={onItemSaved} existing={editingItem} />

      {showPreview && savedInvoice && (
        <Modal open onClose={() => setShowPreview(false)} title={`Invoice ${savedInvoice.number}`} width={780}
          footer={<>
            <button className="btn" onClick={() => setShowPreview(false)}>Close</button>
            <button className="btn" onClick={newBill}><Icon name="plus" />New Bill</button>
            <button className="btn" onClick={savePreviewPdf}><Icon name="download" />Save PDF</button>
            <button className="btn primary" onClick={() => window.billing.document({id:(typeof savedInvoice!=="undefined"?savedInvoice:typeof selected!=="undefined"?selected:null)?.id,action:"print"}).then(message=>message&&toast(message,String(message).toLowerCase().includes("no printer"))).catch(e=>toast(e.message,"error"))}><Icon name="print" />Print</button>
          </>}>
          <InvoicePreview invoice={savedInvoice} customer={savedCustomer || customer} settings={settings} />
        </Modal>
      )}

      {showQR && (
        <Modal open onClose={() => setShowQR(false)} title="UPI Payment" width={360}
          footer={<button className="btn primary" onClick={() => setShowQR(false)}>Done</button>}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 4 }}>Scan to pay</div>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, fontVariantNumeric: "tabular-nums" }}>{fmtINR(grandTotal)}</div>
            <div className="qr-box">
              
            </div>
            <div style={{ marginTop: 14, fontSize: 13 }}>
              <div style={{ fontWeight: 600 }}>{settings.shopName}</div>
            </div>
            <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-3)" }}>
              Works with PhonePe, Google Pay, Paytm, BHIM and any UPI app
            </div>
          </div>
        </Modal>
      )}

      {/* Add customer from billing */}
      {showAddCust && (
        <Modal open onClose={() => setShowAddCust(false)} title="Add Customer" width={420}
          footer={<>
            <button className="btn" onClick={() => setShowAddCust(false)}>Cancel</button>
            <button className="btn primary" onClick={saveNewCustomer}><Icon name="check" />Save & Use</button>
          </>}>
          <div className="form-grid single">
            <div className="field">
              <label>Name</label>
              <input className="input" autoFocus placeholder="Customer name"
                value={newCustDraft.name} onChange={(e) => setNewCustDraft(d => ({ ...d, name: e.target.value }))} />
            </div>
            <div className="field">
              <label>Phone</label>
              <input className="input mono" placeholder="Mobile number"
                value={newCustDraft.phone} onChange={(e) => setNewCustDraft(d => ({ ...d, phone: e.target.value }))} />
            </div>
            <div className="field">
              <label>GSTIN</label>
              <input className="input mono" placeholder="Optional"
                value={newCustDraft.gstin} onChange={(e) => setNewCustDraft(d => ({ ...d, gstin: e.target.value.toUpperCase() }))} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

// Convert a positive integer ≤ 99,99,99,999 into Indian-style words for "rupees and paise"
const numberToIndianWords = (n) => {
  const ones = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE",
    "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"];
  const tens = ["", "", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"];
  const twoDigit = (num) => num < 20 ? ones[num] : `${tens[Math.floor(num / 10)]}${num % 10 ? " " + ones[num % 10] : ""}`;
  const threeDigit = (num) => {
    const h = Math.floor(num / 100), r = num % 100;
    return (h ? `${ones[h]} HUNDRED${r ? " " : ""}` : "") + (r ? twoDigit(r) : "");
  };
  if (n === 0) return "ZERO";
  let res = "";
  const crore = Math.floor(n / 10000000); n %= 10000000;
  const lakh = Math.floor(n / 100000); n %= 100000;
  const thousand = Math.floor(n / 1000); n %= 1000;
  const rest = n;
  if (crore) res += `${twoDigit(crore)} CRORE `;
  if (lakh) res += `${twoDigit(lakh)} LAKH `;
  if (thousand) res += `${twoDigit(thousand)} THOUSAND `;
  if (rest) res += threeDigit(rest);
  return res.trim();
};

const amountInWords = (amount) => {
  const rupees = Math.floor(amount);
  const paise = Math.round((amount - rupees) * 100);
  let str = `${numberToIndianWords(rupees)} RUPEES`;
  if (paise > 0) str += ` AND ${numberToIndianWords(paise)} PAISE`;
  return str + " ONLY";
};

const InvoicePreview = ({ invoice, customer, settings }) => {if(invoice._raw){const b=invoice._raw.business;settings={...settings,...b.originalUi,shopName:b.businessName,address:b.address,phone:b.phone,email:b.email,gstin:b.gstin,pan:b.pan,upiId:b.upi,state:b.state.slice(3),stateCode:b.state.slice(0,2),footerNote:b.terms};customer=invoice.party||customer;}
  const placeOfSupplyState = invoice._raw?.placeOfSupply.slice(3)||customer?.state||settings.state;
  const placeOfSupplyCode = customer?.stateCode || settings.stateCode;
  const showCgstSgst = invoice._raw?invoice._raw.placeOfSupply===invoice._raw.business.state:(!customer?.stateCode||customer.stateCode===settings.stateCode);
  const dueAmount = invoiceOutstanding(invoice);
  const qrAmount = dueAmount > 0 ? dueAmount : invoice.total;
  const initials = ((settings.shopName || "").trim() || "—").split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="invoice-preview refrens" data-invoice-id={invoice.id}>
      {/* Header: Invoice title left, Logo right */}
      <div className="rf-top">
        <div className="rf-title-block">{invoice.writtenOff>0&&<p>Written off: {fmtINR(invoice.writtenOff)} · No cash receipt</p>}
          <h1 className="rf-title">{invoice._raw?.status==='draft'?'Draft invoice':'Invoice'}</h1>
          <div className="rf-meta-rows">
            <div className="rf-meta-row"><span className="lbl">Invoice No</span><span className="val mono">{invoice.number}</span></div>
            <div className="rf-meta-row"><span className="lbl">Invoice Date</span><span className="val">{fmtDate(invoice.date)}</span></div>
            {invoice.dueDate && (
              <div className="rf-meta-row"><span className="lbl">Due Date</span><span className="val">{fmtDate(invoice.dueDate)}</span></div>
            )}
          </div>
        </div>
        <div className={`rf-logo ${settings.shopLogo ? "has-image" : ""}`}>
          {settings.shopLogo ? <img src={settings.shopLogo} alt={`${settings.shopName || "Shop"} logo`} /> : initials}
        </div>
      </div>

      {/* Billed By + Billed To cards */}
      <div className="rf-parties">
        <div className="rf-party">
          <div className="rf-party-title">Billed By</div>
          <div className="rf-party-name">{settings.shopName}</div>
          {settings.address && <div className="rf-party-addr">{settings.address}</div>}
          {(settings.state || settings.stateCode) && (
            <div className="rf-party-addr">{settings.state}{settings.stateCode ? `, India` : ""}</div>
          )}
          {settings.gstin && <div className="rf-party-line"><b>GSTIN:</b> <span className="mono">{settings.gstin}</span></div>}
          {settings.pan && <div className="rf-party-line"><b>PAN:</b> <span className="mono">{settings.pan}</span></div>}
        </div>
        <div className="rf-party">
          <div className="rf-party-title">Billed To</div>
          <div className="rf-party-name">{customer?.name || "Walk-in Customer"}</div>
          {customer?.address && <div className="rf-party-addr">{customer.address}</div>}
          {customer && !customer.isWalkIn && <div className="rf-party-addr">India</div>}
          {customer?.phone && customer.phone !== "—" && <div className="rf-party-line">{customer.phone}</div>}
          {customer?.email && <div className="rf-party-line">{customer.email}</div>}
          {customer?.gstin && <div className="rf-party-line"><b>GSTIN:</b> <span className="mono">{customer.gstin}</span></div>}
        </div>
      </div>

      {/* Country / Place of Supply */}
      <div className="rf-supply">
        <div><b>Country of Supply:</b> India</div>
        <div><b>Place of Supply:</b> {placeOfSupplyState}{placeOfSupplyCode ? ` (${placeOfSupplyCode})` : ""}</div>
      </div>

      {/* Items table */}
      <table className="rf-table">
        <thead>
          <tr>
            <th style={{ width: 26 }}></th>
            <th>Item</th>
            <th className="num" style={{ width: 60 }}>GST<br />Rate</th>
            <th className="num" style={{ width: 70 }}>Quantity</th>
            <th className="num" style={{ width: 70 }}>Rate</th>
            <th className="num" style={{ width: 80 }}>Amount</th>
            {showCgstSgst ? (<>
              <th className="num" style={{ width: 70 }}>CGST</th>
              <th className="num" style={{ width: 70 }}>SGST</th>
            </>) : (
              <th className="num" style={{ width: 80 }}>IGST</th>
            )}
            <th className="num" style={{ width: 80 }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((li, i) => {
            const cgst = li.cgst??0;
            const sgst = li.sgst??0;
            const igst = li.igst??0;
            const lineTotal = li.total??(li.amount+cgst+sgst+igst);
            return (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td className="rf-item-cell">{li.name.toUpperCase()}{li.printJob&&<span className="rf-hsn">{printJobDetails(li.printJob)}</span>}{li.hsn && <span className="rf-hsn">HSN: {li.hsn}</span>}</td>
                <td className="num">{li.gst}%</td>
                <td className="num">{li.qty}</td>
                <td className="num">₹{fmtINR(li.rate, { noSymbol: true })}</td>
                <td className="num">₹{fmtINR(li.amount, { noSymbol: true })}</td>
                {showCgstSgst ? (<>
                  <td className="num">₹{fmtINR(cgst, { noSymbol: true })}</td>
                  <td className="num">₹{fmtINR(sgst, { noSymbol: true })}</td>
                </>) : (
                  <td className="num">₹{fmtINR(igst, { noSymbol: true })}</td>
                )}
                <td className="num">₹{fmtINR(lineTotal, { noSymbol: true })}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Bottom: words + UPI on left, totals on right */}
      <div className="rf-bottom">
        <div className="rf-bottom-left">
          <div className="rf-words">
            <b>Total (in words) :</b> {amountInWords(invoice.total)}
          </div>
          {settings.upiId && (
            <div className="rf-upi">
              <div className="rf-upi-title">Scan to pay via UPI</div>
              <div className="rf-upi-hint">Maximum of 1 lakh can be transferred via upi in a single day</div>
              <div className="rf-upi-qr">
                
              </div>
            </div>
          )}
        </div>
        <div className="rf-bottom-right">
          <div className="rf-tot-row"><span>Amount</span><span>₹{fmtINR(invoice.subtotal, { noSymbol: true })}</span></div>
          {showCgstSgst ? (<>
            <div className="rf-tot-row"><span>CGST</span><span>₹{fmtINR(invoice.cgst, { noSymbol: true })}</span></div>
            <div className="rf-tot-row"><span>SGST</span><span>₹{fmtINR(invoice.sgst, { noSymbol: true })}</span></div>
          </>) : (
            <div className="rf-tot-row"><span>IGST</span><span>₹{fmtINR(invoice.igst || 0, { noSymbol: true })}</span></div>
          )}
          {invoice.discount > 0 && (
            <div className="rf-tot-row"><span>Discounts</span><span>−₹{fmtINR(invoice.discount, { noSymbol: true })}</span></div>
          )}
          <div className="rf-tot-grand">
            <span>Total (INR)</span><span>₹{fmtINR(invoice.total, { noSymbol: true })}</span>
          </div>
          {invoice.paid > 0 && (
            <div className="rf-tot-row" style={{ color: "var(--success)" }}><span>Paid</span><span>₹{fmtINR(invoice.paid, { noSymbol: true })}</span></div>
          )}
          {(invoice.total - invoice.paid) > 0 && (
            <div className="rf-tot-row" style={{ color: "var(--warning)", fontWeight: 600 }}>
              <span>Balance Due</span><span>₹{fmtINR(invoice.total - invoice.paid, { noSymbol: true })}</span>
            </div>
          )}
        </div>
      </div>

      {/* Terms */}
      {settings.footerNote && (
        <div className="rf-terms">
          <div className="rf-terms-title">Terms and Conditions</div>
          <div className="rf-terms-body">
            {settings.footerNote.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      )}

      {/* Footer strip */}
      <div className="rf-footer">
        <div><div className="lbl">Invoice No</div><div className="val mono">{invoice.number}</div></div>
        <div><div className="lbl">Invoice Date</div><div className="val">{fmtDate(invoice.date)}</div></div>
        <div><div className="lbl">Billed To</div><div className="val">{(customer?.name || "Walk-in Customer").toUpperCase()}</div></div>
      </div>
      <div className="rf-foot-note">This is an electronically generated document, no signature is required.</div>
    </div>
  );
};




/* ============================================================
   Daily Log — quick entry, day-by-day record
   ============================================================ */

const DailyLog = ({ entries, setEntries, items, settings, payments=[] }) => {
  const toast = useToast();
  const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split("T")[0]);
  const [quickItem, setQuickItem] = React.useState("");
  const [quickQty, setQuickQty] = React.useState(1);
  const [quickPrice, setQuickPrice] = React.useState("");
  const [quickMode, setQuickMode] = React.useState("cash");const [quickGst,setQuickGst]=React.useState("");
  const [showItemPicker, setShowItemPicker] = React.useState(false);

  const dayEntries = entries.filter(e => e.date.split("T")[0] === selectedDate)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const dayTotal = dayEntries.reduce((s, e) => s + e.amount, 0);
  const dayCash = payments.filter(p=>p.date.slice(0,10)===selectedDate&&p.mode==="cash").reduce((sum,p)=>sum+p.amount,0);
  const dayUpi = payments.filter(p=>p.date.slice(0,10)===selectedDate&&p.mode==="upi").reduce((sum,p)=>sum+p.amount,0);
  const dayCard = payments.filter(p=>p.date.slice(0,10)===selectedDate&&p.mode==="card").reduce((sum,p)=>sum+p.amount,0);

  const addEntry = async () => {
    if(quickGst===""){toast("Confirm GST for this sale","error");return;}
    if (!quickItem.trim()) { toast("Enter what was sold", "error"); return; }
    if (!quickPrice || Number(quickPrice) <= 0) { toast("Enter price", "error"); return; }
    const now = new Date(selectedDate + "T" + new Date().toTimeString().split(" ")[0]);
    const entry = {
      id: uid("l"),
      date: now.toISOString(),
      itemName: quickItem.trim(),
      qty: Number(quickQty) || 1,
      rate: Number(quickPrice),
      amount: (Number(quickQty) || 1) * Number(quickPrice),
      mode: quickMode,gst:quickGst,businessDate:selectedDate,
    };
    try{await setEntries(prev=>[entry,...prev]);}catch(e){toast(e.message,"error");return;}
    setQuickItem(""); setQuickQty(1); setQuickPrice("");
    toast(`${entry.itemName} added — ${fmtINR(entry.amount)}`);
  };

  const removeEntry = (id) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const pickItem = (item) => {
    setQuickItem(item.name);
    setQuickPrice(item.price);setQuickGst(item.gst==null?"":String(item.gst));
    setShowItemPicker(false);
  };

  const dayLabel = (d) => {
    const today = new Date().toISOString().split("T")[0];
    const yest = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    if (d === today) return "Today";
    if (d === yest) return "Yesterday";
    return new Date(d).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  };

  // generate last 7 dates
  const recentDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - i);
    return d.toISOString().split("T")[0];
  });

  const onKey = (e) => { if (e.key === "Enter") addEntry(); };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Daily Log</h2>
          <div className="sub">Quick entry log — record every sale as it happens</div>
        </div>
        <div className="actions">
          <input type="date" className="input" style={{ width: 150 }}
            value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>
      </div>

      <div className="day-picker mb-12" style={{ display: "inline-flex" }}>
        {recentDates.reverse().map(d => (
          <button key={d} className={selectedDate === d ? "active" : ""} onClick={() => setSelectedDate(d)}>
            {dayLabel(d)}
          </button>
        ))}
      </div>

      <div className="day-summary">
        <div className="tile"><div className="l">Day Total</div><div className="v">{fmtINR(dayTotal)}</div></div>
        <div className="tile"><div className="l">Cash</div><div className="v" style={{ color: "var(--success)" }}>{fmtINR(dayCash)}</div></div>
        <div className="tile"><div className="l">UPI</div><div className="v" style={{ color: "var(--brand)" }}>{fmtINR(dayUpi)}</div></div>
        <div className="tile"><div className="l">Card</div><div className="v" style={{ color: "#7c3aed" }}>{fmtINR(dayCard)}</div></div>
      </div>

      {/* Quick entry bar */}
      <div className="log-entry-bar combobox"><div className="field"><label>GST</label><select className="select" aria-label="Quick sale GST" value={quickGst} onChange={e=>setQuickGst(e.target.value)}><option value="">Confirm GST</option>{[0,5,12,18,28].map(n=><option key={n} value={n}>{n}%</option>)}</select></div>
        <div className="field" style={{ position: "relative" }}>
          <label>Item / Service</label>
          <input className="input" placeholder="Type or pick a saved item…"
            value={quickItem}
            onChange={(e) => { setQuickItem(e.target.value); setShowItemPicker(true); }}
            onFocus={() => setShowItemPicker(true)}
            onBlur={() => setTimeout(() => setShowItemPicker(false), 150)}
            onKeyDown={onKey} />
          {showItemPicker && items.length > 0 && (
            <div className="combobox-results" style={{ top: 60 }}>
              {items.filter(it => !quickItem || it.name.toLowerCase().includes(quickItem.toLowerCase())).slice(0, 6).map(it => (
                <div key={it.id} className="combobox-item" onMouseDown={() => pickItem(it)}>
                  <div className="nm">{it.name}</div>
                  <div className="meta">₹{it.price} / {it.unit} · {it.category}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="field">
          <label>Qty</label>
          <input className="input mono" type="number" min="1" value={quickQty}
            onChange={(e) => setQuickQty(e.target.value)} onKeyDown={onKey} />
        </div>
        <div className="field">
          <label>Price (₹)</label>
          <input className="input mono" type="number" min="0" step="0.01" placeholder="0.00"
            value={quickPrice} onChange={(e) => setQuickPrice(e.target.value)} onKeyDown={onKey} />
        </div>
        <div className="field">
          <label>Payment</label>
          <select className="select" value={quickMode} onChange={(e) => setQuickMode(e.target.value)}>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
            {[...CUSTOM_MODE_REGISTRY.values()].map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
        </div>
        <button className="add-btn" onClick={addEntry} title="Add entry (Enter)"><Icon name="plus" size={16} /></button>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>{dayLabel(selectedDate)} — {dayEntries.length} {dayEntries.length === 1 ? "entry" : "entries"}</h3>
          <span className="meta">{new Date(selectedDate).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        {dayEntries.length === 0 ? (
          <div className="empty">
            <Icon name="history" size={36} />
            <h4>No entries yet</h4>
            <p>Use the bar above to log your first sale of the day.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="data">
              <thead><tr>
                <th style={{ width: 70 }}>Time</th>
                <th>Item</th>
                <th className="num">Qty</th>
                <th className="num">Rate</th>
                <th>Mode</th>
                <th className="num">Amount</th>
                <th></th>
              </tr></thead>
              <tbody>
                {dayEntries.map(e => (
                  <tr key={e.id}>
                    <td className="mono" style={{ fontSize: 11.5, color: "var(--text-3)" }}>
                      {new Date(e.date).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })}
                    </td>
                    <td className="strong">{e.itemName}</td>
                    <td className="num">{e.qty}</td>
                    <td className="num">{fmtINR(e.rate)}</td>
                    <td><span className="badge neutral">{e.mode.toUpperCase()}</span></td>
                    <td className="num strong">{fmtINR(e.amount)}</td>
                    <td className="row-actions">
                      <button className="icon-btn" onClick={() => removeEntry(e.id)} title="Delete entry">
                        <Icon name="trash" size={13} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ background: "var(--surface-2)", fontWeight: 600 }}>
                  <td colSpan="5" style={{ padding: "10px 14px", color: "var(--text)" }}>Day Total</td>
                  <td className="num strong" style={{ fontSize: 14, color: "var(--text)" }}>{fmtINR(dayTotal)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};




/* ============================================================
   Lists — Invoices, Customers, Inventory, Receivables, Expenses
   With customer-level udhaar consolidation + payment recording
   ============================================================ */

/* ----------- Payment recording modal ----------- */
const PaymentModal = ({ open, onClose, customer, dueAmount, onSubmit, title = "Record Payment" }) => {
  const [amount, setAmount] = React.useState("");
  const [mode, setMode] = React.useState("cash");
  const [note, setNote] = React.useState("");
  const toast = useToast();

  React.useEffect(() => { if (open) { setAmount(""); setMode("cash"); setNote(""); } }, [open]);

  if (!open) return null;

  const submit = async () => {
    const a = Number(amount) || 0;
    if (a <= 0) { toast("Amount daalo", "error"); return; }
    if (a > dueAmount + 0.01) { toast(`Amount due (${fmtINR(dueAmount)}) se zyada hai`, "error"); return; }
    try{await onSubmit(a,mode,note);onClose();}catch(e){toast(e.message,"error");}
  };

  const quickAmounts = [
    { label: "Full", val: dueAmount },
    { label: "Half", val: Math.round(dueAmount / 2) },
    { label: "₹100", val: Math.min(100, dueAmount) },
    { label: "₹500", val: Math.min(500, dueAmount) },
  ].filter(q => q.val > 0);

  return (
    <Modal open onClose={onClose} title={title} width={420}
      footer={<>
        <button className="btn" onClick={onClose}>Cancel</button>
        <button className="btn primary" onClick={submit}><Icon name="check" />{title.toLowerCase().includes("refund")?"Record Refund":"Record Payment"}</button>
      </>}>
      {customer && (
        <div style={{ padding: 10, background: "var(--surface-2)", borderRadius: 8, marginBottom: 14, fontSize: 13 }}>
          <div style={{ fontWeight: 600 }}>{customer.name}</div>
          <div style={{ color: "var(--text-3)", fontSize: 12, marginTop: 2 }}>
            {title.toLowerCase().includes("refund")?"Refund due:":"Balance to receive:"} <strong style={{ color: "var(--warning)" }}>{fmtINR(dueAmount)}</strong>
          </div>
        </div>
      )}
      <div className="field" style={{ marginBottom: 10 }}>
        <label>{title.toLowerCase().includes("refund")?"Amount refunded (₹)":"Amount received (₹)"} <span style={{ color: "var(--danger)" }}>*</span></label>
        <input className="input mono" type="number" min="1" max={dueAmount} step="0.01" autoFocus
          placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
          {quickAmounts.map(q => (
            <button key={q.label} className="btn sm" onClick={() => setAmount(q.val)}>{q.label}</button>
          ))}
        </div>
      </div>
      <div className="field" style={{ marginBottom: 10 }}>
        <label>Payment Mode</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[
            ...["cash", "upi", "card"].map(m => ({ id: m, label: m.toUpperCase(), icon: m })),
            ...[...CUSTOM_MODE_REGISTRY.values()].map(m => ({ id: m.id, label: m.label, color: m.color, custom: true })),
          ].map(m => (
            <button key={m.id}
              className={`btn ${mode === m.id ? "primary" : ""}`}
              style={{
                flex: "1 1 30%", justifyContent: "center", minWidth: 96,
                ...(m.custom && mode === m.id ? { background: m.color, borderColor: m.color, color: "#fff" } : {}),
                ...(m.custom && mode !== m.id ? { borderColor: `color-mix(in oklab, ${m.color} 45%, var(--border))` } : {}),
              }}
              onClick={() => setMode(m.id)}>
              {m.custom ? <span className="pm-dot" style={{ background: mode === m.id ? "#fff" : m.color }} /> : <Icon name={m.icon} size={13} />}
              {m.label}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>Note <span style={{ color: "var(--text-4)", fontWeight: 400 }}>(optional)</span></label>
        <input className="input" placeholder="Reference no, remarks…"
          value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
    </Modal>
  );
};

const toInvoiceEditLine = (line = {}) => ({...line,printJob:line.printJob,
  lineId: line.lineId || uid("edit_"),
  itemId: line.itemId || "",
  name: line.name || "",
  qty: String(Number(line.qty) || 1),
  rate: String(Number(line.rate) || 0),
  gst: String(sanitizeGstRate(line.gst)),
  hsn: line.hsn || "",
  category: line.category || "Services",
  unit: line.unit || "pc",
});

const calculateEditedInvoiceTotals=(lines=[],discountValue=0,kind='fixed',interstate=false,round=true)=>{try{const result=calculate(lines.map(l=>({description:l.name,quantity:String(l.qty),rate:String(l.rate),gst:String(l.gst),unit:l.unit||'job',hsn:l.hsn||'',discountKind:l.discountKind||'fixed',discount:String(l.discount||'0'),printJob:l.printJob})),kind,String(discountValue),interstate,round);const t=result.totals;return {cleanLines:result.items.map((l,n)=>({...lines[n],name:l.description,qty:Number(l.quantity),rate:Number(l.rate),gst:Number(l.gst),discountKind:l.discountKind,discount:l.discount,amount:l.taxable/100})),rawSubtotal:t.gross/100,discount:Number(discountValue),discountKind:kind,taxableAfterDisc:t.taxable/100,totalGst:(t.cgst+t.sgst+t.igst)/100,cgst:t.cgst/100,sgst:t.sgst/100,igst:t.igst/100,total:t.total/100,roundOff:t.roundOff/100,grandTotal:t.total/100};}catch(e){return {error:e.message,cleanLines:lines,rawSubtotal:0,discount:0,taxableAfterDisc:0,totalGst:0,cgst:0,sgst:0,igst:0,roundOff:0,grandTotal:0,total:0};}};
const invoiceDateInputValue = (value) => {
  const day = isoDay(value);
  return day === "NaN-NaN-NaN" ? isoDay() : day;
};

const mergeDayWithTime = (dayValue, fallbackIso) => {
  const fallback = fallbackIso ? new Date(fallbackIso) : new Date();
  const next = new Date(`${dayValue || isoDay()}T00:00:00`);
  if (Number.isNaN(next.getTime())) return fallback.toISOString();
  if (!Number.isNaN(fallback.getTime())) {
    next.setHours(fallback.getHours(), fallback.getMinutes(), fallback.getSeconds(), fallback.getMilliseconds());
  }
  return next.toISOString();
};

const InvoiceEditModal = ({ open, invoice, customers, onClose, onSave }) => {
  const [customerId, setCustomerId] = React.useState("");
  const [date, setDate] = React.useState(isoDay());
  const [dueDate, setDueDate] = React.useState(isoDay());
  const [reason,setReason]=React.useState("");
  const [discountKind,setDiscountKind]=React.useState("fixed");
  const [discount, setDiscount] = React.useState("0");
  const [lines, setLines] = React.useState([]);
  const toast = useToast();

  React.useEffect(() => {
    if (!open || !invoice) return;
    setCustomerId(invoice.customerId || "c1");
    setDate(invoiceDateInputValue(invoice.date));
    setDueDate(invoice.dueDate ? invoiceDateInputValue(invoice.dueDate) : isoDay());
    setDiscount(invoice._raw?.discountValue||String(Number(invoice.discount)||0));setDiscountKind(invoice._raw?.discountKind||"fixed");
    setLines((invoice.items || []).map(toInvoiceEditLine));
  }, [open, invoice]);

  if (!open || !invoice) return null;

  const totals = calculateEditedInvoiceTotals(lines,discount,discountKind,invoice?._raw?invoice._raw.placeOfSupply!==invoice._raw.business.state:false,invoice?._raw?.roundRupee!==false);
  const previousPaymentSum = Array.isArray(invoice.payments)
    ? invoice.payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)
    : 0;
  const preservedPaid = Math.min(totals.grandTotal, previousPaymentSum > 0 ? previousPaymentSum : (Number(invoice.paid) || 0));
  const editedDue = Math.max(0, totals.grandTotal - preservedPaid);
  const editedStatus = editedDue <= 0 ? "paid" : preservedPaid > 0 ? "partial" : "unpaid";
  const selectedCustomer = customers.find(c => c.id === customerId);

  const updateLine = (lineId, field, value) => {
    setLines(prev => prev.map(line => line.lineId === lineId ? { ...line, [field]: value } : line));
  };

  const addLine = () => {
    setLines(prev => [...prev, toInvoiceEditLine({ name: "", qty: 1, rate: 0, gst: 0 })]);
  };

  const removeLine = (lineId) => {
    setLines(prev => prev.length <= 1 ? prev : prev.filter(line => line.lineId !== lineId));
  };

  const submit = () => {
    if (totals.cleanLines.length === 0) {
      toast("Invoice me kam se kam ek item chahiye", "error");
      return;
    }
    if (editedDue > 0 && isWalkIn(selectedCustomer)) {
      toast("Pay Later due ke liye proper customer select karo", "error");
      return;
    }
    const paymentMode = editedStatus === "unpaid"
      ? "pending"
      : invoice.paymentMode === "pending" ? "cash" : (invoice.paymentMode || "cash");
    if(totals.error){toast(totals.error,"error");return;}
    if(!reason.trim()){toast("Enter a correction reason","error");return;}
    onSave({reason,discountKind,
      ...invoice,
      customerId,
      date: mergeDayWithTime(date, invoice.date),
      dueDate: dueDate ? mergeDayWithTime(dueDate, invoice.dueDate || invoice.date) : invoice.dueDate,
      status: editedStatus,
      paymentMode,
      subtotal: totals.taxableAfterDisc,
      cgst: totals.cgst,
      sgst: totals.sgst,
      igst: totals.igst,
      discount: totals.discount,
      total: totals.grandTotal,
      paid: preservedPaid,
      items: totals.cleanLines,
      editedAt: new Date().toISOString(),
    });
    toast(`Invoice ${invoice.number} updated`);
    onClose();
  };

  return (
    <Modal open onClose={onClose} title={`Edit ${invoice.number}`} width={860}
      footer={<>
        <button className="btn" onClick={onClose}>Cancel</button>
        <button className="btn primary" onClick={submit}><Icon name="save" />Save Changes</button>
      </>}>
      <div className="invoice-edit-shell">
        <div className="invoice-edit-meta">
          <div className="field">
            <label>Customer</label>
            <select className="select" value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
              {customers.map(c => <option key={c.id} value={c.id}>{c.name}{c.phone && c.phone !== "—" ? ` · ${c.phone}` : ""}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Invoice Date</label>
            <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="field">
            <label>Due Date</label>
            <input className="input" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <div className="field">
            <label>Bill discount</label><select className="select" value={discountKind} onChange={e=>setDiscountKind(e.target.value)}><option value="fixed">₹</option><option value="percent">%</option></select>
            <input className="input mono" type="number" min="0" step="0.01" value={discount} onChange={(e) => setDiscount(e.target.value)} />
          </div>
        </div>

        <div className="field"><label>Correction reason</label><input className="input" value={reason} onChange={e=>setReason(e.target.value)} placeholder="Explain what changed and why"/></div><div className="invoice-edit-lines">
          <div className="invoice-edit-head">
            <h4>Items</h4>
            <button className="btn sm" onClick={addLine}><Icon name="plus" />Add Line</button>
          </div>
          {lines.map((line, index) => (
            <div className="invoice-edit-line" key={line.lineId}>
              <div className="line-index">{index + 1}</div>
              <input className="input" placeholder="Item name" value={line.name} onChange={(e) => updateLine(line.lineId, "name", e.target.value)} />
              <input className="input mono num" type="number" min="1" step="1" value={line.qty} onChange={(e) => updateLine(line.lineId, "qty", e.target.value)} />
              <input className="input mono num" type="number" min="0" step="0.01" value={line.rate} onChange={(e) => updateLine(line.lineId, "rate", e.target.value)} />
              <select className="select mono" value={sanitizeGstRate(line.gst)} onChange={(e) => updateLine(line.lineId, "gst", e.target.value)}>
                {GST_RATES.map(rate => <option key={rate} value={rate}>{rate}%</option>)}
              </select>
              <input className="input mono" placeholder="HSN/SAC" value={line.hsn} onChange={(e) => updateLine(line.lineId, "hsn", e.target.value.replace(/[^0-9A-Za-z]/g, "").slice(0, 10))} />
              <button className="icon-btn" title="Remove line" disabled={lines.length <= 1} onClick={() => removeLine(line.lineId)}>
                <Icon name="trash" />
              </button>
            </div>
          ))}
          <div className="invoice-edit-line-labels">
            <span></span><span>Item</span><span>Qty</span><span>Rate</span><span>GST</span><span>HSN/SAC</span><span></span>
          </div>
        </div>

        <div className="invoice-edit-summary">
          <div><span>Invoice value</span><strong>{fmtINR(totals.grandTotal)}</strong></div>
          <div><span>Already received</span><strong className="success">{fmtINR(preservedPaid)}</strong></div>
          <div><span>Balance due</span><strong className={editedDue > 0 ? "warning" : ""}>{fmtINR(editedDue)}</strong></div>
          <div><span>Status</span><strong>{editedStatus === "paid" ? "Paid" : editedStatus === "partial" ? "Partial" : "Pay Later"}</strong></div>
        </div>
      </div>
    </Modal>
  );
};

/* ----------- Invoices List ----------- */
const InvoicesList = ({ invoices, customers, settings, onRecordPayment, onCancel, onUpdateInvoice, onDeletePayment, onClearBill, onRestoreBill, onRecordRefund, onResumeDraft, onRoute }) => {
  const [filter, setFilter] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const [period, setPeriod] = React.useState("all");
  const [customRange, setCustomRange] = React.useState({ start: isoDay(), end: isoDay() });
  const [selected, setSelected] = React.useState(null);
  const [payTarget, setPayTarget] = React.useState(null); // invoice for which to record payment
  const [cancelTarget, setCancelTarget] = React.useState(null);
  const [editTarget, setEditTarget] = React.useState(null);
  const [cancelReason, setCancelReason] = React.useState("");
  const toast = useToast();
  const range = React.useMemo(() => getDateRange(period, customRange), [period, customRange]);

  const live = invoices.filter(i => !i.cancelled);
  const scopedLive = (filter==="cancelled"?invoices.filter(i=>i.cancelled):live).filter(i => inDateRange(i.date, range));
  const selectedId = selected?.id;

  React.useEffect(() => {
    if (!selectedId) return;
    const fresh = invoices.find(i => i.id === selectedId);
    if (!fresh) {
      setSelected(null);
      return;
    }
    setSelected(fresh);
  }, [invoices, selectedId]);

  const filtered = scopedLive
    .filter(i => filter === "all" || i.status === filter)
    .filter(i => {
      if (!search) return true;
      const cust = customers.find(c => c.id === i.customerId);
      return i.number.toLowerCase().includes(search.toLowerCase()) ||
             cust?.name.toLowerCase().includes(search.toLowerCase()) ||
             (cust?.phone || "").includes(search);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const counts = {
    all: scopedLive.length,draft:scopedLive.filter(i=>i._raw?.status==='draft').length,cancelled:invoices.filter(i=>i.cancelled&&inDateRange(i.date,range)).length,
    paid: scopedLive.filter(i => i.status === "paid").length,
    partial: scopedLive.filter(i => i.status === "partial").length,
    unpaid: scopedLive.filter(i => i.status === "unpaid").length,
  };
  const scopedTotal = scopedLive.filter(i=>i._raw?.status!=='draft').reduce((s, i) => s + (i.total || 0), 0);
  const scopedPaid = scopedLive.reduce((s, i) => s + (i.paid || 0), 0);
  const scopedDue = scopedLive.reduce((s, i) => s + invoiceOutstanding(i), 0);

  const openCancelBill = (inv) => {
    setCancelTarget(inv);
    setCancelReason("");
    setSelected(null);
    if (payTarget?.id === inv.id) setPayTarget(null);
    if (editTarget?.id === inv.id) setEditTarget(null);
  };

  const closeCancelBill = () => {
    setCancelTarget(null);
    setCancelReason("");
  };

  const confirmCancelBill = () => {
    if (!cancelTarget) return;
    onCancel(cancelTarget.id, cancelReason.trim());
    if (selected?.id === cancelTarget.id) setSelected(null);
    if (payTarget?.id === cancelTarget.id) setPayTarget(null);
    if (editTarget?.id === cancelTarget.id) setEditTarget(null);
    toast(`Bill ${cancelTarget.number} cancelled`);
    closeCancelBill();
  };

  const saveSelectedPdf = async () => {
    if (!selected) return;
    const cust = customers.find(c => c.id === selected.customerId);
    await saveInvoicePdfFromDom(selected, cust, toast);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Invoices</h2>
          <div className="sub">{scopedLive.length} invoices in {range.label.toLowerCase()} · Total {fmtINR(scopedTotal)} · Due {fmtINR(scopedDue)}</div>
        </div>
        <div className="actions">
          <DateRangeFilter period={period} setPeriod={setPeriod} customRange={customRange} setCustomRange={setCustomRange} />
          <button className="btn primary" onClick={() => onRoute && onRoute("billing")}><Icon name="plus" />New Bill</button>
        </div>
      </div>

      <div className="invoice-summary-grid">
        <div className="stat">
          <div className="label">Invoice Value</div>
          <div className="value">{fmtINR(scopedTotal)}</div>
          <div className="delta">{range.label}</div>
        </div>
        <div className="stat">
          <div className="label">Received</div>
          <div className="value">{fmtINR(scopedPaid)}</div>
          <div className={scopedPaid > 0 ? "delta up" : "delta"}>{counts.paid} paid bills</div>
        </div>
        <div className="stat">
          <div className="label">Written Off</div>
          <div className="value">{fmtINR(scopedLive.reduce((sum,i)=>sum+Number(i.writtenOff||0),0))}</div>
          <div className={scopedDue > 0 ? "delta down" : "delta"}>Owner-authorised write-offs</div>
        </div>
      </div>

      <div className="card">
        <div className="tabs" style={{ margin: 0, padding: "0 16px" }}>
          {[
            { id: "all", label: "All" },{id:"cancelled",label:"Cancelled"},
            { id: "draft", label: "Drafts" },{ id: "paid", label: "Paid" },
            { id: "partial", label: "Partial" },
            { id: "unpaid", label: "Pay Later" },
          ].map(t => (
            <div role="button" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter")setFilter(t.id);}} key={t.id} className={`tab ${filter === t.id ? "active" : ""}`} onClick={() => setFilter(t.id)}>
              {t.label} <span style={{ color: "var(--text-4)", marginLeft: 4 }}>{counts[t.id]}</span>
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div className="input-group" style={{ width: 280, margin: "6px 0" }}>
            <Icon name="search" className="icon" />
            <input className="input" placeholder="Bill no, customer, phone…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead>
              <tr>
                <th>Invoice #</th><th>Date</th><th>Customer</th>
                <th>Status</th><th>Mode</th>
                <th className="num">Total</th><th className="num">Paid</th><th className="num">Due</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(inv => {
                const cust = customers.find(c => c.id === inv.customerId);
                const due = invoiceOutstanding(inv);
                return (
                  <tr key={inv.id} style={{ cursor: "pointer" }} onClick={() => setSelected(inv)}>
                    <td className="strong mono" style={{ fontSize: 12 }}>{inv.number}</td>
                    <td style={{ color: "var(--text-3)" }}>{fmtDate(inv.date)}</td>
                    <td>{cust?.name || "—"}</td>
                    <td>
                      {inv.writtenOff ? (
                        <span className="badge neutral"><span className="dot" />Settled</span>
                      ) : (
                      <span className={`badge ${inv.status === "paid" ? "success" : inv.status === "partial" ? "warning" : "danger"}`}>
                        <span className="dot" />{inv.status === "draft" ? "Draft" : inv.status === "cancelled" ? "Cancelled" : inv.status === "paid" ? "Paid" : inv.status === "partial" ? "Partial" : "Pay Later"}
                      </span>
                      )}
                    </td>
                    <td><PayModeBadge mode={inv.paymentMode} /></td>
                    <td className="num">{fmtINR(inv.total)}</td>
                    <td className="num" style={{ color: "var(--success)" }}>{fmtINR(inv.paid)}</td>
                    <td className="num strong" style={{ color: due > 0 ? "var(--danger)" : "var(--text-4)" }}>{due > 0 ? fmtINR(due) : "—"}</td>
                    <td className="row-actions">{inv._raw?.status==='draft'&&onResumeDraft&&<button className="btn sm" onClick={e=>{e.stopPropagation();onResumeDraft(inv._raw);}}>Open draft</button>}
                      {due > 0 && (
                        <button className="btn sm primary" onClick={(e) => { e.stopPropagation(); setPayTarget(inv); }}>
                          Pay
                        </button>
                      )}
                      <button className="icon-btn" onClick={(e) => { e.stopPropagation(); setSelected(inv); }}><Icon name="eye" /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="empty">
              <Icon name="invoice" size={36} />
              <h4>No invoices found</h4>
              <p>Try adjusting your filters or create a new bill.</p>
            </div>
          )}
        </div>
      </div>

      {selected && (
        <Modal open onClose={() => setSelected(null)} title={`Invoice ${selected.number}`} width={780}
          footer={<>
            {!selected.cancelled && !selected.writtenOff && (selected.total - selected.paid) > 0 && (
              <button className="btn primary" onClick={() => { setPayTarget(selected); setSelected(null); }}>
                <Icon name="cash" />Record Payment
              </button>
            )}
            {!selected.cancelled && !selected.writtenOff && (
              <button className="btn" onClick={() => { setEditTarget(selected); setSelected(null); }}>
                <Icon name="edit" />Edit
              </button>
            )}
            {!selected.cancelled && !selected.writtenOff && onClearBill && (
              <button className="btn danger" title="Ye bill delete jaisa ho jayega — income me nahi jodega, due bhi nahi rahega"
                onClick={() => {
                  if (!confirm(`Bill ${selected.number} clear kar dein?\n\nIska amount (${fmtINR(selected.total)}) na to income me count hoga, na hi due me dikhega. Sale history me record rahega. Galti se ho jaye to Recover kar sakte ho.`)) return;
                  onClearBill(selected.id);
                  setSelected(null);
                  toast(`Bill ${selected.number} clear ho gaya`);
                }}>
                <Icon name="trash" />Clear Bill
              </button>
            )}
            {!selected.cancelled && selected.writtenOff && onRestoreBill && (
              <button className="btn primary" title="Galti se clear ho gaya? Wapas Due (pending udhaar) me daalo"
                onClick={() => {
                  if (!confirm(`Bill ${selected.number} ko wapas Due me daalna hai?`)) return;
                  onRestoreBill(selected.id);
                  setSelected(null);
                  toast(`Bill ${selected.number} wapas Due me daal diya`);
                }}>
                <Icon name="refresh" />Wapas Due Me
              </button>
            )}
            {!selected.cancelled && !selected.writtenOff && (
              <button className="btn danger" onClick={() => openCancelBill(selected)}>
                <Icon name="x" />Cancel Bill
              </button>
            )}
            <button className="btn" onClick={() => setSelected(null)}>Close</button>
            <button className="btn" onClick={saveSelectedPdf}><Icon name="download" />Save PDF</button>
            {selected.refundDue>0&&onRecordRefund&&<button className="btn" onClick={()=>onRecordRefund(selected._raw)}>Record refund</button>}<button className="btn" onClick={() => window.billing.document({id:(typeof savedInvoice!=="undefined"?savedInvoice:typeof selected!=="undefined"?selected:null)?.id,action:"print"}).then(message=>message&&toast(message,String(message).toLowerCase().includes("no printer"))).catch(e=>toast(e.message,"error"))}><Icon name="print" />Print</button>
          </>}>
          <InvoicePreview invoice={selected} customer={customers.find(c => c.id === selected.customerId)} settings={settings} />
          {selected.writtenOff && (
            <div className="cart-alert" style={{ marginTop: 16 }}>
              <Icon name="info" size={14} />
              Ye bill {selected.writtenOffAt ? `${fmtDateTime(selected.writtenOffAt)} ko` : ""} Clear kiya gaya tha
              {(Number(selected.preClearPaid) || 0) > 0 ? ` (us waqt ${fmtINR(selected.preClearPaid)} paid tha)` : ""} — remaining balance was written off. Sales and actual receipts are retained in the audit history.
            </div>
          )}
          {selected._raw?.writeoffs?.length>0&&<div className="card" style={{padding:12,marginTop:12}}><h4>Write-off history</h4>{selected._raw.writeoffs.map(w=><p key={w.id}>{fmtDate(w.date)} · {fmtINR(w.amount/100)} · {w.reason}</p>)}</div>}
          {selected.payments && selected.payments.length > 0 && (
            <div style={{ marginTop: 16, padding: 12, background: "var(--surface-2)", borderRadius: 8 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>Payment History</div>
              {selected.payments.map(p => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, fontSize: 12, padding: "4px 0", color: "var(--text-2)" }}>
                  <span>{fmtDateTime(p.date)} · <PayModeBadge mode={p.mode} /> {p.note && `· ${p.note}`}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span className="mono strong" style={{ color: "var(--success)" }}>{fmtINR(p.amount)}</span>
                    {!selected.cancelled && onDeletePayment && (
                      <button className="icon-btn" title="Galti se record hui payment? Delete karo — amount income se hat kar wapas due me aa jayega"
                        onClick={() => {
                          if (!confirm(`${fmtINR(p.amount)} ki ye payment entry delete karni hai?\n\nAmount kamai (collected) se hat jayega aur bill ka due wapas badh jayega. Phir chaho to Receivables me jaake Clear kar sakte ho (bina income record kiye).`)) return;
                          onDeletePayment(selected.id, p.id);
                          toast(`${fmtINR(p.amount)} payment delete ho gayi — due wapas aa gaya`);
                        }}>
                        <Icon name="trash" size={13} />
                      </button>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}

      {cancelTarget && (
        <Modal open onClose={closeCancelBill} title={`Cancel ${cancelTarget.number}`} width={460}
          footer={<>
            <button className="btn" onClick={closeCancelBill}>Keep Bill</button>
            <button className="btn danger" onClick={confirmCancelBill}><Icon name="x" />Confirm Cancel</button>
          </>}>
          <div className="cart-alert danger" style={{ marginBottom: 14 }}>
            <Icon name="info" size={14} />
            This bill will be removed from active invoices, dashboard totals, reports, and customer dues.
          </div>
          <div className="field">
            <label>Reason <span style={{ color: "var(--text-4)", fontWeight: 400 }}>(optional)</span></label>
            <textarea className="textarea" rows="3" placeholder="Wrong amount, duplicate bill, customer cancelled..."
              value={cancelReason} onChange={(e) => setCancelReason(e.target.value)} autoFocus />
          </div>
        </Modal>
      )}

      {payTarget && (
        <PaymentModal
          open
          customer={customers.find(c => c.id === payTarget.customerId)}
          dueAmount={invoiceOutstanding(payTarget)}
          title={`Payment for ${payTarget.number}`}
          onClose={() => setPayTarget(null)}
          onSubmit={async(amt, mode, note) => {
            await onRecordPayment(payTarget.id, amt, mode, note);
            toast(`Payment ${fmtINR(amt)} recorded`);
          }}
        />
      )}

      {editTarget && (
        <InvoiceEditModal
          open
          invoice={editTarget}
          customers={customers}
          onClose={() => setEditTarget(null)}
          onSave={onUpdateInvoice}
        />
      )}
    </div>
  );
};

/* ----------- Customer Detail (full ledger) ----------- */
const CustomerDetail = ({ customer, invoices, settings, onClose, onRecordPayment, onUpdate }) => {
  const [showPay, setShowPay] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [draft, setDraft] = React.useState(customer);
  const toast = useToast();

  React.useEffect(() => { setDraft(customer); }, [customer]);

  const custInvoices = invoices
    .filter(i => i.customerId === customer.id && !i.cancelled)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalBilled = custInvoices.reduce((s, i) => s + i.total, 0);
  const totalPaid = custInvoices.reduce((s, i) => s + i.paid, 0);
  const totalDue = custInvoices.reduce((sum,i)=>sum+invoiceOutstanding(i),0);

  // Build ledger: bills as debits, payments as credits, all chronological
  const ledger = [];
  custInvoices.forEach(inv => {
    ledger.push({
      type: "bill", date: inv.date, ref: inv.number,
      desc: `${inv.items.length} item${inv.items.length !== 1 ? "s" : ""}`,
      debit: inv.total, credit: 0, billId: inv.id,
    });
    (inv.payments || []).forEach(p => {
      ledger.push({
        type: "payment", date: p.date, ref: inv.number,
        desc: `Payment via ${p.mode.toUpperCase()}${p.note ? ` · ${p.note}` : ""}`,
        debit: 0, credit: p.amount,
      });
    });
  });
  custInvoices.forEach(inv=>(inv._raw?.writeoffs||[]).forEach(w=>ledger.push({type:'writeoff',date:w.date,ref:inv.number,desc:'Balance written off · '+w.reason,debit:0,credit:w.amount/100,billId:inv.id})));
  ledger.sort((a, b) => new Date(a.date) - new Date(b.date));
  let runningBalance = 0;
  ledger.forEach(l => { runningBalance += l.debit - l.credit; l.balance = runningBalance; });
  const ledgerReversed = [...ledger].reverse();

  const saveEdit = () => {
    if (!draft.name.trim()) { toast("Naam khaali nahi ho sakta", "error"); return; }
    onUpdate(customer.id, {
      name: draft.name.trim(),
      phone: (draft.phone || "").trim(),
      email: (draft.email || "").trim(),
      gstin: (draft.gstin || "").toUpperCase().trim(),
      address: (draft.address || "").trim(),
      state: (draft.state || "").trim(),
      stateCode: (draft.stateCode || "").trim(),
    });
    setEditMode(false);
    toast("Customer updated");
  };

  return (
    <Modal open onClose={onClose} title={customer.name} width={900}
      footer={<>
        {totalDue > 0 && !customer.isWalkIn && (
          <button className="btn primary" onClick={() => setShowPay(true)}>
            <Icon name="cash" />Record Payment ({fmtINR(totalDue)})
          </button>
        )}
        <button className="btn" onClick={onClose}>Close</button>
      </>}>
      {/* Header summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 14 }}>
        <div className="stat" style={{ padding: 12 }}>
          <div className="label" style={{ fontSize: 11 }}>Lifetime Spend</div>
          <div className="value" style={{ fontSize: 18 }}>{fmtINR(totalBilled)}</div>
        </div>
        <div className="stat" style={{ padding: 12 }}>
          <div className="label" style={{ fontSize: 11 }}>Total Paid</div>
          <div className="value" style={{ fontSize: 18, color: "var(--success)" }}>{fmtINR(totalPaid)}</div>
        </div>
        <div className="stat" style={{ padding: 12 }}>
          <div className="label" style={{ fontSize: 11 }}>Outstanding</div>
          <div className="value" style={{ fontSize: 18, color: totalDue > 0 ? "var(--warning)" : "var(--text-4)" }}>{fmtINR(totalDue)}</div>
        </div>
        <div className="stat" style={{ padding: 12 }}>
          <div className="label" style={{ fontSize: 11 }}>Bills</div>
          <div className="value" style={{ fontSize: 18 }}>{custInvoices.length}</div>
        </div>
      </div>

      {/* Contact info */}
      <div className="card" style={{ marginBottom: 14 }}>
        <div className="card-header">
          <h3>Contact Details</h3>
          {!customer.isWalkIn && (
            editMode
              ? <div style={{ display: "flex", gap: 6 }}>
                  <button className="btn sm" onClick={() => { setEditMode(false); setDraft(customer); }}>Cancel</button>
                  <button className="btn sm primary" onClick={saveEdit}><Icon name="check" />Save</button>
                </div>
              : <button className="btn sm" onClick={() => setEditMode(true)}><Icon name="edit" />Edit</button>
          )}
        </div>
        <div style={{ padding: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {editMode ? (
            <>
              <div className="field"><label>Name</label><input className="input" value={draft.name} onChange={(e) => setDraft(d => ({ ...d, name: e.target.value }))} /></div>
              <div className="field"><label>Phone</label><input className="input mono" value={draft.phone || ""} onChange={(e) => setDraft(d => ({ ...d, phone: e.target.value }))} /></div>
              <div className="field"><label>Email</label><input className="input" value={draft.email || ""} onChange={(e) => setDraft(d => ({ ...d, email: e.target.value }))} /></div>
              <div className="field"><label>GSTIN</label><input className="input mono" value={draft.gstin || ""} onChange={(e) => setDraft(d => ({ ...d, gstin: e.target.value.toUpperCase() }))} /></div>
              <div className="field"><label>State</label><input className="input" value={draft.state || ""} onChange={(e) => setDraft(d => ({ ...d, state: e.target.value }))} /></div>
              <div className="field"><label>State Code</label><input className="input mono" maxLength={2} value={draft.stateCode || ""} onChange={(e) => setDraft(d => ({ ...d, stateCode: e.target.value.replace(/[^0-9]/g, "") }))} /></div>
              <div className="field" style={{ gridColumn: "1 / -1" }}><label>Address</label><input className="input" value={draft.address || ""} onChange={(e) => setDraft(d => ({ ...d, address: e.target.value }))} /></div>
            </>
          ) : (
            <>
              <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Phone</div><div className="mono">{customer.phone && customer.phone !== "—" ? customer.phone : "—"}</div></div>
              <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Email</div><div>{customer.email || "—"}</div></div>
              <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>GSTIN</div><div className="mono">{customer.gstin || "—"}</div></div>
              <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>State</div><div>{[customer.state, customer.stateCode ? `Code ${customer.stateCode}` : ""].filter(Boolean).join(" · ") || "—"}</div></div>
              <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Customer Since</div><div>{customer.since ? fmtDate(customer.since) : "—"}</div></div>
              {customer.address && <div style={{ gridColumn: "1 / -1" }}><div style={{ fontSize: 11, color: "var(--text-3)" }}>Address</div><div>{customer.address}</div></div>}
            </>
          )}
        </div>
      </div>

      {/* Ledger */}
      <div className="card">
        <div className="card-header"><h3>Account Ledger</h3><span className="meta">{ledger.length} transactions</span></div>
        {ledger.length === 0 ? (
          <div className="empty"><Icon name="history" size={28} /><h4>No transactions</h4><p>This customer has no bills yet.</p></div>
        ) : (
          <div className="table-wrap">
            <table className="data">
              <thead><tr>
                <th>Date</th><th>Reference</th><th>Description</th>
                <th className="num">Debit</th><th className="num">Credit</th><th className="num">Balance</th>
              </tr></thead>
              <tbody>
                {ledgerReversed.map((l, i) => (
                  <tr key={i}>
                    <td style={{ color: "var(--text-3)", fontSize: 12 }}>{fmtDate(l.date)}</td>
                    <td className="mono" style={{ fontSize: 11.5 }}>{l.ref}</td>
                    <td>
                      <span className={`badge ${l.type === "bill" ? "danger" : "success"}`} style={{ marginRight: 6 }}>
                        {l.type === "bill" ? "BILL" : l.type==="writeoff"?"WRITE-OFF":"PAYMENT"}
                      </span>
                      {l.desc}
                    </td>
                    <td className="num mono" style={{ color: l.debit > 0 ? "var(--danger)" : "var(--text-4)" }}>{l.debit > 0 ? fmtINR(l.debit) : "—"}</td>
                    <td className="num mono" style={{ color: l.credit > 0 ? "var(--success)" : "var(--text-4)" }}>{l.credit > 0 ? fmtINR(l.credit) : "—"}</td>
                    <td className="num strong mono" style={{ color: l.balance > 0 ? "var(--warning)" : l.balance < 0 ? "var(--success)" : "var(--text-4)" }}>{fmtINR(l.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showPay && (
        <PaymentModal open
          customer={customer}
          dueAmount={totalDue}
          title={`Record Payment — ${customer.name}`}
          onClose={() => setShowPay(false)}
          onSubmit={(amt, mode, note) => {
            const result = onRecordPayment(customer.id, amt, mode, note);
            const msg = result.allocations.length > 0
              ? `${fmtINR(amt)} adjusted across ${result.allocations.length} bill${result.allocations.length !== 1 ? "s" : ""}`
              : `Payment recorded`;
            toast(msg);
          }}
        />
      )}
    </Modal>
  );
};

/* ----------- Customers List ----------- */
const CustomersList = ({ customers, invoices, addCustomer, updateCustomer, deleteCustomer, onRecordPayment, settings }) => {
  const [search, setSearch] = React.useState("");
  const [showAdd, setShowAdd] = React.useState(false);
  const [draft, setDraft] = React.useState({ name: "", phone: "", email: "", gstin: "", address: "", state: settings.state || "", stateCode: settings.stateCode || "" });
  const [selectedCust, setSelectedCust] = React.useState(null);
  const [filterDues, setFilterDues] = React.useState(false);
  const toast = useToast();

  const filtered = customers
    .filter(c => !filterDues || (c.balance > 0 && !c.isWalkIn))
    .filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()) || (c.phone || "").includes(search) || (c.gstin || "").toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      // Walk-in always last, then by balance desc, then by name
      if (a.isWalkIn) return 1;
      if (b.isWalkIn) return -1;
      if (a.balance !== b.balance) return b.balance - a.balance;
      return a.name.localeCompare(b.name);
    });

  const totalDue = customers.reduce((s, c) => s + (c.isWalkIn ? 0 : c.balance), 0);
  const dueCount = customers.filter(c => !c.isWalkIn && c.balance > 0).length;

  const saveDraft = async () => {
    if (!draft.name.trim()) { toast("Customer ka naam daalo", "error"); return; }
    await addCustomer(draft);
    setDraft({ name: "", phone: "", email: "", gstin: "", address: "", state: settings.state || "", stateCode: settings.stateCode || "" });
    setShowAdd(false);
    toast(`${draft.name} added`);
  };

  const handleDelete = (c) => {
    if (c.isWalkIn) { toast("Walk-in customer delete nahi kar sakte", "error"); return; }
    if (c.balance > 0) {
      if (!confirm(`${c.name} ka udhaar ${fmtINR(c.balance)} pending hai. Phir bhi delete karna hai?`)) return;
    } else {
      if (!confirm(`Delete ${c.name}?`)) return;
    }
    deleteCustomer(c.id);
    toast("Customer deleted");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Customers</h2>
          <div className="sub">{customers.length - 1} regular customers · <strong style={{ color: totalDue > 0 ? "var(--warning)" : "var(--text-2)" }}>{fmtINR(totalDue)} udhaar</strong> pending across {dueCount} customers</div>
        </div>
        <div className="actions">
          <button className="btn primary" onClick={() => setShowAdd(true)}><Icon name="plus" />Add Customer</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div style={{ display: "flex", gap: 6 }}>
            <button className={`tab ${!filterDues ? "active" : ""}`} onClick={() => setFilterDues(false)}>All ({customers.length})</button>
            <button className={`tab ${filterDues ? "active" : ""}`} onClick={() => setFilterDues(true)}>Udhaar pending ({dueCount})</button>
          </div>
          <div className="input-group" style={{ width: 320 }}>
            <Icon name="search" className="icon" />
            <input className="input" placeholder="Naam, phone ya GSTIN…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead><tr>
              <th>Name</th><th>Phone</th><th>GSTIN</th>
              <th className="num">Bills</th><th className="num">Total Spend</th><th className="num">Udhaar</th>
              <th>Since</th><th></th>
            </tr></thead>
            <tbody>
              {filtered.map(c => {
                const invs = invoices.filter(i => i.customerId === c.id && !i.cancelled);
                return (
                  <tr key={c.id} style={{ cursor: "pointer" }} onClick={() => setSelectedCust(c)}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div className="avatar" style={{ width: 28, height: 28, background: c.isWalkIn ? "var(--surface-3)" : `hsl(${(c.id.charCodeAt(1) || 65) * 47 % 360}, 60%, 55%)`, color: c.isWalkIn ? "var(--text-3)" : "#fff" }}>
                          {c.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                        </div>
                        <div>
                          <span className="strong">{c.name}</span>
                          {c.isWalkIn && <span style={{ marginLeft: 6, fontSize: 10.5, color: "var(--text-4)", background: "var(--surface-3)", padding: "1px 6px", borderRadius: 3 }}>WALK-IN</span>}
                        </div>
                      </div>
                    </td>
                    <td className="mono" style={{ fontSize: 12 }}>{c.phone && c.phone !== "—" ? c.phone : "—"}</td>
                    <td className="mono" style={{ fontSize: 11.5 }}>{c.gstin || "—"}</td>
                    <td className="num">{invs.length}</td>
                    <td className="num">{fmtINR(c.totalSpend)}</td>
                    <td className="num">{c.balance > 0 ? <span className="badge warning">{fmtINR(c.balance)}</span> : <span style={{ color: "var(--text-4)" }}>—</span>}</td>
                    <td style={{ color: "var(--text-3)", fontSize: 12 }}>{c.since && c.since !== "—" ? fmtDate(c.since) : "—"}</td>
                    <td className="row-actions">
                      {c.balance > 0 && !c.isWalkIn && (
                        <button className="btn sm primary" onClick={(e) => { e.stopPropagation(); setSelectedCust(c); }}>
                          Pay
                        </button>
                      )}
                      {!c.isWalkIn && (
                        <button className="icon-btn" onClick={(e) => { e.stopPropagation(); handleDelete(c); }} title="Delete">
                          <Icon name="trash" size={13} />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="empty">
              <Icon name="customers" size={36} />
              <h4>No customers</h4>
              <p>{search ? "Try a different search" : "Add your first customer to track udhaar"}</p>
            </div>
          )}
        </div>
      </div>

      {showAdd && (
        <Modal open onClose={() => setShowAdd(false)} title="Add Customer" width={540}
          footer={<>
            <button className="btn" onClick={() => setShowAdd(false)}>Cancel</button>
            <button className="btn primary" onClick={saveDraft}><Icon name="check" />Save</button>
          </>}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div className="field" style={{ gridColumn: "1 / -1" }}>
              <label>Name <span style={{ color: "var(--danger)" }}>*</span></label>
              <input className="input" autoFocus placeholder="Customer ka pura naam"
                value={draft.name} onChange={(e) => setDraft(d => ({ ...d, name: e.target.value }))} />
            </div>
            <div className="field"><label>Phone</label>
              <input className="input mono" placeholder="10-digit mobile"
                value={draft.phone} onChange={(e) => setDraft(d => ({ ...d, phone: e.target.value }))} />
            </div>
            <div className="field"><label>Email</label>
              <input className="input" placeholder="optional"
                value={draft.email} onChange={(e) => setDraft(d => ({ ...d, email: e.target.value }))} />
            </div>
            <div className="field" style={{ gridColumn: "1 / -1" }}><label>GSTIN <span style={{ color: "var(--text-4)", fontWeight: 400 }}>(B2B only)</span></label>
              <input className="input mono" placeholder="15-character GSTIN"
                value={draft.gstin} onChange={(e) => setDraft(d => ({ ...d, gstin: e.target.value.toUpperCase() }))} />
            </div>
            <div className="field" style={{ gridColumn: "1 / -1" }}><label>Address</label>
              <input className="input" placeholder="optional"
                value={draft.address} onChange={(e) => setDraft(d => ({ ...d, address: e.target.value }))} />
            </div>
            <div className="field"><label>State</label>
              <input className="input" placeholder={settings.state || "State"}
                value={draft.state} onChange={(e) => setDraft(d => ({ ...d, state: e.target.value }))} />
            </div>
            <div className="field"><label>State Code</label>
              <input className="input mono" placeholder={settings.stateCode || "06"} maxLength={2}
                value={draft.stateCode} onChange={(e) => setDraft(d => ({ ...d, stateCode: e.target.value.replace(/[^0-9]/g, "") }))} />
            </div>
          </div>
        </Modal>
      )}

      {selectedCust && (
        <CustomerDetail
          customer={selectedCust}
          invoices={invoices}
          settings={settings}
          onClose={() => setSelectedCust(null)}
          onRecordPayment={onRecordPayment}
          onUpdate={updateCustomer}
        />
      )}
    </div>
  );
};

/* ----------- Customer Accounts (grouped bills + Pay Later follow-up) ----------- */
const CustomerAccounts = ({ customers, invoices, settings, onRecordCustomerPayment, onRecordBillPayment, onDeletePayment, onClearBill, onRestoreBill, onRoute }) => {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("due");
  const [selectedId, setSelectedId] = React.useState("");
  const [payCustomer, setPayCustomer] = React.useState(null);
  const [payInvoice, setPayInvoice] = React.useState(null);
  const [viewInvoice, setViewInvoice] = React.useState(null);
  const toast = useToast();

  const accounts = React.useMemo(() => {
    return customers
      .filter(c => !c.isWalkIn)
      .map(c => {
        const custInvoices = invoices
          .filter(inv => inv.customerId === c.id && !inv.cancelled)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        const totalBilled = custInvoices.reduce((s, inv) => s + (inv.total || 0), 0);
        const totalPaid = custInvoices.reduce((s, inv) => s + (inv.paid || 0), 0);
        const balance = custInvoices.reduce((s, inv) => s + invoiceOutstanding(inv), 0);
        const pendingBills = custInvoices.filter(inv => invoiceOutstanding(inv) > 0);
        const clearedBills = custInvoices
          .filter(inv => inv.writtenOff)
          .sort((a, b) => new Date(b.writtenOffAt || b.date) - new Date(a.writtenOffAt || a.date));
        const lastDate = custInvoices[0]?.date || c.since;
        const lastDueDate = pendingBills[pendingBills.length - 1]?.date || "";
        return {
          customer: c,
          invoices: custInvoices,
          pendingBills,
          clearedBills,
          totalBilled,
          totalPaid,
          balance,
          lastDate,
          lastDueDate,
        };
      })
      .filter(acc => {
        if (filter === "due" && acc.balance <= 0) return false;
        if (filter === "clear" && acc.balance > 0) return false;
        if (filter === "cleared" && acc.clearedBills.length === 0) return false;
        const q = search.trim().toLowerCase();
        if (!q) return true;
        const c = acc.customer;
        return [c.name, c.phone, c.email, c.gstin, c.address]
          .some(v => String(v || "").toLowerCase().includes(q));
      })
      .sort((a, b) => {
        if (a.balance !== b.balance) return b.balance - a.balance;
        return new Date(b.lastDate || 0) - new Date(a.lastDate || 0);
      });
  }, [customers, invoices, search, filter]);

  const totalClearedBills = React.useMemo(
    () => customers.filter(c => !c.isWalkIn).reduce((s, c) => s + invoices.filter(inv => inv.customerId === c.id && !inv.cancelled && inv.writtenOff).length, 0),
    [customers, invoices]
  );

  React.useEffect(() => {
    if (accounts.length === 0) {
      if (selectedId) setSelectedId("");
      return;
    }
    if (!selectedId || !accounts.some(acc => acc.customer.id === selectedId)) {
      setSelectedId(accounts[0].customer.id);
    }
  }, [accounts, selectedId]);

  const selected = accounts.find(acc => acc.customer.id === selectedId) || accounts[0] || null;
  const totalOutstanding = accounts.reduce((s, acc) => s + Math.max(0, acc.balance), 0);
  const totalBilled = accounts.reduce((s, acc) => s + acc.totalBilled, 0);
  const activeAccounts = accounts.filter(acc => acc.balance > 0).length;

  const openCustomerPayment = (acc) => {
    if (!acc || acc.balance <= 0) return;
    setPayCustomer(acc);
  };

  const openInvoicePayment = (inv) => {
    const customer = customers.find(c => c.id === inv.customerId);
    setPayInvoice({ invoice: inv, customer });
  };

  const saveAccountInvoicePdf = async () => {
    if (!viewInvoice) return;
    const inv = invoices.find(i => i.id === viewInvoice.id) || viewInvoice;
    const cust = customers.find(c => c.id === inv.customerId);
    await saveInvoicePdfFromDom(inv, cust, toast);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Customer Accounts</h2>
          <div className="sub">Repeat customers, school work, Pay Later bills and payments in one place</div>
        </div>
        <div className="actions">
          <button className="btn" onClick={() => onRoute && onRoute("customers")}><Icon name="customers" />Customer Directory</button>
          <button className="btn primary" onClick={() => onRoute && onRoute("billing")}><Icon name="plus" />New Bill</button>
        </div>
      </div>

      <div className="stat-grid customer-account-stats">
        <div className="stat">
          <div className="label">Outstanding</div>
          <div className="value" style={{ color: totalOutstanding > 0 ? "var(--warning)" : "var(--text)" }}>{fmtINR(totalOutstanding)}</div>
          <div className={activeAccounts ? "delta down" : "delta"}>{activeAccounts} accounts due</div>
        </div>
        <div className="stat">
          <div className="label">Customer Billing</div>
          <div className="value">{fmtINR(totalBilled)}</div>
          <div className="delta">Current filtered accounts</div>
        </div>
        <div className="stat">
          <div className="label">Pending Bills</div>
          <div className="value">{accounts.reduce((s, acc) => s + acc.pendingBills.length, 0)}</div>
          <div className="delta">Grouped by customer</div>
        </div>
      </div>

      <div className="customer-accounts-layout">
        <section className="card account-list-panel">
          <div className="card-header">
            <div>
              <h3>Accounts</h3>
              <span className="meta">{accounts.length} shown</span>
            </div>
            <div className="input-group account-search">
              <Icon name="search" className="icon" />
              <input className="input" placeholder="Customer, phone, GSTIN..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="account-filter-tabs">
            {[
              { id: "due", label: "Due" },
              { id: "all", label: "All" },
              { id: "clear", label: "No Dues" },
              { id: "cleared", label: `Cleared (${totalClearedBills})` },
            ].map(t => (
              <button key={t.id} className={filter === t.id ? "active" : ""} onClick={() => setFilter(t.id)}>{t.label}</button>
            ))}
          </div>
          <div className="account-list">
            {accounts.length === 0 ? (
              <div className="empty">
                <Icon name="customers" size={32} />
                <h4>No accounts found</h4>
                <p>Create a customer, then make Pay Later bills for that account.</p>
              </div>
            ) : accounts.map(acc => (
              <button key={acc.customer.id}
                className={`account-row ${selected?.customer.id === acc.customer.id ? "active" : ""}`}
                onClick={() => setSelectedId(acc.customer.id)}>
                <div className="avatar account-avatar">
                  {acc.customer.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase()}
                </div>
                <div className="account-row-main">
                  <strong>{acc.customer.name}</strong>
                  <span>{acc.customer.phone || "No phone"} · {acc.invoices.length} bills</span>
                </div>
                <div className="account-row-money">
                  <strong className={acc.balance > 0 ? "due" : ""}>{acc.balance > 0 ? fmtINR(acc.balance) : "Clear"}</strong>
                  <span>{acc.lastDate ? fmtDate(acc.lastDate) : "No bills"}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="card account-detail-panel">
          {selected ? (
            <>
              <div className="account-detail-head">
                <div>
                  <h3>{selected.customer.name}</h3>
                  <div className="subline">
                    {[selected.customer.phone, selected.customer.email, selected.customer.gstin].filter(Boolean).join(" · ") || "No contact details"}
                  </div>
                </div>
                <div className="account-detail-actions">
                  {selected.balance > 0 && (
                    <button className="btn primary" onClick={() => openCustomerPayment(selected)}>
                      <Icon name="cash" />Record Payment
                    </button>
                  )}
                </div>
              </div>

              <div className="account-summary-strip">
                <div><span>Total billed</span><strong>{fmtINR(selected.totalBilled)}</strong></div>
                <div><span>Paid</span><strong className="success">{fmtINR(selected.totalPaid)}</strong></div>
                <div><span>Balance</span><strong className={selected.balance > 0 ? "warning" : ""}>{fmtINR(selected.balance)}</strong></div>
                <div><span>Bills</span><strong>{selected.invoices.length}</strong></div>
              </div>

              <div className="account-section-title">
                <h4>Pending Pay Later Bills</h4>
                <span>{selected.pendingBills.length} open</span>
              </div>
              {selected.pendingBills.length === 0 ? (
                <div className="account-empty-line"><Icon name="check" />No pending amount for this customer.</div>
              ) : (
                <div className="account-bill-list">
                  {selected.pendingBills.map(inv => {
                    const due = invoiceOutstanding(inv);
                    return (
                      <div key={inv.id} className="account-bill-row">
                        <button onClick={() => setViewInvoice(inv)}>
                          <strong className="mono">{inv.number}</strong>
                          <span>{fmtDate(inv.date)} · {inv.items?.length || 0} item{(inv.items?.length || 0) === 1 ? "" : "s"}</span>
                        </button>
                        <div>
                          <strong>{fmtINR(due)}</strong>
                          <button className="btn sm primary" onClick={() => openInvoicePayment(inv)}>Pay</button>
                          {onClearBill && (
                            <button className="btn sm danger" title="Ye bill delete jaisa ho jayega — income me nahi jodega, due bhi nahi rahega"
                              onClick={() => {
                                if (!confirm(`Bill ${inv.number} ka due ${fmtINR(due)} clear kar dein?\n\nYe income me record nahi hoga. Galti se ho jaye to Cleared tab se Recover kar sakte ho.`)) return;
                                onClearBill(inv.id);
                                toast(`Bill ${inv.number} clear kar diya`);
                              }}>
                              <Icon name="trash" size={12} />Clear
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {selected.clearedBills.length > 0 && (
                <>
                  <div className="account-section-title">
                    <h4>Cleared Bills</h4>
                    <span>{selected.clearedBills.length} cleared</span>
                  </div>
                  <div className="account-bill-list">
                    {selected.clearedBills.map(inv => {
                      const clearedAmount = Math.max(0, (Number(inv.total) || 0) - (Number(inv.paid) || 0));
                      return (
                        <div key={inv.id} className="account-bill-row cleared">
                          <button onClick={() => setViewInvoice(inv)}>
                            <strong className="mono">{inv.number}</strong>
                            <span>{inv.writtenOffAt ? fmtDate(inv.writtenOffAt) : fmtDate(inv.date)} ko clear kiya · {fmtINR(inv.total)} bill</span>
                          </button>
                          <div>
                            <strong style={{ color: "var(--text-3)" }}>{fmtINR(clearedAmount)}</strong>
                            {onRestoreBill && (
                              <button className="btn sm primary" title="Galti se clear ho gaya? Wapas Due me daalo"
                                onClick={() => {
                                  if (!confirm(`Bill ${inv.number} (${fmtINR(clearedAmount)}) ko wapas Due me daalna hai?`)) return;
                                  onRestoreBill(inv.id);
                                  toast(`Bill ${inv.number} wapas Due me daal diya`);
                                }}>
                                <Icon name="refresh" size={12} />Wapas Due Me
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="account-section-title">
                <h4>Recent Invoices</h4>
                <span>{selected.invoices.length} total</span>
              </div>
              <div className="table-wrap account-mini-table">
                <table className="data">
                  <thead><tr><th>Invoice</th><th>Date</th><th>Mode</th><th>Status</th><th className="num">Total</th><th className="num">Due</th><th></th></tr></thead>
                  <tbody>
                    {selected.invoices.slice(0, 12).map(inv => {
                      const due = invoiceOutstanding(inv);
                      return (
                        <tr key={inv.id}>
                          <td className="mono strong">{inv.number}</td>
                          <td>{fmtDate(inv.date)}</td>
                          <td><PayModeBadge mode={inv.paymentMode} /></td>
                          <td>{inv.writtenOff
                            ? <span className="badge neutral">Settled</span>
                            : <span className={`badge ${inv.status === "paid" ? "success" : inv.status === "partial" ? "warning" : "danger"}`}>{inv.status === "draft" ? "Draft" : inv.status === "cancelled" ? "Cancelled" : inv.status === "paid" ? "Paid" : inv.status === "partial" ? "Partial" : "Pay Later"}</span>}</td>
                          <td className="num">{fmtINR(inv.total)}</td>
                          <td className="num">{due > 0 ? fmtINR(due) : "—"}</td>
                          <td className="row-actions">
                            {inv.writtenOff && onRestoreBill ? (
                              <button className="icon-btn" title="Wapas Due Me (Recover)"
                                onClick={() => {
                                  if (!confirm(`Bill ${inv.number} ko wapas Due me daalna hai?`)) return;
                                  onRestoreBill(inv.id);
                                  toast(`Bill ${inv.number} wapas Due me daal diya`);
                                }}>
                                <Icon name="refresh" size={13} />
                              </button>
                            ) : (!inv.writtenOff && onClearBill && (
                              <button className="icon-btn" title="Bill clear karo (delete jaisa — income me nahi jodega)"
                                onClick={() => {
                                  if (!confirm(`Bill ${inv.number} clear kar dein?\n\nYe income me record nahi hoga.`)) return;
                                  onClearBill(inv.id);
                                  toast(`Bill ${inv.number} clear kar diya`);
                                }}>
                                <Icon name="trash" size={13} />
                              </button>
                            ))}
                            <button className="icon-btn" onClick={() => setViewInvoice(inv)} title="View invoice"><Icon name="eye" /></button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="empty">
              <Icon name="customers" size={36} />
              <h4>Select a customer account</h4>
              <p>Repeated Pay Later bills will stay grouped here.</p>
            </div>
          )}
        </section>
      </div>

      {payCustomer && (
        <PaymentModal open
          customer={payCustomer.customer}
          dueAmount={payCustomer.balance}
          title={`Record Payment — ${payCustomer.customer.name}`}
          onClose={() => setPayCustomer(null)}
          onSubmit={(amt, mode, note) => {
            const result = onRecordCustomerPayment(payCustomer.customer.id, amt, mode, note);
            toast(result?.allocations?.length
              ? `${fmtINR(amt)} adjusted across ${result.allocations.length} bill${result.allocations.length === 1 ? "" : "s"}`
              : "Payment recorded");
          }}
        />
      )}

      {payInvoice && (
        <PaymentModal open
          customer={payInvoice.customer}
          dueAmount={Math.max(0, (payInvoice.invoice.total || 0) - (payInvoice.invoice.paid || 0))}
          title={`Payment for ${payInvoice.invoice.number}`}
          onClose={() => setPayInvoice(null)}
          onSubmit={(amt, mode, note) => {
            onRecordBillPayment(payInvoice.invoice.id, amt, mode, note);
            toast(`${fmtINR(amt)} recorded against ${payInvoice.invoice.number}`);
          }}
        />
      )}

      {viewInvoice && (() => {
        // Re-derive from the live invoices prop so Clear/Recover/Delete-payment
        // actions taken below are reflected immediately without closing the modal.
        const inv = invoices.find(i => i.id === viewInvoice.id) || viewInvoice;
        const due = invoiceOutstanding(inv);
        return (
        <Modal open onClose={() => setViewInvoice(null)} title={`Invoice ${inv.number}`} width={780}
          footer={<>
            {!inv.cancelled && !inv.writtenOff && due > 0 && (
              <button className="btn primary" onClick={() => { openInvoicePayment(inv); setViewInvoice(null); }}>
                <Icon name="cash" />Record Payment
              </button>
            )}
            {!inv.cancelled && !inv.writtenOff && onClearBill && (
              <button className="btn danger" title="Ye bill delete jaisa ho jayega — income me nahi jodega, due bhi nahi rahega"
                onClick={() => {
                  if (!confirm(`Bill ${inv.number} clear kar dein?\n\nIska amount (${fmtINR(inv.total)}) na to income me count hoga, na hi due me. Galti se ho jaye to Recover kar sakte ho.`)) return;
                  onClearBill(inv.id);
                  toast(`Bill ${inv.number} clear ho gaya`);
                }}>
                <Icon name="trash" />Clear Bill
              </button>
            )}
            {!inv.cancelled && inv.writtenOff && onRestoreBill && (
              <button className="btn primary" title="Galti se clear ho gaya? Wapas Due me daalo"
                onClick={() => {
                  if (!confirm(`Bill ${inv.number} ko wapas Due me daalna hai?`)) return;
                  onRestoreBill(inv.id);
                  toast(`Bill ${inv.number} wapas Due me daal diya`);
                }}>
                <Icon name="refresh" />Wapas Due Me
              </button>
            )}
            <button className="btn" onClick={() => setViewInvoice(null)}>Close</button>
            <button className="btn" onClick={saveAccountInvoicePdf}><Icon name="download" />Save PDF</button>
            <button className="btn" onClick={() => window.billing.document({id:(typeof savedInvoice!=="undefined"?savedInvoice:typeof selected!=="undefined"?selected:null)?.id,action:"print"}).then(message=>message&&toast(message,String(message).toLowerCase().includes("no printer"))).catch(e=>toast(e.message,"error"))}><Icon name="print" />Print</button>
          </>}>
          <InvoicePreview invoice={inv} customer={customers.find(c => c.id === inv.customerId)} settings={settings} />
          {inv.writtenOff && (
            <div className="cart-alert" style={{ marginTop: 16 }}>
              <Icon name="info" size={14} />
              Ye bill {inv.writtenOffAt ? `${fmtDateTime(inv.writtenOffAt)} ko` : ""} Clear kiya gaya tha
              {(Number(inv.preClearPaid) || 0) > 0 ? ` (us waqt ${fmtINR(inv.preClearPaid)} paid tha)` : ""} — na income me hai, na due me. "Wapas Due Me" dabakar undo kar sakte ho.
            </div>
          )}
          {inv.payments && inv.payments.length > 0 && (
            <div style={{ marginTop: 16, padding: 12, background: "var(--surface-2)", borderRadius: 8 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>Payment History</div>
              {inv.payments.map(p => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, fontSize: 12, padding: "4px 0", color: "var(--text-2)" }}>
                  <span>{fmtDateTime(p.date)} · <PayModeBadge mode={p.mode} /> {p.note && `· ${p.note}`}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span className="mono strong" style={{ color: "var(--success)" }}>{fmtINR(p.amount)}</span>
                    {!inv.cancelled && onDeletePayment && (
                      <button className="icon-btn" title="Galti se record hui payment? Delete karo — amount income se hat kar wapas due me aa jayega"
                        onClick={() => {
                          if (!confirm(`${fmtINR(p.amount)} ki ye payment entry delete karni hai?\n\nAmount kamai (collected) se hat jayega aur bill ka due wapas badh jayega.`)) return;
                          onDeletePayment(inv.id, p.id);
                          toast(`${fmtINR(p.amount)} payment delete ho gayi — due wapas aa gaya`);
                        }}>
                        <Icon name="trash" size={13} />
                      </button>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Modal>
        );
      })()}
    </div>
  );
};

/* ----------- Inventory List ----------- */
const InventoryList = ({ items, setItems }) => {
  const [search, setSearch] = React.useState("");
  const [activeCat, setActiveCat] = React.useState("All");
  const [showEditor, setShowEditor] = React.useState(false);
  const [editing, setEditing] = React.useState(null);
  const [taxBatch, setTaxBatch] = React.useState({ running: false, done: 0, total: 0 });
  const toast = useToast();

  const filtered = items
    .filter(i => activeCat === "All" || i.category === activeCat)
    .filter(i => !search || i.name.toLowerCase().includes(search.toLowerCase()) || (i.hsn || "").includes(search));

  const lowStock = items.filter(i => i.stock !== null && i.stock !== undefined && i.stock < 10).length;
  const missingTaxItems = items.filter(i => !getApplicableGstRate(i) || !String(i.hsn || "").trim());

  const onItemSaved = async (item) => {
    await setItems(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) return prev.map(p => p.id === item.id ? item : p);
      return [...prev, item];
    });
    toast(editing ? "Item updated" : "Item saved");
    setEditing(null);
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (confirm("Delete this item?")) {
      setItems(prev => prev.filter(p => p.id !== id));
      toast("Item deleted");
    }
  };

  const patchItem = (id, patch) => {
    setItems(prev => prev.map(p => p.id === id ? { ...p, ...patch } : p));
  };

  const researchMissingTaxes = async () => {
    const targets = missingTaxItems.slice(0, 25);
    if (!targets.length) {
      toast("All visible tax codes look filled");
      return;
    }
    setTaxBatch({ running: true, done: 0, total: targets.length });
    let applied = 0;
    let review = 0;
    let skipped = 0;
    try {
      for (let index = 0; index < targets.length; index += 1) {
        const item = targets[index];
        try {
          const suggestion = normalizeTaxSuggestionForUi(localTaxSuggestionForItem(item));
          if (suggestion?.autoApply) {
            setItems(prev => prev.map(p => p.id === item.id ? {
              ...p,
              hsn: suggestion.hsnSac || p.hsn,
              suggestedGstRate: suggestion.gstRate,
              suggestedHsnSac: suggestion.hsnSac,
              gstChoiceMigratedV1: true,
              taxSource: String(p.taxSource || "").startsWith("owner") ? p.taxSource : "local-rule",
              taxConfidence: suggestion.confidence || "high",
              taxReview: Boolean(suggestion.needsReview),
              taxSuggestion: {
                gstRate: suggestion.gstRate,
                hsnSac: suggestion.hsnSac,
                classification: suggestion.classification,
                confidence: suggestion.confidence,
                reason: suggestion.reason,
                source: suggestion.source,
              },
            } : p));
            if (suggestion.needsReview) review += 1;
            else applied += 1;
          } else {
            skipped += 1;
          }
        } catch (err) {
          console.warn("Tax research skipped", item.name, err);
          skipped += 1;
        } finally {
          setTaxBatch({ running: true, done: index + 1, total: targets.length });
        }
      }
      toast(`Smart tax complete: ${applied} ready, ${review} review, ${skipped} skipped`);
    } catch (err) {
      toast(err?.message || "Smart tax check failed", "error");
    } finally {
      setTaxBatch({ running: false, done: 0, total: 0 });
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Items & Services</h2>
          <div className="sub">{items.length} items · <b>rates/unit edit inline, GST & HSN by local rules</b>{lowStock > 0 && <> · <span style={{ color: "var(--warning)" }}>{lowStock} low on stock</span></>}</div>
        </div>
        <div className="actions">
          <button className="btn" disabled={taxBatch.running || missingTaxItems.length === 0} onClick={researchMissingTaxes}>
            <Icon name="reports" />{taxBatch.running ? `Checking ${taxBatch.done}/${taxBatch.total}` : `Smart fill missing taxes (${missingTaxItems.length})`}
          </button>
          <button className="btn primary" onClick={() => { setEditing(null); setShowEditor(true); }}><Icon name="plus" />Add Item</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {CATEGORIES.map(c => (
              <button key={c} className={`cat-tab ${activeCat === c ? "active" : ""}`} onClick={() => setActiveCat(c)}>{c}</button>
            ))}
          </div>
          <div className="input-group" style={{ width: 240 }}>
            <Icon name="search" className="icon" />
            <input className="input" placeholder="Search items or tax code…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrap">
          <table className="data inv-table">
            <thead><tr>
              <th>Item</th><th>Category</th><th style={{ width: 210 }}>GST ON/OFF</th><th className="editable-hint" style={{ width: 130 }}>Unit</th>
              <th className="num editable-hint" style={{ width: 120 }}>Rate (₹)</th>
              <th className="num editable-hint" style={{ width: 100 }}>Stock</th>
              <th style={{ width: 70 }}></th>
            </tr></thead>
            <tbody>
              {filtered.map(it => {
                const openEdit = () => { setEditing(it); setShowEditor(true); };
                const gstChoiceForItem = getGstChoiceState(it);
                // Click anywhere on the row that ISN'T an inline editor input/select to open edit.
                const onRowClick = (e) => {
                  if (e.target.closest('.inline-edit') || e.target.closest('.row-actions')) return;
                  openEdit();
                };
                const toggleItemGst = (e) => {
                  e.stopPropagation();
                  if (!gstChoiceForItem.applicable) {
                    toast("Pehle smart rule se GST rate check karo", "error");
                    return;
                  }
                  patchItem(it.id, {
                    gst: gstChoiceForItem.enabled ? 0 : gstChoiceForItem.applicable,
                    suggestedGstRate: gstChoiceForItem.applicable,
                    taxSource: gstChoiceForItem.enabled ? "owner-gst-off" : "owner-gst-on",
                    taxConfidence: "owner",
                    taxReview: false,
                    gstChoiceMigratedV1: true,
                  });
                };
                return (
                <tr key={it.id} className="inv-row" onClick={onRowClick} style={{ cursor: "pointer" }} title="Click row to edit · use Rate/Unit/Stock inline, local tax rules for GST">
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--brand-50)", color: "var(--brand)", display: "grid", placeItems: "center" }}>
                        <Icon name={it.icon} size={14} />
                      </div>
                      <span className="strong">{it.name}</span>
                    </div>
                  </td>
                  <td><span className="badge neutral">{it.category}</span></td>
                  <td>
                    <div className={`tax-cell ${it.taxReview ? "needs-review" : it.hsn ? "ready" : ""}`}>
                      <button type="button" className={`inline-edit gst-toggle table ${gstChoiceForItem.enabled ? "on" : ""}`} disabled={!gstChoiceForItem.applicable} onClick={toggleItemGst}>
                        <span>GST {gstChoiceForItem.enabled ? "ON" : "OFF"}</span>
                        <strong>{gstChoiceForItem.enabled ? `${gstChoiceForItem.applicable}%` : "0%"}</strong>
                      </button>
                      <input className="input inline-edit mono tax-inline-code" value={it.hsn || ""}
                        placeholder="HSN/SAC"
                        onClick={(e) => e.stopPropagation()}
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => patchItem(it.id, { hsn: e.target.value.replace(/[^0-9A-Za-z]/g, "").slice(0, 10), taxSource: "owner-hsn", taxConfidence: "owner", taxReview: false })} />
                      <span>{it.taxReview ? "Needs review" : gstChoiceForItem.applicable ? `Only 0% / ${gstChoiceForItem.applicable}%` : "Tax rate pending"}</span>
                    </div>
                  </td>
                  <td>
                    <select className="select inline-edit" value={it.unit}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => patchItem(it.id, { unit: e.target.value })}>
                      {UNIT_PRESETS.map(u => <option key={u} value={u}>{u}</option>)}
                      {!UNIT_PRESETS.includes(it.unit) && <option value={it.unit}>{it.unit}</option>}
                    </select>
                  </td>
                  <td className="num">
                    <input type="number" className="input inline-edit num strong" min="0" step="0.01"
                      value={it.price}
                      onClick={(e) => e.stopPropagation()}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => patchItem(it.id, { price: Number(e.target.value) || 0 })} />
                  </td>
                  <td className="num">
                    {it.stock === null || it.stock === undefined ? (
                      <span style={{ color: "var(--text-4)" }}>—</span>
                    ) : (
                      <input type="number" className="input inline-edit num" min="0"
                        value={it.stock}
                        onClick={(e) => e.stopPropagation()}
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => patchItem(it.id, { stock: Number(e.target.value) || 0 })} />
                    )}
                  </td>
                  <td className="row-actions">
                    <button className="icon-btn" title="Edit details" onClick={(e) => { e.stopPropagation(); openEdit(); }}><Icon name="edit" /></button>
                    <button className="icon-btn" title="Delete" onClick={(e) => handleDelete(it.id, e)}><Icon name="trash" size={13} /></button>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="empty">
              <Icon name="inventory" size={36} />
              <h4>No items yet</h4>
              <p>Add your services & products. Local rules can fill GST and HSN/SAC.</p>
              <button className="btn primary" style={{ marginTop: 10 }} onClick={() => { setEditing(null); setShowEditor(true); }}>
                <Icon name="plus" />Add First Item
              </button>
            </div>
          )}
        </div>
      </div>

      <ItemEditor open={showEditor} onClose={() => { setShowEditor(false); setEditing(null); }}
        onSave={onItemSaved} existing={editing} />
    </div>
  );
};

/* ----------- Receivables (Udhaar) — by-customer rollup ----------- */
const ReceivablesList = ({ invoices, customers, settings, onRecordPayment, onRecordBillPayment, onClearBill, onClearCustomer, onRestoreBill, onRoute }) => {
  const [view, setView] = React.useState("customer"); // "customer" | "bill"
  const [payTarget, setPayTarget] = React.useState(null);
  const [selectedCust, setSelectedCust] = React.useState(null);
  const toast = useToast();

  // Aggregate by customer
  const byCustomer = customers
    .filter(c => !c.isWalkIn && c.balance > 0)
    .map(c => {
      const custBills = invoices.filter(i => i.customerId === c.id && !i.cancelled && !i.writtenOff && i.total > i.paid);
      const oldest = custBills.reduce((min, b) => !min || new Date(b.date) < new Date(min.date) ? b : min, null);
      const oldestDays = oldest ? Math.floor((Date.now() - new Date(oldest.date)) / 86400000) : 0;
      return {
        customer: c,
        billCount: custBills.length,
        oldestDate: oldest?.date,
        oldestDays,
        balance: c.balance,
      };
    })
    .sort((a, b) => b.balance - a.balance);

  // Per-bill view
  const dues = invoices
    .filter(i => !i.cancelled && !i.writtenOff && i.total > i.paid)
    .map(i => ({ ...i, due: i.total - i.paid }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const clearCustomer = (x) => {
    if (!onClearCustomer) return;
    if (!confirm(`${x.customer.name} ka pura udhaar ${fmtINR(x.balance)} clear kar dein? Ye income me record nahi hoga, sirf receivables se hat jayega.`)) return;
    onClearCustomer(x.customer.id);
    toast(`${x.customer.name} ka udhaar clear kar diya`);
  };

  const clearBill = (d, cust) => {
    if (!onClearBill) return;
    if (!confirm(`Bill ${d.number} ka due ${fmtINR(d.due)} clear kar dein? Ye income me record nahi hoga, sirf receivables se hat jayega.`)) return;
    onClearBill(d.id);
    toast(`${cust?.name || "Bill"} ka due clear kar diya`);
  };

  // Cleared (written-off) bills — kept so a mistaken clear can be recovered.
  const cleared = invoices
    .filter(i => !i.cancelled && i.writtenOff)
    .map(i => ({ ...i, due: Math.max(0, (Number(i.total) || 0) - (Number(i.paid) || 0)) }))
    .sort((a, b) => new Date(b.writtenOffAt || b.date) - new Date(a.writtenOffAt || a.date));

  const restoreBill = (d, cust) => {
    if (!onRestoreBill) return;
    if (!confirm(`Bill ${d.number} (${fmtINR(d.due)}) ko wapas Due (pending udhaar) me daalna hai?`)) return;
    onRestoreBill(d.id);
    // Recover ke baad seedha due list dikhao taki user ko saaf dikhe ki wapas pending me aa gaya.
    setView("bill");
    toast(`${cust?.name || "Bill"} ka udhaar wapas Due me daal diya`);
  };

  const totalDue = byCustomer.reduce((s, x) => s + x.balance, 0);
  const overdueDue = byCustomer.filter(x => x.oldestDays > 7).reduce((s, x) => s + x.balance, 0);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Receivables (Udhaar)</h2>
          <div className="sub">{byCustomer.length} customers owe you {fmtINR(totalDue)} across {dues.length} bills</div>
        </div>
        <div className="actions">
          <button className="btn primary" onClick={() => onRoute && onRoute("accounts")}>
            <Icon name="customers" />Customer Accounts
          </button>
        </div>
      </div>

      <div className="stat-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat">
          <div className="label">Total Outstanding</div>
          <div className="value" style={{ color: totalDue > 0 ? "var(--warning)" : "var(--text)" }}>{fmtINR(totalDue)}</div>
          <div className="delta">Across {byCustomer.length} customers</div>
        </div>
        <div className="stat">
          <div className="label">Overdue (&gt; 7 days)</div>
          <div className="value" style={{ color: overdueDue > 0 ? "var(--danger)" : "var(--text)" }}>{fmtINR(overdueDue)}</div>
          <div className="delta down">{byCustomer.filter(x => x.oldestDays > 7).length} customers</div>
        </div>
        <div className="stat">
          <div className="label">Pending Bills</div>
          <div className="value">{dues.length}</div>
          <div className="delta">Total invoices unpaid</div>
        </div>
      </div>

      <div className="card">
        <div className="tabs" style={{ margin: 0, padding: "0 16px" }}>
          <div className={`tab ${view === "customer" ? "active" : ""}`} onClick={() => setView("customer")}>By Customer ({byCustomer.length})</div>
          <div className={`tab ${view === "bill" ? "active" : ""}`} onClick={() => setView("bill")}>By Bill ({dues.length})</div>
          <div className={`tab ${view === "cleared" ? "active" : ""}`} onClick={() => setView("cleared")}>Cleared / Recover ({cleared.length})</div>
        </div>

        {view === "cleared" ? (
          <div className="table-wrap">
            <table className="data">
              <thead><tr>
                <th>Bill #</th><th>Customer</th><th>Cleared On</th>
                <th className="num">Total</th><th className="num">Cleared Amount</th><th></th>
              </tr></thead>
              <tbody>
                {cleared.map(d => {
                  const cust = customers.find(c => c.id === d.customerId);
                  return (
                    <tr key={d.id}>
                      <td className="strong mono" style={{ fontSize: 12 }}>{d.number}</td>
                      <td>{cust?.name || d.customerName || "—"}{cust?.isWalkIn && <span style={{ color: "var(--text-4)", fontSize: 11 }}> · walk-in</span>}</td>
                      <td>{d.writtenOffAt ? fmtDate(d.writtenOffAt) : "—"}</td>
                      <td className="num">{fmtINR(d.total)}</td>
                      <td className="num strong" style={{ color: "var(--text-3)" }}>{fmtINR(d.due)}</td>
                      <td className="row-actions">
                        <button className="btn sm primary" title="Galti se clear ho gaya? Wapas Due (pending udhaar) me daalo" onClick={() => restoreBill(d, cust)}>
                          <Icon name="refresh" size={12} />Wapas Due Me
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {cleared.length === 0 && (
                  <tr><td colSpan="6"><div className="empty">
                    <Icon name="history" size={34} />
                    <h4>Koi cleared udhaar nahi</h4>
                    <p>Jab aap kisi udhaar ko Clear karoge, wo yahan aayega aur galti hone par Recover kar sakte ho.</p>
                  </div></td></tr>
                )}
              </tbody>
            </table>
          </div>
        ) : view === "customer" ? (
          <div className="table-wrap">
            <table className="data">
              <thead><tr>
                <th>Customer</th><th>Phone</th><th className="num">Bills</th>
                <th>Oldest</th><th className="num">Total Udhaar</th><th></th>
              </tr></thead>
              <tbody>
                {byCustomer.map(x => (
                  <tr key={x.customer.id} style={{ cursor: "pointer" }} onClick={() => setSelectedCust(x.customer)}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div className="avatar" style={{ width: 28, height: 28, background: `hsl(${(x.customer.id.charCodeAt(1) || 65) * 47 % 360}, 60%, 55%)`, color: "#fff" }}>
                          {x.customer.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                        </div>
                        <span className="strong">{x.customer.name}</span>
                      </div>
                    </td>
                    <td className="mono" style={{ fontSize: 12 }}>{x.customer.phone && x.customer.phone !== "—" ? x.customer.phone : "—"}</td>
                    <td className="num">{x.billCount}</td>
                    <td>
                      {x.oldestDays > 7 ? <span className="badge danger">{x.oldestDays}d old</span>
                        : x.oldestDays > 3 ? <span className="badge warning">{x.oldestDays}d old</span>
                        : <span style={{ color: "var(--text-3)", fontSize: 12 }}>{x.oldestDays}d ago</span>}
                    </td>
                    <td className="num strong" style={{ color: "var(--warning)" }}>{fmtINR(x.balance)}</td>
                    <td className="row-actions">
                      <button className="btn sm primary" onClick={(e) => { e.stopPropagation(); setSelectedCust(x.customer); }}>
                        <Icon name="cash" size={12} />Record
                      </button>
                      <button className="btn sm danger" title="Udhaar clear karo (bina record kiye)" onClick={(e) => { e.stopPropagation(); clearCustomer(x); }}>
                        <Icon name="trash" size={12} />Clear
                      </button>
                    </td>
                  </tr>
                ))}
                {byCustomer.length === 0 && (
                  <tr><td colSpan="6"><div className="empty">
                    <Icon name="check" size={36} style={{ color: "var(--success)" }} />
                    <h4>Sab clear!</h4>
                    <p>Kisi customer ka udhaar pending nahi hai.</p>
                  </div></td></tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="data">
              <thead><tr>
                <th>Bill #</th><th>Customer</th><th>Date</th>
                <th className="num">Total</th><th className="num">Paid</th><th className="num">Due</th><th></th>
              </tr></thead>
              <tbody>
                {dues.map(d => {
                  const cust = customers.find(c => c.id === d.customerId);
                  const days = Math.floor((Date.now() - new Date(d.date)) / 86400000);
                  return (
                    <tr key={d.id}>
                      <td className="strong mono" style={{ fontSize: 12 }}>{d.number}</td>
                      <td>{cust?.name}{cust?.isWalkIn && <span style={{ color: "var(--text-4)", fontSize: 11 }}> · walk-in</span>}</td>
                      <td>
                        {fmtDate(d.date)}
                        {days > 7 && <span className="badge danger" style={{ marginLeft: 6 }}>{days}d</span>}
                      </td>
                      <td className="num">{fmtINR(d.total)}</td>
                      <td className="num" style={{ color: "var(--success)" }}>{fmtINR(d.paid)}</td>
                      <td className="num strong" style={{ color: "var(--danger)" }}>{fmtINR(d.due)}</td>
                      <td className="row-actions">
                        <button className="btn sm primary" onClick={() => setPayTarget({ inv: d, customer: cust })}>Pay</button>
                        <button className="btn sm danger" title="Due clear karo (bina record kiye)" onClick={() => clearBill(d, cust)}>
                          <Icon name="trash" size={12} />Clear
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {dues.length === 0 && (
                  <tr><td colSpan="7"><div className="empty">
                    <Icon name="check" size={36} style={{ color: "var(--success)" }} />
                    <h4>Sab paid hai</h4>
                    <p>No outstanding bills.</p>
                  </div></td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedCust && (
        <CustomerDetail
          customer={selectedCust}
          invoices={invoices}
          settings={settings}
          onClose={() => setSelectedCust(null)}
          onRecordPayment={onRecordPayment}
          onUpdate={() => {}}
        />
      )}

      {payTarget && (
        <PaymentModal open
          customer={payTarget.customer}
          dueAmount={payTarget.inv.total - payTarget.inv.paid}
          title={`Payment for ${payTarget.inv.number}`}
          onClose={() => setPayTarget(null)}
          onSubmit={(amt, mode, note) => {
            onRecordBillPayment(payTarget.inv.id, amt, mode, note);
            toast(`${fmtINR(amt)} recorded against ${payTarget.inv.number}`);
          }}
        />
      )}
    </div>
  );
};

/* ----------- Expenses ----------- */
const EXPENSE_CATS = ["Bijli", "Net/Wifi", "Kiraaya", "Stationery", "Khaana/Chai", "Stock Purchase", "Maintenance", "Salary", "Tax/GST", "Other"];

const ExpensesList = ({ expenses, addExpense, deleteExpense }) => {
  const [search, setSearch] = React.useState("");
  const [showAdd, setShowAdd] = React.useState(false);
  const [draft, setDraft] = React.useState({ date: new Date().toISOString().split("T")[0], category: "Other", payee: "", description: "", paymentMode: "cash", amount: "" });
  const [period, setPeriod] = React.useState("day");
  const [customRange, setCustomRange] = React.useState({ start: isoDay(), end: isoDay() });
  const toast = useToast();
  const range = React.useMemo(() => getDateRange(period, customRange), [period, customRange]);

  const scopedExpenses = expenses.filter(e => inDateRange(e.date, range));
  const filtered = scopedExpenses.filter(e =>
    !search || (e.payee || "").toLowerCase().includes(search.toLowerCase())
            || (e.description || "").toLowerCase().includes(search.toLowerCase())
            || (e.category || "").toLowerCase().includes(search.toLowerCase())
  );

  const total = scopedExpenses.reduce((s, e) => s + (e.amount || 0), 0);
  const byCat = {};
  scopedExpenses.forEach(e => byCat[e.category] = (byCat[e.category] || 0) + e.amount);
  const topCats = Object.entries(byCat).sort((a, b) => b[1] - a[1]).slice(0, 4);

  const save = async () => {
    if (!draft.amount || Number(draft.amount) <= 0) { toast("Amount daalo", "error"); return; }
    await addExpense(draft);
    setDraft({ date: new Date().toISOString().split("T")[0], category: "Other", payee: "", description: "", paymentMode: "cash", amount: "" });
    setShowAdd(false);
    toast("Expense added");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Expenses (Kharcha)</h2>
          <div className="sub">{filtered.length} entries in {range.label.toLowerCase()} · <strong>{fmtINR(total)}</strong> total</div>
        </div>
        <div className="actions">
          <DateRangeFilter period={period} setPeriod={setPeriod} customRange={customRange} setCustomRange={setCustomRange} />
          <button className="btn primary" onClick={() => setShowAdd(true)}><Icon name="plus" />Add Expense</button>
        </div>
      </div>

      {topCats.length > 0 && (
        <div className="grid-3 mb-16" style={{ gridTemplateColumns: `repeat(${Math.min(topCats.length, 4)}, 1fr)` }}>
          {topCats.map(([cat, amt]) => (
            <div key={cat} className="stat">
              <div className="label">{cat}</div>
              <div className="value">{fmtINR(amt)}</div>
              <div className="delta">{((amt / total) * 100).toFixed(0)}% of {range.shortLabel.toLowerCase()}</div>
            </div>
          ))}
        </div>
      )}

      <div className="card">
        <div className="card-header">
          <h3>All Expenses</h3>
          <div className="input-group" style={{ width: 280 }}>
            <Icon name="search" className="icon" />
            <input className="input" placeholder="Search payee, category…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrap">
          <table className="data">
            <thead><tr>
              <th>Date</th><th>Category</th><th>Payee</th><th>Description</th>
              <th>Mode</th><th className="num">Amount</th><th></th>
            </tr></thead>
            <tbody>
              {filtered.map(e => (
                <tr key={e.id}>
                  <td style={{ color: "var(--text-3)", fontSize: 12 }}>{fmtDate(e.date)}</td>
                  <td><span className="badge neutral">{e.category}</span></td>
                  <td className="strong">{e.payee || "—"}</td>
                  <td style={{ color: "var(--text-2)", fontSize: 12.5 }}>{e.description || "—"}</td>
                  <td><PayModeBadge mode={e.paymentMode || "cash"} /></td>
                  <td className="num strong">{fmtINR(e.amount)}</td>
                  <td className="row-actions">
                    <button className="icon-btn" onClick={() => { if (confirm("Delete this expense?")) { deleteExpense(e.id); toast("Deleted"); } }}>
                      <Icon name="trash" size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr style={{ background: "var(--surface-2)", fontWeight: 600 }}>
                  <td colSpan="5" style={{ padding: "10px 14px" }}>{range.label} Total</td>
                  <td className="num strong" style={{ fontSize: 14 }}>{fmtINR(total)}</td>
                  <td></td>
                </tr>
              </tfoot>
            )}
          </table>
          {filtered.length === 0 && (
            <div className="empty">
              <Icon name="expense" size={36} />
              <h4>No expenses in this period</h4>
              <p>Add your first expense to track outflow.</p>
              <button className="btn primary" style={{ marginTop: 10 }} onClick={() => setShowAdd(true)}>
                <Icon name="plus" />Add Expense
              </button>
            </div>
          )}
        </div>
      </div>

      {showAdd && (
        <Modal open onClose={() => setShowAdd(false)} title="Add Expense" width={460}
          footer={<>
            <button className="btn" onClick={() => setShowAdd(false)}>Cancel</button>
            <button className="btn primary" onClick={save}><Icon name="check" />Save</button>
          </>}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div className="field">
              <label>Date</label>
              <input className="input" type="date" value={draft.date} onChange={(e) => setDraft(d => ({ ...d, date: e.target.value }))} />
            </div>
            <div className="field">
              <label>Amount (₹) <span style={{ color: "var(--danger)" }}>*</span></label>
              <input className="input mono" type="number" min="0" step="0.01" autoFocus placeholder="0.00"
                value={draft.amount} onChange={(e) => setDraft(d => ({ ...d, amount: e.target.value }))} />
            </div>
            <div className="field">
              <label>Category</label>
              <select className="select" value={draft.category} onChange={(e) => setDraft(d => ({ ...d, category: e.target.value }))}>
                {EXPENSE_CATS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Payment Mode</label>
              <select className="select" value={draft.paymentMode} onChange={(e) => setDraft(d => ({ ...d, paymentMode: e.target.value }))}>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="bank">Bank</option>
                {[...CUSTOM_MODE_REGISTRY.values()].map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
              </select>
            </div>
            <div className="field" style={{ gridColumn: "1 / -1" }}>
              <label>Payee / Vendor</label>
              <input className="input" placeholder="Kisko diya"
                value={draft.payee} onChange={(e) => setDraft(d => ({ ...d, payee: e.target.value }))} />
            </div>
            <div className="field" style={{ gridColumn: "1 / -1" }}>
              <label>Description</label>
              <input className="input" placeholder="kisliye / details"
                value={draft.description} onChange={(e) => setDraft(d => ({ ...d, description: e.target.value }))} />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};




/* ============================================================
   Attendance
   ============================================================ */

const Attendance = ({ attendance, onMarkToday, onCloseToday, onUpdateNote }) => {
  const toast = useToast();
  const [period, setPeriod] = React.useState("week");
  const [customRange, setCustomRange] = React.useState({ start: isoDay(), end: isoDay() });
  const [noteDraft, setNoteDraft] = React.useState("");
  const range = React.useMemo(() => getDateRange(period, customRange), [period, customRange]);
  const todayRecord = attendanceForDate(attendance, isoDay());
  const summary = React.useMemo(() => attendanceSummaryForRange(attendance, range, period), [attendance, range, period]);
  const rows = summary.rows;

  React.useEffect(() => {
    setNoteDraft(todayRecord?.note || "");
  }, [todayRecord?.id, todayRecord?.note]);

  const markToday = async () => {
    const row = await onMarkToday();
    if (row) toast("Aaj ki attendance marked");
  };
  const closeToday = async () => {
    const row = await onCloseToday();
    if (row) toast("Day closed");
  };
  const saveNote = async () => {
    if (!todayRecord) {
      toast("Pehle attendance mark karo", "error");
      return;
    }
    await onUpdateNote(todayRecord.date, noteDraft);
    toast("Attendance note saved");
  };

  const todayDuration = todayRecord ? minutesBetween(todayRecord.openedAt, todayRecord.closedAt || new Date()) : 0;
  const todayStatusText = todayRecord
    ? todayRecord.status === "closed"
      ? `Closed at ${fmtTime(todayRecord.closedAt)}`
      : `Present since ${fmtTime(todayRecord.openedAt)}`
    : "Aaj attendance mark nahi hui";

  return (
    <div className="page attendance-page">
      <div className="page-header">
        <div>
          <h2>Attendance</h2>
          <div className="sub">Daily shop opening, close time, notes and history.</div>
        </div>
        <div className="actions">
          <DateRangeFilter period={period} setPeriod={setPeriod} customRange={customRange} setCustomRange={setCustomRange} />
        </div>
      </div>

      <div className="attendance-hero card mb-16">
        <div className="attendance-hero-copy">
          <span>Today</span>
          <h3>{todayStatusText}</h3>
          <p>{todayRecord ? `Duration ${fmtDuration(todayDuration)}${todayRecord.note ? ` · ${todayRecord.note}` : ""}` : "PC on hote hi app khulega, bas ye button dabake daily presence lock kar do."}</p>
        </div>
        <div className="attendance-actions">
          {!todayRecord ? (
            <button className="btn primary xl" onClick={markToday}><Icon name="check" />Mark Today Present</button>
          ) : todayRecord.status !== "closed" ? (
            <button className="btn primary xl" onClick={closeToday}><Icon name="save" />Close Day</button>
          ) : (
            <span className="badge success">Day closed</span>
          )}
          <button className="btn" onClick={markToday} disabled={Boolean(todayRecord)}><Icon name="calendar" />Today</button>
        </div>
      </div>

      <div className="stat-grid mb-16">
        <div className="stat">
          <div className="label">Present Days</div>
          <div className="value">{summary.presentDays}</div>
          <div className="delta up">{range.label}</div>
        </div>
        <div className="stat">
          <div className="label">Closed Days</div>
          <div className="value">{summary.closedDays}</div>
          <div className="delta">{summary.closedDays ? "Good discipline" : "Close day pending"}</div>
        </div>
        <div className="stat">
          <div className="label">Missed Days</div>
          <div className="value">{summary.missedDays}</div>
          <div className={summary.missedDays ? "delta down" : "delta up"}>{summary.missedDays ? "Review needed" : "No misses"}</div>
        </div>
        <div className="stat">
          <div className="label">Avg Open Duration</div>
          <div className="value">{fmtDuration(summary.averageOpenMinutes)}</div>
          <div className="delta">Based on marked days</div>
        </div>
      </div>

      <div className="grid-2 mb-16">
        <div className="card">
          <div className="card-header">
            <h3>Today Note</h3>
            <span className="meta">{todayRecord ? todayRecord.status : "Not marked"}</span>
          </div>
          <div className="card-body">
            <textarea
              className="textarea"
              rows="4"
              value={noteDraft}
              disabled={!todayRecord}
              placeholder={todayRecord ? "Aaj ka note: late open, market rush, light issue..." : "Attendance mark karne ke baad note add kar sakte ho."}
              onChange={(e) => setNoteDraft(e.target.value)}
            />
            <div className="row" style={{ justifyContent: "flex-end", marginTop: 10 }}>
              <button className="btn primary" disabled={!todayRecord || noteDraft === (todayRecord?.note || "")} onClick={saveNote}><Icon name="save" />Save Note</button>
            </div>
          </div>
        </div>
        <div className="card attendance-rhythm-card">
          <div className="card-header">
            <h3>Daily Rhythm</h3>
            <span className="meta">Shop discipline</span>
          </div>
          <div className="card-body attendance-rhythm">
            <div><span>Open</span><strong>{todayRecord ? fmtTime(todayRecord.openedAt) : "—"}</strong></div>
            <div><span>Close</span><strong>{todayRecord?.closedAt ? fmtTime(todayRecord.closedAt) : "Pending"}</strong></div>
            <div><span>Duration</span><strong>{todayRecord ? fmtDuration(todayDuration) : "—"}</strong></div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Attendance History</h3>
          <span className="meta">{rows.length} days · {range.label}</span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr><th>Date</th><th>Status</th><th>Open</th><th>Close</th><th>Duration</th><th>Note</th></tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr><td colSpan="6" className="empty-cell">No attendance records yet.</td></tr>
              ) : rows.map(row => (
                <tr key={row.id || row.date}>
                  <td>{fmtDate(row.date)}</td>
                  <td><span className={`badge ${row.status === "missed" ? "danger" : row.status === "closed" ? "success" : "warning"}`}>{row.status}</span></td>
                  <td>{fmtTime(row.openedAt)}</td>
                  <td>{fmtTime(row.closedAt)}</td>
                  <td>{fmtDuration(row.durationMinutes)}</td>
                  <td>{row.note || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


/* ============================================================
   Reports + Settings
   ============================================================ */

const DEFAULT_ANALYST_TOOLS = [
  "getTargetStatus",
  "getBusyHours",
  "getBusyDates",
  "getSalesTrend",
  "getExpenseBreakdown",
  "getOutstandingRisks",
  "getPaymentModes",
  "getTopItems",
  "getGstSummary",
  "getAttendanceSummary",
];

const compactHash = (input) => {
  const str = typeof input === "string" ? input : JSON.stringify(input);
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
};

const normalizeAnalystTools = (toolNames) => {
  const allowed = new Set([
    ...DEFAULT_ANALYST_TOOLS,
    "getAppHealth",
  ]);
  const names = (Array.isArray(toolNames) ? toolNames : [])
    .map(String)
    .filter((name) => allowed.has(name));
  return names.length ? [...new Set(names)] : DEFAULT_ANALYST_TOOLS;
};

const sortByAmount = (rows, key = "amount", limit = 6) => (Array.isArray(rows) ? rows : [])
  .map(row => ({ ...row, [key]: Number(row?.[key]) || 0 }))
  .sort((a, b) => (Number(b?.[key]) || 0) - (Number(a?.[key]) || 0))
  .slice(0, limit);

const runLocalAiToolsFromReportData = (reportData = {}, toolNames = DEFAULT_ANALYST_TOOLS) => {
  const names = normalizeAnalystTools(toolNames);
  const totals = reportData.totals || {};
  const gross = Number(totals.grossSales) || 0;
  const collected = Number(totals.collected) || 0;
  const expenses = Number(totals.expenses) || 0;
  const net = Number(totals.netAfterExpenses) || (collected - expenses);
  const outstanding = Number(totals.outstanding) || 0;
  const dailyGoal = Number(reportData.target?.dailyGoal || reportData.dailyGoal || 700) || 700;
  const periodLabel = reportData.range?.label || "Selected period";
  const dailyTrend = (reportData.dailyTrend || []).map(row => ({
    label: row.label || row.date || "",
    date: row.date || null,
    sales: Number(row.sales ?? row.value) || 0,
    expenses: Number(row.expenses) || 0,
    net: Number(row.net ?? ((Number(row.sales ?? row.value) || 0) - (Number(row.expenses) || 0))) || 0,
    bills: Number(row.bills) || 0,
  }));
  const out = {};
  if (names.includes("getTargetStatus")) {
    out.getTargetStatus = {
      periodLabel,
      dailyGoal,
      targetMetric: "netAfterExpenses",
      grossSales: Math.round(gross),
      collected: Math.round(collected),
      expenses: Math.round(expenses),
      netAfterExpenses: Math.round(net),
      achieved: net >= dailyGoal,
      gap: Math.round(net - dailyGoal),
      hitDays: dailyTrend.filter(d => d.net >= dailyGoal).map(d => ({ label: d.label, net: Math.round(d.net) })).slice(0, 12),
      missedDays: dailyTrend.filter(d => (d.sales || d.expenses || d.net) && d.net < dailyGoal).map(d => ({ label: d.label, net: Math.round(d.net) })).slice(0, 12),
    };
  }
  if (names.includes("getBusyHours")) {
    const hours = (reportData.hourlyActivity || [])
      .map(h => ({
        hour: Number(h.hour),
        label: h.label,
        count: Number(h.count) || 0,
        bills: Number(h.bills) || 0,
        payments: Number(h.payments) || 0,
        amount: Math.round(Number(h.amount) || 0),
      }))
      .filter(h => h.count > 0)
      .sort((a, b) => b.count - a.count || b.amount - a.amount);
    out.getBusyHours = {
      totalActivityCount: Number(reportData.totalActivityCount) || hours.reduce((s, h) => s + h.count, 0),
      busiest: hours[0] || { label: "No customer activity", count: 0, amount: 0 },
      topHours: hours.slice(0, 5),
      quietHours: (reportData.quietHours || []).slice(0, 6),
    };
  }
  if (names.includes("getBusyDates")) {
    const busyDates = sortByAmount(reportData.busyDates || dailyTrend, "net", 6).map(d => ({
      label: d.label || d.date || "",
      date: d.date || null,
      sales: Math.round(Number(d.sales) || 0),
      expenses: Math.round(Number(d.expenses) || 0),
      net: Math.round(Number(d.net ?? d.sales) || 0),
      bills: Number(d.bills) || 0,
    }));
    out.getBusyDates = {
      busiestDate: busyDates[0] || null,
      busyDates,
      busyDays: sortByAmount(reportData.busyDays || [], "net", 7),
      targetHitLabels: dailyTrend.filter(d => d.net >= dailyGoal).map(d => d.label).slice(0, 12),
    };
  }
  if (names.includes("getSalesTrend")) {
    const values = dailyTrend.map(d => Number(d.net) || Number(d.sales) || 0);
    const first = values.find(v => Number.isFinite(v)) || 0;
    const last = values.length ? values[values.length - 1] : 0;
    out.getSalesTrend = {
      periodLabel,
      rows: dailyTrend,
      firstValue: Math.round(first),
      lastValue: Math.round(last),
      direction: last > first ? "up" : last < first ? "down" : "flat",
    };
  }
  if (names.includes("getExpenseBreakdown")) {
    const rows = sortByAmount(reportData.expenseBreakdown || [], "amount", 8);
    out.getExpenseBreakdown = {
      totalExpenses: Math.round(expenses),
      topCategory: rows[0] || null,
      rows,
    };
  }
  if (names.includes("getOutstandingRisks")) {
    const rows = sortByAmount(reportData.topDues || [], "amount", 5);
    out.getOutstandingRisks = {
      outstanding: Math.round(outstanding),
      pendingBills: Number(reportData.billStatus?.pending) || 0,
      paidBills: Number(reportData.billStatus?.paid) || 0,
      topDues: rows,
      riskLevel: outstanding > 0 ? (outstanding > gross * 0.35 ? "high" : "medium") : "low",
    };
  }
  if (names.includes("getPaymentModes")) {
    const rows = sortByAmount(reportData.paymentModes || [], "amount", 8);
    out.getPaymentModes = {
      totalCollected: Math.round(collected),
      topMode: rows[0] || null,
      rows,
    };
  }
  if (names.includes("getTopItems")) {
    const rows = sortByAmount(reportData.topItems || [], "amount", 8);
    out.getTopItems = {
      topItem: rows[0] || null,
      rows,
    };
  }
  if (names.includes("getGstSummary")) {
    const rows = (reportData.gstByRate || [])
      .map(x => ({
        rate: Number(x.rate) || 0,
        taxable: Math.round(Number(x.taxable) || 0),
        totalTax: Math.round(Number(x.totalTax) || ((Number(x.cgst) || 0) + (Number(x.sgst) || 0) + (Number(x.igst) || 0))),
      }))
      .sort((a, b) => b.totalTax - a.totalTax);
    out.getGstSummary = {
      totalGst: Math.round(Number(totals.gst) || rows.reduce((s, row) => s + row.totalTax, 0)),
      rates: rows,
    };
  }
  if (names.includes("getAttendanceSummary")) {
    const attendance = reportData.attendance || {};
    const rows = (attendance.rows || []).map(row => ({
      date: row.date || "",
      status: row.status || "missed",
      openedAt: row.openedAt || null,
      closedAt: row.closedAt || null,
      durationMinutes: Math.round(Number(row.durationMinutes) || 0),
      note: row.note || "",
    }));
    out.getAttendanceSummary = {
      periodLabel,
      todayMarked: Boolean(attendance.todayMarked),
      todayStatus: attendance.todayStatus || "not marked",
      presentDays: Number(attendance.presentDays) || 0,
      closedDays: Number(attendance.closedDays) || 0,
      missedDays: Number(attendance.missedDays) || 0,
      averageOpenMinutes: Math.round(Number(attendance.averageOpenMinutes) || 0),
      rows,
      latest: rows[0] || null,
    };
  }
  return out;
};

const aiHourLabel = (hour) => {
  const h = Number(hour) || 0;
  const next = (h + 1) % 24;
  const fmt = (x) => {
    const suffix = x >= 12 ? "PM" : "AM";
    const display = x % 12 || 12;
    return `${display} ${suffix}`;
  };
  return `${fmt(h)} - ${fmt(next)}`;
};

const makeAiReportPayload = ({ period, range, profile, liveInvoices, allInvoices = liveInvoices, scopedExpenses, salesTrend, gstByRate, topExpenses, customers, attendance = [] }) => {
  const customerMap = new Map((customers || []).map(c => [c.id, c]));
  const totals = {
    grossSales: liveInvoices.reduce((s, i) => s + (Number(i.total) || 0), 0),
    collected: liveInvoices.reduce((s, i) => s + collectedForInvoiceInRange(i, range), 0),
    expenses: scopedExpenses.reduce((s, e) => s + (Number(e.amount) || 0), 0),
    gst: liveInvoices.reduce((s, i) => s + (Number(i.cgst) || 0) + (Number(i.sgst) || 0) + (Number(i.igst) || 0), 0),
  };
  totals.netAfterExpenses = totals.collected - totals.expenses;
  totals.outstanding = liveInvoices.reduce((s, i) => s + invoiceOutstanding(i), 0);

  const billStatus = {
    total: liveInvoices.length,
    paid: liveInvoices.filter(i => i.status === "paid").length,
    pending: liveInvoices.filter(i => i.status === "partial" || i.status === "unpaid").length,
    cancelledExcluded: true,
  };

  const modeTotals = {};
  const hourlyActivity = Array.from({ length: 24 }, (_, hour) => ({
    hour,
    label: aiHourLabel(hour),
    count: 0,
    bills: 0,
    payments: 0,
    amount: 0,
  }));
  const addActivity = (dateValue, type, amount = 0) => {
    if(/^\d{4}-\d{2}-\d{2}$/.test(String(dateValue)))return;
    const dt = new Date(dateValue);
    if (Number.isNaN(dt.getTime()) || !inDateRange(dt, range)) return;
    const hour = dt.getHours();
    hourlyActivity[hour].count += 1;
    hourlyActivity[hour][type] += 1;
    hourlyActivity[hour].amount += Number(amount) || 0;
  };
  liveInvoices.forEach((inv) => {
    addActivity(inv.createdAt||inv.date, "bills", inv.total);
  });
  (allInvoices || liveInvoices).forEach((inv) => {
    if (Array.isArray(inv.payments) && inv.payments.length > 0) {
      inv.payments.forEach((p) => {
        if (!inDateRange(p.date || inv.date, range)) return;
        const mode = p.mode || inv.paymentMode || "cash";
        modeTotals[mode] = (modeTotals[mode] || 0) + (Number(p.amount) || 0);
        addActivity(p.date || inv.date, "payments", p.amount);
      });
    } else if ((Number(inv.paid) || 0) > 0 && inDateRange(inv.date, range)) {
      const mode = inv.paymentMode === "partial" ? "cash" : (inv.paymentMode || "cash");
      modeTotals[mode] = (modeTotals[mode] || 0) + (Number(inv.paid) || 0);
      addActivity(inv.date, "payments", inv.paid);
    }
  });

  const itemTotals = {};
  liveInvoices.forEach(inv => (inv.items || []).forEach(li => {
    const key = li.name || "Item";
    itemTotals[key] = (itemTotals[key] || 0) + (Number(li.amount) || 0);
  }));

  const dueTotals = {};
  liveInvoices.forEach(inv => {
    const due = Math.max(0, (Number(inv.total) || 0) - (Number(inv.paid) || 0));
    if (due <= 0 || !inv.customerId) return;
    const customer = customerMap.get(inv.customerId);
    const name = customer?.isWalkIn ? "Walk-in" : (customer?.name || inv.customerName || "Customer");
    dueTotals[name] = (dueTotals[name] || 0) + due;
  });
  const activeHours = hourlyActivity.filter(h => h.count > 0);
  const busiestHour = activeHours.reduce((best, h) => (!best || h.count > best.count || (h.count === best.count && h.amount > best.amount)) ? h : best, null);
  const quietHours = hourlyActivity
    .filter(h => h.count === 0 && h.hour >= 8 && h.hour <= 22)
    .map(h => h.label)
    .slice(0, 6);
  const totalActivityCount = hourlyActivity.reduce((s, h) => s + h.count, 0);
  const attendanceSummary = attendanceSummaryForRange(attendance, range, period);
  const peakCustomerWindow = busiestHour ? {
    hour: busiestHour.hour,
    label: busiestHour.label,
    count: busiestHour.count,
    bills: busiestHour.bills,
    payments: busiestHour.payments,
    amount: Math.round(busiestHour.amount),
  } : {
    hour: null,
    label: "No customer activity",
    count: 0,
    bills: 0,
    payments: 0,
    amount: 0,
  };
  const dailyGoal = Math.max(1, Math.round(Number(profile?.dailyGoal) || 700));
  const dailyRows = salesTrend.map(d => ({
    label: d.label,
    date: d.date || null,
    sales: Number(d.sales ?? d.value) || 0,
    expenses: Number(d.expenses) || 0,
    net: Number(d.net ?? ((Number(d.sales ?? d.value) || 0) - (Number(d.expenses) || 0))) || 0,
    bills: Number(d.bills) || 0,
  }));
  const busyDates = dailyRows
    .filter(d => d.sales || d.expenses || d.net || d.bills)
    .sort((a, b) => b.net - a.net || b.sales - a.sales)
    .slice(0, 8);
  const busyDayMap = {};
  liveInvoices.forEach((inv) => {
    const dt = new Date(inv.date);
    if (Number.isNaN(dt.getTime())) return;
    const day = dt.toLocaleDateString("en-IN", { weekday: "long" });
    busyDayMap[day] = busyDayMap[day] || { day, sales: 0, expenses: 0, net: 0, bills: 0 };
    busyDayMap[day].sales += Number(inv.total) || 0;
    busyDayMap[day].net += Number(inv.total) || 0;
    busyDayMap[day].bills += 1;
  });
  scopedExpenses.forEach((exp) => {
    const dt = new Date(exp.date);
    if (Number.isNaN(dt.getTime())) return;
    const day = dt.toLocaleDateString("en-IN", { weekday: "long" });
    busyDayMap[day] = busyDayMap[day] || { day, sales: 0, expenses: 0, net: 0, bills: 0 };
    busyDayMap[day].expenses += Number(exp.amount) || 0;
    busyDayMap[day].net -= Number(exp.amount) || 0;
  });

  const reportData = {
    shopName: profile?.shopName || "Shop",
    language: "Hinglish",
    period,
    range: {
      label: range.label,
      start: range.start ? isoDay(range.start) : null,
      end: range.end ? isoDay(range.end) : null,
    },
    target: {
      dailyGoal,
      targetMetric: "netAfterExpenses",
      achieved: totals.netAfterExpenses >= dailyGoal,
      gap: Math.round(totals.netAfterExpenses - dailyGoal),
    },
    totals,
    billStatus,
    dailyTrend: dailyRows,
    busyDates,
    busyDays: Object.values(busyDayMap).sort((a, b) => b.net - a.net || b.sales - a.sales),
    attendance: attendanceSummary,
    hourlyActivity,
    peakCustomerWindow,
    quietHours,
    totalActivityCount,
    paymentModes: Object.entries(modeTotals).map(([mode, amount]) => ({ mode, amount })),
    gstByRate: Object.entries(gstByRate).map(([rate, v]) => ({
      rate: Number(rate),
      taxable: Math.round(Number(v.taxable) || 0),
      cgst: Math.round(Number(v.cgst) || 0),
      sgst: Math.round(Number(v.sgst) || 0),
      igst: Math.round(Number(v.igst) || 0),
      totalTax: Math.round((Number(v.cgst) || 0) + (Number(v.sgst) || 0) + (Number(v.igst) || 0)),
    })),
    expenseBreakdown: topExpenses.map(([category, amount]) => ({ category, amount })),
    topItems: Object.entries(itemTotals).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, amount]) => ({ name, amount })),
    topDues: Object.entries(dueTotals).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, amount]) => ({ name, amount })),
  };

  const fingerprint = compactHash(reportData);
  const startKey = reportData.range.start || "all";
  const endKey = reportData.range.end || "all";
  return {
    reportData,
    fingerprint,
    cacheKey: `${period}:${startKey}:${endKey}:${fingerprint}`,
  };
};

// Deterministic local insights — no AI/model, just rules over the period's own data.
const InsightsPanel = ({ payload }) => {
  const reportData = payload.reportData || {};
  const facts = React.useMemo(
    () => runLocalAiToolsFromReportData(reportData, DEFAULT_ANALYST_TOOLS),
    [reportData],
  );
  const targetFacts = facts.getTargetStatus;
  const busyFacts = facts.getBusyHours;
  const busyDateFacts = facts.getBusyDates;
  const dueFacts = facts.getOutstandingRisks;
  const itemFacts = facts.getTopItems;
  const expenseFacts = facts.getExpenseBreakdown;
  const paymentFacts = facts.getPaymentModes;

  const smartCards = [
    {
      label: "Target",
      value: targetFacts?.achieved ? "Hit" : "Short",
      note: targetFacts ? `${fmtINR(targetFacts.netAfterExpenses)} net / ${fmtINR(targetFacts.dailyGoal)} goal` : "No target data",
      tone: targetFacts?.achieved ? "good" : "warn",
    },
    {
      label: "After Expense",
      value: fmtINR(targetFacts?.netAfterExpenses || 0),
      note: `Expenses ${fmtINR(targetFacts?.expenses || 0)}`,
      tone: (targetFacts?.netAfterExpenses || 0) >= 0 ? "good" : "danger",
    },
    {
      label: "Busy Hour",
      value: busyFacts?.busiest?.count > 0 ? busyFacts.busiest.label : "No activity",
      note: busyFacts?.busiest?.count > 0 ? `${busyFacts.busiest.count} activities · ${fmtINR(busyFacts.busiest.amount || 0)}` : "No bill/payment times yet",
      tone: "info",
    },
    {
      label: "Busy Date",
      value: busyDateFacts?.busiestDate?.label || "No date",
      note: busyDateFacts?.busiestDate ? `${fmtINR(busyDateFacts.busiestDate.net)} net` : "No day-level activity",
      tone: "info",
    },
    {
      label: "Top Service",
      value: itemFacts?.topItem?.name || "No item",
      note: itemFacts?.topItem ? fmtINR(itemFacts.topItem.amount) : "Bill items empty",
      tone: "good",
    },
    {
      label: "Dues Risk",
      value: fmtINR(dueFacts?.outstanding || 0),
      note: dueFacts?.outstanding > 0 ? `${dueFacts.pendingBills || 0} pending bills` : "Clear for this period",
      tone: dueFacts?.outstanding > 0 ? "warn" : "good",
    },
  ];

  const peak = reportData.peakCustomerWindow || {};
  const activeHours = (reportData.hourlyActivity || []).filter(h => h.count > 0);
  const maxHourCount = Math.max(...activeHours.map(h => h.count), 1);
  const periodLabel = reportData.range?.label || "Selected period";
  const hasData = (targetFacts?.grossSales || 0) > 0 || (targetFacts?.collected || 0) > 0 || (targetFacts?.expenses || 0) > 0;

  const peakTimeInsight = peak.count > 0
    ? `${peak.label} sabse active window hai: ${peak.count} customer activities, ${fmtINR(peak.amount || 0)} linked amount.`
    : "Is period me bills/payments ke timestamp se customer activity nahi mili.";

  const moneyInsights = hasData ? [
    `Invoice value ${fmtINR(targetFacts.grossSales)}, collection ${fmtINR(targetFacts.collected)}.`,
    `Expenses ${fmtINR(targetFacts.expenses)} ke baad net ${fmtINR(targetFacts.netAfterExpenses)}.`,
    paymentFacts?.topMode ? `Top payment mode ${paymentFacts.topMode.mode}: ${fmtINR(paymentFacts.topMode.amount)}.` : "",
  ].filter(Boolean) : ["Is period me sales/expense entries nahi mili."];

  const riskFlags = [
    dueFacts?.outstanding > 0 ? `Outstanding ${fmtINR(dueFacts.outstanding)} pending hai${dueFacts.topDues?.[0] ? `; top due ${dueFacts.topDues[0].name} ${fmtINR(dueFacts.topDues[0].amount)}.` : "."}` : "",
    expenseFacts?.topCategory ? `Top expense ${expenseFacts.topCategory.category}: ${fmtINR(expenseFacts.topCategory.amount)}.` : "",
    targetFacts && !targetFacts.achieved && hasData ? `Target ${fmtINR(Math.abs(targetFacts.gap))} se short hai.` : "",
  ].filter(Boolean);

  const nextActions = hasData ? [
    dueFacts?.outstanding > 0 ? "Pending dues ko same-day follow-up list me rakho." : "Collection clean hai; same flow continue rakho.",
    itemFacts?.topItem ? `${itemFacts.topItem.name} demand item hai; rate aur service speed check rakho.` : "Top item data banne ke liye bills add karo.",
    busyFacts?.busiest?.count > 0 ? `${busyFacts.busiest.label} peak time hai; us window me staff/stock ready rakho.` : "Daily close aur expense entry miss mat karo.",
  ].filter(Boolean) : ["Bills aur expenses add hote hi yahan trend aur actions dikhne lagenge."];

  return (
    <div className="card ai-analyst-card mb-16">
      <div className="card-header">
        <div>
          <h3>Smart Insights</h3>
          <span className="meta">Auto-calculated · {periodLabel}</span>
        </div>
      </div>
      <div className="card-body ai-body">
        <div className="ai-smart-grid">
          {smartCards.map(card => (
            <section key={card.label} className={`ai-smart-card ${card.tone}`}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.note}</p>
            </section>
          ))}
        </div>
        <div className="ai-workspace">
          <section className="ai-peak-panel">
            <div className="ai-peak-summary">
              <span>Peak Customer Time</span>
              <strong>{peak.label || "No activity"}</strong>
              <p>{peakTimeInsight}</p>
            </div>
            <div className="ai-hour-bars">
              {activeHours.length === 0 ? (
                <em>No bill/payment timestamps in this period.</em>
              ) : activeHours.map(h => (
                <div key={h.hour} className="ai-hour-row">
                  <span>{h.label}</span>
                  <i><b style={{ width: `${Math.max(8, (h.count / maxHourCount) * 100)}%` }} /></i>
                  <strong>{h.count}</strong>
                </div>
              ))}
            </div>
          </section>
          <div className="ai-insight-columns">
            <section>
              <span>Money</span>
              <ul>{moneyInsights.map((x, i) => <li key={i}>{x}</li>)}</ul>
            </section>
            <section>
              <span>Risk</span>
              <ul>{(riskFlags.length ? riskFlags : ["Is period me koi clear risk flag nahi mila."]).map((x, i) => <li key={i}>{x}</li>)}</ul>
            </section>
            <section>
              <span>Next Actions</span>
              <ul>{nextActions.map((x, i) => <li key={i}>{x}</li>)}</ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reports = ({ invoices, expenses, customers, profile, attendance = [] }) => {
 const toast=useToast();
  const [exportType,setExportType]=React.useState("Sales");
  const [period, setPeriod] = React.useState("month");
  const [customRange, setCustomRange] = React.useState({ start: isoDay(), end: isoDay() });
  const range = React.useMemo(() => getDateRange(period, customRange), [period, customRange]);

  const liveInvoices = invoices.filter(i => !i.cancelled && inDateRange(i.date, range));
  const allLiveInvoices = invoices.filter(i => !i.cancelled);
  const scopedExpenses = expenses.filter(e => inDateRange(e.date, range));
  const totalRev = liveInvoices.reduce((s, i) => s + (Number(i.total) || 0), 0);
  const totalCol = invoices.reduce((s, i) => s + collectedForInvoiceInRange(i, range), 0);
  const totalGst = liveInvoices.reduce((s, i) => s + (Number(i.cgst) || 0) + (Number(i.sgst) || 0) + (Number(i.igst) || 0), 0);
  const totalExp = scopedExpenses.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const outstanding = liveInvoices.reduce((s, i) => s + invoiceOutstanding(i), 0);
  const netAfterExpenses = totalCol - totalExp;
  const margin = totalCol > 0 ? (netAfterExpenses / totalCol) * 100 : 0;

  const salesTrend = (() => {
    if (period === "all") {
      const byMonth = {};
      liveInvoices.forEach(inv => {
        const dt = new Date(inv.date);
        if (Number.isNaN(dt.getTime())) return;
        const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}`;
        byMonth[key] = byMonth[key] || { sales: 0, expenses: 0, bills: 0 };
        byMonth[key].sales += collectedForInvoiceInRange(inv, { start: new Date(dt.getFullYear(), dt.getMonth(), 1), end: new Date(dt.getFullYear(), dt.getMonth() + 1, 0, 23, 59, 59, 999) });
        byMonth[key].bills += 1;
      });
      scopedExpenses.forEach(exp => {
        const dt = new Date(exp.date);
        if (Number.isNaN(dt.getTime())) return;
        const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}`;
        byMonth[key] = byMonth[key] || { sales: 0, expenses: 0, bills: 0 };
        byMonth[key].expenses += Number(exp.amount) || 0;
      });
      const rows = Object.entries(byMonth)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => {
          const [year, month] = key.split("-").map(Number);
          return {
            label: new Date(year, month - 1, 1).toLocaleDateString("en-IN", { month: "short", year: "2-digit" }),
            date: `${key}-01`,
            value: value.sales,
            sales: value.sales,
            expenses: value.expenses,
            net: value.sales - value.expenses,
            bills: value.bills,
          };
        });
      return rows.length ? rows : [{ label: "No data", value: 0 }];
    }
    const trendDays = dayLabelsForRange(range, period);
    return trendDays.map((d) => {
      const key = d.toDateString();
      const dayInvoices = liveInvoices.filter(inv => new Date(inv.date).toDateString() === key);
      const sales = allLiveInvoices.reduce((s, inv) => s + collectedForInvoiceOnDate(inv, d), 0);
      const expensesForDay = scopedExpenses
        .filter(exp => new Date(exp.date).toDateString() === key)
        .reduce((s, exp) => s + (Number(exp.amount) || 0), 0);
      return {
        label: d.toLocaleDateString("en-IN", period === "month" ? { day: "2-digit" } : period === "custom" ? { day: "2-digit", month: "short" } : { weekday: "short" }),
        date: isoDay(d),
        value: sales,
        sales,
        expenses: expensesForDay,
        net: sales - expensesForDay,
        bills: dayInvoices.length,
      };
    });
  })();

  const gstByRate = {};
  liveInvoices.forEach(inv => {
    const rawSubtotal = (inv.items || []).reduce((s, li) => s + (Number(li.amount) || 0), 0);
    const taxableBase = Number.isFinite(Number(inv.subtotal)) ? Number(inv.subtotal) : Math.max(0, rawSubtotal - (Number(inv.discount) || 0));
    const ratio = rawSubtotal > 0 ? taxableBase / rawSubtotal : 1;
    (inv.items || []).forEach(li => {
      const rate = Number(li.gst) || 0;
      const taxable = (Number(li.amount) || 0) * ratio;
      if (!gstByRate[rate]) gstByRate[rate] = { taxable: 0, cgst: 0, sgst: 0, igst: 0 };
      gstByRate[rate].taxable += taxable;
      if ((Number(inv.igst) || 0) > 0) {
        gstByRate[rate].igst += taxable * rate / 100;
      } else {
        gstByRate[rate].cgst += taxable * rate / 200;
        gstByRate[rate].sgst += taxable * rate / 200;
      }
    });
  });

  const expenseByCat = {};
  scopedExpenses.forEach(e => {
    const key = e.category || "Other";
    expenseByCat[key] = (expenseByCat[key] || 0) + (Number(e.amount) || 0);
  });
  const topExpenses = Object.entries(expenseByCat).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const paidCount = liveInvoices.filter(i => i.status === "paid").length;
  const pendingCount = liveInvoices.filter(i => i.status === "partial" || i.status === "unpaid").length;
  const insightsPayload = React.useMemo(() => makeAiReportPayload({
    period,
    range,
    profile,
    liveInvoices,
    allInvoices: invoices,
    scopedExpenses,
    salesTrend,
    gstByRate,
    topExpenses,
    customers,
    attendance,
  }), [period, range, profile, liveInvoices, invoices, scopedExpenses, salesTrend, gstByRate, topExpenses, customers, attendance]);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Analytics</h2>
          <div className="sub">Daily sales, GST, expenses and margin for {range.label.toLowerCase()}</div>
        </div>
        <div className="actions" style={{flexWrap:'wrap'}}><select className="select" aria-label="Report export type" value={exportType} onChange={e=>setExportType(e.target.value)}>{['Sales','Daily','Monthly','Services','Customers','Payment methods','GST'].map(t=><option key={t}>{t}</option>)}</select>{['csv','pdf'].map(format=><button className="btn" key={format} onClick={()=>window.billing.exportReport({type:exportType,from:range.start?isoDay(range.start):'2000-01-01',to:range.end?isoDay(range.end):isoDay(),format}).then(path=>path&&toast('Report saved')).catch(e=>toast(e.message,'error'))}>Export {format.toUpperCase()}</button>)}
          <DateRangeFilter
            period={period}
            setPeriod={setPeriod}
            customRange={customRange}
            setCustomRange={setCustomRange}
          />
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat">
          <div className="label">Gross Sales</div>
          <div className="value">{fmtINR(totalRev)}</div>
          <div className="delta">{liveInvoices.length} active bills</div>
        </div>
        <div className="stat">
          <div className="label">Collections</div>
          <div className="value">{fmtINR(totalCol)}</div>
          <div className="delta">{outstanding > 0 ? `${fmtINR(outstanding)} due` : "No dues in period"}</div>
        </div>
        <div className="stat">
          <div className="label">Expenses</div>
          <div className="value">{fmtINR(totalExp)}</div>
          <div className={totalExp > 0 ? "delta down" : "delta"}>{scopedExpenses.length} entries</div>
        </div>
        <div className="stat">
          <div className="label">Net After Expenses</div>
          <div className="value">{fmtINR(netAfterExpenses)}</div>
          <div className={netAfterExpenses >= 0 ? "delta up" : "delta down"}>{totalCol > 0 ? `Margin ${margin.toFixed(1)}%` : "No collections yet"}</div>
        </div>
      </div>

      <div className="card mb-16">
        <div className="card-header">
          <h3>Collection Trend</h3>
          <span className="meta">{range.label} · {paidCount} paid / {pendingCount} pending</span>
        </div>
        <BarChart data={salesTrend} height={240} />
      </div>

      <InsightsPanel payload={insightsPayload} />

      <div className="grid-2 mb-16">
        <div className="card">
          <div className="card-header">
            <h3>Expense Breakdown</h3>
            <span className="meta">{fmtINR(totalExp)}</span>
          </div>
          <div className="card-body">
            {topExpenses.length === 0 ? (
              <div className="empty" style={{ padding: 24 }}>
                <Icon name="expense" size={30} />
                <h4>No expenses</h4>
                <p>No expense entries in this period.</p>
              </div>
            ) : topExpenses.map(([cat, amt]) => (
              <div key={cat} className="expense-row">
                <div className="expense-row-top">
                  <span>{cat}</span>
                  <strong>{fmtINR(amt)}</strong>
                </div>
                <div className="expense-meter">
                  <i style={{ width: `${(amt / Math.max(1, totalExp)) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>GST Summary</h3>
            <span className="meta">{fmtINR(totalGst)} tax</span>
          </div>
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>Rate</th><th className="num">Taxable</th><th className="num">CGST</th><th className="num">SGST</th><th className="num">IGST</th><th className="num">Tax</th></tr></thead>
              <tbody>
                {Object.entries(gstByRate).sort((a, b) => Number(a[0]) - Number(b[0])).map(([rate, v]) => (
                  <tr key={rate}>
                    <td className="strong">{rate}%</td>
                    <td className="num">{fmtINR(v.taxable)}</td>
                    <td className="num">{fmtINR(v.cgst)}</td>
                    <td className="num">{fmtINR(v.sgst)}</td>
                    <td className="num">{fmtINR(v.igst)}</td>
                    <td className="num strong">{fmtINR(v.cgst + v.sgst + v.igst)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {Object.keys(gstByRate).length === 0 && (
              <div className="empty" style={{ padding: 24 }}>
                <Icon name="reports" size={30} />
                <h4>No GST data</h4>
                <p>No active invoices in this period.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsField = ({ label, hint, children }) => (
  <div className="field" style={{ marginBottom: 14 }}>
    <label>{label}</label>
    {children}
    {hint && <div className="hint">{hint}</div>}
  </div>
);

const Settings = ({ profile, setProfile }) => {
  const toast = useToast();
  const [tab, setTab] = React.useState("business");
  const [draft, setDraft] = React.useState(profile);
  const [startupInfo, setStartupInfo] = React.useState({ label: window.shriDesktop?.startup ? "Checking startup" : "Desktop app only" });
  const logoInputId = React.useId();
  const [printers,setPrinters]=React.useState([]);React.useEffect(()=>{window.billing.printers().then(setPrinters).catch(()=>{});},[]);
  const [newModeName, setNewModeName] = React.useState("");
  const [newModeColor, setNewModeColor] = React.useState("#7c3aed");

  const draftModes = normalizeCustomPayModes(draft.customPayModes);

  const addPayMode = () => {
    const label = newModeName.trim().slice(0, 18);
    if (!label) { toast("Payment method ka naam likho", "error"); return; }
    const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    if (!id) { toast("Naam me letters/numbers hone chahiye", "error"); return; }
    const reserved = ["cash", "upi", "card", "bank", "partial", "pending", "later"];
    if (reserved.includes(id) || draftModes.some(m => m.id === id)) {
      toast("Ye payment method pehle se hai", "error");
      return;
    }
    setDraft(prev => ({ ...prev, customPayModes: [...normalizeCustomPayModes(prev.customPayModes), { id, label, color: newModeColor }] }));
    setNewModeName("");
    toast(`"${label}" add ho gaya — Save Changes dabao`);
  };

  const updatePayMode = (id, patch) => {
    setDraft(prev => ({
      ...prev,
      customPayModes: normalizeCustomPayModes(prev.customPayModes).map(m => m.id === id ? { ...m, ...patch } : m),
    }));
  };

  const removePayMode = (id, label) => {
    if (!confirm(`"${label}" payment method hatana hai? Purane bills me iska naam dikhta rahega.`)) return;
    setDraft(prev => ({ ...prev, customPayModes: normalizeCustomPayModes(prev.customPayModes).filter(m => m.id !== id) }));
  };

  const refreshStartupInfo = React.useCallback(async () => {
    const startup = window.shriDesktop?.startup;
    if (!startup) {
      setStartupInfo({ label: "Desktop app only" });
      return;
    }
    try {
      const status = await startup.status();
      if (!status?.supported) setStartupInfo({ label: "Startup not supported here" });
      else setStartupInfo({ label: status.enabled ? "Enabled" : "Disabled", path: status.shortcutPath });
    } catch (error) {
      setStartupInfo({ label: error?.message || "Startup check failed" });
    }
  }, []);

  React.useEffect(() => { refreshStartupInfo(); }, [refreshStartupInfo]);

  const save = async () => {
    const normalizedDraft = {
      ...draft,
      dailyGoal: Math.max(1, Math.round(Number(draft.dailyGoal) || 700)),
      autoLaunchOnLogin: draft.autoLaunchOnLogin !== false,
      customPayModes: normalizeCustomPayModes(draft.customPayModes),
    };
    try{await setProfile(normalizedDraft);}catch(e){toast(e.message,"error");return;}
    setDraft(normalizedDraft);
    toast("Settings saved");
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type?.startsWith("image/")) {
      toast("Logo ke liye image file choose karo", "error");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast("Logo image 2MB se chhoti rakho", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setDraft(prev => ({ ...prev, shopLogo: String(reader.result || "") }));
      toast("Logo ready — Save Changes dabao");
    };
    reader.onerror = () => toast("Logo upload failed", "error");
    reader.readAsDataURL(file);
  };

  const Field = SettingsField;

  return (
    <div className="page" style={{ maxWidth: 980 }}>
      <div className="page-header">
        <div><h2>Settings</h2><div className="sub">Configure your shop, taxes and invoice template</div></div>
        <div className="actions">
          <button className="btn" onClick={() => setDraft(profile)}>Cancel</button>
          <button className="btn primary" onClick={save}><Icon name="save" />Save Changes</button>
        </div>
      </div>

      <div className="tabs">
        {[
          { id: "business", label: "Business Details", icon: "building" },
          { id: "tax", label: "Tax & Compliance", icon: "file" },
          { id: "invoice", label: "Invoice Template", icon: "invoice" },
          { id: "bank", label: "Bank & Payments", icon: "card" },{id:"desktop",label:"Desktop & Backups",icon:"save"},
        ].map(t => (
          <div key={t.id} className={`tab ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
            {t.label}
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-body">
          {tab === "business" && (
            <div className="grid-2">
              <div className="logo-upload-card">
                <div className="logo-upload-preview">
                  {draft.shopLogo
                    ? <img src={draft.shopLogo} alt="Shop logo preview" />
                    : <span>{(draft.shopName || "SB").split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase()}</span>}
                </div>
                <div className="logo-upload-copy">
                  <strong>Invoice Logo</strong>
                  <span>Upload shop logo/photo. Ye invoice ke top right circle me print hoga.</span>
                </div>
                <input id={logoInputId} type="file" accept="image/png,image/jpeg,image/webp" onChange={handleLogoUpload} hidden />
                <label className="btn sm" htmlFor={logoInputId}><Icon name="image" />Upload</label>
                {draft.shopLogo && (
                  <button className="btn sm ghost" onClick={() => setDraft({ ...draft, shopLogo: "" })}>Remove</button>
                )}
              </div>
              <Field label="Shop Name"><input className="input" value={draft.shopName} onChange={(e) => setDraft({ ...draft, shopName: e.target.value })} /></Field>
              <Field label="Tagline / Sub-name"><input className="input" value={draft.tagline} onChange={(e) => setDraft({ ...draft, tagline: e.target.value })} /></Field>
              <Field label="Owner Name"><input className="input" value={draft.ownerName} onChange={(e) => setDraft({ ...draft, ownerName: e.target.value })} /></Field>
              <Field label="Business Type">
                <select className="select" value={draft.businessType} onChange={(e) => setDraft({ ...draft, businessType: e.target.value })}>
                  <option>Cyber Café & Printing</option><option>Retail</option><option>Services</option><option>Wholesale</option>
                </select>
              </Field>
              <Field label="Phone"><input className="input" value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} /></Field>
              <Field label="Email"><input className="input" value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} /></Field>
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="Address"><textarea className="textarea" rows="2" value={draft.address} onChange={(e) => setDraft({ ...draft, address: e.target.value })} /></Field>
              </div>
              <Field label="State"><input className="input" value={draft.state} onChange={(e) => setDraft({ ...draft, state: e.target.value })} /></Field>
              <Field label="State Code" hint="2-digit GST state code"><input className="input" value={draft.stateCode} onChange={(e) => setDraft({ ...draft, stateCode: e.target.value })} /></Field>
              <Field label="Daily Goal" hint="Dashboard target amount per day">
                <input
                  className="input mono"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="700"
                  value={draft.dailyGoal ?? ""}
                  onChange={(e) => setDraft({ ...draft, dailyGoal: e.target.value.replace(/[^\d]/g, "") })}
                />
              </Field>
              <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "12px 0", borderTop: "1px solid var(--border)" }}>
                <div>
                  <div style={{ fontWeight: 600 }}>Start app when PC starts</div>
                  <div className="hint">Windows login par Shri Billing normal window me khul jayegi. Status: {startupInfo.label}</div>
                </div>
                <Switch on={draft.autoLaunchOnLogin !== false} onChange={(v) => setDraft({ ...draft, autoLaunchOnLogin: v })} />
              </div>
            </div>
          )}
          {tab === "tax" && (
            <div className="grid-2">
              <Field label="GSTIN" hint="15-character GST Identification Number"><input className="input mono" value={draft.gstin} onChange={(e) => setDraft({ ...draft, gstin: e.target.value })} /></Field>
              <Field label="PAN"><input className="input mono" value={draft.pan} onChange={(e) => setDraft({ ...draft, pan: e.target.value })} /></Field>
              <Field label="Udyam / MSME Number" hint="UDYAM-XX-00-0000000"><input className="input mono" value={draft.udyam} onChange={(e) => setDraft({ ...draft, udyam: e.target.value })} /></Field>
              <Field label="FSSAI / Trade License (Optional)"><input className="input mono" value={draft.fssai} onChange={(e) => setDraft({ ...draft, fssai: e.target.value })} /></Field>
              <Field label="GST Registration Type">
                <select className="select" value={draft.gstType} onChange={(e) => setDraft({ ...draft, gstType: e.target.value })}>
                  <option>Regular</option><option>Composition</option><option>Unregistered</option>
                </select>
              </Field>
              <Field label="Default Tax Behavior">
                <select className="select" value={draft.taxBehavior} onChange={(e) => setDraft({ ...draft, taxBehavior: e.target.value })}>
                  <option>Tax exclusive (added on top)</option>
                </select>
              </Field>
              <div style={{ gridColumn: "1 / -1", display: "flex", gap: 16, padding: "8px 0", borderTop: "1px solid var(--border)", marginTop: 4 }}>
                <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>Show HSN/SAC on invoices</div>
                    <div className="hint">Required for businesses above ₹5cr turnover</div>
                  </div>
                  <Switch on={draft.showHSN} onChange={(v) => setDraft({ ...draft, showHSN: v })} />
                </div>
              </div>
              <div style={{ gridColumn: "1 / -1", display: "flex", gap: 16 }}>
                <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>Generate E-Invoice (IRN)</div>
                    <div className="hint">GST filing integration is not configured.</div>
                  </div>
                  <span className="badge">Integration not configured</span>
                </div>
              </div>
            </div>
          )}
          {tab === "invoice" && (
            <div className="grid-2">
              <Field label="Invoice Prefix" hint="Example: INV/2025-26/"><input className="input mono" value={draft.invoicePrefix} onChange={(e) => setDraft({ ...draft, invoicePrefix: e.target.value })} /></Field>
              <Field label="Next Invoice Number"><input className="input mono" type="number" readOnly title="Assigned transactionally when issuing a bill" value={draft.nextInvoiceNo} /></Field>
              <Field label="Default Payment Terms (days)"><input className="input" type="number" value={draft.paymentTerms} onChange={(e) => setDraft({ ...draft, paymentTerms: e.target.value })} /></Field>
              <Field label="Default Currency">
                <select className="select" value={draft.currency} onChange={(e) => setDraft({ ...draft, currency: e.target.value })}>
                  <option>INR (₹)</option>
                </select>
              </Field>
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="Invoice Footer Note"><textarea className="textarea" rows="3" value={draft.footerNote} onChange={(e) => setDraft({ ...draft, footerNote: e.target.value })} /></Field>
              </div>
            </div>
          )}
          {tab==="desktop"&&<div className="grid-2"><Field label="Daily backup"><Switch on={draft.dailyBackup!==false} onChange={v=>setDraft({...draft,dailyBackup:v})}/></Field><Field label="Backup on exit"><Switch on={!!draft.exitBackup} onChange={v=>setDraft({...draft,exitBackup:v})}/></Field><Field label="Include invoice PDFs"><Switch on={!!draft.backupPdfs} onChange={v=>setDraft({...draft,backupPdfs:v})}/></Field><Field label="Round new bills to nearest rupee"><Switch on={draft.roundRupee!==false} onChange={v=>setDraft({...draft,roundRupee:v})}/></Field><Field label="A4 printer"><select className="select" value={draft.printer||''} onChange={e=>setDraft({...draft,printer:e.target.value})}><option value="">Windows default printer</option>{printers.map(name=><option key={name}>{name}</option>)}</select></Field><Field label="Backup folder"><input className="input" readOnly value={draft.backupDirectory||'Documents / SHRI BILLING Data / backups'}/><button className="btn sm" onClick={async()=>{const path=await window.billing.chooseBackupDirectory();if(path)setDraft({...draft,backupDirectory:path});}}>Choose folder</button></Field></div>}
          {tab === "bank" && (
            <div className="grid-2">
              <Field label="Bank Name"><input className="input" value={draft.bankName} onChange={(e) => setDraft({ ...draft, bankName: e.target.value })} /></Field>
              <Field label="Account Number"><input className="input mono" value={draft.bankAccount} onChange={(e) => setDraft({ ...draft, bankAccount: e.target.value })} /></Field>
              <Field label="IFSC Code"><input className="input mono" value={draft.bankIFSC} onChange={(e) => setDraft({ ...draft, bankIFSC: e.target.value })} /></Field>
              <Field label="Branch"><input className="input" value={draft.bankBranch} onChange={(e) => setDraft({ ...draft, bankBranch: e.target.value })} /></Field>
              <Field label="UPI ID" hint="For QR code on invoices"><input className="input mono" value={draft.upiId} onChange={(e) => setDraft({ ...draft, upiId: e.target.value })} /></Field>
              <Field label="Default Payment Mode">
                <select className="select" value={draft.defaultPayment} onChange={(e) => setDraft({ ...draft, defaultPayment: e.target.value })}>
                  <option>Cash</option><option>UPI</option><option>Card</option><option>Bank Transfer</option>
                  {draftModes.map(m => <option key={m.id}>{m.label}</option>)}
                </select>
              </Field>

              <div className="paymode-manager" style={{ gridColumn: "1 / -1" }}>
                <div className="paymode-manager-head">
                  <div>
                    <h4>Custom Payment Methods</h4>
                    <p>Apne hisaab se naye payment buttons banao (jaise Paytm, PhonePe, Udhaar Book) — naam aur color dono aapki marji ka. Ye New Bill aur Record Payment dono jagah dikhenge.</p>
                  </div>
                </div>

                {draftModes.length > 0 && (
                  <div className="paymode-list">
                    {draftModes.map(m => (
                      <div key={m.id} className="paymode-row">
                        <input
                          type="color"
                          className="paymode-color"
                          value={m.color}
                          title="Button ka color badlo"
                          onChange={(e) => updatePayMode(m.id, { color: e.target.value })}
                        />
                        <input
                          className="input"
                          style={{ flex: 1 }}
                          value={m.label}
                          maxLength={18}
                          onChange={(e) => updatePayMode(m.id, { label: e.target.value })}
                        />
                        <span className="paymode-preview" style={{
                          borderColor: m.color,
                          color: m.color,
                          background: `color-mix(in oklab, ${m.color} 12%, var(--surface))`,
                        }}>
                          <span className="pm-dot" style={{ background: m.color }} />{m.label || "Method"}
                        </span>
                        <button className="icon-btn" title="Delete method" onClick={() => removePayMode(m.id, m.label)}>
                          <Icon name="trash" size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="paymode-add">
                  <input
                    type="color"
                    className="paymode-color"
                    value={newModeColor}
                    title="Naye button ka color"
                    onChange={(e) => setNewModeColor(e.target.value)}
                  />
                  <div className="paymode-swatches">
                    {["#7c3aed", "#0ea5e9", "#16a34a", "#f59e0b", "#e11d48", "#0f766e"].map(c => (
                      <button key={c} type="button"
                        className={`paymode-swatch ${newModeColor === c ? "active" : ""}`}
                        style={{ background: c }}
                        onClick={() => setNewModeColor(c)} />
                    ))}
                  </div>
                  <input
                    className="input"
                    style={{ flex: 1 }}
                    placeholder="Naya method — e.g. Paytm, PhonePe, Cheque"
                    value={newModeName}
                    maxLength={18}
                    onChange={(e) => setNewModeName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") addPayMode(); }}
                  />
                  <button className="btn primary" onClick={addPayMode}><Icon name="plus" size={13} />Add Method</button>
                </div>
                <small className="paymode-hint">Add/edit ke baad upar <b>Save Changes</b> dabana mat bhoolna. Method delete karne par purane bills ka record kharab nahi hota.</small>
              </div>
              <div className="upi-preview-card">
                {draft.upiId ? (
                  <>
                    <div className="qr-box"></div>
                    <div>
                      <strong>UPI QR Preview</strong>
                      <span>Invoice me QR automatic due amount ke saath generate hoga.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="upi-preview-empty"><Icon name="barcode" size={22} /></div>
                    <div>
                      <strong>UPI QR Generator</strong>
                      <span>UPI ID add karte hi preview aur invoice QR ready ho jayega.</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SetupWizard = ({ profile, setProfile }) => {
  const toast = useToast();
  const [draft, setDraft] = React.useState({
    shopName: profile.shopName || "",
    ownerName: profile.ownerName || "",
    businessType: profile.businessType || "Services",
    phone: profile.phone || "",
    address: profile.address || "",
    state: profile.state || "",
    dailyGoal: profile.dailyGoal || 700,
    upiId: profile.upiId || "",
  });

  const save = () => {
    const shopName = draft.shopName.trim();
    const ownerName = draft.ownerName.trim();
    if (!shopName || !ownerName) {
      toast("Shop name aur owner name required hai", "error");
      return;
    }
    setProfile({
      ...profile,
      ...draft,
      shopName,
      ownerName,
      phone: draft.phone.trim(),
      address: draft.address.trim(),
      state: draft.state.trim(),
      upiId: draft.upiId.trim(),
      dailyGoal: Math.max(1, Math.round(Number(draft.dailyGoal) || 700)),
    });
    toast("Shop profile ready", "success");
  };

  return (
    <div className="setup-shell">
      <section className="setup-card">
        <div className="setup-mark"><BrandLogo size={64} /></div>
        <span className="setup-kicker">First run setup</span>
        <h1>Shri Billing ko apni shop ke naam se ready karo.</h1>
        <p>Ye local shop profile hai. Password, cloud login ya internet account nahi banega.</p>

        <div className="setup-grid">
          <SettingsField label="Shop Name">
            <input className="input" autoFocus value={draft.shopName} onChange={(e) => setDraft({ ...draft, shopName: e.target.value })} placeholder="Example: Shri Cyber Cafe" />
          </SettingsField>
          <SettingsField label="Owner Name">
            <input className="input" value={draft.ownerName} onChange={(e) => setDraft({ ...draft, ownerName: e.target.value })} placeholder="Owner name" />
          </SettingsField>
          <SettingsField label="Business Type">
            <select className="select" value={draft.businessType} onChange={(e) => setDraft({ ...draft, businessType: e.target.value })}>
              <option>Cyber Cafe & Printing</option>
              <option>Retail</option>
              <option>Services</option>
              <option>Wholesale</option>
            </select>
          </SettingsField>
          <SettingsField label="Daily Goal">
            <input className="input mono" inputMode="numeric" value={draft.dailyGoal ?? ""} onChange={(e) => setDraft({ ...draft, dailyGoal: e.target.value.replace(/[^\d]/g, "") })} placeholder="700" />
          </SettingsField>
          <SettingsField label="Phone">
            <input className="input" value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} placeholder="Phone number" />
          </SettingsField>
          <SettingsField label="UPI ID">
            <input className="input mono" value={draft.upiId} onChange={(e) => setDraft({ ...draft, upiId: e.target.value })} placeholder="name@upi" />
          </SettingsField>
          <SettingsField label="State">
            <input className="input" value={draft.state} onChange={(e) => setDraft({ ...draft, state: e.target.value })} placeholder="State" />
          </SettingsField>
          <div style={{ gridColumn: "1 / -1" }}>
            <SettingsField label="Address">
              <textarea className="textarea" rows="2" value={draft.address} onChange={(e) => setDraft({ ...draft, address: e.target.value })} placeholder="Shop address" />
            </SettingsField>
          </div>
        </div>

        <div className="setup-actions">
          <span>Data isi PC me local save hoga.</span>
          <button className="btn primary lg" onClick={save}><Icon name="check" />Start Billing</button>
        </div>
      </section>
    </div>
  );
};




/* ============================================================
   App root + Tweaks panel
   ============================================================ */

// Blank profile so each install starts fresh. The user fills these in via Settings;
// nothing here is shop-specific. Only structural defaults (tax behavior, currency, etc.) remain.
const DEFAULT_PROFILE = /*EDITMODE-BEGIN*/{
  "shopName": "",
  "tagline": "",
  "ownerName": "",
  "businessType": "Services",
  "shopLogo": "",
  "phone": "",
  "email": "",
  "address": "",
  "state": "",
  "stateCode": "",
  "gstin": "",
  "pan": "",
  "udyam": "",
  "fssai": "",
  "gstType": "Regular",
  "taxBehavior": "Tax exclusive (added on top)",
  "showHSN": true,
  "eInvoice": false,
  "invoicePrefix": "INV/",
  "nextInvoiceNo": "0",
  "paymentTerms": "15",
  "currency": "INR (₹)",
  "footerNote": "1. Please pay within 15 days from the date of invoice.\n2. Please quote invoice number when remitting funds.",
  "bankName": "",
  "bankAccount": "",
  "bankIFSC": "",
  "bankBranch": "",
  "upiId": "",
  "defaultPayment": "Cash",
  "theme": "light",
  "brandColor": "#2f8fe3",
  "dailyGoal": 700,
  "autoLaunchOnLogin": true,
  "customPayModes": [],
  "sidebarCollapsed": false
}/*EDITMODE-END*/;

// Helper: is this a brand-new install that still needs setup?
const isProfileConfigured = (p) => Boolean((p?.shopName || "").trim() && (p?.ownerName || "").trim());

const BRAND_OPTIONS = [
  "#2f8fe3", "#1f6feb", "#0f766e", "#7c3aed", "#c2410c", "#1e293b", "#be185d",
];


export {Sidebar,Topbar,ToastProvider,Dashboard,BillingScreen,InvoicesList,CustomersList,InventoryList,ExpensesList,Attendance,Reports,Settings,DEFAULT_PROFILE,Icon,Modal,InvoicePreview,PaymentModal,DailyLog};




