import { alpha, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import data from './../../../data/skills';

// components
import TechSkillsCard from "../../../components/shared/TechSkillsCard/TechSkillsCard";
import HumanSkillCard from "../../../components/shared/HumanSkillCard/HumanSkillCard";

const SkillsSection = () => {
    const { t } = useTranslation("skills");

    return (
        <Box id="skills_section" component="section" bgcolor="background.section" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}><Trans i18nKey="section_title" ns="skills" components={{strong: <Box component="span" color="secondary.main" />}} /></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>{t("section_subtitle")}</Typography>
                </Box>
                <Typography variant="h6" color="text.primary" fontWeight={600} mt={8} mb={2} textAlign="center">{t("tech_skills_title")}</Typography>
                <Grid container spacing={3} justifyContent="center" alignItems="stretch" width={'100%'}>
                    {data.tech_skills.map((category, index) => (
                        <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TechSkillsCard
                                title={category.title}
                                icon={category.icon}
                                color={category.color}
                                skills={category.skills}
                                experience_years={category.experience_years}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6" color="text.primary" fontWeight={600} mt={8} mb={2} textAlign="center">{t("soft_skills_title")}</Typography>
                <Grid container spacing={3} justifyContent="center" alignItems="stretch" mb={8}>
                    {data.soft_skills.map((skill, index) => (
                        <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <HumanSkillCard
                                title={skill.title}
                                icon={skill.icon}
                                color={skill.color}
                                description={skill.description}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                    alignItems="center"
                    sx={(theme) => ({
                        p: 3,
                        backgroundColor: theme.palette.background.section,
                        borderColor: alpha(theme.palette.divider, 0.5),
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderRadius: 'calc(.625rem + 4px)',
                        gap: 1
                    })}>
                    <Box display="flex" alignItems="center" gap={0.5} color="primary.main" mb={1}>
                        <i className='ri-code-line' style={{ marginRight: 4, fontSize: 24, color: "inherit" }}></i>
                        <Typography variant="h6" color="text.primary" fontWeight={700}>{t("highlight_title")}</Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 650, mb: 2 }}>
                        <Trans i18nKey="highlight_subtitle" ns="skills" components={{ strong: <Box component="span" color="secondary.main" fontWeight="600" /> }} />
                    </Typography>
                    <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 4 }} justifyContent="center" alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <i className="ri-award-line" style={{ color: "orange", fontSize: 20 }}></i>
                            <Typography variant="caption" color="text.primary" fontWeight={400}>{t("highlight_experience_years")}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} color="primary.main" alignItems="center">
                            <i className="ri-team-line" style={{ color: "inherit", fontSize: 20 }}></i>
                            <Typography variant="caption" color="text.primary" fontWeight={400}>{t("highlight_teams_led")}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} color="secondary.main" alignItems="center">
                            <i className="ri-code-line" style={{ color: "inherit", fontSize: 20 }}></i>
                            <Typography variant="caption" color="text.primary" fontWeight={400}>{t("highlight_technologies")}</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default SkillsSection;