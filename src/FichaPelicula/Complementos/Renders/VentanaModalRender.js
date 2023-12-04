// export default function CrearVentandaModal(ticketResponse,ticket) {
    
//     const ventMod = document.createElement('div');
//     ventMod.className = 'modal-contenido';
//     ventMod.innerHTML = `
//         <span class="cerrar-modal" id="cerrarModal">&times;</span>
//         <h2>CONFIRMACION DE TICKET<h2>
//         <table class="tabla-tecnica">
//                 <thead>
//                     <tr><th colspan="2"> <a>CINEPIA TICKET<a> </a></tr>
                   
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th class="sinopsis">
//                             <a>TICKETS:<a>
//                         </th>
//                          <th class="tickets">
//                             <a>${ticketResponse.tickets}</a>
//                         </th>
//                     </tr>
//                     <tr>
//                         <th>
//                             <a>USUARIO:<a>
//                         </th>
//                         <th>
//                             <a>${ticketResponse.usuario.toUpperCase()}</a>
//                         </th>
//                     </tr>
//                     <tr>
//                         <th class="sinopsis">TITULO:</th>
//                         <th class="sinopsis">
//                             ${ticketResponse.funcion.pelicula.titulo.toUpperCase()}
//                         </th>
//                     </tr>
//                     <tr>
//                         <th>
//                             <a>FECHA:<a>
//                         </th>
//                         <th>
//                             <a id="fecha">${ticketResponse.funcion.fecha.split('T')[0]}</a>
//                         </th>
//                     </tr>
//                     <tr>
//                     <th>
//                         <a>HORARIO: <a>
//                     </th>
//                     <th>
//                         <a>${ticketResponse.funcion.horario}</a>
//                     </th>
//                 </tr>
//                     <tr>
//                         <th>
//                             <a>SALA:<a>
//                         </th>
//                         <th>
//                             <a id="fecha">${ticketResponse.funcion.sala.nombre.toUpperCase()}</a>
//                         </th>
//                     </tr>
//                 </tbody>
//             </table>
//     `;

//     return ventMod;
// };

export default function CrearVentandaModal(ticketResponse, ticket) {
    const ventMod = document.createElement('div');
    ventMod.className = 'modal-contenido';
    ventMod.innerHTML = `
        <span class="cerrar-modal" id="cerrarModal">&times;</span>
        <h2 class="titulo-confirmacion">CONFIRMACION DE TICKET</h2>
        <table class="tabla-tecnica">
            <thead>
                <tr><th colspan="2" class="cinema-ticket">CINEPIA TICKET</th></tr>
            </thead>
            <tbody>
                <tr>
                    <th class="etiqueta">TICKETS:</th>
                    <th class="valor">${ticketResponse.tickets}</th>
                </tr>
                <tr>
                    <th class="etiqueta">USUARIO:</th>
                    <th class="valor">${ticketResponse.usuario.toUpperCase()}</th>
                </tr>
                <tr>
                    <th class="etiqueta">TITULO:</th>
                    <th class="valor">${ticketResponse.funcion.pelicula.titulo.toUpperCase()}</th>
                </tr>
                <tr>
                    <th class="etiqueta">FECHA:</th>
                    <th class="valor">${ticketResponse.funcion.fecha.split('T')[0]}</th>
                </tr>
                <tr>
                    <th class="etiqueta">HORARIO:</th>
                    <th class="valor">${ticketResponse.funcion.horario}</th>
                </tr>
                <tr>
                    <th class="etiqueta">SALA:</th>
                    <th class="valor">${ticketResponse.funcion.sala.nombre.toUpperCase()}</th>
                </tr>
            </tbody>
        </table>
    `;
    return ventMod;
};
