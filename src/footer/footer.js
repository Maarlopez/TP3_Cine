function GenerarNavBuscador() {
    const footNav = document.createElement('footer');
    footNav.className = 'footer-general';
    footNav.innerHTML = `
    <div class="footer-container">
    <div>
        <div class="footer-name">
            <h4>CINEPIA</h4>
        </div>
        <div class="footer-disclaimer">
            <p><strong>&copy; 2023 CINEPIA</strong>. Todos los derechos reservados.</p>
        </div>
        <div class="footer-quejas">
            <p>Dirección General de Defensa y Protección al Consumidor: Para consultas y/o denuncias haga <a href="https://buenosaires.gob.ar/jefaturadegabinete/atencion-ciudadana-y-gestion-comunal/defensa-al-consumidor">click aquí</a></p>
        </div>
    </div>
    <div class="footer-social">
        <ul>
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </div>
</div>
    `;
    return footNav;
}
const contenedor = document.getElementById('footer-general');
const footerNavegacion = GenerarNavBuscador();
contenedor.appendChild(footerNavegacion);