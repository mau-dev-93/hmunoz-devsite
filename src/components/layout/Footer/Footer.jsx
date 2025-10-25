import { Box, Container, Grid, Typography, Divider, Link, Button } from "@mui/material";

// shared
import SocialIconButton from "../../shared/SocialIconButton/SocialIconButton.jsx";
import Logo from "../../shared/Logo/Logo.jsx";

// utils
import { downloadCV } from "@/utils/downloadCV.js";

const Footer = () => {
    return (
        <Box component="footer" bgcolor="background.paper" pt={6} pb={{ xs: 2, sm: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Logo isMobile={false} sx={{ marginBottom: 2 }} />
                        <Typography variant="body2" color="text.secondary" mb={2} lineHeight={1.8}>
                            Senior Full-Stack Developer. Entrego valor real con claridad, seguridad y mejora continua.
                        </Typography>
                        <Box display="flex" gap={1.5}>
                            <SocialIconButton size="medium" href="https://github.com/mau-dev-93" icon={<i className='ri-github-line'></i>} />
                            <SocialIconButton size="medium" href="https://www.linkedin.com/in/mauricio-munoz-fonseca/" icon={<i className='ri-linkedin-line'></i>} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="body2" fontWeight="bold" mb={2}>Enlaces rápidos</Typography>
                        <Box display="flex" flexDirection="column" gap={1.5}>
                            <Link href="#hero_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Inicio</Typography></Link>
                            <Link href="#aboutme_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Sobre mí</Typography></Link>
                            <Link href="#experience_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Experiencia</Typography></Link>
                            <Link href="#skills_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Habilidades</Typography></Link>
                            <Link href="#projects_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Proyectos</Typography></Link>
                            <Link href="#education_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Formación</Typography></Link>
                            <Link href="#humanside_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Lado Humano</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="body2" fontWeight="bold" mb={2}>Contacto</Typography>
                        <Box display="flex" flexDirection="column" gap={1.5}>
                            <Box display="flex" alignItems="center" gap={1.5} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                                <i className='ri-mail-line'></i>
                                <Typography variant="body2">hmmunozf@gmail.com</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1.5} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                                <i className='ri-phone-line'></i>
                                <Typography variant="body2">8120136619</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1.5} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                                <i className='ri-map-pin-line'></i>
                                <Typography variant="body2">Monterrey, Nuevo León, México</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 4, mb: { xs: 2, sm: 4 } }} />
                <Box display="flex" justifyContent={{ xs: "center", sm: "space-between" }} alignItems="center" flexWrap="wrap" gap={1}>
                    <Typography variant="caption" color="text.secondary">
                        © 2025 Mauricio Muñoz. Hecho con <Box component="span" color="error.main"><i className='ri-heart-line'></i></Box> y mucho código.
                    </Typography>
                    <Button
                        variant='outlined'
                        color="input"
                        size="small"
                        startIcon={<i className='ri-download-2-line'></i>}
                        onClick={downloadCV}
                    >
                        <Typography variant="caption" whiteSpace="nowrap">Descargar CV</Typography>
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;