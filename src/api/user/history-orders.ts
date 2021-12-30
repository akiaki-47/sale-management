import { IOrder } from "../../interfaces";
import { IResponse } from "../../interfaces/response";
import { instance } from "../server/axios";

export const getHistoryOrders = async () => {
    const { data } = await instance.get("/order");

    return data as IResponse<IOrder>;
};
