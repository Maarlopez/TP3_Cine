const PostTickets = async (id, cantidad, usuario) => {
    let result = [];
    let url = `http://localhost:5198/api/v1/Funcion/${id}/tickets`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cantidad: cantidad,
                usuario: usuario,
            }),
        });

        if (response.ok) {
            result = await response.json();
        } else if(response.status === 409)
        {
            result = ('la cantidad de butacas disponibles es menor a la solicitada')
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }

    return result;
};

const TicketApi = {
    Post: PostTickets
};

export default TicketApi;
