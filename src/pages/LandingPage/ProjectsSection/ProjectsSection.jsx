import { Box, Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Trans } from "react-i18next";

// components
import ProjectCard from "../../../components/shared/ProjectCard/ProjectCard";
import projectsData from './../../../data/projects';

const ProjectsSection = () => {
    return (
        <Box id="projects_section" component="section" bgcolor="background.default" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}><Trans i18nKey="section_title" ns="projects" components={{strong: <Box component="span" color="secondary.main" />}} /></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '42rem' }}><Trans i18nKey="section_subtitle" ns="projects" /></Typography>
                </Box>
                <Grid container spacing={4} mt={8} justifyContent="center" alignItems="stretch">
                    {projectsData.map((project, index) => (
                        <Grid key={index} size={{ xs: 12, lg: 4 }}>
                            <ProjectCard
                                name={project.name}
                                role={project.role}
                                description={project.description}
                                status={project.status}
                                icon={project.icon}
                                progress_percentage={project.progress_percentage}
                                tech_stack={project.tech_stack}
                                features={project.features}
                                image_url={project.image_url}
                                github_repo_url={project.github_repo_url}
                                live_demo_url={project.live_demo_url}
                                disabled={project.disabled}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default ProjectsSection;