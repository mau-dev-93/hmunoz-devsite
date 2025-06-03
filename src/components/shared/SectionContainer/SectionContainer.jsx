import React from 'react';
import styled from 'styled-components';

// @material-ui/core
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const SectionContainer = styled(Box)`
    width: 100%;
    // min-height: 100vh;
    padding: 4rem 2rem;
    background-color: ${({ theme, bgcolor }) =>
        theme.palette.background[bgcolor] || 'inherit'};
`;

const SectionWrapper = ({ id, children, bgcolor = 'main' }) => {
    return (
        <SectionContainer id={id} bgcolor={bgcolor}>
            <Container maxWidth="lg">{children}</Container>
        </SectionContainer>
    );
};

export default SectionWrapper;