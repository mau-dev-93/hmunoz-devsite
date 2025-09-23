import { Box, Container, Typography } from "@mui/material";
import data from './data';

// components
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";

const ExperienceSection = () => {
    return (
        <Box id="experience_section" component="section" bgcolor="background.section" py={10}>
            <Container maxWidth="lg">
                {/*buena distancia*/}
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Experiencia <Box component="span" color="secondary.main">Laboral</Box></Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600 }}>Mi trayectoria profesional en el desarrollo de software</Typography>
                </Box>
                <ExperienceTimeline experiences={data} />
            </Container>
        </Box>
    )
};

export default ExperienceSection;