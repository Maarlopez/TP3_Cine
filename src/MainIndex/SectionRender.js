import ApiFuncion from '../services/funcionApi.js';
import GenerarPeliculaCartelera from '../CarteleraRenders/CarteleraRender.js'

async function CargarCartelera(id,fecha,titulo,genero) {
    const seccionContenedora = document.getElementById(id);
    const peliculasRepetidas = new Set();
    const funciones = await ApiFuncion.Get(fecha,titulo,genero);
    for (const funcion of funciones) {
        if (!peliculasRepetidas.has(funcion.pelicula.peliculaId)) {
            seccionContenedora.appendChild(GenerarPeliculaCartelera(funcion));
            peliculasRepetidas.add(funcion.pelicula.peliculaId);
        }
    }
}

const cartelera = {
    Get : CargarCartelera
}
export default cartelera;