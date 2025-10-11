import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Stack, useMediaQuery, useTheme } from '@mui/material';

// components
import ExperienceCard from '../../../../components/shared/ExperienceCard/ExperienceCard';

const ExperienceTimeline = ({ experiences }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (isMobile) {
        return (
            <Stack spacing={3}>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        isMobile={isMobile}
                        title={experience.title}
                        duration={experience.duration}
                        jobTitle={experience.job_title}
                        dateRange={experience.date_range}
                        location={experience.location}
                        companyUrl={experience.company_url}
                        employmentType={experience.employment_type}
                        employmentLocation={experience.employment_location}
                        description={experience.description}
                        highlights={experience.highlights}
                        techStack={experience.tech_stack}
                    />
                ))}
            </Stack>
        )
    }

    return (
        <Timeline
            position='right'
            color='primary'
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
            {experiences.map((experience, index) => (
                <TimelineItem key={index} >
                    <TimelineSeparator
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <TimelineConnector sx={{ backgroundColor: "divider", width: '2px', flex: 1 }} />
                        <TimelineDot variant='outlined' color='primary' sx={{ alignSelf: 'center' }} />
                        <TimelineConnector sx={{ backgroundColor: "divider", width: '2px', flex: 1 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ pl: 4, pt: 0, pb: index + 1 < experiences.length ? 4 : 'inherit' }}>
                        <ExperienceCard
                            title={experience.title}
                            isMobile={isMobile}
                            duration={experience.duration}
                            jobTitle={experience.job_title}
                            dateRange={experience.date_range}
                            location={experience.location}
                            companyUrl={experience.company_url}
                            employmentType={experience.employment_type}
                            employmentLocation={experience.employment_location}
                            description={experience.description}
                            highlights={experience.highlights}
                            techStack={experience.tech_stack}
                        />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
};

export default ExperienceTimeline;