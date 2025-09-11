import { Box, Container, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import data from './data';

// components
import ExperienceCard from "../../../components/shared/ExperienceCard/ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";

const ExperienceSection = () => {
    return (
        <Box id="experience_section" component="section" bgcolor="background.section" py={10}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Mi experiencia laboral</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Mi trayectoria profesional en el desarrollo de software</Typography>
                </Box>
                <ExperienceTimeline experiences={data} />
            </Container>
        </Box>
    )
};

export default ExperienceSection;