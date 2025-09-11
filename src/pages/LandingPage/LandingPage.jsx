import React from 'react';

// @material-ui/core
import Box from "@mui/material/Box"

// components
import HeroSection from "./HeroSection/HeroSection";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import SkillsSection from './SkillsSection/SkillsSection';
import Education from './Education/Education';

// import SectionContainer from '../../components/shared/SectionContainer/SectionContainer';

const LandingPage = () => {
    return <>
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
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