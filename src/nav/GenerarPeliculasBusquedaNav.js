import peliculaNavRender from './RenderPeliculas.js'
import GetFuncionesApi from '../services/funcionApi.js'

async function CargarListaPeliculas(id,titulo) {
    const seccionContenedora = document.getElementById(id);
    let funciones = await GetFuncionesApi.Get(null,titulo,null);
    seccionContenedora.innerHTML = '';

    if (funciones.length === 0) {
        const mensajeNoEncontrado = document.createElement('li');
        mensajeNoEncontrado.textContent = 'No hay funciones para esa película';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        const peliculasRepetidas = new Set();
        for (const funcion of funciones) {
                if (!peliculasRepetidas.has(funcion.pelicula.peliculaId))
                {

                    seccionContenedora.appendChild(peliculaNavRender(funcion.pelicula.peliculaId, funcion.pelicula.titulo));
                    peliculasRepetidas.add(funcion.pelicula.peliculaId);
                }
            }
        }
}

const listaCategorias = {
    Get: CargarListaPeliculas
};

export default listaCategorias;

