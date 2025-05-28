import React, { useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { useSwipeable } from 'react-swipeable';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const images = [
    '/src/assets/images/family.jpg',
    '/src/assets/images/pizza.jpg',
    '/src/assets/images/cat.jpg',
    '/src/assets/images/guitar.jpg',
    '/src/assets/images/papacho.jpg',
];

const SwipeableGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true, // Permite swipe con mouse también
    });

    // Autoplay cada 4 segundos
    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000); // 4000 ms = 4 segundos

        return () => clearInterval(interval); // Limpia al desmontar o recargar
    }, []);

    return (
        <Box {...handlers} sx={{ maxWidth: 400, mx: 'auto', position: 'relative' }}>
            {/* Imagen activa */}
            <Box
                component="img"
                src={images[activeIndex]}
                alt={`Imagen ${activeIndex + 1}`}
                sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 2,
                    objectFit: 'cover',
                    minHeight: 300,
                    maxHeight: 300,
                    transition: 'all 0.3s ease',
                }}
            />
            {/* Puntos dentro de la imagen */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 0,
                    // backgroundColor: 'rgba(0, 0, 0, 0.4)', // opcional: fondo semitransparente
                    borderRadius: '20px',
                    px: 1,
                    py: 0.5,
                }}>
                {images.map((_, index) => (
                    <IconButton
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        size="small"
                        sx={{
                            color: index === activeIndex ? 'white' : 'grey.400',
                            padding: 0.5,
                            fontSize: 10, // aquí defines el tamaño deseado
                        }}
                    >
                        <FiberManualRecordIcon fontSize="inherit" />
                    </IconButton>
                ))}
            </Box>
        </Box>
    );
}

export default SwipeableGallery;