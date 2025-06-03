import React from 'react';

// components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// icons
import VerifiedIcon from '@mui/icons-material/Verified';

const CourseCard = () => {
    return <Card sx={{ maxWidth: 260 }}>
        <CardMedia
            image="../../../../../src/assets/images/liderazgo.jpg"
            sx={{ height: 140 }}
            title="green iguana"
        />
        <CardContent>
            <Stack alignItems="flex-start" spacing={1}>
                <Box
                    component="img"
                    src="../../../../../src/assets/images/logos/platforms/coursera-logo-white.png"
                    height="12px"
                    alt="Liderazgo y comunicación" />
                <Typography
                    variant="body1"
                    fontWeight="500"
                    color='text.primary'>
                    Liderazgo y comunicación
                </Typography>
                <Chip
                    label="Certificación digital"
                    icon={<VerifiedIcon />}
                    color="primary"
                    size="small"
                />
            </Stack>
        </CardContent>
    </Card>;
};

export default CourseCard;