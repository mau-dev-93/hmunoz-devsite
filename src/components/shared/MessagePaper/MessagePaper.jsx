import { Box, Typography } from "@mui/material";

const MessagePaper = ({ message }) => {
    return (
        <Box sx={(theme) => ({
            p: theme.spacing(3),
            borderRadius: 3,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            height: "100%",
            width: "100%",
            textAlign: "center",
        })}>
            <Typography variant="body2" color="text.secondary">
                {message}
            </Typography>
        </Box>
    )
};

export default MessagePaper;