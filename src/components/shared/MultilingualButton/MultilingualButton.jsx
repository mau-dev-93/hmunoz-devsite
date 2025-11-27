import React from "react";
import { Box, Button, MenuItem, Typography, Menu, IconButton, Icon } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const MultilingualButton = ({ isMobile = false }) => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        handleClose();
        
        const params = new URLSearchParams(window.location.search);
        params.set('lang', lang);
        window.history.replaceState(
            {},
            document.title,
            `${window.location.pathname}?${params.toString()}`
        );
    };

    const open = Boolean(anchorEl);
    const id = open ? 'language-popover' : undefined;

    return (
        <Box>
            {isMobile ? (
                <IconButton
                    edge={"end"}
                    size="medium"
                    color="primary"
                    sx={{
                        transition: (t) => t.transitions.create("background-color", { duration: t.transitions.duration.shorter }),
                        "&:hover": { bgcolor: "background.section" },
                    }}
                    onClick={handleClick}
                >
                    <Icon className='ri-global-line' sx={{ fontSize: 24, lineHeight: 1 }} />
                </IconButton>
            ) : (
                <Button
                    variant='text'
                    size="medium"
                    color="primary"
                    onClick={handleClick}
                    startIcon={<i className='ri-global-line'></i>}
                >
                    {i18n.language.toUpperCase()}
                </Button >
            )}
            <Menu
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            px: 1,
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        }
                    }
                }}
            >
                <MenuItem
                    onClick={() => handleLanguageChange('es')}
                    sx={{
                        px: 2,
                        py: 1.5,
                        borderRadius: 1,
                        '&:hover': {
                            bgcolor: 'action.hover',
                        }
                    }}
                >
                    <Typography variant="body2">Español - ES</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => handleLanguageChange('en')}
                    sx={{
                        px: 2,
                        py: 1.5,
                        borderRadius: 1,
                        '&:hover': {
                            bgcolor: 'action.hover',
                        }
                    }}
                >
                    <Typography variant="body2">English - EN</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default MultilingualButton;