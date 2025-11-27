import * as React from "react";

// @material-ui/core
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Box } from "@mui/material";

// navbar links
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";

// components
import Logo from "../../shared/Logo/Logo";
import MultilingualButton from "@/components/shared/MultilingualButton/MultilingualButton";
import ResumeButton from "@/components/shared/ResumeButton/ResumeButton";


export const AppBar = React.forwardRef(function AppBar(props, ref) {
    return (
        <MuiAppBar
            ref={ref}
            sx={(theme) => ({
                backgroundColor: theme.palette.navbar.background,
                borderBottom: `1px solid ${theme.palette.navbar.border}`,
                backdropFilter: 'blur(8px)',
                boxShadow: 'none',
                zIndex: (theme) => theme.zIndex.drawer + 1
            })}
            {...props} />
    );
});

const Navbar = ({ isMobile }) => {
    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar variant="regular" sx={{ display: "flex", justifyContent: "space-between" }} >
                <Logo isMobile={isMobile} />
                {!isMobile && (
                    <NavbarLinks isMobile={isMobile} />
                )}
                <Box display="flex" flex={1} justifyContent="right" gap={2}>
                    <ResumeButton isMobile={isMobile} />
                    <MultilingualButton isMobile={isMobile} />
                    {isMobile && <NavbarDrawer />}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;