import React from 'react';

// @mui/material
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

// components
import ExperienceCard from './ExperienceItem/ExperienceCard';

const Experience = () => {
    return <Box width="100%">
        <Box textAlign="center" sx={{ marginBottom: "24px" }}>
            <Typography variant="h4" fontWeight="600" color="text.primary">Experiencia</Typography>
            <Typography variant="subtitle2" fontWeight="400" color="text.secondary">Mi trayectoria laboral</Typography>
        </Box>
        <Box width="100%" sx={{ mb: "24px" }}>
            <ExperienceCard
                title="Desarrollador Full-Stack"
                company="Talisis"
                dateRange="enero 2021 - diciembre 2024"
                // defaultExpanded={true}
                summary="Líder técnico del módulo de compras, suscripciones y matriculación en la plataforma educativa Talisis.com."
                responsibilities={[
                    "Lideré el desarrollo del checkout multiproducto y suscripciones.",
                    "Implementé componentes reutilizables en React y automatizaciones con AWS Lambda y Step Functions.",
                    "Dirigí la integración de pagos con Conekta y Oxxo Pay.",
                    "Configuré analítica con Mixpanel, GA4 y HubSpot.",
                    "Integré flujos de inscripción a contenidos educativos de terceros como Coursera, LinkedIn Learning, Crehana y NEO LMS.",
                    "Participé en más de 30 ciclos bajo metodología Shape Up y SCRUM",
                    /*
                        "Lideré el desarrollo del checkout multiproducto y suscripciones de Talisis.com, con un volumen de ventas mensual promedio de $400,000 MXN mediante pagos por SPEI, tarjeta y efectivo.",
                        "Implementé 30 componentes reutilizables en React para el checkout.",
                        "Automaticé procesos clave con AWS Lambda y Step Functions, reduciendo tiempos de respuesta backend en un 60%.",
                        "Mantuvimos una integración continua con control de versiones en CodeCommit, con más de 5 despliegues exitosos por ciclo de trabajo.",
                        "Participé en más de 30 ciclos de trabajo, entregando funcionalidades clave en tiempo y forma, con cumplimiento de objetivos del ciclo superior al 80%.",
                        "Diseñé consultas SQL en conjunto con el DBA para los procesos de compras, pagos y suscripciones.",
                        "Configuré eventos personalizados en Mixpanel, HubSpot y GA4 que permitieron identificar áreas de oportunidad en los procesos de compra, incrementando la usabilidad en un 40% y e incrementando compras exitosas en un 20%.",
                        "Colaboré con la integración técnica de 3 proveedores educativos, habilitando el acceso a más de 350,000 cursos con validación automatizada.",
                        "Implementé Conekta v2.1.0 con validación antifraude y dirigí la migración de pagos efectivo de Conekta a Digital FEMSA Oxxo Pay, logrando una tasa de éxito en pagos superior al 30% respecto a la versión anterior.",
                        "Desarrollé la matriculación automatizada de alumnos nuevos y existentes, integrando Talisis.com con sistemas escolares como Banner (Ellucian) y Microsoft Dynamics 365.",
                        "Encabecé los flujos de inscripción y enrolamiento automático a contenidos en NEO LMS, Coursera, LinkedIn Learning, Crehana, y la bolsa de trabajo Symplicity.",
                        "Participé en equipos ágiles con SCRUM, dirigiendo un equipo de trabajo, priorizando las entregas y siendo el responsable del cumplimiento de los objetivos del ciclo.",
                    */
                ]}
                techStack={[
                    "ReactJS",
                    "Node.js",
                    "JavaScript",
                    "AWS",
                    "Mixpanel",
                    "GA4",
                    "HubSpot",
                    "Conekta",
                    "SQL Server",
                    "SCRUM",
                    "Git"
                ]}
            />
        </Box>
        <Box width="100%" sx={{ mb: "24px" }}>
            <ExperienceCard
                title="Desarrollador Full Stack"
                company="Enkontrol"
                dateRange="julio 2017 - septiembre 2020"
                summary="Desarrollador Fullstack en Enkontrol, encargado de la migración del ERP Enkontrol 9 hacia su versión web, participando desde el análisis funcional hasta el desarrollo e implementación de nuevos módulos."
                responsibilities={[
                    "Colaboré en la migración del ERP Enkontrol 9 a su versión web, incluyendo rediseño de interfaces, backend y reglas de negocio.",
                    "Desarrollé componentes frontend con ReactJS y TypeScript, e implementé lógica de negocio en C# con ASP .NET MVC, bajo principios SOLID, arquitectura limpia y control de versiones.",
                    "Optimizé procedimientos y consultas SQL en SQL Server 2019.",
                    /*
                    "Colaboré en la migración del ERP Enkontrol 9 (versión de escritorio) a su versión web, asegurando compatibilidad funcional y mejoras en la experiencia del usuario.",
                    "Dirigí el desarrollo técnico del Módulo de Construcción, coordinando requerimientos, tareas y avances de equipo técnico.",
                    "Desarrollé componentes con ReactJS, TypeScript, HTML5, CSS3 y JQuery, asegurando interfaces responsivas.",
                    "Implementé lógica de negocio backend con ASP.NET MVC en C#, aplicando principios SOLID, arquitectura limpia y control de versiones.",
                    "Diseñé y optimicé consultas SQL, procedimientos almacenados y triggers en Microsoft SQL Server 2018 y Sybase SQL Anywhere, mejorando el rendimiento de operaciones críticas.",
                    "Participé en el análisis funcional y técnico de la migración del ERP hacia su versión web, incluyendo el rediseño de interfaces de usuario, modelado de base de datos y adaptación de funcionalidades clave.",
                    "Contribuí en la migración de módulos como Esquemas de Vivienda, Catálogo de Desarrollos, Catálogo de Lotes y Ubicaciones, Plan de Pagos de Clientes, Cartera de Clientes, Catálogo de Insumos, entre otros, en la nueva versión web del ERP.",
                    */
                ]}
                techStack={[
                    "ReactJS",
                    "TypeScript",
                    "C#",
                    "HTML5",
                    "CSS3",
                    "JQuery",
                    "ASP.NET MVC",
                    "SQL Server",
                    "SQL Anywhere",
                    "SCRUM",
                    "Azure",
                    "Git"
                ]}
            />
        </Box>
        <Box width="100%" sx={{ mb: "24px" }}>
            <ExperienceCard
                title="Desarrollador de Software"
                company="TCA Software Solutions"
                dateRange="febrero 2015 - julio 2017"
                summary="Desarrollador de Software en Merksyst, enfocado en el diseño y desarrollo de aplicaciones híbridas en C/C++ y Object Pascal, así como en la migración del ERP de versión 7.6 a 10 basada en ASP.NET. Lideré tareas de documentación, análisis de requerimientos y soporte a garantías del sistema, además de optimizar consultas y procedimientos almacenados en SQL Server 2014 dentro de un equipo técnico reducido."
                responsibilities={[
                    "Diseñé y desarrollé aplicaciones híbridas en C/C++ y Object Pascal para el ERP Merksyst.",
                    "Participé en la migración de Merksyst a su versión web en ASP.NET.",
                    "Documenté requerimientos, diseñé interfaces y coordiné planes de liberación y post-lanzamiento.",
                    "Optimizé consultas y procedimientos almacenados en SQL Server 2014.",
                    "Gestioné soporte técnico, resolviendo tickets críticos y utilizando SVN para control de versiones.",
                    /*
                    "Diseñé y desarrollé aplicaciones híbridas en C/C++ y Object Pascal, utilizadas en procesos administrativos y operativos de clientes del ERP.",
                    "Participé en la migración del ERP Merksyst v7.6 a v10, colaborando en el rediseño técnico hacia una arquitectura ASP.NET.",
                    "Lideré tareas de documentación de análisis de requerimientos, diseño de interfaces, planes de liberación y seguimiento post-lanzamiento.",
                    "Gestioné garantías y soporte a usuarios, resolviendo tickets críticos con tiempos de respuesta óptimos, y aplicando fixes en entornos productivos.",
                    "Desarrollé procedimientos almacenados y consultas optimizadas en SQL Server 2014, reduciendo cuellos de botella en módulos de alta carga.",
                    "Utilicé SVN para el control de versiones y colaboración en el código fuente."
                */
                    ]}
                techStack={[
                    "C",
                    "C++",
                    "Object Pascal",
                    "ASP.NET",
                    "SQL Server",
                    "SVN"
                ]}
            />
        </Box>
        <Box width="100%" sx={{ mb: "24px" }}>
            <ExperienceCard
                title="Practicante Móvil"
                company="Consultoría Consiss"
                dateRange="septiembre 2014 - enero 2015"
                summary="Practicante Desarrollador en Consiss, donde diseñé y desarrollé desde cero una aplicación móvil nativa para Android para el cliente Arca Continental, así como su Web API en ASP.NET Web API 4.5 y un administrador web en ASP.NET 4.5. Implementé también consultas y procedimientos almacenados en SQL Server 2014, participando en el ciclo completo de desarrollo de la solución."
                responsibilities={[
                    "Desarrollé una app nativa para Android enfocada en un programa de lealtad de clientes de Arca Continental.",
                    "Implementé una API RESTful en ASP.NET Web API 4.5 para los servicios backend.",
                    "Desarrollé un panel administrativo web de la app en ASP.NET 4.5.",
                    "Diseñé las consultas y procedimientos almacenados en SQL Server 2014.",
                    "Participé en todo el ciclo de desarrollo, desde análisis inicial hasta lanzamiento en producción."
                    /*
                    "Diseñé y desarrollé una aplicación móvil nativa para Android desde cero, adaptada a las necesidades operativas de Arca Continental.",
                    "Implementé una Web API RESTful con ASP.NET Web API 4.5, gestionando la comunicación entre el cliente móvil y los servicios backend.",
                    "Desarrollé un panel administrativo web en ASP.NET 4.5 para gestionar la información y configuración de la aplicación móvil.",
                    "Diseñé y optimicé procedimientos almacenados y consultas SQL en Microsoft SQL Server 2014, asegurando rendimiento y escalabilidad.",
                    "Participé en el ciclo completo de desarrollo, desde el análisis inicial hasta la entrega y puesta en producción del sistema."
                */
                ]}
                techStack={[
                    "Java",
                    "ASP.NET",
                    "SQL Server",
                    "REST API"
                ]}
            />
        </Box>
        <Box width="100%">
            <ExperienceCard
                title="Practicante Móvil"
                company="Diestel"
                dateRange="agosto 2013 - agosto 2014"
                summary="Practicante móvil en Diestel, colaborando en el diseño y desarrollo de aplicaciones móviles nativas para Android e iOS, con integración de bases de datos locales, redes sociales y servicios multimedia. Participé en la implementación de funcionalidades clave y en el consumo de servicios backend a través de WCF."
                responsibilities={[
                    "Desarrollé apps nativas para Android e iOS para recargas de saldo telefónico.",
                    "Implementé almacenamiento local con SQLite.",
                    "Integré autenticación con Facebook y contenido multimedia embebido como YouTube.",
                    "Consumí servicios WCF como parte del desarrollo backend.",
                    "Participé en todo el ciclo de desarrollo móvil, desde el diseño de UI hasta pruebas funcionales.",
                    /*
                    "Desarrollé aplicaciones móviles nativas para Android e iOS, adaptadas a requerimientos internos de la empresa.",
                    "Implementé almacenamiento local con SQLite, facilitando operaciones sin conexión a red.",
                    "Integré Facebook para autenticación de usuarios, así como YouTube y recursos multimedia embebidos en la app.",
                    "Realicé el consumo de servicios WCF desde los clientes móviles para sincronización de datos en tiempo real.",
                    "Adquirí experiencia práctica en el ciclo de desarrollo móvil, desde diseño de UI hasta pruebas funcionales.",
              */
                ]}
                techStack={[
                    "Java",
                    "Objective-C",
                    "SQLite",
                    "WCF"
                ]}
            />
        </Box>
    </Box>
};

export default Experience;