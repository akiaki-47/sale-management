import { IProduct, IOrder } from ".";

export interface IOrderDetails {
    product: IProduct;
    order: IOrder;
    quantity: number;
}
