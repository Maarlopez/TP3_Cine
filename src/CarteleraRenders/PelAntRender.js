export default function GenerarPeliAnticipada(pelicula) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `
        <a href="/src/FichaPelicula/fichaPelicula.html?peliculaId=${pelicula.peliculaId}" class="contenedor-funcion funcion-link">
            <img class="imagenCartelera" src="${pelicula.poster}" alt="${pelicula.titulo}">
            <a class="textoCartelera">${pelicula.titulo.toUpperCase()}</a>
        </a>
    `;
    return peliculaElemento;
}