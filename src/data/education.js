import { buildS3Url } from "@/utils/s3Url";
import { ENV } from "@/config/env";

const academicBackground = [
    // {
    //     degree: "Maestría en Administración de Negocios",
    //     institution: "Universidad Tecnológica de México",
    //     dateRange: "2023 - 2025",
    //     status: "Pasante",
    //     specialties: ["Gestión de Proyectos", "Dirección y Liderazgo", "Análisis de Datos", "Decisiones para Negocios"]
    // },
    {
        degree: "Lic. en Multimedia y Animación Digital",
        institution: "Universidad Autónoma de Nuevo León",
        dateRange: "2010 - 2014",
        status: "bachelor_status.graduated",
        gpa: "8.7/10.0",
        specialties: [
            "academic_background.bachelor.detail_1",
            "academic_background.bachelor.detail_2",
            "academic_background.bachelor.detail_3",
            "academic_background.bachelor.detail_4"
        ]
    }
]

const continueEducation = [
    {
        title: "Aprende NestJs desde 0",
        institution: "Udemy",
        year: "2025",
        duration: 17,
        hasCertificate: false,
        status: "course_progress_status.in_progress",
        tags: ["NestJs", "MySQL", "Oracle", "MongoDB", "TypeScript", "TypeORM"],
        progress_percentage: 51,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0001-aprende-nestjs-desde-0/default.webp"),
        course_url: "https://www.udemy.com/course/aprende-nestjs-desde-0/"
    },
    {
        title: "Construyendo Web APIs RESTful con ASP.NET Core 9",
        institution: "Udemy",
        year: "2025",
        duration: 27,
        hasCertificate: false,
        status: "course_progress_status.in_progress",
        tags: ["ASP.NET", "C#", "GitHub", "SQL Server", "Azure"],
        progress_percentage: 10,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0002-construyendo-web-apis-restful-con-aspnet-core-9/default.png"),
        course_url: "https://www.udemy.com/course/construyendo-web-apis-restful-con-aspnet-core/"
    },
    {
        title: "Domina Github Actions",
        institution: "Udemy",
        year: "2024",
        duration: 4,
        hasCertificate: false,
        status: "course_progress_status.in_progress",
        tags: ["Git", "GitHub", "CI/CD"],
        progress_percentage: 45,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0006_domina-github-actions/default.webp"),
        course_url: "https://www.udemy.com/course/domina-github-actions/"
    },
    {
        title: "Máster Completo en Java de cero a experto 2025",
        institution: "Udemy",
        year: "2025",
        duration: 180,
        hasCertificate: false,
        status: "course_progress_status.in_progress",
        tags: ["Java", "Spring", "Jakarta EE", "JUnit", "EJB", "Angular", "React.js"],
        progress_percentage: 17,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0003-master-completo-en-java-de-cero-a-experto-2025/default.webp"),
        course_url: "https://www.udemy.com/course/master-completo-java-de-cero-a-experto/"
    },
    {
        title: "Liderazgo y comunicación",
        institution: "Coursera",
        year: "2024",
        duration: 10,
        hasCertificate: true,
        status: "course_progress_status.completed",
        tags: ["Java", "Back-end", "SpringBoot", "React"],
        progress_percentage: 100,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0004-liderazgo-y-comunicacion/default.avif"),
        course_url: "https://www.coursera.org/learn/liderazgo-y-comunicacion/"
    },
    {
        title: "Git GitHub Actions, Buenas Prácticas de Integración Continua",
        institution: "Udemy",
        year: "2025",
        duration: 9,
        hasCertificate: false,
        status: "course_progress_status.in_progress",
        tags: ["Git", "GitHub", "CI/CD", "DevOps"],
        progress_percentage: 15,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0005-git-github-actions-buenas-practicas-de-integracion-continua/default.webp"),
        course_url: "https://www.udemy.com/course/git-github-actions-buenas-practicas-de-integracion-continua/"
    },
]

export default {
    academicBackground,
    continueEducation
}