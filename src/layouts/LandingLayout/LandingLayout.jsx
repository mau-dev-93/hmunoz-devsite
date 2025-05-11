import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";

import { LandingContainer } from "./LandingLayout.styles";

const LandingLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <LandingContainer as="main">
                {children}
            </LandingContainer>
        </>
    );
};

export default LandingLayout;