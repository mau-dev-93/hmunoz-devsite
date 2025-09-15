import { Box, Container, Typography } from "@mui/material";
import cardsData from "./humaside-data.js";
import { Masonry } from "@mui/lab";

// components
import HumanSideCard from "../../../components/shared/HumanSideCard/HumanSideCard";

const HumanSideSection = () => {
    // Altura base de “fila” (ajústala para controlar la densidad)
    const row = 600;

    return (
        <Box id="humanside_section" component="section" bgcolor="background.default" py={10}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>Más Allá del <Box component="span" color="secondary.main">Código</Box></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Mi motor, mis pasiones y lo que me inspira como persona y programador</Typography>
                </Box>
                <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                        gridAutoFlow: "dense",
                        gridTemplateColumns: {
                            xs: "repeat(12, 1fr)",
                            sm: "repeat(12, 1fr)",
                            md: "repeat(12, 1fr)",
                        },
                        gridAutoRows: `${row}px`,
                    }}
                >
                    {cardsData.map((it) => (
                        <Box
                            key={it.id}
                            sx={() => ({
                                gridColumn: {
                                    xs: `span ${it.span.xs.c}`,
                                    sm: `span ${it.span.sm.c}`,
                                    md: `span ${it.span.md.c}`,
                                },
                                gridRow: {
                                    xs: `span ${it.span.xs.r}`,
                                    sm: `span ${it.span.sm.r}`,
                                    md: `span ${it.span.md.r}`,
                                },
                            })}
                        >
                            <HumanSideCard
                                title={it.title}
                                description={it.description}
                                imageUrl={it.image_url}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
};

export default HumanSideSection;