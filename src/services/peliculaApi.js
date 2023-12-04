const getPelicula = async (id) => {
    let result = [];
    let response = await fetch(`http://localhost:5198/api/v1/Pelicula/${id}`);
    if (response.ok){
        result = await response.json();
    }
    return result;
}
const ApiPelicula = {
    Get : getPelicula
}
export default ApiPelicula;