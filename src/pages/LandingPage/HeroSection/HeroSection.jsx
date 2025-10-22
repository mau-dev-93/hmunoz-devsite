import { useTranslation } from "react-i18next";

// @mui/material
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import { useMediaQuery, useTheme } from "@mui/material";

// components
import SocialIconButton from '../../../components/shared/SocialIconButton/SocialIconButton';
import ProfileAvatar from '../../../components/shared/ProfileAvatar/ProfileAvatar';
import ContactDetail from "../../../components/shared/ContactDetail/ContactDetail";

// utils
import { downloadCV } from '../../../utils/downloadCV';

// data
import profile from '../../../data/profile';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { t } = useTranslation("common");

    /* comentario */
    return (
        <Box id="hero_section" component="section" display="flex" alignItems="center" justifyContent="center" position="relative" bgcolor="background" sx={{ minHeight: { xs: '100svh', md: '80vh' } }}>
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
                    <Grid container spacing={4} direction={{ xs: "column-reverse", md: "row" }}>
                        <Grid container size={{ xs: 12, md: 6 }} spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} /*sx={{ marginBottom: "16px" }}*/>
                            <Grid size={12} mb={1} textAlign={{ xs: "center", md: "left" }}>
                                <Typography variant="h2" fontWeight="600" mb={0.75}>{profile.personal.name}</Typography>
                                <Typography variant="h5" fontWeight="600" color="secondary" gutterBottom>{profile.personal.role}</Typography>
                                <Typography variant={isMobile ? "body2" : "body1"} fontWeight="400" color="text.secondary">{profile.personal.resume}</Typography>
                                 <Typography variant={isMobile ? "body2" : "body1"} fontWeight="400" color="text.secondary">{profile.personal.resume2}</Typography>
                            </Grid>
                            <Box display="flex" flexDirection="column" width={{ xs: "100%", md: "auto" }} textAlign={{ xs: "center", md: "left" }} gap={1} mb={2}>
                                <ContactDetail text={profile.personal.email} icon={<i className="ri-mail-line" />} isMobile={isMobile} actionHref={`mailto:${profile.personal.email}`} />
                                <ContactDetail text={profile.personal.phone} icon={<i className="ri-phone-line" />} isMobile={isMobile} actionHref={`tel:${profile.personal.phone}`} />
                                <ContactDetail text={profile.personal.location} icon={<i className="ri-map-pin-line" />} isMobile={isMobile} actionHref={`https://www.google.com/maps/search/?api=1&query=${profile.personal.location}`} />
                            </Box>
                            <Box display="flex" width={{ xs: "100%", md: "auto" }} flexDirection={{ xs: "column", sm: "row" }} justifyContent={{ xs: "center" }} alignItems={{ xs: "center", sm: "inherit" }} gap={1.5}>
                                <Button
                                    variant='contained'
                                    size="medium"
                                    startIcon={<i className='ri-download-2-line'></i>}
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' }
                                    }}
                                    onClick={downloadCV}
                                >
                                    {t("buttons.downloadCV")}
                                </Button>
                                <Box display="flex" gap={1.5} mt={{ xs: 1, sm: 0 }}>
                                    {profile.socials.map((social, index) => (
                                        <SocialIconButton size="medium" key={index} icon={<i className={social.icon} />} href={social.link} />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} alignSelf="center" justifyItems={{ xs: "center", md: "flex-end" }}>
                            <ProfileAvatar src={profile.personal.picture} />
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </Box>
    )
};

export default HeroSection;