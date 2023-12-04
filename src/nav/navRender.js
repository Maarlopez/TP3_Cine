function GenerarNavBuscador() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <li class="left-links">
            <a href="/index.html" class="texto"><h2 class="tituloNav">CINEPIA</h2></a>
        </li>
        <ul class="menu">
            <li class="left-links menu-opciones"> 
                <a href="../../src/cartelera/cartelera.html">CARTELERA</a> </li>
            </li>
            <li class="left-links menu-opciones"> 
                <a href="../../src/Promociones/promociones.html">PROMOCIONES</a> </li>
            </li>
        </ul>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNavBuscador();
contenedor.appendChild(barraNavegacion);