import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPages/LandingPage'
import AboutPage from "./pages/LandingPages/AboutPage";
import HelpPage from "./pages/LandingPages/HelpPage";
import AuthPage from "./pages/LandingPages/AuthPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
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