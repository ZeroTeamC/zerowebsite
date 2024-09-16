import { createHashRouter } from "react-router-dom";
import { lazy } from "react";
import Root from "./Root.jsx";

const MainPage = lazy(() => import("./pages/Main_page.jsx"));
const WorksPage = lazy(() => import("./pages/Works.jsx"));
const AccountsPage = lazy(() => import("./pages/Accounts.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"))

export const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/works",
                element: <WorksPage />
            },
            {
                path: "/accounts",
                element: <AccountsPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            }
        ]
    }
]);
