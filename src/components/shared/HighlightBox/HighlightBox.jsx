import { alpha, Box } from "@mui/material";

const HighlightBox = ({ children, gradientDirection = 'to right', textAlign = 'center', alignItems = 'center', borderColor = 'primary', sx = {} }) => {
    let backgroundGradient = () => {};
    if (gradientDirection === 'to right') {
        backgroundGradient = (theme) => 'linear-gradient(to right, oklab(0.623018 -0.0332199 -0.185032 / 0.1) 0%, oklab(0.76856 0.0561168 0.15481 / 0.1) 100%)';
    } else if (gradientDirection === 'center') {
        backgroundGradient = (theme) => `linear-gradient(to right in oklab, color-mix(in oklab, ${theme.palette.primary.main} 10%, transparent) 0%, color-mix(in oklab, ${theme.palette.secondary.main} 10%, transparent) 50%, #0000 100%)`;
    } else if (gradientDirection === 'to left') {
        backgroundGradient = (theme) => 'linear-gradient(to right, oklab(0.76856 0.0561168 0.15481 / 0.1) 0%, oklab(0.623018 -0.0332199 -0.185032 / 0.1) 100%)';
    }
    
    return (
        <Box
            display="flex"
            role="region"
            flexDirection="column"
            textAlign={textAlign}
            alignItems={alignItems}
            p={3}
            sx={(theme) => ({
                ...sx,
                backgroundImage: backgroundGradient(theme),
                borderColor: alpha(theme.palette[borderColor].main, 0.2),
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '.625rem',
                gap: 1
            })}>
            {children}
        </Box>
    )
}

export default HighlightBox;