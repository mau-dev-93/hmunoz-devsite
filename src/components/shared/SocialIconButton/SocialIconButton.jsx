import PropTypes from "prop-types";
import { alpha, IconButton } from "@mui/material";

const SocialIconButton = ({ icon, size, href }) => {
    return (
        <IconButton
            component="a"
            size={size}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            color='primary'
            sx={(theme)=>({
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: alpha(theme.palette.input.main, 1),
                backgroundColor: alpha(theme.palette.input.main, 0.3),
                color: alpha(theme.palette.input.contrastText, 1),
                fontSize: "1.25rem",
                width: "47.5px"
            })}
        >
            {icon}
        </IconButton>
    )
}

SocialIconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf([
        "small",
        "medium",
        "large"
    ])
};

SocialIconButton.defaultProps = {
    size: "medium"
};

export default SocialIconButton;