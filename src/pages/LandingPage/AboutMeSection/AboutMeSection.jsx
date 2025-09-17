import React from 'react';

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Button, Container } from '@mui/material';

// components
import HeroStatCard from '../../../components/shared/HeroStatCard/HeroStatCard';
import HighlightBox from '../../../components/shared/HighlightBox/HighlightBox';
import TechLogoChip from '../../../components/shared/TechLogoChip/TechLogoChip';

const techStack = [
    { label: "React", icon: "react-original", color: "primary.main" },
    { label: "Node.js", icon: "nodejs-plain", color: "success.main" },
    { label: "AWS", icon: "amazonwebservices-plain-wordmark", color: "secondary.main" },
    { label: "TypeScript", icon: "typescript-plain", color: "warning.main" },
    { label: "SQL Server", icon: "microsoftsqlserver-plain", color: "info.main" }
]

const AboutMeSection = () => {
    return (
        <Box id="aboutme_section" component="section" bgcolor="background" py={10}> {/*.25rem*20*/}
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }} mb={3}>
                        <Box mb={3}>
                            <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Sobre <Box component="span" color="secondary.main">Mí</Box></Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary">
                                Soy Mauricio, Full Stack Developer con 12 años de experiencia en React, Node.js y AWS. Me especializo en plataformas web escalables, sistemas de pagos y automatización en la nube. Apasionado por el código limpio y el aprendizaje continuo.
                            </Typography>
                        </Box>
                        <HighlightBox textAlign='left' alignItems='left' sx={{ marginBottom: 4 }}>
                            <Typography variant="subtitle1" fontWeight={600}>Mi Enfoque Full Stack</Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={700} mb={1}>🎨 Frontend:</Typography>
                                    <Typography variant="body2" color="text.secondary">Creo interfaces modernas y responsivas con React, TypeScript y Tailwind CSS. Enfocado en UX/UI excepcional y performance optimizada.</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={700} mb={1}>⚙️ Backend:</Typography>
                                    <Typography variant="body2" color="text.secondary">Desarrollo APIs escalables con Node.js, bases de datos SQL/NoSQL, y despliegues en la nube con AWS para arquitecturas robustas.</Typography>
                                </Grid>
                            </Grid>
                        </HighlightBox>
                        <Box mb={4}>
                            <Typography variant="subtitle1" fontWeight="600" color="text.primary" mb={1}>Stack Principal</Typography>
                            <Stack direction="row" spacing={0} flexWrap="wrap" gap={2}>
                                {techStack.map((tech, index) => (
                                    <TechLogoChip
                                        key={index}
                                        label={tech.label}
                                        icon={tech.icon}
                                        color={tech.color}
                                    />
                                ))}
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={2}>
                            <Button variant='contained' size='large'>Ver Proyectos</Button>
                            <Button variant='outlined' size='large' color="input">Contactar</Button>
                        </Stack>
                    </Grid>
                    <Grid container size={{ xs: 12, md: 6 }} spacing={2} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
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
                                color="secondary"
                                variant='outlined'
                                title="15+ tecnologías"
                                subtitle="dominadas"
                                icon={<i className="ri-award-line"></i>}
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
                        <HighlightBox gradientDirection='center' sx={{ py: 4 }}>
                            <Typography variant="h6" fontWeight={700}>¿Buscas un desarrollador comprometido con la excelencia?</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Construyo soluciones escalables que generan valor real para usuarios y empresas. Mi enfoque combina experiencia técnica sólida con visión de negocio.</Typography>
                        </HighlightBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default AboutMeSection;