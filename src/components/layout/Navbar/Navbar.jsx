
import React from "react";
import styled from "styled-components";

// @material-ui/core
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// components
import NavbarLink from "../NavbarLink/NavbarLink";
import { Button } from "@mui/material";

const StyledAppBar = styled(AppBar)`
    background-color: ${(props) => props.theme.palette.navbar.background};
    border-bottom: 1px solid ${(props) => props.theme.palette.navbar.border};
    backdrop-filter: blur(8px);
    box-shadow: none;
`;

const Navbar = () => {
    return (
        <StyledAppBar position="fixed" elevation={0}>
            <Toolbar variant="regular" sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box display="flex" flex={1} justifyContent="flex-start">
                    <Typography variant="h6" color="primary" fontWeight="bold">Mauricio Muñoz</Typography>
                </Box>
                <Box display="flex" flex={1} justifyContent="center" gap={2}>
                    <NavbarLink to="home" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Inicio</Typography>
                    </NavbarLink>
                    <NavbarLink to="about_me" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Sobre mí</Typography>
                    </NavbarLink>
                    <NavbarLink to="about_me" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Proyectos</Typography>
                    </NavbarLink>
                    <NavbarLink to="experience" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Experiencia</Typography>
                    </NavbarLink>
                    <NavbarLink to="skills" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Habilidades</Typography>
                    </NavbarLink>
                    <NavbarLink to="education" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Educación</Typography>
                    </NavbarLink>
                    <NavbarLink to="human_side" smooth duration={500} offset={-64}>
                        <Typography variant="body2" component="span" noWrap fontWeight="600">Mi Lado Humano</Typography>
                    </NavbarLink>
                </Box>
                <Box display="flex" flex={1} justifyContent="flex-end" gap={2}>
                    <Button variant="outlined">Login</Button>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;