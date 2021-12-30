import { useQuery } from "react-query";
import { getAllFormUsers, getAllUsers } from "../../../api/admin/get-users";

export const useQueryUser = () => {
    const { data, isLoading } = useQuery("get-all-users", getAllUsers);

    return { data, isLoading };
};

export const useQueryForm = () => {
    const { data, isLoading } = useQuery("get-all-users-form", getAllFormUsers);

    return { data, isLoading };
};
