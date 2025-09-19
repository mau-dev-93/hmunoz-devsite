import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";

// utils
import { resolveColor2 } from "./../../../utils/paletteUtils";

// components
import Toast from "../Toast/Toast";

const ContactDetail = ({ text = "", actionHref = "", icon }) => {
    const [hovered, setHovered] = React.useState(false);
    const [showToast, setShowToast] = React.useState(false);

    const handleCopyText = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setShowToast(true);
    };

    return (
        <>
            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={(theme) => {
                    const bgColor = resolveColor2(theme, 'background.section');
                    return {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.2,
                        borderRadius: 1,
                        px: 1,
                        py: 0.5,
                        transition: 'background 0.2s',
                        position: 'relative',
                        background: hovered ? bgColor : 'transparent',
                        pr: 6.5
                    }
                }}
            >
                <Icon color='primary' sx={{ fontSize: "1.4rem", height: "auto" }}>{icon}</Icon>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    component="a"
                    href={actionHref}
                    target="_blank"
                    sx={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        flexGrow: 1
                    }}>
                    {text}
                </Typography>
                {hovered && (
                    <Button
                        size="small"
                        variant="text"
                        title="Copiar"
                        aria-label="Copiar"
                        sx={{
                            position: 'absolute',
                            right: 8,
                            minWidth: 32,
                            padding: 0,
                            color: "text.secondary",
                            boxShadow: 'none'
                        }}
                        onClick={handleCopyText}
                    >
                        <i className="ri-file-copy-line" style={{ fontSize: 18 }} />
                    </Button>
                )}
            </Box>
            <Toast open={showToast} message="Copiado al portapapeles" onClose={() => setShowToast(false)} />
        </>
    )
};

export default ContactDetail;