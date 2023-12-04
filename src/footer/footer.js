function GenerarNavBuscador() {
    const footNav = document.createElement('footer');
    footNav.className = 'footer-general';
    footNav.innerHTML = `
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-logo">
                <h4> CINEPIA <h4>
            </div>
            <div class="footer-links">
                <ul>
                    <li><a href="../../index.html">Inicio</a></li>
                    <li><a href="../../src/cartelera/cartelera.html">Cartelera</a></li>
                    <li><a href="../../src/cartelera/cartelera.html?fecha=hoy">Hoy</a></li>

                </ul>
            </div>
            <div class="footer-social">
                <ul>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            </div>
            <div class="footer-disclaimer">
                <p>&copy; 2023 CINEPIA. Todos los derechos reservados.</p>
            </div>
    </div>
    `;
    return footNav;
}
const contenedor = document.getElementById('footer-general');
const footerNavegacion = GenerarNavBuscador();
contenedor.appendChild(footerNavegacion);