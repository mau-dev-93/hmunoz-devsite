import PropTypes from "prop-types";
import { alpha, Box, Paper, Typography } from "@mui/material";

const HeroStatCard = ({ icon, color = 'default', variant = 'outlined', title, subtitle }) => {
    return (
        <Paper
            variant="outlined"
            sx={(theme) => {
                const getMain = () => color === 'default' ? theme.palette.text.primary : theme.palette[color].main;
                // Estilos base del paper
                const base = {
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 'none'
                };

                //Condiciones de la variante
                if (variant === 'elevated') {
                    base.boxShadow = theme.shadows[4];
                    base.borderColor = 'transparent';
                }
                else if (variant === 'soft') {
                    base.backgroundColor = alpha(getMain(), 0.08);
                    base.borderColor = alpha(getMain(), 0.24);
                }
                else if (variant === 'glass') {
                    base.backgroundColor = alpha(theme.palette.background.paper, 0.6);
                    base.backdropFilter = 'blur(8px)';
                    base.borderColor = alpha(theme.palette.divider, 0.5);
                }

                return base;
            }}
        >
            {icon && (
                <Box
                    sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        fontSize: '1.5rem',
                        color: color === 'default' ? theme.palette.text.primary : theme.palette[color].main,
                        backgroundColor: color === 'default' ? 'action.hover' : alpha(theme.palette[color].main, 0.08),
                        mb: 2
                    })}
                >
                    {icon}
                </Box>
            )}
            <Typography variant='h6' fontWeight={800}>
                {title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {subtitle}
            </Typography>
        </Paper>
    );
};

HeroStatCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.node,
    variant: PropTypes.oneOf([
        "outlined",
        "elevated",
        "soft",
        "glass"
    ]),
    color: PropTypes.oneOf([
        "default",
        "primary",
        "success",
        "warning",
        "error",
    ]),
};

HeroStatCard.defaultProps = {
    subtitle: "",
    variant: "outlined",
    color: "default",
};

export default HeroStatCard;