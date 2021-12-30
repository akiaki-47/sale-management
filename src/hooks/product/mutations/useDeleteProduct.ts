import { useMutation } from "react-query";
import { deleteProduct } from "../../../api/product";
import { IError, StatusCode } from "../../../interfaces";

export const useDeleteProduct = () => {
    const fetchDataProduct = (productID: string) => {
        return deleteProduct(productID);
    };
    const deleteProductSuccess = (responseData: StatusCode) => {
        alert(JSON.stringify(responseData, null, 2));
    };
    const { mutate, data } = useMutation<StatusCode, IError, string>(
        fetchDataProduct,
        {
            onSuccess: deleteProductSuccess,
            // onError: postProductError
        }
    );

    const removeProductById = (product: string) => {
        mutate(product);
    };

    return { removeProductById, data };
};
