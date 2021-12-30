import { SignUpForm } from "../../components/signup-form";
import { IUser } from "../../interfaces";
import { IResponse } from "../../interfaces/response";
import { instance } from "../server/axios";

export const registerUser = async (signUpForm: SignUpForm) => {
    const { data } = await instance.post("/user", signUpForm);
    return data as IResponse<IUser>;
};
