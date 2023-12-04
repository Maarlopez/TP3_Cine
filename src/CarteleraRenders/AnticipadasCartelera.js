import ApiPelicula from '../services/peliculaApi.js';
import GenerarPeliAnticipada from './PelAntRender.js'

async function CargarCarteleraAnticipada() {
    const seccionContenedora = document.getElementById('carteleraAnticipada');
    let pelisAnticipadas = [20,3,15,10,11,12,2,8]

    for (const idPelicula of pelisAnticipadas) {
        const unaPelicula = await ApiPelicula.Get(idPelicula);
        if (idPelicula) {
            seccionContenedora.appendChild(GenerarPeliAnticipada(unaPelicula));

        }
    }
}
const anticipada = {
    Get : CargarCarteleraAnticipada()
}
export default anticipada;