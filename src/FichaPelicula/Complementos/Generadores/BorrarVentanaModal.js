async function EliminarVentana(id) {
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = '';
}

const eliminarVentana = {
    Remove: EliminarVentana
};

export default eliminarVentana;