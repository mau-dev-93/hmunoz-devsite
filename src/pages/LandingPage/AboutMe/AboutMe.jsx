import React from 'react';

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

// components
import SwipeableGallery from './SwipeableGallery/SwipeableGallery';

const AboutMe = () => {
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
            </Grid>
        </Grid>
    </Box>
};

export default AboutMe;