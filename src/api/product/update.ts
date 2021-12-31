import { IProduct } from "../../interfaces";
import { instance } from "../server/axios";

export const updateProduct = async ({ id, name, description }: IProduct) => {
    const { data } = await instance.patch(`/product/${id}`, {
        name,
        description,
    });
    return data;
};
