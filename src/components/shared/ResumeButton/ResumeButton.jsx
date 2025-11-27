import { useTranslation } from "react-i18next";

// @mui/material
import { Button, Icon, IconButton, Typography } from "@mui/material";

// utils
import { downloadCV } from "@/utils/downloadCV";

const ResumeButton = ({ isMobile = false }) => {
    const { t } = useTranslation("common");

    if (isMobile) {
        return (
            <IconButton
                edge={"end"}
                size="medium"
                color="secondary"
                title={t("buttons.downloadCV")}
                sx={{
                    transition: (t) => t.transitions.create("background-color", { duration: t.transitions.duration.shorter }),
                    "&:hover": { bgcolor: "background.section" },
                }}
                onClick={downloadCV}
            >
                <Icon className='ri-download-2-line' sx={{ fontSize: 24, lineHeight: 1 }} />
            </IconButton>
        );
    }

    return (
        <Button
            variant='contained'
            size="medium"
            color="secondary"
            startIcon={<i className='ri-download-2-line'></i>}
            sx={{
                width: { xs: '100%', sm: 'auto' },
            }}
            onClick={downloadCV}
        >
            <Typography variant="body2" fontWeight={500} whiteSpace="nowrap">{t("buttons.downloadCV")}</Typography>
        </Button>
    );
};

export default ResumeButton;