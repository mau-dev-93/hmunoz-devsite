import guitarPic from '@/assets/images/human-side/guitar.png';
import familyPic from '@/assets/images/human-side/family_2.jpg';
import justicePic from '@/assets/images/human-side/justice.png';
import philosophyPic from '@/assets/images/human-side/philosophy.jpg';
import pizzaPic from '@/assets/images/human-side/pizza.png';
import developerPic from '@/assets/images/human-side/programming.png';

export default [
    {
        id: "historia",
        title: "Mi Historia Personal",
        image_url: guitarPic, // Persona tocando guitarra
        description: "Desde pequeño me cautivaron las historias que se pueden contar a través de la música y la tecnología. Aprendí a tocar guitarra a los 12 años y descubrí que crear algo desde cero puede emocionar y conectar a otros. Esta pasión por la creatividad me llevó a la programación, donde encontré la misma satisfacción al resolver problemas y construir soluciones. La música y el código son mis lenguajes para expresarme y compartir ideas. Ambos me han enseñado disciplina, paciencia y el valor de la práctica constante.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 8, r: 1 } }
    },
    {
        id: "familia",
        title: "Mi Familia",
        image_url: familyPic, // Familia unida
        description: "Son mi motor, mi inspiración y la razón por la que busco constantemente ser mejor. Cada línea de código que escribo lleva consigo la intención de construir un futuro mejor para ellos y contribuir a un mundo donde la tecnología sirva verdaderamente a las personas.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 2 }, md: { c: 4, r: 1 } }
    },
    {
        id: "justicia",
        title: "Sentido de Justicia",
        image_url: justicePic, // Balanza de justicia
        description: "Creo firmemente que la tecnología debe democratizar oportunidades, no ampliar brechas. Mi compromiso con el desarrollo de software va más allá de lo técnico: busco crear herramientas que empoderen a las personas y contribuyan a una sociedad más justa.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "filo",
        title: "Filosofía",
        image_url: philosophyPic, // Libros apilados
        description: "Las lecturas de filosofía y psicoanálisis han moldeado mi forma de ver el mundo y el desarrollo de software. Entender la psique humana me ayuda a crear interfaces más empáticas y soluciones que realmente resuelvan problemas reales de las personas.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "pizzas",
        title: "Más Allá del Código",
        image_url: pizzaPic, // Persona cocinando pizza
        description: "Cocinar pizzas caseras es mi ritual de desconexión y creatividad. Al igual que programar, requiere paciencia, precisión y amor por los detalles. Es mi forma de nutrir tanto el cuerpo como el alma, y de compartir momentos especiales con quienes amo.",
        span: { xs: { c: 12, r: 2 }, sm: { c: 12, r: 2 }, md: { c: 4, r: 2 } } // ALTO Y ESTRECHO (tipo tu mock)
    },
    {
        id: "amor",
        title: "Amor al Código",
        image_url: developerPic, // Taza de café y laptop
        description: "Para mí, programar de madrugada con una taza de café es más que trabajo: es mi forma de meditar, de crear y de conectar con algo más grande. Cada problema resuelto es una pequeña victoria que alimenta mi pasión por seguir aprendiendo.",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
]