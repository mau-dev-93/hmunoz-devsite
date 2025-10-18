import { buildS3Url } from "@/utils/s3Url";
import { ENV } from "@/config/env";

export default [
    {
        id: "historia",
        title: "Mi Historia",
        icon: 'ri-road-map-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/building.jpg"),
        description: "Hola, soy Mauricio Muñoz. Soy de Monterrey, México, tengo 32 años, esposo y padre. Desde niño, mi curiosidad se formó entre preguntas y la música: tocando la batería y la guitarra. En la preparatoria, aún sin un rumbo claro, la materia de Orientación Vocacional me llevó a conocer la carrera de Multimedia y Animación Digital. Aunque no era gamer, unas materias del plan de estudios me hicieron clic de inmediato: las de programación. Ahí descubrí un medio para crear desde cero y darles forma a mis propias ideas. Mi carrera profesional arrancó en una empresa de telecomunicaciones desarrollando una app Android (Java), y fue ahí donde inició mi camino como desarrollador full-stack. Hoy, sigo en constante evolución —entre IAs, frameworks, DevOps y contenedores—, impulsado por la misma curiosidad de siempre y con el objetivo de entregar valor real en cada proyecto.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 12, r: 1 }, md: { c: 8, r: 1 } }
    },
    {
        id: "familia",
        title: "Sobre la familia",
        icon: 'ri-home-2-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/family.jpg"),
        description: "Todo lo que hago, de alguna manera, empieza y termina con mi familia. Ellos son mi motor y la razón de mi esfuerzo diario. Por eso mi trabajo no es solo una profesión; es el medio que tengo para construir un entorno estable y un buen futuro para las personas que más quiero.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "valores",
        title: "Sobre los valores",
        icon: 'ri-earth-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/universe.png"),
        description: "El respeto, la honestidad y la gratitud son la base de cómo me relaciono con la gente. Busco aplicar estos principios en todo lo que hago, tanto en el trabajo como con mi familia y amigos. Al final, se trata de ofrecer un trato genuino y considerado a las personas a mi alrededor.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "analitico",
        title: "“Pienso, luego desarrollo”",
        icon: 'ri-book-open-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/analysis.jpg"),
        description: "Antes de tirar una línea de código, me detengo a entender el porqué de la idea y el valor que va a entregar. Evalúo el impacto, los riesgos y priorizo lo que de verdad se necesita. Es como tener un lienzo en blanco: primero trazo el bosquejo general y, a partir de ahí, empiezo a materializar. Es un hábito que aplico para todo, me ayuda a ejecutar con más claridad.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "pizzas",
        title: "Programando pizzas",
        icon: 'ri-restaurant-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/pizza.jpg"),
        description: "Me encanta el proceso de hacer pizza en casa, desde cero. He descubierto que se parece mucho al desarrollo de software: ambos necesitan paciencia, precisión y ponerle atención a los detalles. Al final, tanto una buena pizza como una buena aplicación son el resultado de crear algo valioso para compartir con los demás.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 2 }, md: { c: 4, r: 1 } }
    },
    {
        id: "coding",
        title: "Resolver con código",
        icon: 'ri-code-s-slash-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/react.jpg"),
        description: "Para mí, un problema no resuelto es el inicio de una buena idea. Veo la programación como mi herramienta para construir soluciones y conectar con ese objetivo. La satisfacción de ver que algo funciona y ayuda a otros es lo que me mantiene aprendiendo y buscando cómo hacerlo mejor cada día.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "musica",
        title: "Sobre la música",
        icon: 'ri-music-2-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/music.jpg"),
        description: "La música fue mi primera escuela de creatividad. Ahí aprendí de ritmo, escucha y estructura, pero sobre todo, a improvisar sin partitura. Hoy, ese proceso es mi forma de encontrar claridad: ordeno ideas, simplifico y avanzo. Llevo esa misma filosofía a mi código: empezar simple, iterar con intención y encontrar la armonía entre la idea, el diseño y el resultado final.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 8, r: 1 } }
    },
]