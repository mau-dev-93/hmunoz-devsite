import ecommercePic from '@/assets/images/projects/ecommerce-2.png';
import erpPic from '@/assets/images/projects/erp-2.png';
import devsitePic from '@/assets/images/projects/devsite-2.png';

export default [
    {
        "name": "E-commerce para Restaurantes",
        "description": "Plataforma e-commerce que optimiza las operaciones de un restaurante. Abarca todo el flujo de un pedido, checkout y tracking en tiempo real. Su arquitectura está diseñada para ser una solución robusta y fácilmente adaptable para cualquier negocio gastronómico.",
        "status": "En desarrollo",
        "icon": "ri-shopping-cart-line",
        "progress_percentage": 30,
        "tech_stack": ["React", "TypeScript", "NestJS", "PostgreSQL", "EC2", "AWS"],
        "features": [
            "Catálogo de Productos",
            "Personalización de Pedidos",
            "Proceso de Checkout",
            "Integración con Pasarelas de Pago",
            "Seguimiento de Órdenes en Tiempo Real",
            "Panel de Administración"
        ],
        "imagen_url": ecommercePic,
        "github_repo_url": "https://github.com/usuario/portfolio-website",
        "live_demo_url": "https://portfolio-website-demo.netlify.app",
        "role": "Full Stack Developer",
        "disabled": true
    },
    {
        "name": "ERP Cloud para PYMES",
        "description": "Este proyecto es la culminación de mi experiencia en el sector ERP: una plataforma de planificación de recursos diseñada desde cero para la nube, con el objetivo de optimizar las operaciones críticas de las PYMES. Permite tomar decisiones estratégicas basadas en datos al centralizar toda la gestión del negocio, desde las operaciones diarias y el inventario hasta la facturación.",
        "status": "En desarrollo",
        "icon": "ri-database-2-line",
        "progress_percentage": 20,
        "tech_stack": ["React.js", "TypeScript", "AWS API Gateway", "AWS Lambda", "MySQL"],
        "features": [
            "Autenticación y Roles de Usuario",
            "Facturación y Cuentas por Cobrar",
            "Inventario, Compras y Proveedores",
            "Punto de Venta (POS)",
            "Gestión de Clientes (CRM Básico)",
            "Dashboard con Reportes Analíticos"
        ],
        "imagen_url": erpPic,
        "github_repo_url": "https://github.com/usuario/task-manager-app",
        "live_demo_url": "https://task-manager-demo.herokuapp.com",
        "role": "Full Stack Developer",
        "disabled": true
    },
    {
        "name": "Portafolio Profesional",
        "description": "Este portafolio es mi carta de presentación digital, una plataforma interactiva que centraliza mi experiencia, habilidades y proyectos. Desarrollado con un stack moderno de Front-end (React, Vite y MUI), este sitio es en sí mismo un proyecto activo y un espacio de aprendizaje donde continuamente aplico y refino mis conocimientos en desarrollo web y UI/UX.",
        "status": "En desarrollo",
        "icon": "ri-computer-line",
        "progress_percentage": 80,
        "tech_stack": ["React", "Redux", "JavaScript", "Material UI", "AWS Amplify", "i18n"],
        "features": [
            "Diseño Responsivo",
            "Información de Contacto",
            "Presentación de Proyectos",
            "Trayectoria Profesional",
            "Habilidades Técnicas y Humanas",
             "Multiidioma (próximamente)",
        ],
        "imagen_url": devsitePic,
        "github_repo_url": "https://github.com/usuario/task-manager-app",
        "live_demo_url": "https://task-manager-demo.herokuapp.com",
        "role": "Front-end Developer",
        "disabled": true
    }
]