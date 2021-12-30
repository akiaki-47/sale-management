import { ICartRequest } from "../../interfaces/request";
import { instance } from "../server/axios";

export const checkOut = async (cart: ICartRequest) => {
    const { status } = await instance.post("/order", cart);

    return status;
};
