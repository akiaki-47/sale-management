import LoginForm from "../../components/login-form";
import { IResponseAuth } from "../../interfaces/response";
import { instance } from "../server/axios";

export const checkLogin = async (
    dataForm: LoginForm
    // callback?: NavigateFunction
) => {
    const { data } = await instance.post("/auth", dataForm);

    //sau khi auth thành công
    //gọi callback
    //nếu data role = user
    // callback(`/${data}`);

    return data as IResponseAuth;
};
