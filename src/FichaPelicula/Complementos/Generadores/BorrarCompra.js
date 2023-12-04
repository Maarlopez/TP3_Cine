async function EliminarConfirmarCompra(id) {
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = '';
}

const eliminarCompra = {
    Remove: EliminarConfirmarCompra
};

export default eliminarCompra;