// @mui/material
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';

// components
import SocialIconButton from '../../../components/shared/SocialIconButton/SocialIconButton';
import ProfileAvatar from '../../../components/shared/ProfileAvatar/ProfileAvatar';
import ContactDetail from "../../../components/shared/ContactDetail/ContactDetail";

const HeroSection = () => {
    return (
        <Box id="hero_section" component="section" display="flex" alignItems="center" justifyContent="center" position="relative" bgcolor="background" minHeight="100vh">
            <Box position="absolute"
                sx={{
                    top: '0 !important',
                    left: '0 !important',
                    inset: 'calc(var(--spacing) * 0)',
                    backgroundImage: 'linear-gradient(var(--tw-gradient-stops))'
                }}>
            </Box>
            <Box position="absolute"
                sx={{
                    top: 0,
                    left: 0,
                    inset: 'calc(var(--spacing) * 0)',
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)'
                }}>
            </Box>
            <Container maxWidth="lg">
                <Fade in timeout={600}>
                    <Grid container spacing={4}>
                        <Grid container size={6} spacing={2} sx={{ marginBottom: "16px" }}>
                            <Grid size={12} mb={1}>
                                <Typography variant="h2" fontWeight="600" marginBottom={1}>Mauricio Muñoz</Typography>
                                <Typography variant="h4" fontWeight="600" color="secondary" marginBottom={1}>Desarrollador Full Stack</Typography>
                                <Typography variant="body1" fontWeight="400" color="text.secondary">Me especializo en desarrollar soluciones tecnológicas que no solo resuelven problemas, sino que también mejoran la forma en que las personas interactúan con los sistemas.</Typography>
                            </Grid>
                            <Box display="flex" flexDirection="column" gap={1} mb={2}>
                                <ContactDetail text="hmmunozf@gmail.com" icon={<i className="ri-mail-line" />} actionHref="mailto:hmmunozf@gmail.com" />
                                <ContactDetail text="8120136619" icon={<i className="ri-phone-line" />} actionHref="tel:8120136619" />
                                <ContactDetail text="Monterrey, Nuevo León, México" icon={<i className="ri-map-pin-line" />} actionHref="https://www.google.com/maps/search/?api=1&query=Monterrey,+Nuevo+León,+México" />
                            </Box>
                            <Box width="100%" display="flex" gap={1.5}>
                                <Button variant='contained' size='medium' startIcon={<i className='ri-download-2-line'></i>}>
                                    Descargar CV
                                </Button>
                                <SocialIconButton size="small" href="https://github.com/mau-dev-93" icon={<i className='ri-github-line'></i>} />
                                <SocialIconButton size="small" href="https://www.linkedin.com/in/mau-dev-93/" icon={<i className='ri-linkedin-line'></i>} />
                            </Box>
                        </Grid>
                        <Grid size={6} alignSelf="center" justifyItems="flex-end">
                            <ProfileAvatar />
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    )
};

export default HeroSection;