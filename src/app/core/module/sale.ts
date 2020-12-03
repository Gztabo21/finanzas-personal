import {SaleItem} from './item-sale'
export interface Sale {
id?:number;
state:string;
number:number;
client:Number;
saleInvoiceDate:Date;
amountTotal:Number;
saleItem: SaleItem[];
}