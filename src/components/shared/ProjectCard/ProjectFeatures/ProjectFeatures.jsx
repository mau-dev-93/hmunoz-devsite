import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ProjectFeatures = ({ features, sx }) => {
    return (
        <List dense disablePadding sx={{ ...sx }}>
            {features.map((feature, index) => (
                <ListItem key={index} disableGutters disablePadding>
                    <Box
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
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

export default ProjectFeatures;