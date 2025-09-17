import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";

import { LandingContainer } from "./LandingLayout.styles";
import Footer from "../../components/layout/Footer/Footer";

// titulos h4
// contenido body1
// subcontenido body2

const LandingLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <LandingContainer as="main">
                {children}
            </LandingContainer>
            <Footer />
        </>
    );
};

export default LandingLayout;