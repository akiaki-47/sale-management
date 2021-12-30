import { useMutation } from "react-query";
import { registerForm } from "../../../api/user/create-form";
import { IError, RegistrationForm, StatusCode } from "../../../interfaces";

export const useCreateForm = () => {
    const fetchDataFormToRegistration = (
        registrationForm: RegistrationForm
    ) => {
        return registerForm(registrationForm);
    };

    const registerSuccess = (responseStatus: StatusCode) => {
        if (responseStatus === StatusCode.CREATED)
            alert(
                JSON.stringify(
                    "Registration is successful, form has been sent",
                    null,
                    2
                )
            );
    };

    const { mutate, isSuccess } = useMutation<
        StatusCode,
        IError,
        RegistrationForm
    >(fetchDataFormToRegistration, {
        onSuccess: registerSuccess,
    });

    const registerToSeller = (registrationForm: RegistrationForm) => {
        mutate(registrationForm);
    };

    return { registerToSeller, isSuccess };
};
