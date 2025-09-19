import * as React from "react";

// @material-ui/core
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";

import { useNavbarScroll } from "../../../hooks/useNavbarScroll.js";

export const AppBar = React.forwardRef(function AppBar(props, ref) {
    return (
        <MuiAppBar
            ref={ref}
            sx={(theme) => ({
                backgroundColor: theme.palette.navbar.background,
                borderBottom: `1px solid ${theme.palette.navbar.border}`,
                backdropFilter: 'blur(8px)',
                boxShadow: 'none',
            })}
            {...props} />
    );
});

const SECTIONS = [
    { id: "hero_section", label: "Inicio" },
    { id: "aboutme_section", label: "Sobre mí" },
    { id: "projects_section", label: "Proyectos" },
    { id: "experience_section", label: "Experiencia" },
    { id: "skills_section", label: "Habilidades" },
    { id: "education_section", label: "Educación" },
    { id: "humanside_section", label: "Mi Lado Humano" },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const offsetTop = isMobile ? 56 : 64;

    const { activeSection, scrollToSection } = useNavbarScroll(SECTIONS, offsetTop);

    const handleTabClick = (sectionId, index) => {
        scrollToSection(sectionId, index);
    };

    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar variant="regular" sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box display="flex" flex={1} justifyContent="flex-start">
                    <Typography variant="h6" color="primary" fontWeight="bold">Mauricio Muñoz</Typography>
                </Box>
                <Tabs
                    value={activeSection}
                    variant={isMobile ? "scrollable" : "standard"}
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    role="navigation"
                    sx={{
                        "& .MuiTabs-indicator": { display: "none" },
                        "& .MuiTab-root": {
                            textTransform: "none",
                            fontWeight: 600,
                            minHeight: 56,
                            color: "text.secondary",
                            "&:hover": { color: "text.primary" },
                        },
                        "& .Mui-selected": {
                            color: "primary.main",
                            fontWeight: 600,
                            "&:hover": {
                                color: "primary.main",
                            },
                        },
                    }}
                >
                    {SECTIONS.map((section, index) => (
                        <Tab
                            key={section.id}
                            disableRipple
                            onClick={() => handleTabClick(section.id, index)}
                            label={<Typography variant="body2" component="span" noWrap fontWeight="600">{section.label}</Typography>}
                        />
                    ))}
                </Tabs>
                <Box display="flex" flex={1} justifyContent="flex-end" gap={2}>
                    {/* <Button variant="outlined">Login</Button> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;