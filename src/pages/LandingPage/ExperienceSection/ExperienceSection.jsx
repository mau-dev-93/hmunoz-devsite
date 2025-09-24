import { Box, Container, Typography } from "@mui/material";
import data from './data';

// components
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";

const ExperienceSection = () => {
    return (
        <Box id="experience_section" component="section" bgcolor="background.section" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                {/*buena distancia*/}
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Experiencia <Box component="span" color="secondary.main">Profesional</Box></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Liderando el desarrollo de software y generando valor a través de soluciones web innovadoras y escalables.</Typography>
                </Box>
                <ExperienceTimeline experiences={data} />
            </Container>
        </Box>
    )
};

export default ExperienceSection;