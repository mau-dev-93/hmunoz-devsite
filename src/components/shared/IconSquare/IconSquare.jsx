
import PropTypes from "prop-types";
import { alpha, Box } from "@mui/material";
import { resolveContrast, resolveMain, resolveGradient, resolveColor } from "../../../utils/paletteUtils";

const IconSquare = ({ size = 36, variant = "condensed", color = "primary", icon = "", sx }) => {
    return (
        <Box
            sx={(theme) => {
                const main = resolveMain(theme, color);
                const contrast = resolveContrast(theme, color);
                const gradient = resolveGradient(theme, color);
                const background = resolveColor(theme, "input", "main");

                const base = {
                    width: size,
                    height: size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    fontSize: size * 0.5,
                    transition: "all 0.25s ease",
                    zIndex: 1,
                };

                if (variant === "condensed") {
                    base.color = contrast || "#fff";
                    base.background = `linear-gradient(135deg, ${gradient} 0%, ${main} 100%)`;
                    base.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                }
                else if (variant === "bicolor") {
                    base.color = main;
                    base.backgroundColor = alpha(background, 0.5);
                    base.boxShadow = "none";
                }
                else if (variant === "outlined") {
                    base.color = main;
                    base.border = `1px solid ${alpha(main, 0.3)}`;
                    base.backgroundColor = alpha(theme.palette[color].main, 0.2);
                    base.boxShadow = "none";
                    base.backdropFilter = 'blur(8px)';
                }

                return {
                    ...sx,
                    ...base,
                };
            }}>
            <i className={icon} />
        </Box>
    )
};

IconSquare.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string
};

IconSquare.defaultProps = {
    size: 36,
    color: "primary",
    icon: "",
    variant: "condensed",
    sx: {}
};

export default IconSquare;