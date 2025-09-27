import nestJsCoursePic from '@/assets/images/courses/nestjs-course.webp';
import aspNetCoursePic from '@/assets/images/courses/aspnet-course.png';
import javaCoursePic from '@/assets/images/courses/java-course.webp';
import leadCoursePic from '@/assets/images/courses/leadership-course.avif';

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
        image_url: nestJsCoursePic
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
        image_url: aspNetCoursePic
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
        image_url: javaCoursePic
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
        image_url: leadCoursePic
    },
]