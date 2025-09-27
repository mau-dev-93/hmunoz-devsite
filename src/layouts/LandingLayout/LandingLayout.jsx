import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";

import { LandingContainer } from "./LandingLayout.styles";

// components
import Footer from "../../components/layout/Footer/Footer";

// context
import { NavbarScrollProvider } from "../../contexts/NavbarScrollContext/NavbarScrollProvider";
import { SECTIONS } from "../../config/sections";
import { useMediaQuery, useTheme } from "@mui/material";

// titulos h4
// contenido body1
// subcontenido body2

const LandingLayout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const offsetTop = useMediaQuery(theme.breakpoints.down("sm")) ? 56 : 64;

    return (
        <NavbarScrollProvider sections={SECTIONS} offsetTop={offsetTop}>
            <Navbar isMobile={isMobile} />
            <LandingContainer as="main">
                {children}
            </LandingContainer>
            <Footer isMobile={isMobile} />
        </NavbarScrollProvider>
    );
};

export default LandingLayout;