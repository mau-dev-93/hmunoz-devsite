import { alpha, Box, Paper, Typography } from "@mui/material";
import { resolveColor2 } from "../../../utils/paletteUtils";

const IdentityPaper = ({ icon, description }) => {
    return (
        <Paper
            variant="outlined"
            sx={(theme) => {
                const color = resolveColor2(theme, 'background.paper');
                const border = resolveColor2(theme, 'divider');
                return {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: "16px",
                    bgcolor: alpha(color, 0.5),
                    border: "1px solid",
                    borderColor: alpha(border, 0.3),
                    borderRadius: 3,
                }
            }}
        >
            <Box
                sx={(theme) => {
                    const color = resolveColor2(theme, 'secondary.main');
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
            <Typography variant="body2" align="left">{description}</Typography>
        </Paper>
    )
};

export default IdentityPaper;