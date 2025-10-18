import PropTypes from 'prop-types'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";

// components
import CustomChip from "../CustomChip/CustomChip";
import BrandLogo from '../BrandLogo/BrandLogo';
import ProgressBar from '../ProgressBar/ProgressBar';

const CourseCard = ({
    title = "",
    institution = "",
    year = "",
    duration = "",
    hasCertificate = false,
    status = "",
    tags = [],
    image_url = "",
    course_url = "",
    progress_percentage = 0
}) => {
    return (
        <Card
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 245,
                width: "100%",
                position: "relative",
                height: "100%",
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                }
            }}>
            <Box position="absolute" top={12} right={12} zIndex={1}>
                <CustomChip
                    label={status}
                    variant="condensed"
                    size="small"
                    color="black"
                />
            </Box>
            <CardMedia
                component="img"
                alt={`Curso ${title} de ${institution}`}
                height="160"
                image={image_url}
                loading='lazy'
                decoding='async'
                referrerPolicy="no-referrer"
                onError={(e) => {
                    e.target.src = 'https://placehold.co/400x180/png?text=</>';
                }}
            />
            <CardContent sx={{ p: 2, pt: 3, flexGrow: 1 }}>
                <Box mb={2}>
                    <Typography variant="subtitle1" fontWeight={600} component="div" gutterBottom mb={1}>{title}</Typography>
                    <BrandLogo
                        brandId='udemy'
                        size={22}
                        bgColor="#101010"
                        rounded="full"
                    />
                </Box>
                <Stack spacing={1} mb={3}>
                    <Box display="flex" >
                        <ProgressBar progress_percentage={progress_percentage} sx={{ marginBottom: 1 }} />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" color="text.secondary">
                            Año
                        </Typography>
                        <Typography variant="caption" color="text.primary" fontWeight={500}>
                            {year}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" color="text.secondary">
                            Duración
                        </Typography>
                        <Typography variant="caption" color="text.primary" fontWeight={500}>
                            {duration}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" color="text.secondary">
                            Certificado
                        </Typography>
                        {hasCertificate ? (
                            <Typography variant="caption" color="success.primary">
                                <i className="ri-checkbox-circle-line"></i> Certificado obtenido
                            </Typography>
                        ) : (
                            <Typography variant="caption" color="secondary.main">
                                <i className="ri-time-line"></i> Pendiente
                            </Typography>
                        )}

                    </Box>
                </Stack>
                <Typography variant="body2" fontWeight={600} color="text.primary" gutterBottom>Tecnologías:</Typography>
                <Box mt={1}>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {tags?.map((tag, index) => (
                            <CustomChip
                                key={index}
                                label={tag}
                                variant="condensed"
                                color="input"
                                size="small"
                            />
                        ))}
                    </Stack>
                </Box>
            </CardContent>
            <CardActions disableSpacing sx={{ p: 2, flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Button
                    component="a"
                    variant="outlined"
                    color="input"
                    title='Ir a curso'
                    fullWidth
                    size='medium'
                    disabled={!course_url}
                    href={course_url}
                    target="_blank"
                    startIcon={<i className='ri-external-link-line'></i>}
                >
                    <Typography variant="body2" color="inherit">Ir al curso</Typography>
                </Button>
            </CardActions>
        </Card>
    )
};

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    hasCertificate: PropTypes.boolean,
    course_url: PropTypes.string,
    status: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    image_url: PropTypes.string,
}

export default CourseCard;