import { ProductFormUpdate } from "../../components/staff/list-products";
import { instance } from "../server/axios";

export const updateProduct = async ({
    key,
    name,
    description,
}: ProductFormUpdate) => {
    console.log(key);

    const { data } = await instance.patch(`/product/${key}`, {
        name,
        description,
    });
    return data;
};
