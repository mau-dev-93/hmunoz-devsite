// @mui/material
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import educationData from './education-data';
import coursesData from './courses-data';

// components
import CustomChip from "../../../components/shared/CustomChip/CustomChip";
import EducationCard from '../../../components/shared/EducationCard/EducationCard';
import CourseCard from "../../../components/shared/CourseCard/CourseCard";

const Education = () => {
    return (
        <Box id="education_section" component="section" bgcolor="background.section" py={10}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Educación</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Mi carrera académica y compromiso con el aprendizaje continuo</Typography>
                </Box>
                <Box textAlign="center" pb={4}>
                    <Typography variant="h6" fontWeight="600" color="text.primary" mb={2}>Formación Académica</Typography>
                    <Timeline position="alternate">
                        {educationData.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <TimelineConnector sx={{ backgroundColor: "divider", width: '3px', flex: 1 }} />
                                    <TimelineDot variant='outlined' color='primary' />
                                    <TimelineConnector sx={{ backgroundColor: "divider", width: '3px', flex: 1 }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <EducationCard
                                        degree={education.degree}
                                        institution={education.institution}
                                        dateRange={education.dateRange}
                                        specialties={education.specialties}
                                        status={education.status}
                                        direction={index % 2 === 0 ? 'right' : 'left'}
                                    />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h6" fontWeight="600" color="text.primary" mb={2}>Cursos y certificaciones</Typography>
                </Box>
                <Grid container spacing={4} mt={4} justifyContent="flex-start" alignItems="stretch" sx={{ minHeight: "100%" }}>
                    {coursesData.map((course, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <CourseCard
                                title={course.title}
                                institution={course.institution}
                                year={course.year}
                                duration={course.duration}
                                hasCertificate={course.hasCertificate}
                                status={course.status}
                                tags={course.tags}
                                image_url={course.image_url}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default Education;