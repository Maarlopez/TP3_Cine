export default function CrearVentandaModal(message) {
    const ventMod = document.createElement('div');
    ventMod.className = 'modal-contenido';
    ventMod.innerHTML = `
        <span class="cerrar-modal" id="cerrarModal">&times;</span>
        <div>
        <a class="texto-error"> HA OCURRIDO UN ERROR EN LA OBTENCION DE LOS TICKETS: </a>
        </div>
        <div>
        <a class="texto-error"> ${message.toUpperCase()} </a>
        </div>
    `;

    return ventMod;
};