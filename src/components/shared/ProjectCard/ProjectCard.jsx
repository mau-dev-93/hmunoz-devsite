import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

// Components
import CustomChip from '../CustomChip/CustomChip';
import IconSquare from '../IconSquare/IconSquare';
import ProgressBar from '../ProgressBar/ProgressBar';
import HighlightList from '../HighlightList/HighlightList';

const ProjectCard = ({ name, description, status, role, icon, progress_percentage = 0, tech_stack = [], features = [], image_url, live_demo_url }) => {
    const { t } = useTranslation("projects");

    return (
        <Card
            variant='outlined'
            sx={{
                width: '100%',
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
            <Box position="absolute" display="flex" justifyContent="space-between" width="100%" p={1.5}>
                <IconSquare icon={icon} color="primary" />
                <CustomChip label={status} variant="condensed" size="small" color="black" sx={{ fontSize: 10 }} />
            </Box>
            <CardMedia component="div" sx={{ position: "relative", height: { xs: 168, sm: 168 }, overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url(${image_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "left top",
                        transition: "transform 700ms cubic-bezier(.4,0,.2,1)",
                        transform: "scale(1)",
                        "&:hover": {
                            transform: "scale(1.1)"
                        },
                    }}
                />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1, px: 2 }}>
                <Box py={2}>
                    <Typography gutterBottom variant="h6" fontWeight={600} component="div">
                        {t(name)}
                    </Typography>
                    <CustomChip label={t(role)} variant="outlined" color="secondary" size="small" />
                    <Typography variant="body2" color="text.secondary" mt={2}>
                        {t(description)}
                    </Typography>
                </Box>
                <Box py={2}>
                    <ProgressBar progress_percentage={progress_percentage} title={t("progress_bar")} sx={{ marginBottom: 3 }} />
                    <Typography variant="body2" color="text.primary" fontWeight={600}>
                        {t("tech_stack")}
                    </Typography>
                    <Stack direction="row" spacing={0} flexWrap="wrap" gap={1} mt={1} mb={3}>
                        {tech_stack.map((tech, index) => (
                            <CustomChip key={index} label={tech} variant="transparent" color="input" size="small" />
                        ))}
                    </Stack>
                    <Typography variant="body2" color="text.primary" fontWeight={600}>
                        {t("features")}
                    </Typography>
                    <HighlightList features={features} color="primary.main" variant="body2" format={(item) => t(item)} sx={{ marginTop: 1 }} />
                </Box>
            </CardContent>
            <CardActions disableSpacing sx={{ p: 2, mt: 'auto', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                {live_demo_url && (
                    <Button
                        data-state="soon"
                        aria-disabled="true"
                        tabIndex={-1}
                        variant="contained"
                        color="primary"
                        // title={t("coming_soon")}
                        fullWidth
                        size='medium'
                        disabled
                        onClick={(e) => e.preventDefault()}
                        href={live_demo_url}
                        target="_blank"
                        startIcon={<i className='ri-external-link-line'></i>}
                    >
                        <Typography variant="body2" color="inherit">{t("view_project")}</Typography>
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    progress_percentage: PropTypes.number.isRequired,
    tech_stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image_url: PropTypes.string.isRequired,
    github_repo_url: PropTypes.string.isRequired,
    live_demo_url: PropTypes.string.isRequired
};

ProjectCard.defaultProps = {
    status: "",
    icon: "",
    progress_percentage: 0,
    tech_stack: [],
    features: [],
    image_url: "",
    github_repo_url: "",
    live_demo_url: ""
};

export default ProjectCard;