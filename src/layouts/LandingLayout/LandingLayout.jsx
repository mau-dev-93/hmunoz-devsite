import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";

import { LandingContainer } from "./LandingLayout.styles";

// components
import Footer from "../../components/layout/Footer/Footer";

// context
import { NavbarScrollProvider } from "../../contexts/NavbarScrollContext/NavbarScrollProvider";
import { SECTIONS } from "../../config/sections";

// titulos h4
// contenido body1
// subcontenido body2

const LandingLayout = ({ children }) => {
    return (
        <NavbarScrollProvider sections={SECTIONS} offsetTop={64}>
            <Navbar />
            <LandingContainer as="main">
                {children}
            </LandingContainer>
            <Footer />
        </NavbarScrollProvider>
    );
};

export default LandingLayout;