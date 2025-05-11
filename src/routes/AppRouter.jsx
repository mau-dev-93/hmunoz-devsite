import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";

// layouts
import LandingLayout from "../layouts/LandingLayout/LandingLayout";

// pages
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRouter = () => {
    // const { isAuthenticated } = props;

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <LandingLayout>
                        <LandingPage />
                    </LandingLayout>
                } />
            </Routes>
        </Router>
    );
};

export default AppRouter;
