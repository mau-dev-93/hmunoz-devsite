import { Box, Button, Container, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

// components
import ExperienceTimeline from "./ExperienceTimeline/ExperienceTimeline";

// data
import experienceData from '../../../data/experience';

import { downloadCV } from "@/utils/downloadCV";

const ExperienceSection = () => {
    const { t: t_common } = useTranslation("common");
    const { t: t_experience } = useTranslation("experience");

    return (
        <Box id="experience_section" component="section" bgcolor="background.default" py={{ xs: 8, md: 10 }}>
            <Container maxWidth="lg">
                {/*buena distancia*/}
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" mb={6}>
                    <Typography variant="h4" fontWeight="600" color="text.primary" mb={2}>
                        <Trans ns="experience" i18nKey="section_title" components={{ strong: <Box component="span" color="secondary.main" /> }} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mb={3} sx={{ maxWidth: 600 }}>{t_experience("section_description")}</Typography>
                    <Button
                        variant='outlined'
                        color="input"
                        size="medium"
                        startIcon={<i className='ri-download-2-line'></i>}
                        onClick={downloadCV}
                    >
                        {t_common("buttons.downloadCV")}
                    </Button>
                </Box>
                <ExperienceTimeline experiences={experienceData} />
            </Container>
        </Box>
    )
};

export default ExperienceSection;