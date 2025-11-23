import PropTypes from 'prop-types';
import { Paper, Box, Typography, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';

// components
import CustomChip from '../CustomChip/CustomChip';
import IconSquare from '../IconSquare/IconSquare';

const TechSkillsCard = ({ title, icon, color, experience_years, skills = [] }) => {
    const { t } = useTranslation("skills");

    const getLevelProps = (level) => {
        switch (level.toLowerCase()) {
            case 'levels.advanced':
                return {
                    color: 'primary',
                    variant: 'condensed'
                }
            case 'levels.intermediate':
                return {
                    color: 'secondary',
                    variant: 'outlined'
                }
            case 'levels.beginner':
                return {
                    color: 'info',
                    variant: 'outlined'
                }
            default:
               return {
                    color: 'input',
                    variant: 'outlined'
                }
        }
    };
    
    return (
        <Paper
            variant="outlined"
            sx={{
                p: "16px",
                borderRadius: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
                width: '100%'
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                <IconSquare icon={icon} size={40} variant='bicolor' color={color} sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.primary" fontWeight={600} textAlign="center" gutterBottom>
                    {t(title)}
                </Typography>
                <Typography variant="caption" color="text.tertiary" textAlign="center">
                    {t("experience", { count: experience_years })}
                </Typography>
            </Box>
            <Stack spacing={1}>
                {skills.map((skill, index) => {
                    const levelProps = getLevelProps(skill.level);
                    return (
                        <Box
                            key={index}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            bgcolor="background.paper20"
                            px={1.5}
                            py={1}
                            borderRadius={2}
                            sx={{ width: '100%' }}>
                            <Box>
                                <Typography variant="body2" color="text.primary" fontWeight={500}>
                                    {skill.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                     {t("years", { count: skill.years })}
                                </Typography>
                            </Box>
                            <CustomChip label={t(skill.level)} variant={levelProps.variant} color={levelProps.color} size="small" sx={{ fontSize: 10 }} />
                        </Box>
                    )
                })}
            </Stack>
        </Paper>
    );
};

TechSkillsCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            skill_name: PropTypes.string.isRequired,
            years_experience: PropTypes.number.isRequired,
            level: PropTypes.string.isRequired
        })
    ).isRequired
};

export default TechSkillsCard;