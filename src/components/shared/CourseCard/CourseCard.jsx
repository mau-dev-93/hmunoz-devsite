import PropTypes from 'prop-types'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography, Divider } from "@mui/material";

// components
import CustomChip from "../CustomChip/CustomChip";
import BrandLogo from '../BrandLogo/BrandLogo';

const CourseCard = ({
    title = "",
    institution = "",
    year = "",
    duration = "",
    hasCertificate = false,
    status = "",
    tags = [],
    image_url = ""
}) => {
    return (
        <Card
            variant='outlined'
            sx={{
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
                height="100"
                image={image_url}
                onError={(e) => {
                    e.target.src = 'https://img.freepik.com/free-photo/scorched-fall-wood-concept_23-2147866526.jpg?semt=ais_incoming&w=740&q=80'; // imagen por defecto
                }}
            />
            <CardContent sx={{ p: 2 }}>
                <Box mb={2}>
                    <Typography gutterBottom variant="body1" fontWeight={600} component="div">{title}</Typography>
                    <BrandLogo
                        brandId='udemy'
                        size={24}
                        bgColor="#101010"
                        rounded="full"
                    />
                </Box>
                <Stack spacing={1} mb={3}>
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
                        <Typography variant="caption" color={hasCertificate ? "success.main" : "text.primary"} fontWeight={600}>
                            {hasCertificate ? "Sí" : "No"}
                        </Typography>
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
        </Card>
    )
};

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    hasCertificate: PropTypes.boolean,
    status: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    image_url: PropTypes.string,
}

export default CourseCard;