// @material-ui/core
import { Tab, Tabs, Typography } from "@mui/material";

// section scroll context
import { SECTIONS } from "../../../config/sections";

// context
import { useNavbarScrollContext } from "../../../contexts/NavbarScrollContext/useNavbarScrollContext";

const NavbarLinks = ({ isMobile }) => {
    const { activeSection, scrollToSection } = useNavbarScrollContext();

    const handleTabClick = (sectionId, index) => {
        scrollToSection(sectionId, index);
    };

    return (
        <Tabs
            value={activeSection}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            allowScrollButtonsMobile
            role="navigation"
            sx={{
                "& .MuiTabs-indicator": { display: "none" },
                "& .MuiTab-root": {
                    textTransform: "none",
                    fontWeight: 600,
                    minHeight: { xs: 56, sm: 64 },
                    color: "text.secondary",
                    "&:hover": { color: "text.primary" },
                },
                "& .Mui-selected": {
                    color: "primary.main",
                    fontWeight: 600,
                    "&:hover": {
                        color: "primary.main",
                    },
                },
            }}
        >
            {SECTIONS.map((section, index) => (
                <Tab
                    key={section.id}
                    disableRipple
                    onClick={() => handleTabClick(section.id, index)}
                    label={<Typography variant="body2" component="span" noWrap fontWeight="600">{section.label}</Typography>}
                />
            ))}
        </Tabs>
    )
};

export default NavbarLinks;