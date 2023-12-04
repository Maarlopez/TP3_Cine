import ConfirmarCompra from '../Renders/ConfirmarCompraRender.js'

async function CargarConfirmarCompra(id,funcionId,horario,fecha,cantidad) {
    const contenedor = document.getElementById(id);
    const unaFichaTecnica = ConfirmarCompra(funcionId,horario,fecha,cantidad);
    contenedor.appendChild(unaFichaTecnica);
}

const confirmarCompra = {
    Get: CargarConfirmarCompra
};

export default confirmarCompra;