import { buildS3Url } from "@/utils/s3Url";
import { ENV } from "@/config/env";

export default [
    {
        title: "Aprende NestJs desde 0",
        institution: "Udemy",
        year: "2025",
        duration: "17 horas",
        hasCertificate: false,
        status: "En progreso",
        tags: ["NestJs", "MySQL", "Oracle", "MongoDB", "TypeScript", "TypeORM"],
        progress_percentage: 36,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0001-aprende-nestjs-desde-0/default.webp")
    },
    {
        title: "Construyendo Web APIs RESTful con ASP.NET Core 9",
        institution: "Udemy",
        year: "2025",
        duration: "27 horas",
        hasCertificate: false,
        status: "En progreso",
        tags: ["ASP.NET", "C#", "GitHub", "SQL Server", "Azure"],
        progress_percentage: 10,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0002-construyendo-web-apis-restful-con-aspnet-core-9/default.png")
    },
    {
        title: "Máster Completo en Java de cero a experto 2025",
        institution: "Udemy",
        year: "2025",
        duration: "180 horas",
        hasCertificate: false,
        status: "En progreso",
        tags: ["Java", "Spring", "Jakarta EE", "JUnit", "EJB", "Angular", "React.js"],
        progress_percentage: 17,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0003-master-completo-en-java-de-cero-a-experto-2025/default.webp")
    },
    {
        title: "Liderazgo y comunicación",
        institution: "Coursera",
        year: "2024",
        duration: "10 horas",
        hasCertificate: true,
        status: "Completado",
        tags: ["Java", "Back-end", "SpringBoot", "React"],
        progress_percentage: 100,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0004-liderazgo-y-comunicacion/default.avif")
    },
    {
        title: "Git GitHub Actions, Buenas Prácticas de Integración Continua",
        institution: "Udemy",
        year: "2025",
        duration: "9 horas",
        hasCertificate: false,
        status: "En progreso",
        tags: ["Git", "GitHub", "CI/CD", "DevOps"],
        progress_percentage: 10,
        image_url: buildS3Url(ENV.bucket, ENV.region, "courses/crs_0005-git-github-actions-buenas-practicas-de-integracion-continua/default.webp")
    },
]