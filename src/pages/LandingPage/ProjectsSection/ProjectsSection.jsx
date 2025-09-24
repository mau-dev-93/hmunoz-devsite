import { Box, Container, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import data from './data';

// components
import ProjectCard from "../../../components/shared/ProjectCard/ProjectCard";

const ProjectsSection = () => {
    return (
        <Box id="projects_section" component="section" bgcolor="background" py={10}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Proyectos <Box component="span" color="secondary.main">Personales</Box></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: '42rem' }}>Soluciones tecnológicas que estoy desarrollando para resolver problemas reales</Typography>
                </Box>
                <Grid container spacing={4} mt={8} justifyContent="center" alignItems="stretch">
                    {data.map((project, index) => (
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
                                imagen_url={project.imagen_url}
                                github_repo_url={project.github_repo_url}
                                live_demo_url={project.live_demo_url}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default ProjectsSection;