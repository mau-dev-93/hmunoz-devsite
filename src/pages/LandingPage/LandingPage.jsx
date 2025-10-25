import React from 'react';

// @material-ui/core
import Box from "@mui/material/Box"

// components
import HeroSection from "./HeroSection/HeroSection";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import SkillsSection from './SkillsSection/SkillsSection';
import EducationSection from './EducationSection/EducationSection';
import HumanSideSection from './HumanSideSection/HumanSideSection';

const LandingPage = () => {
    return <>
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <HumanSideSection />
    </>
};

export default LandingPage;