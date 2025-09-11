import React from 'react';
import { useTheme } from "@mui/material/styles";

// @mui/material
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid'

// Icons
import {
    SiJavascript,
    SiTypescript,
    SiDotnet,
    SiReact,
    SiSubversion,
    SiSqlite,
    SiMixpanel,
    SiGoogleanalytics,
    SiHubspot,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiGit,
} from "react-icons/si";

const TechSkills = () => {
    const theme = useTheme();

    return (
        <Box>
            <Typography variant="subtitle2" color="text.primary" mb={1}>Frontend</Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Stack spacing={1} alignItems="center">
                        <SiJavascript size={32} style={{ color: theme.palette.primary.main }} />
                        <Typography variant="caption">JavaScript</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack spacing={1} alignItems="center">
                        <SiJavascript size={32} />
                        <Typography variant="caption">JavaScript</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TechSkills;