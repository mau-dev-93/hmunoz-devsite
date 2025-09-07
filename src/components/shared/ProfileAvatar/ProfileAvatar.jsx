import { alpha, Avatar } from "@mui/material";

const ProfileAvatar = () => {
    return (
        <Avatar
            alt="Mauricio Muñoz"
            src="src\assets\images\profile.jpeg"
            sx={(theme) => ({
                width: 'calc(.25rem * 96)',
                height: 'calc(.25rem * 96)',
                borderColor: alpha(theme.palette.primary.main, 0.2),
                borderStyle: 'solid',
                borderWidth: '4px',
                overflow: 'hidden'
            })}
        />
    )
};

export default ProfileAvatar;