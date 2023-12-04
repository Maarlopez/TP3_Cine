import ApiFuncion from './services/funcionApi.js';
import ApiTicket from './services/canTicketApi.js';
import ApiPelicula from './services/peliculaApi.js';

// Función para cargar y mostrar todas las películas que tienen funciones y tickets disponibles
async function cargarPeliculasDisponibles() {
    try {
        // Obtener todas las funciones
        const funciones = await ApiFuncion.Get();
        
        // Filtrar para obtener solo las funciones con tickets disponibles
        const funcionesConTickets = [];
        for (const funcion of funciones) {
            const tickets = await ApiTicket.GetCantTickets(funcion.id);
            if (tickets.cantidad > 0) {
                funcionesConTickets.push(funcion);
            }
        }

        // Obtener detalles de la película para las funciones con tickets
        const peliculas = await Promise.all(
            funcionesConTickets.map(async (funcion) => {
                return await ApiPelicula.Get(funcion.peliculaId);
            })
        );

        // Mostrar las películas en el frontend
        mostrarPeliculas(peliculas);
    } catch (error) {
        console.error('Error al cargar películas:', error);
    }
}

function mostrarPeliculas(peliculas) {
    const contenedorPeliculas = document.getElementById('peliculas');
    contenedorPeliculas.innerHTML = peliculas.map(pelicula => `
        <div>
            <h2>${pelicula.titulo}</h2>
            <img src="${pelicula.poster}" alt="Poster de ${pelicula.titulo}">
            <p>${pelicula.sinopsis}</p>
            <!-- Más detalles de la película -->
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', cargarPeliculasDisponibles);