import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { Basket } from "./pages/Basket";
import { Device } from "./pages/Device";
import { Shop } from "./pages/Shop";
import * as routes from "./utils/consts";

export const authRoutes = [
  {
    path: routes.ADMIN_ROUTE,
    component: Admin,
  },
  {
      path: routes.BASKET_ROUTE,
      component: Basket
  }
];

export const publicRoutes = [
    {
        path: routes.SHOP_ROUTE,
        component: Shop
    },
    {
        path: routes.DEVICE_ROUTE,
        component: Device
    },
    {
        path: routes.DEVICE_ROUTE + '/:id',
        component: Device
    },
    {
        path: routes.LOGIN_ROUTE,
        component: Auth
    },
    {
        path: routes.REGISTRATION_ROUTE,
        component: Auth
    },
]