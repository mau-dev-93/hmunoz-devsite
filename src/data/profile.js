import { buildS3Url } from "@/utils/s3Url";
import { ENV } from "@/config/env";

// src/data/profile.js
const profile = {
    name: "Mauricio Muñoz",
    email: "hmmunozf@gmail.com",
    phone: "8120136619",
    location: "Monterrey, Nuevo León, México",
    picture: buildS3Url(ENV.bucket, ENV.region, "profile/profile_v3.png"),
    resumen_url: "/files/Mauricio_Munoz_Resume.pdf",
    socials: [
        { name: "GitHub", icon: "ri-github-line", link: "https://github.com/mau-dev-93" },
        { name: "LinkedIn", icon: "ri-linkedin-line", link: "https://www.linkedin.com/in/mauricio-munoz-fonseca/" }
    ],
    techStack: [
        { label: "React", icon: "react-original", color: "primary.main" },
        { label: "Material UI", icon: "materialui-plain", color: "info.main" },
        { label: "Redux", icon: "redux-original", color: "infinity.main" },
        { label: "Node.js", icon: "nodejs-plain", color: "success.main" },
        { label: "NestJS", icon: "nestjs-original", color: "error.main" },
        { label: "TypeScript", icon: "typescript-plain", color: "warning.main" },
        { label: "AWS", icon: "amazonwebservices-plain-wordmark", color: "secondary.main" },
        { label: "SQL Server", icon: "microsoftsqlserver-plain", color: "info.main" },
        { label: ".NET", icon: "dot-net-plain", color: "primary.main" },
        { label: "Java", icon: "java-plain", color: "error.main" },

    ],
    hero_stats: [
        { id: "experience", title: "hero_stats.experience.title", subtitle: "hero_stats.experience.subtitle", icon: "ri-code-line", color: "primary" },
        { id: "technologies", title: "hero_stats.technologies.title", subtitle: "hero_stats.technologies.subtitle", icon: "ri-tools-line", color: "success" },
        { id: "architectures", title: "hero_stats.architectures.title", subtitle: "hero_stats.architectures.subtitle", icon: "ri-stack-line", color: "secondary" },
        { id: "fullstack", title: "hero_stats.fullstack.title", subtitle: "hero_stats.fullstack.subtitle", icon: "ri-infinity-line", color: "infinity" },
    ],
    quick_match: [
        { id: "fullstack", label: "quick_match.fullstack", icon: "ri-terminal-line", color: 'primary.main' },
        { id: "senior", label: "quick_match.senior", icon: "ri-award-line", color: 'success.main' },
        { id: "work_mode", label: "quick_match.work_mode", icon: "ri-map-pin-line", color: 'info.main' },
        { id: "languages", label: "quick_match.languages", icon: "ri-translate-2", color: 'warning.main' },
        { id: "availability", label: "quick_match.availability", icon: "ri-flashlight-line", color: 'infinity.main' },
    ],
};

export default profile;