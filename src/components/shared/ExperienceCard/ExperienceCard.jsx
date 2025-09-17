import PropTypes from 'prop-types';
import { Card, CardContent, Box, Typography, Stack, Paper } from "@mui/material";

// components
import CustomChip from '../CustomChip/CustomChip';
import HighlightList from '../HighlightList/HighlightList';

const ExperienceCard = ({ title, duration, jobTitle, dateRange, location, employmentType, description, highlights = [], techStack = [] }) => {
    return (
        <Card sx={{ borderRadius: 3, p: 1 }} variant='outlined'>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={5}>
                    <Box>
                        <Typography variant="h6" color="text.primary" fontWeight={600} gutterBottom>{jobTitle}</Typography>
                        <Typography variant="subtitle1" color="primary" fontWeight={600}>{title}</Typography>
                        <Stack direction="row" spacing={2} mt={1.5}>
                            <Box color="text.secondary" display="flex" alignItems="center" gap={0.5}>
                                <i className='ri-calendar-line' style={{ marginRight: 4 }}></i>
                                <Typography variant="body2" color="text.secondary">{dateRange}</Typography>
                            </Box>
                            <Box color="text.secondary" display="flex" alignItems="center" gap={0.5}>
                                <i className='ri-map-pin-2-line' style={{ marginRight: 4 }}></i>
                                <Typography variant="body2" color="text.secondary">{location}</Typography>
                            </Box>
                            <CustomChip label={employmentType} variant="transparent" color="input" size="small" sx={{ fontSize: 10 }} />
                        </Stack>
                    </Box>
                    <CustomChip label={`${duration} años`} variant="outlined" size="medium" color="secondary" sx={{ fontSize: 10 }} />
                </Box>
                <Typography variant="body1" color="text.secondary" mb={3}>{description}</Typography>
                <Box color="secondary.main" display="flex" alignItems="center" gap={0.5} mb={1.5}>
                    <i className='ri-award-line' style={{ marginRight: 4 }}></i>
                    <Typography variant="body2" color="text.primary" fontWeight={600}>Actividades y logros</Typography>
                </Box>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: "background.paper50",
                        border: "none",
                        borderColor: "divider",
                        mb: 3
                    }}
                >
                    <HighlightList features={highlights} variant='body2' color="secondary.main" />
                </Paper>
                <Box color="primary.main" display="flex" alignItems="center" gap={0.5} mb={1.5}>
                    <i className='ri-code-line' style={{ marginRight: 4 }}></i>
                    <Typography variant="body2" color="text.primary" fontWeight={600}> Tecnologias</Typography>
                </Box>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    {techStack.map((tech, index) => (
                        <CustomChip key={index} label={tech} variant="condensed" color="input" size="medium" />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

ExperienceCard.defaultProps = {
    highlights: [],
    goals: [],
    techStack: []
};

ExperienceCard.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    jobTitle: PropTypes.string.isRequired,
    dateRange: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    employmentType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    goals: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    highlights: PropTypes.arrayOf(PropTypes.string),
    techStack: PropTypes.arrayOf(PropTypes.string)
};

export default ExperienceCard;