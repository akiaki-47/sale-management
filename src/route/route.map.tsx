import { RouteObject } from "react-router-dom";
import AdminPage from "../screens/admin/admin-page";
import { HomePage } from "../screens/home-page";
import { LoginPage } from "../screens/login-page";
import { NotFoundPage } from "../screens/not-found-page";
import { SignUpPage } from "../screens/register-page";
import { StaffPage } from "../screens/staff/staff-page";
import { UserPage } from "../screens/user/user-page";
import { CreateFormRegistration } from "../screens/user/user-create-form";
import { EditProfile } from "../screens/user/user-edit-profile";
import { FormRegister } from "../components/admin/get-form-register";
import { ManageUser } from "../components/admin/get-all-users";
import { ListProducts } from "../components/user/list-products";
import { ListProductsOfSeller } from "../components/staff/list-products-modal";
import { PostProduct } from "../components/staff/staff-post";
import { HistoryOrder } from "../components/user/history-order";
import { Cart } from "../components/user/cart";
import { UpdateProduct } from "../components/staff/update-product-modal";

export const route: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
        children: [
            {
                index: true,
                element: <ManageUser />
            },
            {
                path: "get-form-register",
                element: <FormRegister />
            },
        ]
    },
    {
        path: "/user",
        element: <UserPage />,
        children: [
            {
                index: true,
                element: <ListProducts />,
            },
            {
                path: "profile/:id",
                element: <EditProfile />
            },
            {
                path: "create-form",
                element: <CreateFormRegistration />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "history-order",
                element: <HistoryOrder />,
            }
        ]
    },
    {
        path: "/staff",
        element: <StaffPage />,
        children: [
            {
                path: "view-products",
                element: <ListProductsOfSeller />,
            },
            {
                path: "upload-products",
                element: <PostProduct />,
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage />,
    },
    {
        path: "/*",
        element: <NotFoundPage />
    },
]
