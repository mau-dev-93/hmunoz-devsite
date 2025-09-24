import { Box, Container, Grid, Typography, Divider, Link } from "@mui/material";

// shared
import SocialIconButton from "../../shared/SocialIconButton/SocialIconButton.jsx";

const Footer = () => {
    return (
        <Box component="footer" bgcolor="background.paper" pt={6} pb={4}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>Mauricio Muñoz</Typography>
                        <Typography variant="body2" color="text.secondary" mb={2} lineHeight={1.8}>
                            Desarrollador Full Stack especializado en crear soluciones tecnológicas que mejoran la forma en que las personas interactúan con los sistemas. Combinando experiencia técnica con habilidades humanas para entregar valor real.
                        </Typography>
                        <Box display="flex" gap={1.5}>
                            <SocialIconButton size="medium" href="https://github.com/tu-usuario" icon={<i className='ri-github-line'></i>} />
                            <SocialIconButton size="medium" href="https://github.com/tu-usuario" icon={<i className='ri-linkedin-line'></i>} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="body2" fontWeight="bold" mb={2}>Enlaces rápidos</Typography>
                        <Box display="flex" flexDirection="column" gap={1.5}>
                            <Link href="#hero_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Inicio</Typography></Link>
                            <Link href="#aboutme_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Sobre mí</Typography></Link>
                            <Link href="#projects_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Proyectos</Typography></Link>
                            <Link href="#experience_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Experiencia</Typography></Link>
                            <Link href="#skills_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Habilidades</Typography></Link>
                            <Link href="#education_section" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}><Typography variant="body2">Educación</Typography></Link>
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
                <Divider sx={{ my: 4 }} />
                <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                    <Typography variant="caption" color="text.secondary">
                        © 2025 Mauricio Muñoz. Hecho con <Box component="span" color="error.main"><i className='ri-heart-line'></i></Box> y mucho código.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;