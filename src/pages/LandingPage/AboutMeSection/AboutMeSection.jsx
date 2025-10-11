import React from 'react';

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Button, Container, Divider, useMediaQuery, useTheme } from '@mui/material';

// components
import HeroStatCard from '../../../components/shared/HeroStatCard/HeroStatCard';
import HighlightBox from '../../../components/shared/HighlightBox/HighlightBox';
import TechLogoChip from '../../../components/shared/TechLogoChip/TechLogoChip';
import QuickMatch from '../../../components/shared/QuickMatch/QuickMatch';

// data
import profile from '../../../data/profile';
import { downloadCV } from '@/utils/downloadCV';

const AboutMeSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box id="aboutme_section" component="section" bgcolor="background" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Box mb={3}>
                            <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Sobre <Box component="span" color="secondary.main">Mí</Box></Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary" gutterBottom>
                                Soy <strong>Mauricio Muñoz</strong>, desarrollador <strong>Full-Stack</strong> de Monterrey, México.
                                A lo largo de mi experiencia he aprendido a tomar una idea o problema y convertirla en un producto sólido, escalable y mantenible.
                            </Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary">
                                En más de 10 años he participado en productos usados por miles de personas en sectores de <strong>Retail, Construcción y Educación</strong>, con el objetivo de ver usuarios satisfechos y valor real generado tras cada entrega.
                            </Typography>
                        </Box>
                        <HighlightBox textAlign='left' alignItems='left' sx={{ marginBottom: 4 }}>
                            <Typography variant="subtitle1" fontWeight={600}>Mi Enfoque Full Stack</Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={600} mb={1}>🎨 Frontend Development</Typography>
                                    <Typography variant="body2" color="text.secondary">Creo interfaces intuitivas y responsivas, con buen rendimiento y consistencia visual. Utilizo <strong>React, TypeScript, Redux y Material UI</strong> para entregar componentes reutilizables y bien probados, preparados para crecer con el producto.</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={600} mb={1}>⚙️ Backend Development</Typography>
                                    <Typography variant="body2" color="text.secondary">Diseño microservicios y arquitecturas desacopladas en <strong>AWS</strong>, construyo APIs RESTful seguras y de alto rendimiento con <strong>Node.js, NestJS y .NET</strong>. Sigo fortaleciendo mis conocimientos en DevOps y NoSQL para mejorar mis entregas continuas.</Typography>
                                </Grid>
                            </Grid>
                        </HighlightBox>
                        <Box mb={4}>
                            <Typography variant="subtitle1" fontWeight="600" color="text.primary" mb={1} gutterBottom>Stack Principal</Typography>
                            <Stack direction="row" spacing={0} flexWrap="wrap" gap={2} mb={2}>
                                {profile.techStack.map((tech, index) => (
                                    <TechLogoChip
                                        key={index}
                                        label={tech.label}
                                        icon={tech.icon}
                                        color={tech.color}
                                    />
                                ))}
                            </Stack>
                            <Button
                                variant='text'
                                size='medium'
                                href='#projects_section'
                                endIcon={<i className='ri-arrow-right-line' style={{ fontSize: 16 }}></i>}
                                color="secondary">
                                Ver Proyectos
                            </Button>
                        </Box>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Button
                                variant='contained'
                                size='medium'
                                href='#experience_section'
                                endIcon={<i className='ri-arrow-right-line'></i>}
                            >
                                Ver Experiencia
                            </Button>
                            <Button
                                variant='outlined'
                                color="input"
                                size="medium"
                                startIcon={<i className='ri-download-2-line'></i>}
                                onClick={downloadCV}
                            >
                                Descargar CV
                            </Button>
                            <Button
                                variant='outlined'
                                size='medium'
                                href='#hero_section'
                                color="input"
                                startIcon={<i className='ri-mail-line'></i>}
                            >
                                Contactar
                            </Button>
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
                                title="10+ tecnologías"
                                subtitle="experiencia probada"
                                icon={<i className="ri-tools-line"></i>}
                            />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <HeroStatCard
                                color="secondary"
                                variant='outlined'
                                title="Arquitecturas"
                                subtitle="serverless & seguras"
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
                </Grid>
                <HighlightBox gradientDirection='center' sx={{ py: 3, mt: isMobile ? 4 : 6 }}>
                    <Typography variant="subtitle1" fontWeight={700}>🚀 ¿Hasta dónde puede llegar una idea bien construida?</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 550 }}>Mi compromiso es claridad, confianza y valor que permanezca mientras el producto evoluciona.</Typography>

                    <Box mt={2}>
                        <Divider variant='fullWidth' component="div" style={{ marginBottom: '24px', opacity: 0.6 }} />
                        <QuickMatch isMobile={isMobile} />
                    </Box>
                </HighlightBox>
            </Container>
        </Box>
    )
};

export default AboutMeSection;