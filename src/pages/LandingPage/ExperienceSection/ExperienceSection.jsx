import { Box, Container, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import data from './data';

// components
import ExperienceCard from "../../../components/shared/ExperienceCard/ExperienceCard";

const ExperienceSection = () => {
    return (
        <Box id="experience_section" component="section" bgcolor="background.section" py={10}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Mi experiencia laboral</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Mi trayectoria profesional en el desarrollo de software</Typography>
                </Box>
                <Grid container spacing={4} mt={4} justifyContent="center" alignItems="stretch" sx={{ minHeight: "100%" }}>
                    {data.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ExperienceCard
                                title={project.title}
                                duration={project.duration}
                                jobTitle={project.job_title}
                                dateRange={project.date_range}
                                location={project.location}
                                employmentType={project.employment_type}
                                description={project.description}
                                highlights={project.highlights}
                                goals={project.goals}
                                techStack={project.tech_stack}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default ExperienceSection;