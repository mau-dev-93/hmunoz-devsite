import styled from "styled-components";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
    height: 8,
    borderRadius: 5,
    flexGrow: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.progress.background,
        ...theme.applyStyles('dark', {
            backgroundImage: "linear-gradient(to right, #2b7fff, #00b8db)",
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        width: `${value}%`,
        transition: "width 0.3s ease",
        transform: 'translateX(0%) !important',
        backgroundImage: "linear-gradient(to right, #2b7fff, #00b8db)",
        ...theme.applyStyles('dark', {
            backgroundImage: "linear-gradient(to right, #2b7fff, #00b8db) !important",
        }),
    },
}));


const ProgressBar = ({ progress_percentage, title, sx }) => {
    return (
        <Box width="100%" sx={{ ...sx }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={0.5}>
                <Typography component="span" variant="caption" color="text.secondary">
                    {title || "Progress"}
                </Typography>
                <Typography component="span" variant="caption" fontWeight="600" color="text.primary">
                    {progress_percentage}%
                </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={progress_percentage} />
        </Box>
    )
}

export default ProgressBar;