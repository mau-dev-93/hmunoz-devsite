# Portafolio de Mauricio Muñoz

Portafolio profesional moderno y responsivo Full Stack Developer, construido con **React**, **Vite** y **Material-UI (MUI)**.

**Live demo:** [mauriciomunoz.dev](https://mauriciomunoz.dev)

---

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Comandos](#comandos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Secciones](#secciones)
- [Idiomas](#idiomas)

---

## Características

- Diseño responsivo (móvil, tablet, escritorio)
- Modo oscuro (por ahora)
- Multi-idioma (Español e Inglés)
- Contenido dinámico desde API
- Carga con skeletons
- Optimizado para rendimiento

---

## Tecnologías

- React 18+
- Vite
- Material-UI (MUI)
- i18next (traducción)
- Remix Icon (iconos)
- Peticiones Axios

---

## Instalación

### Requisitos
- Node.js 16+
- npm 7+ o yarn

### Pasos

1. **Clonar repositorio:**
```bash
git clone https://github.com/mau-dev-93/hmunoz-devsite.git
cd hmunoz-devsite
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Crear archivos de entorno:**
```bash
cp .env.example .env.development
cp .env.example .env.production
```

4. **Configurar variables** (ver [Variables de Entorno](#variables-de-entorno))

5. **Iniciar servidor:**
```bash
npm run dev
```

---

## Variables de Entorno

Crear archivos `.env.development` y `.env.production`:

```env
# AWS S3
VITE_S3_BUCKET=nombre-bucket
VITE_S3_REGION=us-east-1

# API
VITE_API_REGION=us-east-1
VITE_API_ID=id-api-gateway
VITE_API_STAGE=dev
VITE_API_KEY=tu-api-key
```

**Nota:** No hacer commit de archivos `.env`

---

## Comandos

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Vista previa producción
```

---

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Navbar, Footer
│   └── shared/         # Cards, Chips, etc.
├── pages/              # Secciones principales
├── locales/            # Traducciones (es, en)
├── data/               # Datos locales
├── api/                # Llamadas a API
├── theme/              # Configuración de temas
└── App.jsx
```

---

## Secciones

1. **Hero** - Bienvenida y botones principales
2. **Sobre Mí** - Presentación y tecnologías
3. **Experiencia** - Timeline de experiencia laboral
4. **Educación** - Formación académica y cursos de educación continua
5. **Habilidades** - Tecnologías y habilidades blandas
6. **Proyectos** - Portfolio de proyectos personales
7. **Lado Humano** - Intereses y cosas personales
8. **Footer** - Enlaces y contacto

---

## Idiomas

- Español (por defecto)
- Inglés

### Archivos de traducción

```
locales/
├── es/
│   ├── about.json
│   ├── common.json
│   ├── education.json
│   ├── experience.json
│   ├── home.json
│   ├── human.json
│   ├── projects.json
│   └── skills.json
└── en/ (igual estructura)
```

### Usar traducciones

```jsx
import { useTranslation, Trans } from 'react-i18next';

export function Mi Componente() {
  const { t, i18n } = useTranslation('about');
  
  return (
    <div>
      <p>{t('me.description1')}</p>
      <Trans i18nKey="title" components={{ strong: <strong /> }} />
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
}
```

---

## Autor

**Mauricio Muñoz**
- Email: hmmunozf@gmail.com
- LinkedIn: [linkedin.com/in/mauricio-munoz-fonseca](https://www.linkedin.com/in/mauricio-munoz-fonseca/)
- GitHub: [github.com/mau-dev-93](https://github.com/mau-dev-93)

---

**Última actualización:** Noviembre 30, 2025