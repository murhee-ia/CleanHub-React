import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPages/LandingPage'
import AboutPage from "./pages/LandingPages/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/l-about',
        element: <AboutPage/>
    }
]);

export default router;