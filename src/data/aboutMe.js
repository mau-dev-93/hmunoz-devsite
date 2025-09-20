const aboutMe = {
    titleKey: "aboutMe.title", // "Sobre Mí"
    descriptionKey: "aboutMe.description", // Texto principal
    focus: [
        {
            icon: "ri-code-s-slash-line",
            titleKey: "aboutMe.focus.frontend.title", // "Frontend Development"
            descriptionKey: "aboutMe.focus.frontend.description",
            color: "warning.main"
        },
        {
            icon: "ri-database-2-line",
            titleKey: "aboutMe.focus.backend.title", // "Backend Development"
            descriptionKey: "aboutMe.focus.backend.description",
            color: "grey.300"
        }
    ],
    highlights: [
        {
            icon: "ri-code-line",
            value: "12+",
            labelKey: "aboutMe.highlights.experience", // "años de experiencia"
            descriptionKey: "aboutMe.highlights.experienceDesc"
        },
        {
            icon: "ri-user-search-line",
            value: "5+",
            labelKey: "aboutMe.highlights.projects", // "proyectos"
            descriptionKey: "aboutMe.highlights.projectsDesc"
        },
        {
            icon: "ri-medal-line",
            value: "15+",
            labelKey: "aboutMe.highlights.techs", // "tecnologías"
            descriptionKey: "aboutMe.highlights.techsDesc"
        },
        {
            icon: "ri-flashlight-line",
            value: "",
            labelKey: "aboutMe.highlights.fullstack", // "Full Stack Developer"
            descriptionKey: "aboutMe.highlights.fullstackDesc"
        }
    ],
    mainStack: [
        { labelKey: "tech.react", icon: "react-original", color: "primary.main" },
        { labelKey: "tech.nodejs", icon: "nodejs-plain", color: "success.main" },
        { labelKey: "tech.aws", icon: "amazonwebservices-plain-wordmark", color: "secondary.main" },
        { labelKey: "tech.typescript", icon: "typescript-plain", color: "warning.main" },
        { labelKey: "tech.sqlserver", icon: "microsoftsqlserver-plain", color: "info.main" }
    ],
    actions: [
        { labelKey: "aboutMe.actions.projects", href: "#projects_section", variant: "contained", color: "primary" },
        { labelKey: "aboutMe.actions.contact", href: "#contact_section", variant: "outlined", color: "input" }
    ]
};

export default aboutMe;