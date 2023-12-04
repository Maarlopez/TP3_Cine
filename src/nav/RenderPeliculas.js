export default function GenerarPeliculaNav(id, pelicula) {
    const peliculaNav = document.createElement('li');
    peliculaNav.className = 'pelicula-del-nav';
    peliculaNav.innerHTML = `
                <a href="/src/FichaPelicula/FichaPelicula.html?peliculaId=${id}" id="Ingrediente-data" class='texto-pelicula-del-nav' ><span>- ${pelicula.toUpperCase()}</span></a>     
    `;

    return peliculaNav;
};