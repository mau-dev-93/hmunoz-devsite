import { alpha, Box, Paper, Typography } from "@mui/material";
import { resolveColor } from "../../../utils/paletteUtils";

const IdentityPaper = ({ icon, description }) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: "16px",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
            }}
        >
            <Box
                sx={(theme) => {
                    const color = resolveColor(theme, 'secondary', 'main');
                    return {
                        bgcolor: alpha(color, 0.1),
                        color: "secondary.main",
                        borderRadius: "50%",
                        p: 1.2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        width: '42px',
                        height: '42px',
                        fontSize: '18px'
                    }
                }}
            >
                <i className={icon}></i>
            </Box>
            <Typography variant="caption">{description}</Typography>
        </Paper>
    )
};

export default IdentityPaper;