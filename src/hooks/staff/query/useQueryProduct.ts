import { useQuery } from "react-query";
import { getProducts } from "../../../api/staff/get-products";

export const useQueryProduct = () => {
    const { data, isLoading } = useQuery("list-products-staff", getProducts);
    return { data, isLoading };
};
