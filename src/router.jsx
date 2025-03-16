import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPages/LandingPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    }
]);

export default router;