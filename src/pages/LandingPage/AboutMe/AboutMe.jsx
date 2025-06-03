import React from 'react';
import { useTheme } from "@mui/material/styles";

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

// components
import SwipeableGallery from './SwipeableGallery/SwipeableGallery';

const AboutMe = () => {
    const theme = useTheme();

    return <Box>
        <Box textAlign="center" sx={{ marginBottom: "24px" }}>
            <Typography variant="h4" fontWeight="600" color="text.primary">Sobre mí</Typography>
            <Typography variant="subtitle2" fontWeight="400" color="text.secondary">Mi introducción</Typography>
        </Box>
        <Grid container spacing={4}>
            <Grid item size={6}>
                {/* <SwipeableGallery /> */}
                <Box
                    component="img"
                    src="\src\assets\images\family.jpg"
                    alt="Mauricio Muñoz"
                    sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: 2,
                    }}
                />
            </Grid>
            <Grid item size={6}>
                <Typography variant="body1" fontWeight="400" color="text.primary" component="p">
                    Soy un desarrollador frontend con experiencia en la creación de aplicaciones web modernas y receptivas. Me apasiona crear interfaces de usuario intuitivas y atractivas que mejoren la experiencia del usuario. Tengo habilidades sólidas en HTML, CSS y JavaScript, así como en frameworks como React y Angular. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades para seguir siendo relevante en este campo en constante evolución.
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Box sx={{ width: 24, height: 24 }}>
                        <svg width="24px" height="24px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg" fill={theme.palette.primary.main}><path d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z" /><path d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z" /><path d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z" /></svg>
                    </Box>
                    <Typography variant="body1" fontWeight="600" color="text.primary">
                        Intereses:
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ marginLeft: 1 }}>
                        Musica, Pizza, Perros
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    </Box>
};

export default AboutMe;