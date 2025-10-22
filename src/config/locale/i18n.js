import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// english translations
import common_en from '../../locales/en/common.json';
import home_en from '../../locales/en/home.json';
import about_en from '../../locales/en/about.json';
import experience_en from '../../locales/en/experience.json';
import projects_en from '../../locales/en/projects.json';
import skills_en from '../../locales/en/skills.json';
import education_en from '../../locales/en/education.json';
import human_en from '../../locales/en/human.json';

// spanish translations
import common_es from '../../locales/es/common.json';
import home_es from '../../locales/es/home.json';
import about_es from '../../locales/es/about.json';
import experience_es from '../../locales/es/experience.json';
import projects_es from '../../locales/es/projects.json';
import skills_es from '../../locales/es/skills.json';
import education_es from '../../locales/es/education.json';
import human_es from '../../locales/es/human.json';

const resources = {
    'en': {
        common: common_en,
        home: home_en,
        about: about_en,
        experience: experience_en,
        projects: projects_en,
        skills: skills_en,
        education: education_en,
        human: human_en
    },
    'es': {
        common: common_es,
        home: home_es,
        about: about_es,
        experience: experience_es,
        projects: projects_es,
        skills: skills_es,
        education: education_es,
        human: human_es
    }
};

i18n
    .use(initReactI18next)
    .init({
        // lng: 'en',
        resources,
        fallbackLng: 'es',
        supportedLngs: ["es", "en"],
        defaultNS: 'common',
        ns: ['common', 'home', 'about', 'experience', 'projects', 'skills', 'education', 'human'],
        interpolation: {
            escapeValue: false,
        },
        debug: false
    });

export default i18n;