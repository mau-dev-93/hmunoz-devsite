
import React from "react";
import styled from "styled-components";

// @material-ui/core
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// components
import NavbarLink from "../NavbarLink/NavbarLink";

const StyledAppBar = styled(AppBar)`
    background-color: ${(props) => props.theme.palette.navbar.main};
    backdrop-filter: blur(6px);
    box-shadow: none;
`;

const Navbar = () => {
    return (
        <StyledAppBar position="fixed" elevation={0} color="transparent" /*position="fixed"  elevation={0}*/>
            <Toolbar variant="regular">
                <Box display="flex" justifyContent="center" width="100%">
                    <NavbarLink to="home" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" fontWeight="600">Inicio</Typography>
                    </NavbarLink>
                    <NavbarLink to="about_me" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" fontWeight="600">Sobre mí</Typography>
                    </NavbarLink>
                    <NavbarLink to="experience" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" fontWeight="600">Experiencia</Typography>
                    </NavbarLink>
                    <NavbarLink to="skills" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" fontWeight="600">Habilidades</Typography>
                    </NavbarLink>
                    <NavbarLink to="education" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" fontWeight="600">Educación</Typography>
                    </NavbarLink>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;
