import type { PrintJob } from './print-job';
export type DiscountKind = 'percent' | 'fixed';
export type Method = 'Cash' | 'UPI' | 'Bank Transfer' | 'Card' | 'Other';
export interface Customer { id:string; name:string; phone:string; email:string; address:string; gstin:string; customerType:string; active:boolean; createdAt?:string; updatedAt?:string; }
export interface Service {icon?:string;code?:string;stock?:number|null; id:string; name:string; hsn:string; rate:string|null; gst:string|null; unit:string; category:string; active:boolean; }
export interface LineInput { printJob?:PrintJob; serviceId?:string; description:string; hsn:string; quantity:string; unit:string; rate:string; gst:string; discountKind:DiscountKind; discount:string; }
export interface Line extends LineInput { gross:number; lineDiscount:number; billDiscount:number; taxable:number; cgst:number; sgst:number; igst:number; total:number; }
export interface Totals { gross:number; discount:number; taxable:number; cgst:number; sgst:number; igst:number; roundOff:number; total:number; }
export interface Settings { originalUi?:Record<string,unknown>; businessName:string; address:string; phone:string; email:string; website?:string; instagram?:string; gstin:string; pan:string; upi:string; state:string; prefix:string; startingNumber:number; terms:string; footer:string; currency:string; dateFormat:string; paymentTermDays?:number; template:'classic'|'compact'; defaultGst:string; roundRupee:boolean; dailyBackup:boolean; exitBackup:boolean; backupPdfs:boolean; backupDirectory:string; printer:string; launchAtStartup?:boolean; dataSafetyVersion?:number; version:number; }
export interface BillInput { id?:string; version?:number; requestId:string; customerId:string|null; customer:Customer; date:string; dueDate:string; placeOfSupply:string; items:LineInput[]; discountKind:DiscountKind; discount:string; roundRupee:boolean; issue:boolean; reason:string; previousInvoiceIds?:string[]; payment?:{amount:string;method:Method;reference:string;scope?:'current'|'account'}; }
export interface PendingBill {id:string;number:string;date:string;dueDate:string;total:number;paid:number;due:number;version:number;items:Line[];}
export interface Invoice extends Totals { writtenOff?:number;writeoffs?:{id:string;amount:number;date:string;reason:string}[]; id:string; number:string|null; financialYear:string; customerId:string|null; customer:Customer; business:Settings; date:string; dueDate:string; placeOfSupply:string; items:Line[]; discountKind:DiscountKind; discountValue:string; roundRupee:boolean; status:'draft'|'issued'|'cancelled'; version:number; cancelledAt:string|null; cancellationReason:string; paid:number; due:number; refundDue:number; paymentStatus:string; payments:Payment[]; previousInvoiceIds?:string[]; previousBills?:PendingBill[]; createdAt:string; }
export interface Payment { id:string; invoiceId:string; kind:'receipt'|'refund'|'reversal'; amount:number; effect:number; method:Method; date:string; reference:string; notes:string; linkedId:string|null; }
export interface PaymentInput { invoiceId:string; version:number; requestId:string; kind:'receipt'|'refund'|'reversal'; amount:string; method:Method; date:string; reference:string; notes:string; linkedId?:string; }
export interface InvoiceFilter { search?:string; from?:string; to?:string; status?:string; min?:string; max?:string; service?:string; customerId?:string; customerMode?:'all'|'walk-in'|'saved'; page?:number; limit?:number; }
export interface Report { summary:Record<string,number>; rows:Record<string,string|number>[]; }
export interface BackupInfo { name:string; path:string; size:number; modified:string; }
export interface Employee { id:string; name:string; phone:string; role:string; active:boolean; createdAt?:string; updatedAt?:string; }
export type AttendanceStatus = 'present'|'absent'|'leave'|'half_day';
export interface AttendanceRecord { id:string; employeeId:string; employeeName:string; role:string; date:string; status:AttendanceStatus; checkIn:string; checkOut:string; notes:string; updatedAt:string; }
export interface AttendanceInput { employeeId:string; date:string; status:AttendanceStatus; checkIn:string; checkOut:string; notes:string; }
export interface ShopDay {date:string;openedAt:string;closedAt:string;notes:string;updatedAt:string}
export interface Expense {id:string;date:string;amount:number;category:string;method:Method;payee:string;description:string;cancelled:boolean}
export interface API {
 expenses():Promise<Expense[]>;saveExpense(input:Expense):Promise<Expense>;cancelExpense(id:string):Promise<void>;writeOffAll(input:{requestId:string;reason:string}):Promise<{count:number;amount:number}>;
 shopDays(input:{from:string;to:string}):Promise<ShopDay[]>;
 saveShopDay(input:{date:string;action:'open'|'close'|'note';notes:string}):Promise<ShopDay>;
 bootstrap():Promise<{settings:Settings;services:Service[];dataPath:string;nextNumber?:number}>;
 customers(search?:string,page?:number):Promise<(Customer&{billed:number;paid:number;due:number;lastVisit:string})[]>;
 pendingBills(customerId:string,excludeId?:string):Promise<PendingBill[]>;
 accountPayment(input:PaymentInput&{invoiceIds:string[];versions:Record<string,number>}):Promise<Invoice>;
 saveCustomer(customer:Customer):Promise<Customer>;
 services():Promise<Service[]>; saveService(service:Service):Promise<Service>;
 settings():Promise<Settings>; saveSettings(settings:Settings):Promise<Settings>;
 invoices(filter:InvoiceFilter):Promise<{rows:Invoice[];count:number}>; invoice(id:string):Promise<Invoice>;
 saveInvoice(bill:BillInput):Promise<Invoice>; cancelInvoice(input:{id:string;version:number;reason:string}):Promise<Invoice>;
 payment(input:PaymentInput):Promise<Invoice>; revisions(id:string):Promise<{version:number;reason:string;created_at:string;snapshot:string}[]>;
 report(input:{type:string;from:string;to:string}):Promise<Report>;
 dashboard():Promise<{today:Report;month:Report;customers:number;pending:number;recent:Invoice[];top:Record<string,string|number>[];trend:{date:string;sales:number;collections:number}[];methods:{method:string;total:number}[];ageing:{label:string;total:number;count:number}[]}>;
 document(input:{id:string;action:'preview'|'pdf'|'print'|'default'}):Promise<string>;
 exportReport(input:{type:string;from:string;to:string;format:'csv'|'pdf'}):Promise<string>;
 backups():Promise<{files:BackupInfo[];last:string;directory:string}>;
 backup():Promise<string>; restore():Promise<string>; exportDatabase():Promise<string>; importDatabase():Promise<string>;
 chooseBackupDirectory():Promise<string>; printers():Promise<string[]>; openFolder():Promise<void>;
 employees(includeInactive?:boolean):Promise<Employee[]>; saveEmployee(employee:Employee):Promise<Employee>;
 attendance(input:{from:string;to:string;employeeId?:string}):Promise<AttendanceRecord[]>;
 saveAttendance(input:AttendanceInput):Promise<AttendanceRecord>;
}
export const states = ['01 Jammu and Kashmir','02 Himachal Pradesh','03 Punjab','04 Chandigarh','05 Uttarakhand','06 Haryana','07 Delhi','08 Rajasthan','09 Uttar Pradesh','10 Bihar','11 Sikkim','12 Arunachal Pradesh','13 Nagaland','14 Manipur','15 Mizoram','16 Tripura','17 Meghalaya','18 Assam','19 West Bengal','20 Jharkhand','21 Odisha','22 Chhattisgarh','23 Madhya Pradesh','24 Gujarat','26 Dadra and Nagar Haveli and Daman and Diu','27 Maharashtra','29 Karnataka','30 Goa','31 Lakshadweep','32 Kerala','33 Tamil Nadu','34 Puducherry','35 Andaman and Nicobar Islands','36 Telangana','37 Andhra Pradesh','38 Ladakh'];
export const methods:Method[]=['Cash','UPI','Bank Transfer','Card','Other'];
export const blankCustomer=():Customer=>({id:'',name:'Walk-in customer',phone:'',email:'',address:'',gstin:'',customerType:'Retail',active:true});
export const blankLine=():LineInput=>({description:'',hsn:'',quantity:'1',unit:'page',rate:'',gst:'',discountKind:'percent',discount:'0'});
export const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export const dueAfter=(date:string,days=5)=>{const d=new Date(date+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10);};
export const fy=(date:string)=>{const year=Number(date.slice(0,4))-(Number(date.slice(5,7))<4?1:0);return `${year}-${String(year+1).slice(-2)}`;};
export const money=(paise:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(paise/100);
