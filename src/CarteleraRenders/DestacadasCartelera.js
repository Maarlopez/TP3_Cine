import ApiPelicula from '../services/peliculaApi.js';
import GenerarPeliDestacada from './PelDesRender.js'

async function CargarCarteleraDestacadas() {
    const seccionContenedora = document.getElementById('carteleraDestacada');
    let pelisDestacadas = [2,1,5,6]

    for (const idPelicula of pelisDestacadas) {
        const unaPelicula = await ApiPelicula.Get(idPelicula);
        if (idPelicula) {
            seccionContenedora.appendChild(GenerarPeliDestacada(unaPelicula));

        }
    }
}
const destacadas = {
    Get : CargarCarteleraDestacadas()
}
export default destacadas;


