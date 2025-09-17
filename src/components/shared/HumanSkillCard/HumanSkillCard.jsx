import PropTypes from 'prop-types';
import { Paper, Box, Typography } from "@mui/material";

// components
import IconSquare from '../IconSquare/IconSquare';

const HumanSkillCard = ({ title, icon, color, description }) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                p: "24px",
                borderRadius: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
                width: '100%',
                // maxWidth: "100%"
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
                <IconSquare icon={icon} size={40} variant='bicolor' color={color} sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.primary" fontSize={14} fontWeight={600} textAlign="center">
                    {title}
                </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" fontSize={13} textAlign="center">
                {description}
            </Typography>
        </Paper>
    );
};

HumanSkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
};

export default HumanSkillCard;