import highwayPic from '@/assets/images/human-side/highway.png';
import guitarPic from '@/assets/images/human-side/guitar.jpg';
import familyPic from '@/assets/images/human-side/family_2.jpg';
import justicePic from '@/assets/images/human-side/universe.png';
import philosophyPic from '@/assets/images/human-side/book.png';
import pizzaPic from '@/assets/images/human-side/pizza.png';
import developerPic from '@/assets/images/human-side/react.jpg';

export default [
    {
        id: "historia",
        title: "Mi Historia",
        icon: 'ri-road-map-line',
        image_url: highwayPic, // Persona tocando guitarra
        description: "Soy Héctor Mauricio Muñoz Fonseca, me gusta que me llamen Mauricio. Tengo 32 años, esposo y padre, de Monterrey, México. Desde niño fui de preguntas y de música: la batería y guitarra me enseñaron disciplina y creatividad. En bachillerato, sin tener claro mi rumbo, en la asignatura Orientación Vocacional descubro la carrera “Multimedia y Animación Digital”. No era gamer, aficionado de algunos juegos tal vez, pero en esas materias hubo un clic: la programación. Descubrí un medio para crear desde cero. Hice prácticas laborales en una empresa de telefonía con Android (Java) y desde ahí empecé mi camino como desarrollador full-stack. Hoy sigo evolucionando —entre IA, frameworks, devOps, contenedores y Kubernetes— con la misma curiosidad de siempre y el objetivo de entregar valor real en cada proyecto.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 12, r: 1 }, md: { c: 8, r: 1 } }
    },
    {
        id: "familia",
        title: "Mi familia",
        icon: 'ri-home-2-line',
        image_url: familyPic, // Familia unida
        description: "Todo lo que hago comienza y termina con mi familia. Ellos son la razón de mi esfuerzo y mi fuente de inspiración constante. Mi trabajo es más que una profesión; es mi herramienta para construir un entorno estable y un futuro brillante para las personas que más quiero.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "valores",
        title: "Valores universales",
        icon: 'ri-earth-line',
        image_url: justicePic, // Balanza de justicia
        description: "Los valores con los que crecí, como el respeto, la honestidad y gratitud, son el fundamento de todas mis interacciones. Busco aplicar estos principios en cada aspecto de mi vida —en el trabajo, con mi familia y amigos—, siempre con el objetivo de ofrecer un trato considerado y genuino a quienes me rodean.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "filosofia",
        title: "Filosofía",
        icon: 'ri-book-open-line',
        image_url: philosophyPic, // Libros apilados
        description: "La filosofía y el psicoanálisis han transformado mi perspectiva, llevándome a reflexionar sobre mis deseos y el impacto de mis acciones. Llevo esta introspección al desarrollo de software, donde me permite abordar los problemas con mayor empatía para crear soluciones que respondan a necesidades humanas reales.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "pizzas",
        title: "Pizza artesanal",
        icon: 'ri-restaurant-line',
        image_url: pizzaPic, // Persona cocinando pizza
        description: "Me apasiona el proceso artesanal de cocinar pizza, desde preparar la masa hasta elegir los mejores ingredientes. He descubierto que, al igual que en el desarrollo de software, la cocina requiere una mezcla de paciencia, precisión y amor por los detalles. Al final, tanto una buena pizza como una buena aplicación son una forma de crear y compartir algo valioso con los demás.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 2 }, md: { c: 4, r: 1 } } // ALTO Y ESTRECHO (tipo tu mock)
    },
    {
        id: "coding",
        title: "Codificando al mundo",
        icon: 'ri-code-s-slash-line',
        image_url: developerPic, // Taza de café y laptop
        description: "Busco constantemente problemas no resueltos como oportunidades para generar un cambio. La programación es mi medio para crear y conectar con ese propósito. La satisfacción de ver los resultados de este proceso es lo que alimenta mi pasión por seguir aprendiendo y mejorando cada día.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "musica",
        title: "Música & Creatividad",
        icon: 'ri-music-2-line',
        image_url: guitarPic, // Taza de café y laptop
        description: "La música fue mi primer espacio creativo. Aprendí ritmo, escucha y estructura; con la improvisación, avanzar sin partitura. Hoy es mi medio de sublimación y libertad mental: decanto emociones, ordeno ideas y vuelvo claro. Ese enfoque guía mi código: empezar simple, iterar con intención y hallar armonía entre idea, diseño y ejecución. Crear es conectar; la música me lo recuerda.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 8, r: 1 } }
    },
]