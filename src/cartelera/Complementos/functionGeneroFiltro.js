import CargarCartelera from '../../CarteleraRenders/PeliculasCarteleraGen.js';

document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('inputBusqueda');
    const generos = document.querySelectorAll('.genero');
    let container =  document.querySelector('.fecha-busqueda');
    let laFecha = null
    
    const fechaSeleccionadaInput = document.getElementById('fechaSeleccionada');

    const generoIdMap = {
        'genAc': 1,
        'genAv': 2,
        'genCi': 3,
        'genCo': 4,
        'genDo': 5,
        'genDr': 6,
        'genFa': 7,
        'genMu': 8,
        'genSu': 9,
        'genTe': 10,
        'genRe': 11,
    };

    generos.forEach(genero => {
        genero.addEventListener('click', handleFilterClick);
    });

    if (inputBusqueda) {
        inputBusqueda.addEventListener('input', handleFilterInput);
    }
    
     if (container) {
        container.addEventListener('click', handleFilterDate);
    }

    function handleFilterClick(event) {
        const filterType = event.target.getAttribute('data-filter-type');
        const filterValue = event.target.getAttribute('data-filter-value');
        const idnombre = document.getElementById('genero');
        if (filterType === 'genero') {
            selectedValues.generoId = generoIdMap[filterValue];
            let textoClickeado = event.target.textContent;
            applyFilters();
            idnombre.textContent = textoClickeado;

        }
        else
        {
            applyFilters();
        }
        
    }

    function handleFilterDate(event) {
        container = document.querySelector('.fecha-busqueda');
        selectedValues.laFecha = container.getAttribute('value');
        applyFilters();
    }    

    function handleFilterInput(event) {
        if (event.target === fechaSeleccionadaInput) {
            selectedValues.fechaParametro = fechaSeleccionadaInput.value;
        } else {
            selectedValues.titulo = event.target.value;
        }
        applyFilters();
    }

    function applyFilters() {
        const { titulo, generoId, laFecha } = selectedValues;
        console
        CargarCartelera.Get('cartelera', laFecha, titulo, generoId);
    }

    const selectedValues = {
        titulo: '',
        generoId: null,
        laFecha: container.getAttribute('value'),
    };

    const currentURL = window.location.href;

    if (currentURL.includes('hoy')) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const fechaHoy = yyyy + '/' + mm + '/' + dd;

        selectedValues.laFecha = fechaHoy;

        applyFilters();
    }
    else
    {
        applyFilters();
    }

    
});