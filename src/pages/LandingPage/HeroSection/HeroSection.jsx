import React from 'react';

// @mui/material
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';

// components
import SocialIconButton from '../../../components/shared/SocialIconButton/SocialIconButton';
import ProfileAvatar from '../../../components/shared/ProfileAvatar/ProfileAvatar';

const HeroSection = () => {
    return (
        <Box id="hero_section" component="section" display="flex" alignItems="center" justifyContent="center" position="relative" bgcolor="background" minHeight="60vh">
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
                <Grid container spacing={4}>
                    <Grid container size={6} spacing={2} sx={{ marginBottom: "16px" }}>
                        <Grid size={12}>
                            <Typography variant="h2" fontWeight="600" marginBottom={1}>Mauricio Muñoz</Typography>
                            <Typography variant="h4" fontWeight="600" color="secondary" marginBottom={1}>Desarrollador Full Stack</Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary">Me especializo en desarrollar soluciones tecnológicas que no solo resuelven problemas, sino que también mejoran la forma en que las personas interactúan con los sistemas.</Typography>
                        </Grid>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Stack direction="row" alignItems="center" gap={1.2}>
                                <Icon color='primary' sx={{ fontSize: "1.4rem", height: "auto" }}>
                                    <i className="ri-mail-line" />
                                </Icon>
                                <Typography variant="body2" color="text.secondary">hmmunozf@gmail.com</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1.2}>
                                <Icon color='primary' sx={{ fontSize: "1.4rem", height: "auto" }}>
                                    <i className="ri-phone-line" />
                                </Icon>
                                <Typography variant="body2" color="text.secondary">8120136619</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1.2}>
                                <Icon color='primary' sx={{ fontSize: "1.4rem", height: "auto" }}>
                                    <i className="ri-map-pin-line" />
                                </Icon>
                                <Typography variant="body2" color="text.secondary">Monterrey, Nuevo León, México</Typography>
                            </Stack>
                        </Box>
                        <Box width="100%" display="flex" gap={1.5}>
                            <Button variant='contained' size='medium' startIcon={<i className='ri-download-2-line'></i>}>
                                Descargar CV
                            </Button>
                            <SocialIconButton size="medium" href="https://github.com/tu-usuario" icon={<i className='ri-github-line'></i>} />
                            <SocialIconButton size="medium" href="https://github.com/tu-usuario" icon={<i className='ri-linkedin-line'></i>} />
                        </Box>
                    </Grid>
                    <Grid size={6} alignSelf="center" justifyItems="flex-end">
                        <ProfileAvatar />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default HeroSection;