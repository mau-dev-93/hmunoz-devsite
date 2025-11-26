import { Trans, useTranslation } from "react-i18next";

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
import Grid from "@mui/material/Grid";

// import educationData from './education-data';
// import coursesData from './courses-data';
import educationData from '../../../data/education';

// components
import EducationCard from '../../../components/shared/EducationCard/EducationCard';
import CourseCard from "../../../components/shared/CourseCard/CourseCard";
import { useMediaQuery, useTheme } from "@mui/material";

const Education = () => {
    const theme = useTheme();
    const { academicBackground, continueEducation } = educationData;
    const isUnique = academicBackground.length === 1;
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { t } = useTranslation("education");

    return (
        <Box id="education_section" component="section" bgcolor="background.section" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={8}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}><Trans ns="education" i18nKey="section_title" components={{ strong: <Box component="span" color="secondary.main" /> }} /></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>{t("section_description")}</Typography>
                </Box>
                <Box textAlign="center" pb={6}>
                    <Typography variant="h6" fontWeight="600" color="text.primary" mb={4}>{t("academic_background.title")}</Typography>
                    <Timeline
                        position={isMobile ? "right" : "alternate"}
                        sx={{
                            px: isMobile ? 1 : 'inherit',
                            alignItems: isMobile ? 'inherit' : isUnique ? 'center' : 'inherit',
                        }}
                    >
                        {academicBackground.map((education, index) => (
                            <TimelineItem
                                key={index}
                                sx={{
                                    '&.MuiTimelineItem-missingOppositeContent:before': {
                                        display: isMobile || isUnique ? 'none' : 'block'
                                    },
                                }}>
                                <TimelineSeparator
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                    <TimelineConnector sx={{ backgroundColor: "divider", width: '2px', flex: 1 }} />
                                    <TimelineDot variant='outlined' color='primary' sx={{ alignSelf: 'center' }} />
                                    <TimelineConnector sx={{ backgroundColor: "divider", width: '2px', flex: 1 }} />
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{
                                        pt: 0,
                                        pb: (index + 1) < academicBackground.length ? 4 : 0,
                                    }}>
                                    <EducationCard
                                        isMobile={isMobile}
                                        isUnique={isUnique}
                                        degree={education.degree}
                                        institution={education.institution}
                                        dateRange={education.dateRange}
                                        specialties={education.specialties}
                                        status={education.status}
                                        gpa={education.gpa}
                                        direction={isMobile ? "right" : index % 2 === 0 ? 'right' : 'left'}
                                    />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h6" fontWeight="600" color="text.primary" mb={2}>{t("continuing_education.title")}</Typography>
                </Box>
                <Grid container spacing={4} mt={4} justifyContent="flex-start" alignItems="stretch" sx={{ minHeight: "100%" }}>
                    {continueEducation.map((course, index) => (
                        <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                            <CourseCard
                                title={course.title}
                                institution={course.institution}
                                year={course.year}
                                duration={course.duration}
                                hasCertificate={course.hasCertificate}
                                status={course.status}
                                tags={course.tags}
                                image_url={course.image_url}
                                course_url={course.course_url}
                                progress_percentage={course.progress_percentage}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default Education;