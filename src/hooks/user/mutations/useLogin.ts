import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { checkLogin } from "../../../api/user/login";
import LoginForm from "../../../components/login-form";
import { IError, Role } from "../../../interfaces";
import { IResponseAuth } from "../../../interfaces/response";

const useLogin = () => {
    const queryClient = useQueryClient();
    const [role, setRole] = useState<Role>();
    const sendDataFormToCheck = (dataForm: LoginForm) => {
        return checkLogin(dataForm);
    };

    const loggedInSuccessfully = (responseData: IResponseAuth) => {
        alert(JSON.stringify(responseData, null, 2));
        queryClient.setQueryData(["userInfo", responseData], data);
        setRole(responseData.publicData.role);
    };

    const { mutate, isLoading, isError, isSuccess, data, error } = useMutation<
        IResponseAuth,
        IError,
        LoginForm
    >(sendDataFormToCheck, {
        onSuccess: loggedInSuccessfully,
    });

    const login = (loginForm: LoginForm) => {
        mutate(loginForm);
    };
    return { login, isLoading, isError, isSuccess, data, error, role };
};

export default useLogin;
