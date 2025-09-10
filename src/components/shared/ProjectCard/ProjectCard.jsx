import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";

// Components
import CustomChip from '../CustomChip/CustomChip';
import IconSquare from '../IconSquare/IconSquare';
import ProgressBar from '../ProgressBar/ProgressBar';
import HighlightList from '../HighlightList/HighlightList';

const ProjectCard = ({ name, description, status, icon, progress_percentage = 0, tech_stack = [], features = [], imagen_url, github_repo_url, live_demo_url }) => {
    return (
        <Card
            variant='outlined'
            sx={{
                maxWidth: 345,
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
            <Box position="absolute" display="flex" justifyContent="space-between" width="100%" p={1.5}>
                <IconSquare icon={icon} color="primary" />
                <CustomChip label={status} variant="condensed" size="small" color="black" sx={{ fontSize: 10 }} />
            </Box>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                image={imagen_url}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Box py={2}>
                    <Typography gutterBottom variant="subtitle1" fontWeight={700} component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </Box>
                <Box py={2}>
                    <ProgressBar progress_percentage={progress_percentage} sx={{ marginBottom: 2 }} />
                    <Typography variant="caption" color="text.primary" fontWeight={600}>
                        Tecnologías
                    </Typography>
                    <Stack direction="row" spacing={0} flexWrap="wrap" gap={1} mt={1} mb={2}>
                        {tech_stack.map((tech, index) => (
                            <CustomChip key={index} label={tech} variant="transparent" color="input" size="small" />
                        ))}
                    </Stack>
                    <Typography variant="caption" color="text.primary" fontWeight={600}>
                        Caracteristicas principales
                    </Typography>
                    <HighlightList features={features} color="primary.main" sx={{ marginTop: 1 }} />
                </Box>
            </CardContent>
            <CardActions sx={{ p: 2, mt: 'auto' }}>
                <Button variant="outlined" color="input" sx={{ flex: 1 }} size='small' href={github_repo_url} target="_blank" startIcon={<i className='ri-github-line'></i>}>
                    <Typography variant="caption" color="text.primary">Ver código</Typography>
                </Button>
                <Button variant="contained" color="primary" sx={{ flex: 1 }} size='small' href={live_demo_url} target="_blank" startIcon={<i className='ri-external-link-line'></i>}>
                    <Typography variant="caption" color="text.primary">Ver proyecto</Typography>
                </Button>
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
    imagen_url: PropTypes.string.isRequired,
    github_repo_url: PropTypes.string.isRequired,
    live_demo_url: PropTypes.string.isRequired
};

ProjectCard.defaultProps = {
    status: "",
    icon: "",
    progress_percentage: 0,
    tech_stack: [],
    features: [],
    imagen_url: "",
    github_repo_url: "",
    live_demo_url: ""
};

export default ProjectCard;