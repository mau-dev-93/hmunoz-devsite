import React from 'react';
// import styled from 'styled-components';

// @mui/material
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

// @mui/icons-material
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import LocationOn from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon } from '@mui/material';

// components
import CourseCard from './CourseCard/CourseCard';

const Education = () => {
    return (<Box width="100%">
        <Box textAlign='center' sx={{ marginBottom: "24px" }}>
            <Typography variant="h4" fontWeight="600" color="text.primary">Educación</Typography>
            <Typography variant="subtitle2" fontWeight="400" color="text.secondary">Mi carrera académica</Typography>
        </Box>
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant='outlined' color='primary' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Stack spacing={0}>
                        <Typography variant="h6" fontWeight="600" color="text.primary">Maestría en Administración de Negocios</Typography>
                        <Typography variant="subtitle2" fontWeight="400" color="text.secondary">Universidad Tecnológica de México</Typography>
                        <Stack direction="row" mt={2} spacing={0.5} justifyContent="flex-start">
                            <CalendarMonthOutlinedIcon fontSize="small" fontWeight="400" />
                            <Typography variant="subtitle2" fontWeight="400" color="primary">2023 - en curso</Typography>
                        </Stack>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant='outlined' color='primary' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Stack spacing={0}>
                        <Typography variant="h6" fontWeight="600" color="text.primary">Lic. en Multimedia y Animación Digital</Typography>
                        <Typography variant="subtitle2" fontWeight="400" color="text.secondary">Universidad Autónoma de Nuevo León</Typography>
                        <Stack direction="row" mt={2} spacing={0.5} justifyContent="flex-end">
                            <CalendarMonthOutlinedIcon fontSize="small" fontWeight="400" />
                            <Typography variant="subtitle2" fontWeight="400" color="primary">2010 - 2014</Typography>
                        </Stack>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        <Box>
            <Typography variant="h5" fontWeight="600" color="text.primary" mt={4} mb={2}>Otros estudios</Typography>
            <Box>
                <CourseCard
                    course={{
                        title: "Curso de React.js",
                        institution: "Coursera",
                        duration: "2022",
                        description: "Curso avanzado de desarrollo web con React.js.",
                        link: "https://platzi.com/cursos/react/"
                    }}
                />
            </Box>
        </Box>
    </Box>
    )
};

export default Education;