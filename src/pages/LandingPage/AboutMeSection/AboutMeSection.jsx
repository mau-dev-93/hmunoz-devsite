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

// data
import profile from '../../../data/profile';

const AboutMeSection = () => {
    return (
        <Box id="aboutme_section" component="section" bgcolor="background" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, lg: 6 }} mb={3}>
                        <Box mb={3}>
                            <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Sobre <Box component="span" color="secondary.main">Mí</Box></Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary">
                                ¡Hola! Soy <strong>Mauricio Muñoz</strong>, un <strong>Full-Stack Developer</strong> de Monterrey, Nuevo León. Cuento con 10+ años de experiencia en el diseño y construcción de plataformas web modernas. Me especializo en tecnologías como React.js, Node.js y AWS para crear soluciones escalables y seguras. Mi enfoque combina la arquitectura sólida y las buenas prácticas para garantizar el éxito de cada proyecto. Me impulsa la innovación tecnológica, el aprendizaje continuo y la pasión por brindar soluciones y valor real.
                            </Typography>
                        </Box>
                        <HighlightBox textAlign='left' alignItems='left' sx={{ marginBottom: 4 }}>
                            <Typography variant="subtitle1" fontWeight={600}>Mi Enfoque Full Stack</Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={600} mb={1}>🎨 Frontend Development</Typography>
                                    <Typography variant="body2" color="text.secondary">Diseño y desarrollo de interfaces de usuario modernas y responsivas. Mi trabajo se centra en React, Redux, TypeScript y Material UI, garantizando una experiencia de usuario fluida y optimizada para el rendimiento.</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={600} mb={1}>⚙️ Backend Development</Typography>
                                    <Typography variant="body2" color="text.secondary">Desarrollo APIs RESTful de alto rendimiento en Node.js y .NET. Implemento modelos de datos en bases de datos SQL Server y diseño arquitecturas serverless con AWS. Mi prioridad es la seguridad y la eficiencia en las operaciones escenciales del negocio.</Typography>
                                </Grid>
                            </Grid>
                        </HighlightBox>
                        <Box mb={4}>
                            <Typography variant="subtitle1" fontWeight="600" color="text.primary" mb={1}>Stack Principal</Typography>
                            <Stack direction="row" spacing={0} flexWrap="wrap" gap={2}>
                                {profile.techStack.map((tech, index) => (
                                    <TechLogoChip
                                        key={index}
                                        label={tech.label}
                                        icon={tech.icon}
                                        color={tech.color}
                                    />
                                ))}
                            </Stack>
                        </Box>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Button variant='contained' size='large' href='#projects_section'>Ver Proyectos</Button>
                            <Button variant='outlined' size='large' href='#hero_section' color="input">Contactar</Button>
                        </Stack>
                    </Grid>
                    <Grid container size={{ xs: 12, lg: 6 }} spacing={2} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                        <Grid size={{ xs: 6 }}>
                            <HeroStatCard
                                color="primary"
                                variant='outlined'
                                title="10+ años"
                                subtitle="de experiencia"
                                icon={<i className="ri-code-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <HeroStatCard
                                color="success"
                                variant='outlined'
                                title="4+ industrias"
                                subtitle="trayectoria profesional"
                                icon={<i className="ri-apps-2-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <HeroStatCard
                                color="secondary"
                                variant='outlined'
                                title="Arquitecturas"
                                subtitle="escalables & seguras"
                                icon={<i className="ri-stack-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <HeroStatCard
                                color="infinity"
                                variant='outlined'
                                title="Full-Stack"
                                subtitle="autodidacta & creativo"
                                icon={<i className="ri-infinity-line"></i>}
                            />
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <HighlightBox gradientDirection='center' sx={{ py: 4 }}>
                            <Typography variant="h6" fontWeight={700}>¿Hasta dónde puede llegar una idea con propósito?</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 800 }}>Cada proyecto es una oportunidad para construir sistemas que trasciendan la funcionalidad. <br />Mi compromiso es crear tecnología que conecte con lo humano, brinde seguridad y genere valor duradero.</Typography>
                        </HighlightBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default AboutMeSection;