import {SaleItem} from './item-sale'
export class Sale {
id?:number;
state:string;
number:number;
client:Number;
saleInvoice:Date;
amountTotal:Number;
saleItem: SaleItem[];
}