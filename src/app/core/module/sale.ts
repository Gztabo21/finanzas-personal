import { Product } from './product';
export class Sale {
id?:number;
number:number;
client:Number;
saleInvoice:Date;
amountTotal:Number;
saleItem:[{
    id:Number;
    product:Product;
    cantidad:Number;
    amount:Number;
    amounTotal:number;
}];
}