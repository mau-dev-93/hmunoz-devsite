import { alpha, Avatar } from "@mui/material";

const ProfileAvatar = ({ src }) => {
    return (
        <Avatar
            alt="Mauricio Muñoz"
            src={src}
            sx={(theme) => ({
                width: { xs: theme.spacing(27), md: theme.spacing(42) },
                height: { xs: theme.spacing(27), md: theme.spacing(42) },
                borderColor: alpha(theme.palette.primary.main, 0.2),
                borderStyle: 'solid',
                borderWidth: '4px',
                overflow: 'hidden'
            })}
        />
    )
};

export default ProfileAvatar;