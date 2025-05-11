
import React from "react";

// @material-ui/core
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// components
import NavbarLink from "../NavbarLink/NavbarLink";

const Navbar = () => {
    return (
        <AppBar position="fixed" elevation={0} /*position="fixed" color="transparent" elevation={0}*/>
            <Toolbar variant="regular">
                <Box display="flex" justifyContent="center" width="100%">
                    <NavbarLink to="home" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span">Inicio</Typography>
                    </NavbarLink>
                    <NavbarLink to="about_me" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span">Sobre mí</Typography>
                    </NavbarLink>
                    <NavbarLink to="experience" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span">Experiencia mí</Typography>
                    </NavbarLink>
                    <NavbarLink to="skills" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span">Habilidades</Typography>
                    </NavbarLink>
                    <NavbarLink to="education" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span">Educación</Typography>
                    </NavbarLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
