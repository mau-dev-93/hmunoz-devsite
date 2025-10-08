import { alpha, Box, Container, Grid, Stack, Typography } from "@mui/material";
import techSkillsData from './tech_skills_data';
import humanSkillsData from './human_skills_data';

// components
import TechSkillsCard from "../../../components/shared/TechSkillsCard/TechSkillsCard";
import HumanSkillCard from "../../../components/shared/HumanSkillCard/HumanSkillCard";
import HighlightBox from "../../../components/shared/HighlightBox/HighlightBox";

const SkillsSection = () => {
    return (
        <Box id="skills_section" component="section" bgcolor="background" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Mis <Box component="span" color="secondary.main">Habilidades</Box></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Técnicas sólidas y habilidades humanas para construir productos con calidad.</Typography>
                </Box>
                <Typography variant="h6" color="text.primary" fontWeight={600} mt={8} mb={2} textAlign="center">Habilidades Técnicas</Typography>
                <Grid container spacing={3} justifyContent="center" alignItems="stretch" width={'100%'}>
                    {techSkillsData.map((category, index) => (
                        <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TechSkillsCard
                                title={category.title}
                                icon={category.icon}
                                color={category.color}
                                skills={category.skills}
                                experience={category.experience}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6" color="text.primary" fontWeight={600} mt={8} mb={2} textAlign="center">Habilidades Humanas</Typography>
                <Grid container spacing={3} justifyContent="center" alignItems="stretch" mb={8}>
                    {humanSkillsData.map((skill, index) => (
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
                        <Typography variant="h6" color="text.primary" fontWeight={700}>Más Allá del Código</Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 650, mb: 2 }}>
                        Más allá del código, combino mis habilidades técnicas con liderazgo, comunicación y pensamiento crítico. El resultado: <strong>productos sólidos, seguros y mantenibles</strong>, con entregas constantes y aprendizaje continuo.
                    </Typography>
                    <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 4 }} justifyContent="center" alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <i className="ri-award-line" style={{ color: "orange", fontSize: 20 }}></i>
                            <Typography variant="caption" color="text.primary" fontWeight={400}>10+ años experiencia</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} color="primary.main" alignItems="center">
                            <i className="ri-team-line" style={{ color: "inherit", fontSize: 20 }}></i>
                            <Typography variant="caption" color="text.primary" fontWeight={400}>3+ equipos liderados</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} color="secondary.main" alignItems="center">
                            <i className="ri-code-line" style={{ color: "inherit", fontSize: 20 }}></i>
                            <Typography variant="caption" color="text.primary" fontWeight={400}>10+ tecnologías</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default SkillsSection;