import { Box, Snackbar, SnackbarContent, Stack } from "@mui/material";

const Toast = ({ open, message, onClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={1500}
            onClose={onClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
            <SnackbarContent
                role="status"
                aria-live="polite"
                message={
                    <Stack direction="row" gap={1} alignItems="center">
                        <i className="ri-check-line" style={{ fontSize: 18, lineHeight: '24px' }} aria-hidden="true" />
                        <Box component="span">{message}</Box>
                    </Stack>
                }
                sx={(theme) => ({
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    borderRadius: 2,
                    boxShadow: theme.shadows[3],
                })}
            />
        </Snackbar>
    )
};

export default Toast;