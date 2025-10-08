import React from "react";

// @material-ui/core
import { alpha, Drawer, IconButton, List, Icon, ListItemButton, ListItemText } from "@mui/material";

// context
import { useNavbarScrollContext } from "../../../contexts/NavbarScrollContext/useNavbarScrollContext";

// sections
import { SECTIONS } from "../../../config/sections";
import { resolveColor2 } from "../../../utils/paletteUtils";

const NavbarDrawer = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };

    const drawerWidth = 340;
    const TB_XS = 56;   // xs
    const TB_SM = 64;   // sm+

    return (
        <React.Fragment>
            <IconButton
                edge={"end"}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(!openDrawer)}
                size="medium"
                sx={{
                    transition: (t) => t.transitions.create("background-color", { duration: t.transitions.duration.shorter }),
                    "&:hover": { bgcolor: "background.section" },
                }}
            >
                <Icon className={openDrawer ? "ri-close-line" : "ri-menu-line"} sx={{ fontSize: 24, lineHeight: 1 }}  />
            </IconButton>
            <Drawer
                ModalProps={{ keepMounted: true }}
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        top: { xs: TB_XS, sm: TB_SM },
                        height: {
                            xs: `calc(100% - ${TB_XS}px)`,
                            sm: `calc(100% - ${TB_SM}px)`,
                        },
                        width: drawerWidth,
                        bgcolor: 'background.default',
                        boxSizing: 'border-box',
                    },
                }}
                slotProps={{
                    backdrop: {
                        sx: {
                            top: { xs: TB_XS, sm: TB_SM },
                            height: {
                                xs: `calc(100% - ${TB_XS}px)`,
                                sm: `calc(100% - ${TB_SM}px)`,
                            },
                        },
                    }
                }}
            >
                <DrawerList onToggleDrawer={toggleDrawer} />
            </Drawer>
        </React.Fragment>
    );
};

const DrawerList = ({ onToggleDrawer }) => {
    const { activeSection, scrollToSection } = useNavbarScrollContext();

    const handleListItemClick = (sectionId, index) => {
        onToggleDrawer(false)({ type: 'click' });
        scrollToSection(sectionId, index);
    };

    return (
        <List component="nav">
            {SECTIONS.map((section, index) => (
                <ListItemButton
                    key={section.id}
                    selected={activeSection === index}
                    component="a"
                    href={`#${section.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleListItemClick(section.id, index);
                    }}
                    sx={(theme) => {
                        const color = resolveColor2(theme, 'primary.main');
                        return {
                            margin: 1,
                            borderRadius: '6.75px',
                            '&.Mui-selected': { backgroundColor: alpha(color, 0.1), color: 'primary.main' },
                            '&.Mui-selected:hover': { backgroundColor: alpha(color, 0.1), color: 'primary.main' },
                            '&:hover': { backgroundColor: 'background.section' },
                            transition: (t) => t.transitions.create(['background-color', 'color'], { duration: t.transitions.duration.shorter }),
                        }
                    }}
                >
                    <ListItemText primary={section.label} slotProps={{ primary: { variant: 'body2' } }} />
                </ListItemButton>
            ))}
        </List>
    );
};

export default NavbarDrawer;