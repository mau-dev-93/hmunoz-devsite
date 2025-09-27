import ecommercePic from '@/assets/images/projects/ecommerce.png';
import erpPic from '@/assets/images/projects/erp.png';
import devsitePic from '@/assets/images/projects/devsite.png';

export default [
    {
        "name": "Sitio de Pedidos Online",
        "description": "Un sistema de e-commerce completo, desde la visualización del menú hasta la gestión de pedidos, diseñado para digitalizar y optimizar negocios de comida.",
        "status": "En desarrollo",
        "icon": "ri-shopping-cart-line",
        "progress_percentage": 30,
        "tech_stack": ["React", "JavaScript", "NestJS", "PostgreSQL", "AWS"],
        "features": [
            "Diseño Responsivo",
            "APIs RESTful",
            "Seguimiento de Pedidos",
            "Pasarelas de Pago Integradas",
            "Gestión de Inventario y Órdenes",
            "Panel Administrativo"
        ],
        "imagen_url": ecommercePic,
        "github_repo_url": "https://github.com/usuario/portfolio-website",
        "live_demo_url": "https://portfolio-website-demo.netlify.app",
        "role": "Full Stack Developer"
    },
    {
        "name": "ERP Comercial para PYMEs",
        "description": " Un sistema de planificación de recursos empresariales diseñado para optimizar las operaciones de pequeñas y medianas empresas. Incluye módulos para la gestión de inventarios, facturación, punto de venta y reportes analíticos para una toma de decisiones informada.",
        "status": "En desarrollo",
        "icon": "ri-check-line",
        "progress_percentage": 20,
        "tech_stack": ["React.js", "TypeScript", "AWS API Gateway", "AWS Lambda", "MySQL"],
        "features": [
            "Autenticación de Usuarios",
            "Módulo de Facturación y Ventas",
            "Módulo de Ventas, Compras e Inventarios",
            "Punto de Venta (POS)",
            "Gestión de Clientes y Proveedores",
            "Reportes e Informes Analíticos"
        ],
        "imagen_url": erpPic,
        "github_repo_url": "https://github.com/usuario/task-manager-app",
        "live_demo_url": "https://task-manager-demo.herokuapp.com",
        "role": "Full Stack Developer"
    },
    {
        "name": "Este devsite profesional",
        "description": "Este sitio web es una iniciativa para consolidar y mostrar mi experiencia, habilidades y proyectos. Construido con tecnologías modernas, sirve como una plataforma para aprender continuamente y exhibir mi trabajo de manera profesional a reclutadores y colegas.",
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
        "role": "Front-end Developer"
    }
]