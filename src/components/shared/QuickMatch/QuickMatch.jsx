import { Box, Chip, Typography } from "@mui/material";
import { alpha, Stack } from "@mui/system";
import { resolveColor2 } from "@/utils/paletteUtils";
import { useTranslation } from "react-i18next";
import profile from "../../../data/profile";

const QuickMatch = ({ isMobile }) => {
    const { t } = useTranslation("about");

    return (
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} alignItems={isMobile ? "flex-start" : "center"} gap={2}>
            <Box display="flex" alignItems="center" gap={1} flexShrink={0}>
                <Box
                    component="span"
                    sx={{
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: 'success.main',
                        verticalAlign: 'middle',
                        boxShadow: (theme) => `0 0 0 2px ${theme.palette.background.paper}`,
                    }}
                />
                <Typography
                    variant="body2"
                    component="span"
                    color="textPrimary"
                    fontWeight={600}
                    noWrap
                    sx={{
                        whiteSpace: 'nowrap',
                        wordBreak: 'normal',
                    }}
                >
                    {t("quick_match.title")}
                </Typography>
            </Box>
            <Stack direction="row" alignItems="center" flexWrap="wrap" gap={1}>
                {profile.quick_match.map((chip, index) => (
                    <Chip
                        key={index}
                        label={<Typography variant="body2" color="textPrimary" fontWeight={500}>{t(chip.label)}</Typography>}
                        icon={<i className={chip.icon}></i>}
                        variant="outlined"
                        sx={(theme) => {
                            const bgColor = resolveColor2(theme, 'background.paper');
                            const borderColor = resolveColor2(theme, 'divider', 0.3);
                            return {
                                minHeight: 44,
                                fontWeight: 500,
                                px: theme.spacing(0.5),
                                borderRadius: 2,
                                gap: 0.5,
                                backgroundColor: alpha(bgColor, 0.3),
                                color: 'text.secondary',
                                borderColor: alpha(borderColor, 0.3),
                                '.MuiAvatar-root': { width: 32, height: 32 },
                                '.MuiChip-icon': {
                                    color: resolveColor2(theme, chip.color),
                                },
                            }
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default QuickMatch;