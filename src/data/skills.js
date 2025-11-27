const tech_skills = [
    {
        title: 'tech_skills.programming_languages.title',
        icon: 'ri-code-line',
        color: "primary",
        experience_years: 8,
        skills: [
            { name: 'JavaScript', level: 'levels.advanced', years: 8 },
            { name: 'TypeScript', level: 'levels.advanced', years: 8 },
            { name: 'C#', level: 'levels.intermediate', years: 3 },
            { name: 'C/C++', level: 'levels.intermediate', years: 2 },
            { name: 'Java', level: 'levels.intermediate', years: 2 },
        ]
    },
    {
        title: 'tech_skills.frontend.title',
        icon: 'ri-layout-4-line',
        color: "success",
        experience_years: 10,
        skills: [
            { name: 'React.js', level: 'levels.advanced', years: 8 },
            { name: 'Redux', level: 'levels.advanced', years: 8 },
            { name: 'Material UI', level: 'levels.advanced', years: 4 },
            { name: 'HTML', level: 'levels.advanced', years: 10 },
            { name: 'CSS', level: 'levels.advanced', years: 10 },
        ]
    },
    {
        title: 'tech_skills.backend.title',
        icon: 'ri-database-2-line',
        color: "secondary",
        experience_years: 10,
        skills: [
            { name: 'Node.js', level: 'levels.advanced', years: 4 },
            { name: 'NestJS', level: 'levels.intermediate', years: 1 },
            { name: '.NET (C#)', level: 'levels.intermediate', years: 3 },
            { name: 'SQL Server', level: 'levels.advanced', years: 10 },
            { name: 'MySQL', level: 'levels.intermediate', years: 2 },
        ]
    },
    {
        title: 'tech_skills.cloud_devops.title',
        icon: 'ri-tools-line',
        color: "info",
        experience_years: 5,
        skills: [
            { name: 'AWS', level: 'levels.intermediate', years: 4 },
            { name: 'Git', level: 'levels.intermediate', years: 8 },
            { name: 'Docker', level: 'levels.beginner', years: 1 },
            { name: 'GitHub Actions', level: 'levels.beginner', years: 1 },
        ]
    }
];

const soft_skills = [
    {
        title: "soft_skills.leadership.title",
        icon: "ri-team-line",
        color: "warning.main",
        description: "soft_skills.leadership.description"
    },
    {
        title: "soft_skills.communication.title",
        icon: "ri-chat-3-line",
        color: "primary.main",
        description: "soft_skills.communication.description"
    },
    {
        title: "soft_skills.problem_solving.title",
        icon: "ri-lightbulb-flash-line",
        color: "success.main",
        description: "soft_skills.problem_solving.description"
    },
    {
        title: "soft_skills.thinking.title",
        icon: "ri-brain-line",
        color: "info.main",
        description: "soft_skills.thinking.description"
    },
    {
        title: "soft_skills.adaptability.title",
        icon: "ri-emotion-happy-line",
        color: "secondary.main",
        description: "soft_skills.adaptability.description"
    },
    {
        title: "soft_skills.continuous_learning.title",
        icon: "ri-refresh-line",
        color: "error.main",
        description: "soft_skills.continuous_learning.description"
    }
];

export default {
    tech_skills: tech_skills,
    soft_skills: soft_skills
}