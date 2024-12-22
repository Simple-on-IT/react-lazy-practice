import { createBrowserRouter, RouteObject } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/ui/MainPage";
import { ErrorContent } from "../ui/ErrorContent/ErrorContent";

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject & { title: string }> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        title: 'Основная страница',
        errorElement: (<ErrorContent />)
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div></div>,
        title: 'Не найдена',
        errorElement: (<div></div>)
    },
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: (<ErrorContent />),
    },
]);
