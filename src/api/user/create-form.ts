import { RegistrationForm } from "../../interfaces";
import { instance } from "../server/axios";

export const registerForm = async (registrationForm: RegistrationForm) => {
    const request = {
        title: registrationForm.title,
        description: registrationForm.description,
    };

    const { status } = await instance.post("/form", request);

    return status;
};
