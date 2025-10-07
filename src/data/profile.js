import profilePic from '@/assets/images/profile.jpeg'

// src/data/profile.js
const profile = {
    personal: {
        name: "Mauricio Muñoz",
        role: "Full-Stack Developer",
        resume: 'Transformo ideas en soluciones claras, seguras y confiables.',
        resume2: 'En cada entrega busco un valor real y mejora continua.',
        email: "hmmunozf@gmail.com",
        phone: "8120136619",
        location: "Monterrey, Nuevo León, México",
        picture: profilePic,
        resumen_url: "/files/Mauricio_Munoz_Resume.pdf"
    },
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
    experience: [/* ... */],
};

export default profile;