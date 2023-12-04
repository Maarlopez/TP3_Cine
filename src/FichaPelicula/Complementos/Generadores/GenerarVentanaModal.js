import VentanaModal from '../Renders/VentanaModalRender.js';
import SinButacasRender from '../Renders/GenerarSinButacasRender.js'

async function CargarVentanaModal(id, ticketResponse, flag) {
    console.log(ticketResponse);
    const contenedor = document.getElementById(id);
    let unaVentanaModal = null;
    if (flag) {
        unaVentanaModal = await VentanaModal(ticketResponse);
        contenedor.appendChild(unaVentanaModal);
    } else {
        unaVentanaModal = SinButacasRender(ticketResponse);
        contenedor.appendChild(unaVentanaModal);
    }
}

const laVentanaModal = {
    Get: CargarVentanaModal
};

export default laVentanaModal;