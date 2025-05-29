import React from 'react';

// @material-ui/core
import Box from "@mui/material/Box"

// components/shared
import SectionWrapper from "../../components/shared/SectionContainer/SectionContainer";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Education from './Education/Education';

const LandingPage = () => {
    return <Box>
        <SectionWrapper id="home" bgcolor="background">
            <Home />
        </SectionWrapper>
        <SectionWrapper id="about_me" bgcolor="background">
           <AboutMe />
        </SectionWrapper>
        <SectionWrapper id="experience" bgcolor="background">
            <Experience />
        </SectionWrapper>
        <SectionWrapper id="skills" bgcolor="background">
            <Skills />
        </SectionWrapper>
        <SectionWrapper id="education" bgcolor="background">
            <Education />
        </SectionWrapper>
    </Box>
};

export default LandingPage;