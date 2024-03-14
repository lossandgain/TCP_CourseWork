import {Component} from "react";
import Admin from "./pages/admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts.";
import Basket from "./pages/basket";
import Shop from "./pages/shop";
import Auth from "./pages/auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
            Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]