import CargarCarteleraDestacadas from '../CarteleraRenders/DestacadasCartelera.js';
import anticipada from '../CarteleraRenders/AnticipadasCartelera.js';
import CargarCartelera from '../CarteleraRenders/PeliculasCarteleraGen.js';

function aplicarDesplazamiento(scrollContainer, scrollArrowLeft, scrollArrowRight) {
    scrollArrowLeft.addEventListener('click', () => {
        let containerWidth = scrollContainer.clientWidth;
        console.log("El widht: " + containerWidth);
        scrollContainer.scrollBy({
            left: -containerWidth,
            behavior: 'smooth' 
        });
    });

    scrollArrowRight.addEventListener('click', () => {
        let containerWidth = scrollContainer.clientWidth;
        console.log("El width: " + containerWidth);
        scrollContainer.scrollBy({
            left: containerWidth, 
            behavior: 'smooth'
        });
    });
}


async function cargarContenidoAsincronico() {
    // Asegúrate de cargar el contenido destacado como antes
    await anticipada.Get;

    // Crear una fecha que represente el día de hoy sin la hora
    const fechaHoy = new Date();
    fechaHoy.setHours(0, 0, 0, 0);

    // Convertir la fecha de hoy a un string ISO para la comparación en la API
    const fechaHoyISO = fechaHoy.toISOString();

    // Suponiendo que 'CargarCartelera.Get' acepta una fecha ISO y devuelve funciones después de esa fecha
    await CargarCartelera.Get('carteleraAnticipadas', fechaHoyISO, null, null);
    
    // Cargar otra información si es necesario como antes
    await CargarCartelera.Get('cartelera', null, null, null);
}

// Ejecutar la función al cargar el documento
cargarContenidoAsincronico().then(() => {
    // Aplicar el desplazamiento a los contenedores de la cartelera como antes
    const flexingContainers = document.querySelectorAll('.contenedor-cartelera');
    flexingContainers.forEach(flexingContainer => {
        const scrollArrowLeft = flexingContainer.querySelector('.scroll-arrow-left');
        const scrollArrowRight = flexingContainer.querySelector('.scroll-arrow-right');
        const scrollContainer = flexingContainer.querySelector('.SeccionCartelera');
        aplicarDesplazamiento(scrollContainer, scrollArrowLeft, scrollArrowRight);
    });
});
