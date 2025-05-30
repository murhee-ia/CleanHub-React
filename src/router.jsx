import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPages/LandingPage'
import AboutPage from "./pages/LandingPages/AboutPage";
import HelpPage from "./pages/LandingPages/HelpPage";
import AuthPage from "./pages/LandingPages/AuthPage";
import DefaultLayout from "./layouts/DefaultLayout";

const router = createBrowserRouter([
    {
        path: '/hub',
        element: <DefaultLayout/>
    },
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/join-now',
        element: <AuthPage/>
    },
    {
        path: '/l-about',
        element: <AboutPage/>
    },
    {
        path: '/l-help',
        element: <HelpPage/>
    },
]);

export default router;