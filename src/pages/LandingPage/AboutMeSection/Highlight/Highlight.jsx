import React from 'react';

// @mui/material
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

const Highlight = ({ value, indicator }) => {
    return (
        <Stack>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    textAlign: 'center'
                }}
            >
                {value}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    whiteSpace: 'pre-line',
                    color: 'text.secondary',
                    textAlign: 'center'
                }}
            >
                {indicator}
            </Typography>
        </Stack>
    );
};

export default Highlight;