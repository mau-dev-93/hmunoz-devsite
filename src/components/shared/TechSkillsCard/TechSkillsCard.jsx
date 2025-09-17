import PropTypes from 'prop-types';
import { Paper, Box, Typography, Stack, Chip } from "@mui/material";

// components
import CustomChip from '../CustomChip/CustomChip';
import IconSquare from '../IconSquare/IconSquare';

const TechSkillsCard = ({ title, icon, color, experience, skills = [] }) => {
    const getLevelProps = (level) => {
        switch (level.toLowerCase()) {
            case 'avanzado':
                return {
                    color: 'primary',
                    variant: 'condensed'
                }
            case 'intermedio':
                return {
                    color: 'secondary',
                    variant: 'outlined'
                }
            case 'básico':
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
                // minWidth: 264,
                // maxWidth: "100%"
                width: '100%'
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                <IconSquare icon={icon} size={40} variant='bicolor' color={color} sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.primary" fontWeight={600} textAlign="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="caption" color="text.tertiary" textAlign="center">
                    {experience}
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
                                    {skill.years}+ años
                                </Typography>
                            </Box>
                            <CustomChip label={skill.level} variant={levelProps.variant} color={levelProps.color} size="small" sx={{ fontSize: 10 }} />
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