import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../../components/layout/Navbar/Navbar"; // Navbar específico para el landing

// assets
import { styles } from "../../assets/styles/layout/landingStyles";

const LandingLayout = ({children}) => {
    return (
        <Box css>
            <Navbar />
            <main>{children}</main>
        </Box>
    );
};

export default LandingLayout;