import {SaleItem} from './item-sale'
export interface Sale {
id?:number;
state:string;
number:Number;
client:string;
saleInvoiceDate:Date;
amountTotal:Number;
saleItem: SaleItem[];
}