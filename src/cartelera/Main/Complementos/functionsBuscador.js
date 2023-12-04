const elementosGenero = document.querySelectorAll('.texto.genero');
const generoFiltrado = document.getElementById('genero-filtrado');
const quitarFiltro = document.getElementById('quitar-filtro');

elementosGenero.forEach(elemento => {
    elemento.addEventListener('click', function(event) {
        event.preventDefault();

        const filtroSeleccionado = elemento.getAttribute('data-filter-value');

        if (filtroSeleccionado === 'null') {
            generoFiltrado.textContent = '';
        } else {
            const textoGenero = elemento.textContent.trim();
            generoFiltrado.textContent = 'FILTRANDO POR: '+ textoGenero;
        }
    });
});