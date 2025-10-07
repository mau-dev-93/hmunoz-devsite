import ecommercePic from '@/assets/images/projects/ecommerce.png';
import erpPic from '@/assets/images/projects/erp.png';
import devsitePic from '@/assets/images/projects/devsite.png';

export default [
    {
        "name": "Plataforma E-commerce para Restaurantes",
        "description": "Plataforma e-commerce que optimiza las operaciones de un negocio gastronómico. Abarca todo el flujo de un pedido, incluyendo personalización y tracking en tiempo real. Su arquitectura está diseñada para ser una solución robusta y fácilmente adaptable.",
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
        "description": "Este proyecto es la culminación de mi experiencia en el sector ERP. Una plataforma de planificación de recursos diseñada desde cero para la nube, con el objetivo de optimizar las operaciones críticas de las PYMES. Centraliza desde la gestión de inventario y facturación hasta el análisis de datos, facilitando una toma de decisiones inteligente.",
        "status": "En desarrollo",
        "icon": "ri-check-line",
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
        "description": "Este portafolio es mi carta de presentación digital. Un proyecto diseñado para centralizar mi experiencia, habilidades y proyectos en una plataforma interactiva. Creado con un stack de Front-end moderno, es también un espacio de aprendizaje continuo donde aplico y refino mis conocimientos en desarrollo web y UI/UX.",
        "status": "En desarrollo",
        "icon": "ri-check-line",
        "progress_percentage": 80,
        "tech_stack": ["React", "Redux", "JavaScript", "Material UI", "i18n"],
        "features": [
            "Diseño Responsivo",
            "Presentación de Proyectos",
            "Información de Contacto",
            "Muestra de Habilidades Técnicas"
        ],
        "imagen_url": devsitePic,
        "github_repo_url": "https://github.com/usuario/task-manager-app",
        "live_demo_url": "https://task-manager-demo.herokuapp.com",
        "role": "Front-end Developer",
        "disabled": true
    }
]