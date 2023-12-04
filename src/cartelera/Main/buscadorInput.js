let fechaActual = new Date();

function GenerarbuscadorCartelera(ObtenerDiaDeHoyFormateado,fechaActual) {
    const busc = document.createElement('div');
    busc.className = 'buscador';
    busc.innerHTML = `
        <input type="text" id="inputBusqueda" placeholder="Buscar película" class="buscador-titulo">
        <div class="fecha-busqueda acomodar-fecha" value="${fechaActual}">
            <i class="fa-solid fa-calendar-days separador"></i>
            <span class="separador texto-calendario">${ObtenerDiaDeHoyFormateado}</span>
            <i class="fa-solid fa-angle-left separador seleccionar-fecha" id="flecha-izquierda"></i>
            <i class="fa-solid fa-angle-right separador seleccionar-fecha" id="flecha-derecha"></i>
        </div>
    `;

    return busc;
}

function ObtenerDiaFormateado(fecha) {
    const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    const diaSemana = diasSemana[fecha.getDay()];
    const diaDelMes = fecha.getDate();
    const nombreMes = meses[fecha.getMonth()];

    return `${diaSemana}, ${diaDelMes} de ${nombreMes}`;
}

const contenedor = document.getElementById('buscadorInput');
const buscadorCartelera = GenerarbuscadorCartelera(ObtenerDiaFormateado(fechaActual),FormatearFechaValue(fechaActual));
contenedor.appendChild(buscadorCartelera);

document.addEventListener('DOMContentLoaded', function () {
    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');
    flechaDerecha.addEventListener('click', () => actualizarFecha(1));
    flechaIzquierda.addEventListener('click', () => {
        const fechaHoy = new Date();
        
        const fechaHoySinTiempo = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaHoy.getDate());
        const fechaActualSinTiempo = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
    
        if (fechaHoySinTiempo < fechaActualSinTiempo) {
            actualizarFecha(-1);
        }
    });
    
});

function actualizarFecha(dias) {
    fechaActual.setDate(fechaActual.getDate() + dias);
    fechaActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
    const diaSemana = fechaActual.getDay();

    const nuevaFechaFormateada = ObtenerDiaFormateado(fechaActual);
    document.querySelector('.texto-calendario').textContent = nuevaFechaFormateada;
    const divFechaBusqueda = document.querySelector('.fecha-busqueda');
    divFechaBusqueda.setAttribute('value', FormatearFechaValue(fechaActual));

}

function FormatearFechaValue (fecha)
{
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
}