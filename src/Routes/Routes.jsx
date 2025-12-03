import { createBrowserRouter } from "react-router";
import App from "../App";
import Hom from "../Pages/Hom";
import Apps from "../Pages/Apps";
import InstalledApp from "../Pages/InstalledApp";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Hom
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installedApp',
                Component: InstalledApp
            }
        ]
    },
    // {
    //     path: '*',
    //     Component: ErrorPage
    // }

])

export default router