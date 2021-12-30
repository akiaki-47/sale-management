import { useMutation } from "react-query";
import { postProduct } from "../../../api/product";
import { ProductForm } from "../../../components/staff/staff-post";
import { IError } from "../../../interfaces/error";
import { IProduct } from "../../../interfaces/product";
import { IResponseProduct } from "../../../interfaces/response";

export const usePostProduct = () => {
    const fetchDataProduct = (productForm: ProductForm) => {
        return postProduct(productForm);
    };

    const postProductSuccess = (responseData: IResponseProduct<IProduct>) => {
        alert(JSON.stringify(responseData, null, 2));
    };

    // const postProductError = (error: IError) => {
    //     alert(JSON.stringify(error, null, 2));
    // }

    const { mutate, data } = useMutation<
        IResponseProduct<IProduct>,
        IError,
        ProductForm
    >(fetchDataProduct, {
        onSuccess: postProductSuccess,
        // onError: postProductError
    });

    const addProduct = (productForm: ProductForm) => {
        mutate(productForm);
    };

    return { addProduct, data };
};