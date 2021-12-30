import { CreateForm } from "../../components/user/create-form";
import { useCreateForm } from "../../hooks/user/mutations/useCreateForm";


export const CreateFormRegistration = () => {
    const { registerToSeller } = useCreateForm();

    return (
        <>
            <h2>Create Form</h2>
            <CreateForm registerToSeller={registerToSeller} />
        </>
    )
}