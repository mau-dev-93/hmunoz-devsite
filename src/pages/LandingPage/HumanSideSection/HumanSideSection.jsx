import { Box, Container, Grid, Typography } from "@mui/material";
import cardsData from "./humaside-data.js";
import identityData from "./identity-data.js";

// components
import HumanSideCard from "../../../components/shared/HumanSideCard/HumanSideCard";
import IdentityPaper from "../../../components/shared/IdentityPaper/IdentityPaper.jsx";
import HighlightBox from "../../../components/shared/HighlightBox/HighlightBox.jsx";

const HumanSideSection = () => {
    const row = 600;

    return (
        <Box id="humanside_section" component="section" bgcolor="background.default" py={10}>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={8}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" gutterBottom>Más Allá del <Box component="span" color="secondary.main">Código</Box></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600 }}>Mi motor, mis pasiones y lo que me inspira como persona y programador</Typography>
                </Box>
                <Box
                    mb={10}
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
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" sx={{ width: { xs: "100%", md: "70%" }, mx: "auto" }} mb={10}>
                    <Typography variant="h5" fontWeight="600" color="text.primary" mb={2}>Pequeñas Cosas Que Me <Box component="span" color="secondary.main">Definen</Box></Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 600, mb: 4 }}>Los detalles que forman mi identidad y que, de alguna manera, influyen en mi forma de crear y pensar el desarrollo de software</Typography>
                    <Grid container spacing={3} direction="row">
                        {identityData.map((item, index) => (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <IdentityPaper icon={item.icon} description={item.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <HighlightBox gradientDirection="to left" borderColor="secondary" sx={{ py: 6 }}>
                    <Typography variant="h6" component="div" fontWeight={700} display="flex" gap={1}  gutterBottom mb={2}>
                        <Box component="span" color="secondary.main" fontWeight={400}><i className='ri-heart-3-line'></i></Box>
                        <Box component="span">Gracias por Llegar Hasta <Box component="span" color="secondary.main">Aquí</Box></Box>
                        <Box component="span" color="secondary.main" fontWeight={400}><i className='ri-heart-3-line'></i></Box>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 750 }}>
                        Si has llegado hasta esta sección, probablemente compartimos una visión similar: las mejores colaboraciones surgen cuando nos conocemos como personas, no solo como profesionales. Cada proyecto es una oportunidad de crear algo significativo, y me encantaría ser parte de tu próxima historia de éxito.
                    </Typography>
                </HighlightBox>
            </Container>
        </Box>
    )
};

export default HumanSideSection;