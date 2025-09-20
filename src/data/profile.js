// src/data/profile.js
const profile = {
    personal: {
        name: "Mauricio Muñoz",
        role: "Desarrollador Full Stack",
        resume: "Me especializo en desarrollar soluciones tecnológicas que no solo resuelven problemas, sino que también mejoran la forma en que las personas interactúan con los sistemas.",
        email: "hmmunozf@gmail.com",
        phone: "8120136619",
        location: "Monterrey, Nuevo León, México",
        picture: "src/assets/images/profile.jpeg",
        resumen_url: "/files/Mauricio_Munoz_Resume.pdf"
    },
    socials: [
        { name: "GitHub", icon: "ri-github-line", link: "https://github.com/mau-dev-93" },
        { name: "LinkedIn", icon: "ri-linkedin-line", link: "https://www.linkedin.com/in/mau-dev-93/" }
    ],
    techStack: [
        { label: "React", icon: "react-original", color: "primary.main" },
        { label: "Node.js", icon: "nodejs-plain", color: "success.main" },
        { label: "AWS", icon: "amazonwebservices-plain-wordmark", color: "secondary.main" },
        { label: "TypeScript", icon: "typescript-plain", color: "warning.main" },
        { label: "SQL Server", icon: "microsoftsqlserver-plain", color: "info.main" }
    ],
    experience: [/* ... */],
};

export default profile;