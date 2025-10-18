import { Box, Stack, Typography } from "@mui/material";

// components
import CustomChip from "../CustomChip/CustomChip";

const EducationCard = ({ degree, institution, dateRange, status = "", specialties = [], isMobile = false, isUnique = false, gpa = "", direction = "right" }) => {
    const levelColor = () => {
        const s = (status || "").toLowerCase();
        if (s === "titulado") return "success";
        if (s === "pasante") return "secondary";
        return "text";
    };

    return (
        <Box sx={(theme) => {
            const base = {
                p: theme.spacing(3),
                borderRadius: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
                maxWidth: { xs: "100%", md: "380px" },
                width: "auto",
                marginLeft: direction === "left" ? 'auto' : theme.spacing(8),
                marginRight: direction === "left" ? theme.spacing(8) : '0',
            }
            // Cuando es único o en móvil
            if (isMobile || isUnique) {
                base.marginLeft = theme.spacing(2);
                base.marginRight = 0;
                base.width = "100%";
            } else {
                // comportamiento normal según dirección en timeline
                if (direction === "left") {
                    base.marginLeft = "auto";
                    base.marginRight = theme.spacing(8);
                } else {
                    base.marginLeft = theme.spacing(8);
                    base.marginRight = 0;
                }
            }
            return base;
        }}>
            <Typography variant="body1" fontWeight="600" color="text.primary" gutterBottom>{degree}</Typography>
            <Typography variant="body2" fontWeight="500" color="primary">{institution}</Typography>
            <Stack direction="row" mt={2} spacing={1} justifyContent={direction === "right" ? "" : "flex-end"} alignItems="center" color="text.secondary" mb={2}>
                <i className='ri-calendar-line' style={{ color: 'inherit' }} />
                <Typography variant="body2" fontWeight="400" color="text.secondary" pr={1}>{dateRange}</Typography>
                <CustomChip label={status} variant="outlined" size="small" color={levelColor()} />
                {gpa && <CustomChip label={`GPA: ${gpa}`} variant="outlined" size="small" color="info" />}
            </Stack>
            <Typography variant="caption" fontWeight="500" color="text.primary">Especialidades:</Typography>
            <Stack direction="column" mt={1} spacing={1} alignItems={direction === "right" ? "flex-start" : "flex-end"} color="text.secondary">
                {specialties.length && specialties.map((item, index) => <CustomChip key={index} label={item} variant="condensed" size="small" color="text" />)}
            </Stack>
        </Box>
    )
};

export default EducationCard;