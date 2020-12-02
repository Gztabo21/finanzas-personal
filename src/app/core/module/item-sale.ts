import { Product } from './product';
export interface SaleItem {
    id:Number;
    product:Product;
    quantity:Number;
    unitPrice:Number;
    amounTotal:number;
}