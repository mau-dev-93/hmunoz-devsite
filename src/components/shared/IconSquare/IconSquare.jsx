
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
                    // cursor: "pointer",
                    transition: "all 0.25s ease"
                };

                if (variant === "condensed") {
                    base.color = contrast;
                    base.background = `linear-gradient(135deg, ${gradient} 0%, ${main} 100%)`;
                    base.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                } 
                
                if (variant === "outlined") {
                    base.color = main;
                    base.backgroundColor = alpha(background, 0.5);
                    base.boxShadow = "none";
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