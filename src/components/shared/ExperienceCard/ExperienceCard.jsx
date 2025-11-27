import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// @mui/material
import { Card, CardContent, Box, Typography, Stack, Paper } from "@mui/material";

// components
import CustomChip from '../CustomChip/CustomChip';
import HighlightList from '../HighlightList/HighlightList';

const ExperienceCard = ({ title, duration, jobTitle, dateRange, location, employmentType, employmentLocation, companyUrl, isMobile, description, highlights = [], techStack = [] }) => {
    const { t } = useTranslation("experience");
    const employmentLocationColor = employmentLocation === "employment_locations.remote" ? 'secondary' : (employmentLocation === "employment_locations.hybrid" ? 'success' : 'warning');

    return (
        <Card sx={{ borderRadius: 3, p: 1 }} variant='outlined'>
            <CardContent>
                <Box display="flex" justifyContent="space-between" mb={isMobile ? 2 : 0.5} flexDirection={{ xs: 'column', sm: 'row' }} gap={1}>
                    <Box component="div">
                        <Typography variant="h6" color="text.primary" fontWeight={700} gutterBottom={!isMobile}>{t(jobTitle)}</Typography>
                        <Box
                            component="a"
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            display="flex"
                            alignItems="center"
                            color="primary.main"
                            gap={0.5}
                            mb={isMobile ? 0 : 1}
                            sx={{
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'color 0.2s, text-decoration 0.2s',
                                '&:hover': {
                                    color: 'secondary.main',
                                }
                            }}>
                            <Typography variant="subtitle1" color="inherit" fontWeight={600} sx={{ cursor: 'inherit' }}>
                                {title}
                            </Typography>
                            <i className="ri-external-link-line" style={{ fontSize: 12, color: 'inherit' }} />
                        </Box>
                    </Box>
                    <CustomChip label={t(duration.format, { count: duration.count })} variant="outlined" size="medium" color="secondary" sx={{ width: 'fit-content', fontSize: 10 }} />
                </Box>
                <Stack direction="row" mb={5} flexWrap="wrap" gap={2}>
                    <Box color="text.secondary" display="flex" alignItems="center" gap={0.5}>
                        <i className='ri-calendar-line' style={{ marginRight: 4 }}></i>
                        <Typography variant="body2" color="text.secondary">{t(dateRange)}</Typography>
                    </Box>
                    <Box color="text.secondary" display="flex" alignItems="center" gap={0.5}>
                        <i className='ri-map-pin-2-line' style={{ marginRight: 4 }}></i>
                        <Typography variant="body2" color="text.secondary">{location}</Typography>
                    </Box>
                    <Box gap={1} display="flex">
                        <CustomChip label={t(employmentType)} variant="outlined" color="primary" size="small" sx={{ fontSize: 10 }} />
                        <CustomChip label={t(employmentLocation)} variant="outlined" color={employmentLocationColor} size="small" sx={{ fontSize: 10 }} />
                    </Box>
                </Stack>
                <Typography variant={isMobile ? "body2" : "body1"} color="text.secondary" mb={3}>{t(description)}</Typography>
                <Box color="secondary.main" display="flex" alignItems="center" gap={0.5} mb={1.5}>
                    <i className='ri-award-line' style={{ marginRight: 4 }}></i>
                    <Typography variant="body2" color="text.primary" fontWeight={600}>{t("achievements_label")}</Typography>
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
                    <HighlightList features={highlights} format={(item) => t(item)} variant='body2' color="secondary.main" />
                </Paper>
                <Box color="primary.main" display="flex" alignItems="center" gap={0.5} mb={1.5}>
                    <i className='ri-code-line' style={{ marginRight: 4 }}></i>
                    <Typography variant="body2" color="text.primary" fontWeight={600}>{t("technologies_label")}</Typography>
                </Box>
                <Stack direction="row" flexWrap="wrap" gap={1}>
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
    companyUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    goals: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    highlights: PropTypes.arrayOf(PropTypes.string),
    techStack: PropTypes.arrayOf(PropTypes.string)
};

export default ExperienceCard;