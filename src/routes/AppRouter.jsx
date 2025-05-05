import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import DashboardPage from "../pages/DashboardPage";
// import NotFoundPage from "../pages/NotFoundPage";

// layouts
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

// pages
import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

const AppRouter = (props) => {
    const { isAuthenticated } = props;

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <LandingLayout>
                        <LandingPage />
                    </LandingLayout>
                } />
                <Route path="/login" element={
                    <AuthLayout>
                        <LoginPage />
                    </AuthLayout>
                } />
                <Route path="/signup" element={
                    <AuthLayout>
                        <SignupPage />
                    </AuthLayout>
                } />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <HomeLayout>
                                <Dashboard />
                            </HomeLayout>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
