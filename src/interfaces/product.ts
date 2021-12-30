import { IBase, IOrderDetails } from ".";

export interface IProducts extends IBase {
    name: string;
    description: string;
    orderDetails: IOrderDetails[];
}

export interface IMetaProduct {
    totalItems: number;
    itemCount: number;
    itemPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface IProduct {
    id: string;
    name?: string;
    description?: string;
    items?: IProducts[];
    meta?: IMetaProduct;
}
