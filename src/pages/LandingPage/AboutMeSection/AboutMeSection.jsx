import React from 'react';
// import { useTheme } from "@mui/material/styles";

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Button, Chip, Container } from '@mui/material';

// components
// import SwipeableGallery from './SwipeableGallery/SwipeableGallery';
// import Highlight from './Highlight/Highlight';
import HeroStatCard from '../../../components/shared/HeroStatCard/HeroStatCard';
import CustomChip from '../../../components/shared/CustomChip/CustomChip';
import HighlightBox from '../../../components/shared/HighlightBox/HighlightBox';

const techStack = ["React", "Node.js", "AWS", "TypeScript", "SQL Server"]

const AboutMeSection = () => {
    return (
        <Box id="aboutme_section" component="section" bgcolor="background" py={10}> {/*.25rem*20*/}
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box mb={2}>
                            <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Sobre mí</Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary">
                                Soy Mauricio, Full Stack Developer con 12 años de experiencia en React, Node.js y AWS. Me especializo en plataformas web escalables, sistemas de pagos y automatización en la nube. Apasionado por el código limpio y el aprendizaje continuo.
                            </Typography>
                        </Box>
                        <Box mb={4}>
                            <Typography variant="subtitle1" fontWeight="600" color="text.primary">Stack principal</Typography>
                            <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
                                {techStack.map((tech, index) => (
                                    <CustomChip key={index} label={tech} variant="outlined" size="small" color="primary" />
                                ))}
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={2}>
                            <Button variant='contained' size='large'>Ver proyectos</Button>
                            <Button variant='outlined' color="input" size='large'>Contactar</Button>
                        </Stack>
                    </Grid>
                    <Grid container size={{ xs: 12, md: 6 }} spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <HeroStatCard
                                color="primary"
                                variant='outlined'
                                title="12+ años"
                                subtitle="de experiencia"
                                icon={<i className="ri-code-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <HeroStatCard
                                color="success"
                                variant='outlined'
                                title="5+ proyectos"
                                subtitle="completados, dah!"
                                icon={<i className="ri-group-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <HeroStatCard
                                color="warning"
                                variant='outlined'
                                title="15+ tecnologías"
                                subtitle="dominadas"
                                icon={<i className="ri-medal-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <HeroStatCard
                                color="error"
                                variant='outlined'
                                title="Full Stack Developer"
                                subtitle="especialista"
                                icon={<i className="ri-flashlight-line"></i>}
                            />
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <HighlightBox>
                            <Typography variant="subtitle1" fontWeight={700}>¿Buscas un desarrollador comprometido con la excelencia?</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Construyo soluciones escalables que generan valor real para usuarios y empresas. Mi enfoque combina experiencia técnica sólida con visión de negocio.</Typography>
                        </HighlightBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default AboutMeSection;