import { Box, Button, Container, Typography } from "@mui/material";
import data from './data';

// components
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";
import { downloadCV } from "@/utils/downloadCV";

const ExperienceSection = () => {
    return (
        <Box id="experience_section" component="section" bgcolor="background.default" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                {/*buena distancia*/}
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Experiencia <Box component="span" color="secondary.main">Profesional</Box></Typography>
                    <Typography variant="body2" color="textSecondary" mb={3} sx={{ maxWidth: 600 }}>Más de 10 años construyendo soluciones de software escalables y de alto impacto.</Typography>
                    <Button
                        variant='outlined'
                        color="input"
                        size="medium"
                        startIcon={<i className='ri-download-2-line'></i>}
                        onClick={downloadCV}
                    >
                        Descargar CV
                    </Button>
                </Box>
                <ExperienceTimeline experiences={data} />
            </Container>
        </Box>
    )
};

export default ExperienceSection;