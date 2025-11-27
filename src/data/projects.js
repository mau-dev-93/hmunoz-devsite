import { buildS3Url } from "@/utils/s3Url";
import { ENV } from "@/config/env";

const projects = [
    {
        "name": "projects.ecommerce.title",
        "description": "projects.ecommerce.description",
        "status": "status.in_progress",
        "icon": "ri-shopping-cart-line",
        "progress_percentage": 30,
        "tech_stack": ["React", "TypeScript", "NestJS", "PostgreSQL", "EC2", "AWS"],
        "features": [
            "projects.ecommerce.features.feature_1",
            "projects.ecommerce.features.feature_2",
            "projects.ecommerce.features.feature_3",
            "projects.ecommerce.features.feature_4",
            "projects.ecommerce.features.feature_5",
            "projects.ecommerce.features.feature_6"
        ],
        "image_url": buildS3Url(ENV.bucket, ENV.region, "projects/001-ecommerce-para-restaurantes/default.png"),
        "github_repo_url": "https://github.com/mau-dev-93/casa-parmesana",
        "live_demo_url": "https://portfolio-website-demo.netlify.app",
        "role": "roles.fullstack",
        "disabled": true
    },
    {
        "name": "projects.erp.title",
        "description": "projects.erp.description",
        "status": "status.in_progress",
        "icon": "ri-database-2-line",
        "progress_percentage": 20,
        "tech_stack": ["React.js", "TypeScript", "AWS API Gateway", "AWS Lambda", "MySQL"],
        "features": [
            "projects.erp.features.feature_1",
            "projects.erp.features.feature_2",
            "projects.erp.features.feature_3",
            "projects.erp.features.feature_4",
            "projects.erp.features.feature_5",
            "projects.erp.features.feature_6"
        ],
        "image_url": buildS3Url(ENV.bucket, ENV.region, "projects/002-erp-cloud-para-pymes/default.png"),
        "github_repo_url": "https://github.com/usuario/task-manager-app",
        "live_demo_url": "https://task-manager-demo.herokuapp.com",
        "role": "roles.fullstack",
        "disabled": true
    },
    {
        "name": "projects.portfolio.title",
        "description": "projects.portfolio.description",
        "status": "status.completed",
        "icon": "ri-computer-line",
        "progress_percentage": 80,
        "tech_stack": ["React", "Redux", "JavaScript", "Material UI", "AWS Amplify", "i18n"],
        "features": [
            "projects.portfolio.features.feature_1",
            "projects.portfolio.features.feature_2",
            "projects.portfolio.features.feature_3",
            "projects.portfolio.features.feature_4",
            "projects.portfolio.features.feature_5",
            "projects.portfolio.features.feature_6",
        ],
        "image_url": buildS3Url(ENV.bucket, ENV.region, "projects/003-portafolio-profesional/default.png"),
        "github_repo_url": "https://github.com/mau-dev-93/hmunoz-devsite",
        "live_demo_url": null,
        "role": "roles.frontend",
        "disabled": true
    }
]

export default projects;