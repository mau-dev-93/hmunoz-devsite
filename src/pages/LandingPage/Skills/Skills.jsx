import React from 'react';

// @mui/material
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

// Components
import SkillChip from './SkillChip/SkillChip';

// Icons    
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const Skills = () => {
    return (
        <Box width="100%">
            <Box textAlign="center" sx={{ marginBottom: "24px" }}>
                <Typography variant="h4" fontWeight="600" color="text.primary">Habilidades</Typography>
                {/* <Typography variant="subtitle2" fontWeight="400" color="text.secondary">Mi trayectoria laboral</Typography> */}
            </Box>
            <Box mb={3}>
                <Typography variant="subtitle2" color="text.primary" mb={1}>Lenguajes</Typography>
                <Stack spacing={2} direction="row">
                    <SkillChip techKey="javascript" />
                    <SkillChip techKey="typescript" />
                    <SkillChip techKey="csharp" />
                    <SkillChip techKey="cplusplus" />
                </Stack>
            </Box>
            <Box mb={3}>
                <Typography variant="subtitle2" color="text.primary" mb={1}>Frontend</Typography>
                <Stack spacing={2} direction="row">
                    <SkillChip techKey="reactjs" />
                    <SkillChip techKey="html5" />
                    <SkillChip techKey="css3" />
                </Stack>
            </Box>
            <Box mb={3}>
                <Typography variant="subtitle2" color="text.primary" mb={1}>Backend & Cloud</Typography>
                <Stack spacing={2} direction="row">
                    <SkillChip techKey="nodejs" />
                    <SkillChip techKey="aws" />
                    <SkillChip techKey="aspdotnet" />
                    <SkillChip techKey="sql" />
                    <SkillChip techKey="sqllite" />
                </Stack>
            </Box>
            <Box mb={3}>
                <Typography variant="subtitle2" color="text.primary" mb={1}>Herramientas</Typography>
                <Stack spacing={2} direction="row">
                    <SkillChip techKey="git" />
                    <SkillChip techKey="svn" />
                    <SkillChip techKey="mixpanel" />
                    <SkillChip techKey="ga4" />
                    <SkillChip techKey="hubspot" />
                </Stack>
            </Box>
        </Box>
    );
};

export default Skills;