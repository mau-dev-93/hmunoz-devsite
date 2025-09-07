import { alpha, Box } from "@mui/material";

const HighlightBox = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            alignItems="center"
            sx={(theme) => ({
                p: 3,
                backgroundImage: `linear-gradient(to right in oklab, color-mix(in oklab, ${theme.palette.primary.main} 10%, transparent) 0%, color-mix(in oklab, ${theme.palette.secondary.main} 10%, transparent) 50%, #0000 100%)`,
                borderColor: alpha(theme.palette.primary.main, 0.2),
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: 'calc(.625rem + 4px)',
                gap: 1
            })}>
            {children}
        </Box>
    )
}

export default HighlightBox;