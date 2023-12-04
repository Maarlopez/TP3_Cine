export default function GenerarFuncionYCompra(pelicula, funcion, cantTickets) {
    const funcionesDiponibles = document.createElement('div');
    funcionesDiponibles.className = 'funciones-disponibles';
    funcionesDiponibles.innerHTML = `
        <div class="contenedor-funcion">
            <table class="tabla-funciones">
                <tbody>
                    <tr>
                        <th colspan="2"><span id='funcion' data-value="${funcion.funcionId}" class='funciones-texto'>${pelicula.titulo.toUpperCase()}</span></th>
                    </tr>
                    <tr>
                        <th>
                            <span class='funciones-texto'>FECHA:</span>
                        </th>
                        <th>
                            <span id="fecha" class='funciones-texto'>${funcion.fecha.split('T')[0]}</span>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <span class='funciones-texto'>HORARIO:</span>
                        </th>
                        <th>
                            <span id="horario" class="funciones-texto" data-horario="${funcion.horario}">${funcion.horario}</span>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <span class="funciones-texto" id="test" data-id="${funcion.funcionId}">DISPONIBLES:</span>
                        </th>
                        <th>
                            <span id="cantidad" class='funciones-texto'> ${cantTickets} </span>
                        </th>
                </tbody>
            </table>
        </div>
        <div class="contenedor-tickets">
        
            <div class="boton-boleto">
                <span class="texto-ticket funciones-texto">
                    SACAR BOLETO
                </span>
            </div>
        </div>
    `;

    return funcionesDiponibles;
};