import * as React from "react";

// @material-ui/core
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// navbar links
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";

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

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar variant="regular" sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box display="flex" flex={1} justifyContent="flex-start">
                    <Typography variant="h6" color="primary" fontWeight="bold">Mauricio Muñoz</Typography>
                </Box>
                {!isMobile && (
                    <NavbarLinks isMobile={isMobile} />
                )}
                <Box display="flex" flex={1} justifyContent="flex-end" gap={2}>
                    {isMobile ? (
                        <NavbarDrawer />
                    ) : (
                        <Box>
                            {/* Botones de idiomas y tema del sistema */}
                        </Box>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;