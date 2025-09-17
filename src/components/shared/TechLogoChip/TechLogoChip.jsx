import { Chip, Typography, Box } from "@mui/material";
import { alpha } from "@mui/system";
import { resolveColor2 } from "../../../utils/paletteUtils";

const TechLogoChip = ({ label, icon, color = 'primary.main' }) => {
    return (
        <Chip
            label={<Typography variant="body2" color="textSecondary" fontWeight={500}>{label}</Typography>}
            icon={<i className={`devicon-${icon}`} style={{ fontSize: '1.3rem' }}></i>}
            variant="outlined"
            sx={(theme) => {
                const bgColor = resolveColor2(theme, 'background.paper');
                const borderColor = resolveColor2(theme, 'divider', 0.3);
                return {
                    fontWeight: 500,
                    fontSize: '1rem',
                    px: '11px',
                    py: '11px',
                    borderRadius: 2,
                    minWidth: 120,
                    minHeight: 50,
                    gap: 0.5,
                    backgroundColor: alpha(bgColor, 0.3),
                    color: 'text.secondary',
                    borderColor: alpha(borderColor, 0.3),
                    '.MuiAvatar-root': { width: 32, height: 32 },
                    '.MuiChip-icon': { 
                        color: resolveColor2(theme, color)
                     },
                }
            }}
        />
    )
};

export default TechLogoChip;