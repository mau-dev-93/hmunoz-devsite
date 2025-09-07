import React from 'react';

// @material-ui/core
import Box from "@mui/material/Box"

// components/shared
import HomeSection from "./Home/Home";
import AboutMeSection from "./AboutMe/AboutMe";
import ProjectsSection from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Education from './Education/Education';

// import SectionContainer from '../../components/shared/SectionContainer/SectionContainer';

const LandingPage = () => {
    return <>
        <HomeSection />
        <AboutMeSection />
        <ProjectsSection />

        {/* <SectionContainer id="about_me" bgcolor="background">
            <AboutMe />
        </SectionContainer>
        <SectionContainer id="experience" bgcolor="background">
            <Experience />
        </SectionContainer>
        <SectionContainer id="skills" bgcolor="background">
            <Skills />
        </SectionContainer>
        <SectionContainer id="education" bgcolor="background">
            <Education />
        </SectionContainer> */}
    </>
};

export default LandingPage;