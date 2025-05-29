import React from 'react';
import styled from 'styled-components';

// @mui/material
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
// import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
// import Collapse from '@mui/material/Collapse';

// @mui/icons-material
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const StyledAccordion = styled(Accordion)`
    background-color: ${(props) => props.theme.palette.background.paper};
    border-color: ${(props) => props.theme.palette.divider};
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
`;

const ExperienceCard = ({ title, dateRange, company, summary, responsibilities, techStack, defaultExpanded }) => {
    // const [expanded, setExpanded] = React.useState(false);
    // const [expanded, setExpanded] = React.useState(false);

    // const handleChange = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    return (
        // <Paper elevation={0} sx={{ backgroundColor: "background.paper", width: "100%", paddingX: "24px", paddingY: "16px", borderRadius: 2 }}>
        <StyledAccordion
            defaultExpanded={defaultExpanded}
            elevation={0}
        // expanded={expanded === 'panel1'}
        // onChange={handleChange('panel1')}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                    paddingY: 2,       // padding vertical
                    paddingX: 3,       // padding horizontal
                    minHeight: '48px', // evita altura extra automática
                    '&.Mui-expanded': {
                        minHeight: 48, // mantener misma altura en expandido
                    },
                    '& .MuiAccordionSummary-content': {
                        marginY: 0,
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                        marginY: 0, // evita que el contenido se expanda verticalmente
                    }
                }}
            >
                <Stack width="100%" direction="row" justifyContent="space-between" sx={{ paddingRight: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="body1" fontWeight="600" color="text.primary">{title}</Typography>
                        <Box component="span">|</Box>
                        <Typography variant="body1" fontWeight="600" color="primary.main">{company}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarMonthOutlinedIcon fontSize="small" />
                        <Typography variant="subtitle2" color="text.secondary">{dateRange}</Typography>
                    </Stack>
                </Stack>
                {/* <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    General settings
                </Typography>
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                    I am an accordion
                </Typography> */}
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    paddingY: 2,       // padding vertical
                    paddingX: 3,       // padding horizontal
                    paddingBottom: "24px",
                }}>
                <Stack spacing={1}>
                    {/* <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1" fontWeight="600" color="text.primary">{title}</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <CalendarMonthOutlinedIcon fontSize="small" />
                            <Typography variant="subtitle2" color="text.secondary">{dateRange}</Typography>
                        </Stack>
                    </Stack> */}
                    {/* <Typography variant="subtitle2" color="primary.main">{company}</Typography> */}
                    <Typography variant="body2" color="text.secondary">{summary}</Typography>
                    <Box>
                        <Typography variant="subtitle2" color="text.primary">Principales responsabilidades y logros:</Typography>
                        {/* <Collapse in={expanded}> */}
                        <List dense sx={{ paddingBottom: 0 }}>
                            {responsibilities.map((item, index) => (
                                <ListItem index={index} key={index}>
                                    <ListItemIcon sx={{ minWidth: 28, color: 'primary.main' }}>
                                        <CheckCircleOutlineIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography variant='body2' color="textSecondary">{item}</Typography>} />
                                </ListItem>
                            ))}
                        </List>
                        {/* </Collapse> */}
                    </Box>
                    {/* {responsibilities.length > 0 && (
                        <Link
                            component="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            underline="none"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                fontSize: 13,
                                color: 'primary.main',
                                fontWeight: 500,
                            }}
                        >
                            {expanded ? 'Ver menos' : 'Ver más'}
                            {expanded ? <ExpandLessIcon sx={{ fontSize: 13 }} /> : <ExpandMoreIcon sx={{ fontSize: 13 }} />}
                        </Link>
                    )} */}
                    <Typography variant="subtitle2" color="text.primary">Tecnologías</Typography>
                    <Stack 
                        direction="row" 
                        spacing={0} 
                        flexWrap="wrap"
                        gap={1}>
                        {techStack.map((tech, index) => (
                            <Chip
                                key={index}
                                label={tech}
                                variant="outlined"
                                size="small"
                                sx={{ color: 'primary.main', borderColor: 'primary.main' }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </AccordionDetails>
        </StyledAccordion>
    )
};

export default ExperienceCard;