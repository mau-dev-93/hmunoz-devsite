import React from 'react';
import styled from 'styled-components';

import {
    Box,
    Typography,
    Link,
    Stack,
    // Divider
} from '@mui/material';

const FooterBox = styled(Box)`
    background-color: ${(props) => props.theme.palette.background.paper};
    border-top: 1px solid ${(props) => props.theme.palette.divider.main};
`;

const Footer = () => {
    return (
        <FooterBox component="footer" sx={{ mt: 4, p: 3, /*bgcolor: 'grey.900', color: 'grey.100'*/ }}>
            {/* <Divider variant='middle'/> */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center">
                <Box>
                    {/* <Typography variant="h6">hm-devsite</Typography> */}
                    <Typography variant="body2" /*sx={{ mt: 1 }}*/>
                        © {new Date().getFullYear()} Mauricio Muñoz. Todos los derechos reservados.
                    </Typography>
                </Box>
                {/* <Stack spacing={1}>
                    <Link href="#inicio" underline="hover" color="inherit">Inicio</Link>
                    <Link href="#sobre-mi" underline="hover" color="inherit">Sobre mí</Link>
                    <Link href="#experiencia" underline="hover" color="inherit">Experiencia</Link>
                    <Link href="#contacto" underline="hover" color="inherit">Contacto</Link>
                </Stack> */}
            </Stack>
        </FooterBox>
    );
};

export default Footer;