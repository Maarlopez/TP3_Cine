export default function GenerarPeliculaCartelera(funcion) {
    const peliculaElemento = document.createElement('div');
    peliculaElemento.className = 'peliculaCartelera';
    peliculaElemento.innerHTML = `    
        <a href="/src/FichaPelicula/FichaPelicula.html?peliculaId=${funcion.pelicula.peliculaId}" class="contenedor-funcion funcion-link">
            <img class="imagenCartelera" src="${funcion.pelicula.poster}" alt="${funcion.pelicula.titulo}">
            <a href="/src/FichaPelicula/FichaPelicula.html?peliculaId=${funcion.pelicula.peliculaId}" class="textoCartelera">${funcion.pelicula.titulo.toUpperCase()}</a> 
        </a>
    `;
    return peliculaElemento;
};

