import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// components
import ExperienceCard from '../../../../components/shared/ExperienceCard/ExperienceCard';

const ExperienceTimeline = ({ experiences }) => {
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
                        <TimelineConnector sx={{ backgroundColor: "divider", width: '3px', flex: 1 }} />
                        <TimelineDot variant='outlined' color='primary' />
                        <TimelineConnector sx={{ backgroundColor: "divider", width: '3px', flex: 1 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ pl: 4 }}>
                        <ExperienceCard
                            title={experience.title}
                            duration={experience.duration}
                            jobTitle={experience.job_title}
                            dateRange={experience.date_range}
                            location={experience.location}
                            employmentType={experience.employment_type}
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