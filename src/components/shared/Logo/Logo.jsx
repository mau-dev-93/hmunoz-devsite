import { Box, Typography } from "@mui/material";

const Logo = ({ isMobile, sx }) => {
    return (
        <Box
            display="flex"
            flex={1}
            justifyContent="flex-start"
            gap={1}
            sx={{ ...sx, minWidth: isMobile ? 'fit-content' : 'auto' }}
            component={'a'}
            href="#hero_section"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("hero_section")
                    ?.scrollIntoView({ behavior: "smooth" });
            }}>
            <Typography variant="h6" color="primary" fontWeight="bold" component="span" noWrap>{"[ M ]"}</Typography>
            {!isMobile && (
                <Box component="span" sx={{ letterSpacing: '0.5' }}>
                    <Typography variant="h6" color="text.primary" fontWeight="600" >Mauricio</Typography>
                    {/* <Typography variant="h6" color="primary" fontWeight="600" now></Typography> */}
                </Box>
            )}
        </Box>
    )
}


export default Logo;