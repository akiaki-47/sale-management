import { IBase, IOrderDetails, IUser } from ".";
export interface IOrder extends IBase {
    user: IUser;
    orderDetails: IOrderDetails;
}
