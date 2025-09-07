
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { resolveContrast, resolveMain, resolveGradient } from "../../../utils/paletteUtils";

const IconSquare = ({ size = 36, color = "primary", icon = "" }) => {
    return (
        <Box
            sx={(theme) => {
                const main = resolveMain(theme, color);
                const contrast = resolveContrast(theme, color);
                const gradient = resolveGradient(theme, color);
                const base = {
                    width: size,
                    height: size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    color: contrast,
                    background: `linear-gradient(135deg, ${gradient} 0%, ${main} 100%)`,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    fontSize: size * 0.45,
                    cursor: "pointer",
                    transition: "all 0.25s ease"
                };

                return {
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
    icon: ""
};

export default IconSquare;