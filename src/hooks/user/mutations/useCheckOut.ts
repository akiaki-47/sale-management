import { useMutation } from "react-query";
import { checkOut } from "../../../api/user/check-out";
import { ICartRequest, IError, StatusCode } from "../../../interfaces";
export const useCheckOut = () => {
    const fetchDataOrder = (cart: ICartRequest) => {
        return checkOut(cart);
    };

    const checkOutSuccess = (responseStatus: StatusCode) => {
        if (responseStatus === StatusCode.CREATED) alert("SUCCESS");
    };

    const { mutate, isSuccess } = useMutation<StatusCode, IError, ICartRequest>(
        fetchDataOrder,
        {
            onSuccess: checkOutSuccess,
        }
    );

    const submitOrder = (cart: ICartRequest) => {
        mutate(cart);
    };

    return { submitOrder, isSuccess };
};
