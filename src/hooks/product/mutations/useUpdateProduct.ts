import { useMutation } from "react-query";
import { updateProduct } from "../../../api/product/update";
import { IError, IProduct, IResponseProduct } from "../../../interfaces";

export const useUpdateProduct = () => {
    const fetchDataProduct = ({ id, name, description }: IProduct) => {
        return updateProduct({ id, name, description });
    };

    const updateProductSuccess = (responseData: IResponseProduct<IProduct>) => {
        alert(JSON.stringify(responseData, null, 2));
    };

    const { mutate, data } = useMutation<
        IResponseProduct<IProduct>,
        IError,
        IProduct
    >(fetchDataProduct, {
        onSuccess: updateProductSuccess,
    });

    const updateProductById = ({ id, name, description }: IProduct) => {
        mutate({ id, name, description });
    };

    return { updateProductById, data };
};
