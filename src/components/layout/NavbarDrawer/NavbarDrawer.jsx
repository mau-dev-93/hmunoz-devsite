import React from "react";

// @material-ui/core
import { Drawer, Icon, IconButton, List, ListItemButton, ListItemText } from "@mui/material";

// context
import { useNavbarScrollContext } from "../../../contexts/NavbarScrollContext/useNavbarScrollContext";

// sections
import { SECTIONS } from "../../../config/sections";

const NavbarDrawer = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };

    return (
        <React.Fragment>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                    mr: -1,
                    '&:hover': {
                        transition: 'background-color 0.3s',
                        backgroundColor: 'background.paper'
                    }
                }}>
                <Icon className="ri-menu-line" />
            </IconButton>
            <Drawer
                ModalProps={{ keepMounted: true }}
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)}
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
                    sx={{
                        '&.Mui-selected': { backgroundColor: 'primary.main', color: 'common.white' },
                        '&.Mui-selected:hover': { backgroundColor: 'primary.dark', color: 'common.white' },
                        '&:hover': { backgroundColor: 'primary.main' },
                        transition: (t) => t.transitions.create(['background-color', 'color'], { duration: t.transitions.duration.shorter }),
                    }}
                >
                    <ListItemText primary={section.label} slotProps={{ primary: { variant: 'body2' } }} />
                </ListItemButton>
            ))}
        </List>
    );
};

export default NavbarDrawer;