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

// @mui/icons-material
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import LocationOn from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon } from '@mui/material';

const Home = () => {
    return <Grid container spacing={4}>
        <Grid container size={6} spacing={2} sx={{ marginBottom: "16px" }}>
            <Grid size={12}>
                <Typography variant="h4" fontWeight="600" color="text.primary">Hello, I'm</Typography>
                <Typography variant="h3" fontWeight="600" color="text.primary" marginBottom={1}>Mauricio Muñoz</Typography>
                <Typography variant="h5" fontWeight="600" color="primary" marginBottom={1}>Desarrollador Frontend</Typography>
                <Typography variant="body1" fontWeight="400" color="text.secondary">I have a passion for building intuitive, user-friendly interfaces that provide an enjoyable and seamless user experience.</Typography>
            </Grid>
            <Grid container size={12} direction="column" spacing={0} sx={{ marginBottom: "16px" }}>
                <Grid container spacing={1}>
                    <Grid>
                        <Icon
                            fontSize='small'
                            color='primary'>
                            <EmailIcon fontSize='inherit' />
                        </Icon>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="body2"
                            color="text.secondary">
                            hmmunozf@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid>
                        <Icon
                            fontSize='small'
                            color='primary'>
                            <PhoneIcon fontSize='inherit' />
                        </Icon>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="body2"
                            color="text.secondary">
                            8120136619
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid>
                        <Icon
                            fontSize='small'
                            color='primary'>
                            <LocationOn fontSize='inherit' />
                        </Icon>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="body2"
                            color="text.secondary">
                            Monterrey, Nuevo León, México
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Button
                    variant='contained'
                    size='medium'>
                    Descargar CV
                </Button>
            </Grid>
        </Grid>
        <Grid size={6} alignSelf="center" justifyItems="center">
            <Avatar
                alt="Remy Sharp"
                src="src\assets\images\profile.jpeg"
                sx={{ width: 250, height: 250 }}
            />
        </Grid>
    </Grid>
};

export default Home;