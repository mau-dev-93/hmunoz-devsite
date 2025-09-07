import PropTypes from "prop-types";
import { Chip, Typography } from "@mui/material";
import { alpha } from "@mui/system";
import { resolveColor, resolveContrast, resolveMain } from "../../../utils/paletteUtils";

/*
    Componente badge con las siguientes variaciones: 
    - outlined 
    - condensed 
    Si es condensado, tomará el color prop para el background, y la tipografia siempre será blanca. 
    Si es outlined, tomará el color prop para los siguientes casos: 
    - border: color-prop 20% opacidad 
    - fondo: color-prop 10% opacidad 
    - texto: color-prop 100% opacidad
*/

const CustomChip = ({ label, color = "primary", variant = "condensed", size = "medium", bold = false, icon, sx, ...rest }) => {
    return (
        <Chip
            label={<Typography variant="body2" fontSize=".75rem" fontWeight={500}>{label}</Typography>}
            icon={icon}
            size={size}
            variant="outlined"
            sx={(theme) => {
                const main = resolveMain(theme, color);
                const contrast = resolveContrast(theme, color);
                const isSmall = size === "small";

                const base = {
                    borderRadius: "6.5px",
                    height: isSmall ? 24 : 28,
                    "& .MuiChip-label": {
                        px: isSmall ? 0.75 : 1,
                        fontWeight: bold ? 600 : 500,
                    },
                    "& .MuiChip-icon, & .MuiChip-deleteIcon": {
                        color: "currentColor",
                    },
                    ...sx,
                };

                if (variant === "condensed") {
                    return {
                        ...base,
                        bgcolor: main,
                        color: contrast,
                        borderColor: "transparent",
                    };
                }

                 if (variant === "transparent") {
                    const border = resolveColor(theme, color, "border");
                    return {
                        ...base,
                        bgcolor: "transparent",
                        color: contrast,
                        borderColor: border,
                    };
                }

                return {
                    ...base,
                    bgcolor: alpha(main, 0.1),
                    color: main,
                    borderColor: alpha(main, 0.2),
                };
            }}
            {...rest}
        />
    );
}

CustomChip.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    icon: PropTypes.any,
    sx: PropTypes.object,
    variant: PropTypes.oneOf([
        "outlined",
        "condensed"
    ]),
    size: PropTypes.oneOf([
        "small",
        "medium",
        "large"
    ])
};

CustomChip.defaultProps = {
    size: "medium"
};

export default CustomChip;