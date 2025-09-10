import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

const HighlightList = ({ features, color, sx }) => {
    return (
        <List dense disablePadding sx={{ ...sx }}>
            {features.map((feature, index) => (
                <ListItem key={index} disableGutters disablePadding>
                    <Box
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: color,
                            flexShrink: 0,
                            marginRight: 1,
                        }}
                    />
                    <ListItemText sx={{ lineHeight: "16px" }} primary={
                        <Typography variant="caption" color="text.secondary">{feature}</Typography>
                    } />
                </ListItem>
            ))}
        </List>
    )
};

HighlightList.defaultProps = {
    features: [],
    color: 'primary.main',
    sx: {}
};

HighlightList.propTypes = {
    features: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
    sx: PropTypes.object
}

export default HighlightList;