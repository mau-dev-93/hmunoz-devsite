import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

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

const AboutMeSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { t } = useTranslation("about");

    return (
        <Box id="aboutme_section" component="section" bgcolor="background" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Box mb={3}>
                            <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}><Trans ns="about" i18nKey="section_title" components={{ strong: <Box component="span" color="secondary.main" /> }} /></Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary" gutterBottom>
                                <Trans ns="about" i18nKey="me.description1" components={{ strong: <strong /> }} />
                            </Typography>
                            <Typography variant="body1" fontWeight="400" color="text.secondary">
                                <Trans ns="about" i18nKey="me.description2" components={{ strong: <strong /> }} />
                            </Typography>
                        </Box>
                        <HighlightBox textAlign='left' alignItems='left' sx={{ marginBottom: 4 }}>
                            <Typography variant="subtitle1" fontWeight={600}>{t("focus.title")}</Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={600} mb={1}>🎨 {t("focus.frontend_development.title")}</Typography>
                                    <Typography variant="body2" color="text.secondary"><Trans ns="about" i18nKey="focus.frontend_development.description" components={{ strong: <strong /> }} /></Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography variant="subtitle1" color="secondary.main" fontWeight={600} mb={1}>⚙️ {t("focus.backend_development.title")}</Typography>
                                    <Typography variant="body2" color="text.secondary"><Trans ns="about" i18nKey="focus.backend_development.description" components={{ strong: <strong /> }} /></Typography>
                                </Grid>
                            </Grid>
                        </HighlightBox>
                        <Box mb={4}>
                            <Typography variant="subtitle1" fontWeight="600" color="text.primary" mb={1} gutterBottom>{t("tech_stack.title")}</Typography>
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
                                <Typography variant="caption" fontWeight={600}>{t("tech_stack.view_projects")}</Typography>
                            </Button>
                        </Box>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Button
                                variant='contained'
                                size='medium'
                                href='#experience_section'
                                endIcon={<i className='ri-arrow-right-line'></i>}
                            >
                                {t("buttons.view_experience")}
                            </Button>
                            <Button
                                variant='outlined'
                                size='medium'
                                href='#hero_section'
                                color="input"
                                startIcon={<i className='ri-mail-line'></i>}
                            >
                                {t("buttons.contact")}
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid container size={{ xs: 12, lg: 6 }} spacing={2} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                        {profile.hero_stats.map((stat, index) => (
                            <Grid key={index} size={{ xs: 6 }}>
                                <HeroStatCard
                                    variant='outlined'
                                    color={stat.color}
                                    title={t(stat.title)}
                                    subtitle={t(stat.subtitle)}
                                    icon={<i className={stat.icon}></i>}
                                />
                            </Grid>

                        ))}
                    </Grid>
                </Grid>
                <HighlightBox gradientDirection='center' sx={{ py: 3, mt: isMobile ? 4 : 6 }}>
                    <Typography variant="h6" fontWeight={700}>{t("highlight_box.title")}</Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 800 }}>
                        <Trans
                            ns="about"
                            i18nKey="highlight_box.description1"
                            components={{
                                strong: <Box component="span" fontWeight={600} color="secondary.main" />
                            }}
                        />
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 800 }}>
                        <Trans
                            ns="about"
                            i18nKey="highlight_box.description2"
                            components={{
                                strong: <Box component="span" fontWeight={600} color="secondary.main" />
                            }}
                        />
                    </Typography>
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