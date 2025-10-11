import * as React from "react";

// @material-ui/core
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Box, Button, IconButton, Typography } from "@mui/material";

// navbar links
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";

// components
import Logo from "../../shared/Logo/Logo";

// utils
import { downloadCV } from "@/utils/downloadCV";

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
                <Box display="flex" flex={1} justifyContent="flex-end" gap={2}>
                    <Box>
                        {!isMobile && (
                            <Button
                                variant='contained'
                                size="medium"
                                color="secondary"
                                startIcon={<i className='ri-download-2-line'></i>}
                                sx={{
                                    width: { xs: '100%', sm: 'auto' },
                                }}
                                onClick={downloadCV}
                            >
                                <Typography variant="body2" fontWeight={500} whiteSpace="nowrap">Descargar CV</Typography>
                            </Button>
                        )}
                        {/* Botones de idiomas y tema del sistema */}
                    </Box>
                    {isMobile && <NavbarDrawer />}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;