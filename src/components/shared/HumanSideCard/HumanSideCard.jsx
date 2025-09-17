import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

// components
import IconSquare from "../IconSquare/IconSquare";

const HumanSideCard = ({
    title = "Human side title",
    imageUrl = 'https://images.unsplash.com/photo-1736479494478-d1bb4fd5d09d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHRvZ2V0aGVyJTIwbG92ZSUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc1Nzg4NTMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description = 'This is a description of the human side card. It provides insights into personal motivations, passions, and inspirations as a person and programmer.'
}) => {
    return (
        <Card
            variant='sharp'
            elevation={0}
            sx={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
            }}>
            <Box position="absolute" display="flex" justifyContent="space-between" width="100%" p={1.5}>
                <IconSquare icon={'ri-calendar-line'} color="secondary" variant="outlined" />
            </Box>
            <CardMedia component="div" sx={{ position: "relative", height: 260, overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 700ms cubic-bezier(.4,0,.2,1)",
                        transform: "scale(1)",
                        "&:hover": {
                            transform: "scale(1.1)"
                        },
                        
                        /* Efecto más rápido o más suave */
                        // transition: "transform .5s ease-in-out",

                        /* origen de la transformación */
                        // transformOrigin: "center top",

                        /* efecto overlay al hacer hover */
                        // "&:after": {
                        //     content: '""',
                        //     position: "absolute",
                        //     inset: 0,
                        //     background: "rgba(0,0,0,0.15)",
                        //     opacity: 0,
                        //     transition: "opacity .5s",
                        // },
                        // "&:hover:after": {
                        //     opacity: 1,
                        // }
                    }}
                />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
                <Box py={2} px={1}>
                    <Typography variant="subtitle1" fontWeight="600" gutterBottom mb={1}>{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
};

export default HumanSideCard;