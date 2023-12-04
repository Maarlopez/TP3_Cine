const getCantidadTickets = async (id) => {
    try {
        let response = await fetch(`http://localhost:5198/api/v1/Funcion/${id}/tickets`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al obtener la cantidad de tickets:', error);
        // Puedes decidir retornar un valor por defecto o manejar el error según convenga.
        return { cantidad: 0 }; // Devuelve un objeto con cantidad 0 en caso de error.
    }
}

const ApiCantidad = {
    GetCantTickets : getCantidadTickets
};

export default ApiCantidad;