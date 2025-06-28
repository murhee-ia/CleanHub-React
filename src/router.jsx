import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPages/LandingPage'
import AboutPage from "./pages/LandingPages/AboutPage";
import HelpPage from "./pages/LandingPages/HelpPage";
import AuthPage from "./pages/LandingPages/AuthPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProfilePage from "./pages/HomePages/ProfilePage";
import FeedPage from "./pages/HomePages/FeedPage";
import SavedJobsPage from "./pages/HomePages/SavedJobsPage";
import JobApplicationsPage from "./pages/HomePages/JobApplicationsPage";
import JobPostsPage from "./pages/HomePages/JobPostsPage";
import NotificationsPage from "./pages/HomePages/NotificationsPage";
import ShowJobPage from "./pages/HomePages/ShowJobPage";
import CreateJobPage from "./pages/HomePages/JobPostsPages/CreateJobPage"

const router = createBrowserRouter([
    {
        path: '/hub',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/hub',
                element: <Navigate to="/hub/feed"/>
            },
            {
                path: '/hub/feed',
                element: <FeedPage />
            },
            {
                path: '/hub/profile',
                element: <ProfilePage />
            },
            {
                path: '/hub/saved-jobs',
                element: <SavedJobsPage />
            },
            {
                path: '/hub/job-applications',
                element: <JobApplicationsPage />
            },
            {
                path: '/hub/job-posts',
                element: <JobPostsPage />
            },
            {
                path: '/hub/notifications',
                element: <NotificationsPage />
            },
            {
                path: '/hub/jobs/:jobID',
                element: <ShowJobPage />
            },
            {
                path: '/hub/create-job',
                element: <CreateJobPage />
            }
        ]
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