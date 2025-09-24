import { alpha, Avatar } from "@mui/material";

const ProfileAvatar = ({ src }) => {
    return (
        <Avatar
            alt="Mauricio Muñoz"
            src={src}
            sx={(theme) => ({
                width: {
                    xs: theme.spacing(24),  // 160px - móvil pequeño
                    sm: theme.spacing(27),  // 216px - móvil grande/tablet
                    md: theme.spacing(35),  // 280px - tablet
                    lg: theme.spacing(42)   // 336px - desktop
                },
                height: {
                    xs: theme.spacing(24),
                    sm: theme.spacing(27),
                    md: theme.spacing(35),
                    lg: theme.spacing(42)
                },
                borderColor: alpha(theme.palette.primary.main, 0.2),
                borderStyle: 'solid',
                borderWidth: '4px',
                overflow: 'hidden'
            })}
        />
    )
};

export default ProfileAvatar;