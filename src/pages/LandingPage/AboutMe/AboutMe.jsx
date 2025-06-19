import React from 'react';
// import { useTheme } from "@mui/material/styles";

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

// components
import SwipeableGallery from './SwipeableGallery/SwipeableGallery';
import Highlight from './Highlight/Highlight';

const AboutMe = () => {
    // const theme = useTheme();

    return (

        <Box>
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
                        Soy Héctor Mauricio Muñoz Fonseca, desarrollador full stack con más de 10 años de experiencia en proyectos web.
                        Trabajo tanto en backend como en frontend, y disfruto construir interfaces limpias e intuitivas, procesos bien estructurados y experiencias pensadas para satisfacer las necesidades del usuario, usando tecnologías como React, Node.js, AWS y SQL. He trabajado en empresas del sector educativo, salud, construcción y comercio, participando en todas las etapas del ciclo de vida del software.
                        En lo personal, soy curioso, autodidacta y creativo. Desde niño he estado ligado a la música, la expresión artística y la tecnología, lo que ha moldeado mi forma de ver el desarrollo como una mezcla entre arte, lógica y experiencia humana. La filosofía también forma parte importante de mi vida, como una guía para comprender el mundo, cuestionarlo y tomar decisiones con mayor conciencia y profundidad.
                    </Typography>
                    {/* <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
                    <Box sx={{ width: 18, height: 18 }}>
                        <svg width="20px" height="20px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg" fill={theme.palette.primary.main}><path d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z" /><path d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z" /><path d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z" /></svg>
                    </Box>
                    <Typography variant="body2" color="text.primary">
                        Intereses:
                    </Typography>
                    <Typography variant="body2" color="text.primary" sx={{ marginLeft: 1 }}>
                        Musica, Pizza, Perros
                    </Typography>
                </Stack> */}
                    <Stack direction="row" spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
                        <Highlight
                            value="12+"
                            indicator={<>Años de<br />experiencia</>}
                        />
                        <Highlight
                            value="05+"
                            indicator={<>Empresas<br />donde laboré</>}
                        />
                        <Highlight
                            value="04+"
                            indicator={<>Proyectos<br />liderados</>}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
};

export default AboutMe;