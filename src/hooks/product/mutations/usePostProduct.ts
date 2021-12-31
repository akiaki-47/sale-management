import { useMutation } from "react-query";
import { postProduct } from "../../../api/product";
import { ProductForm } from "../../../components/staff/staff-post";
import { IError, IProduct, IResponseProduct } from "../../../interfaces";

export const usePostProduct = () => {
    const fetchDataProduct = (productForm: ProductForm) => {
        return postProduct(productForm);
    };

    const postProductSuccess = (responseData: IResponseProduct<IProduct>) => {
        alert(JSON.stringify(responseData, null, 2));
    };

    const { mutate, data } = useMutation<
        IResponseProduct<IProduct>,
        IError,
        ProductForm
    >(fetchDataProduct, {
        onSuccess: postProductSuccess,
    });

    const addProduct = (productForm: ProductForm) => {
        mutate(productForm);
    };

    return { addProduct, data };
};
