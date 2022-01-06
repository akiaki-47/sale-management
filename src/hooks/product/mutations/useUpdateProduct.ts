import { useMutation } from "react-query";
import { updateProduct } from "../../../api/product/update";
import { ProductFormUpdate } from "../../../components/staff/list-products-modal";
import { IError, IProduct, IResponseProduct } from "../../../interfaces";

export const useUpdateProduct = () => {
    const fetchDataProduct = (product: ProductFormUpdate) => {
        console.log("id: ", product);

        return updateProduct(product);
    };

    const updateProductSuccess = (responseData: IResponseProduct<IProduct>) => {
        alert(JSON.stringify(responseData, null, 2));
    };

    const { mutate, data } = useMutation<
        IResponseProduct<IProduct>,
        IError,
        ProductFormUpdate
    >(fetchDataProduct, {
        onSuccess: updateProductSuccess,
    });

    const updateProductById = (product: ProductFormUpdate) => {
        mutate(product);
    };

    return { updateProductById, data };
};
