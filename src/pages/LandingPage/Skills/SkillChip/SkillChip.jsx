import React from "react";
import { useTheme } from "@mui/material/styles";

// @mui/material
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import skillMap from "./skillMap"; // ajusta la ruta
// import { ReactComponent as AwsIcon } from "../../../../assets/images/logos/technologies/aws.svg";

const SkillChip = ({ techKey }) => {
    const theme = useTheme();
    const skill = skillMap[techKey];

    if (!skill) return null;

    const { label, icon: Icon } = skill;

    return (
        <Stack direction="row" spacing={0.5}>
            <Icon style={{ color: theme.palette.primary.main }} />
            <Typography variant="body2" color="text.secondary">{label}</Typography>
        </Stack>
    );
};

export default SkillChip;