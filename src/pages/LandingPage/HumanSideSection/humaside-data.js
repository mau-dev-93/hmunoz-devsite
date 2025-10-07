import guitarPic from '@/assets/images/human-side/guitar.jpg';
import familyPic from '@/assets/images/human-side/family_2.jpg';
import justicePic from '@/assets/images/human-side/beach.jpg';
import philosophyPic from '@/assets/images/human-side/book.jpg';
import pizzaPic from '@/assets/images/human-side/pizza.png';
import developerPic from '@/assets/images/human-side/react.jpg';

export default [
    {
        id: "historia",
        title: "Mi Origen",
        image_url: guitarPic, // Persona tocando guitarra
        description: "Mi primer lenguaje no fue de programación, sino musical. A los 6 años, con una guitarra entre manos, descubrí la increíble sensación de crear algo desde cero para emocionar y conectar con otros. Esa misma chispa creativa es la que hoy me impulsa como desarrollador y profesionista. Disfruto el proceso de transformar una idea abstracta en una solución funcional, resolviendo problemas de la misma forma que encontraría la siguiente nota en una melodía. La música y el código son mis herramientas para construir, expresarme y compartir.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 8, r: 1 } }
    },
    {
        id: "familia",
        title: "Mi familia",
        image_url: familyPic, // Familia unida
        description: "Todo lo que hago comienza y termina con mi familia. Ellos son la razón de mi esfuerzo y mi fuente de inspiración constante. Mi trabajo es más que una profesión; es mi herramienta para construir un entorno estable y un futuro brillante para las personas que más quiero.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 2 }, md: { c: 4, r: 1 } }
    },
    {
        id: "valores",
        title: "Principios de vida",
        image_url: justicePic, // Balanza de justicia
        description: "Los valores con los que crecí, como el respeto, la honestidad y gratitud, son el fundamento de todas mis interacciones. Busco aplicar estos principios en cada aspecto de mi vida —en el trabajo, con mi familia y amigos—, siempre con el objetivo de ofrecer un trato considerado y genuino a quienes me rodean.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "filosofia",
        title: "Filosofía",
        image_url: philosophyPic, // Libros apilados
        description: "La filosofía y el psicoanálisis han transformado mi perspectiva, llevándome a reflexionar sobre mis deseos y el impacto de mis acciones. Llevo esta introspección al desarrollo de software, donde me permite abordar los problemas con mayor empatía para crear soluciones que respondan a necesidades humanas reales.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "pizzas",
        title: "Pizza artesanal",
        image_url: pizzaPic, // Persona cocinando pizza
        description: "Me apasiona el proceso artesanal de cocinar pizza, desde preparar la masa hasta elegir los mejores ingredientes. He descubierto que, al igual que en el desarrollo de software, la cocina requiere una mezcla de paciencia, precisión y amor por los detalles. Al final, tanto una buena pizza como una buena aplicación son una forma de crear y compartir algo valioso con los demás.",
        span: { xs: { c: 12, r: 2 }, sm: { c: 12, r: 2 }, md: { c: 4, r: 2 } } // ALTO Y ESTRECHO (tipo tu mock)
    },
    {
        id: "coding",
        title: "Codificando al mundo",
        image_url: developerPic, // Taza de café y laptop
        description: "Busco constantemente problemas no resueltos como oportunidades para generar un cambio. La programación es mi medio para crear y conectar con ese propósito. La satisfacción de ver los resultados de este proceso es lo que alimenta mi pasión por seguir aprendiendo y mejorando cada día.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "musica",
        title: "Música & Creatividad",
        image_url: guitarPic, // Taza de café y laptop
        description: "Busco constantemente problemas no resueltos como oportunidades para generar un cambio. La programación es mi medio para crear y conectar con ese propósito. La satisfacción de ver los resultados de este proceso es lo que alimenta mi pasión por seguir aprendiendo y mejorando cada día.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
]