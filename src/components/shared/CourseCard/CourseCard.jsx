import PropTypes from 'prop-types'  
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography, Divider } from "@mui/material";
import CustomChip from "../CustomChip/CustomChip";

const CourseCard = ({ 
    title="Aprendiendo con el curso de React",
    institution= "Udemy",
    year= "2025",
    duration= "50 horas",
    hasCertificate= true,
    status= "En progreso",
    tags= ["Java", "Back-end", "SpringBoot", "React"],
    image_url= "https://blacksuan19.dev/assets/images/aws.jpg"
 }) => {
    return (
        <Card
            variant='outlined'
            sx={{
                minWidth: 245,
                width: "100%",
                position: "relative",
                height: "100%",
            }}>
            <Box position="absolute" display="flex" justifyContent="right" width="100%" p={1.5}>
                <CustomChip label={status} variant="condensed" size="small" color="black" sx={{ fontSize: 10 }} />
            </Box>
            <CardMedia
                component="img"
                alt={title}
                height="100"
                image={image_url}
            />
            <CardContent sx={{ p: 2 }}>
                <Box mb={2}>
                    <Typography gutterBottom variant="body1" fontWeight={600} component="div">{title}</Typography>
                    <Typography variant="body2" fontWeight="600" color="primary">{institution}</Typography>
                </Box>
                <Stack spacing={1} mb={2}>
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
                <Divider  />
                <Box mt={2}>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {tags?.map((tag, index) => (
                            <CustomChip
                                key={index}
                                label={tag}
                                variant="transparent"
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