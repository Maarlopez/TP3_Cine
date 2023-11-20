// Función para obtener detalles de una película específica
async function getPelicula(id) {
    let response = await fetch(`https://localhost:5198/api/Pelicula/${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        console.error('Error al obtener la película:', response.status);
        return null;
    }
  }

  async function getPeliculas() {
    try {
      const response = await fetch('https://localhost:5198/api/Pelicula');
      const peliculas = await response.json();
      return peliculas;
    } catch (error) {
      console.error('Error al obtener películas:', error);
    }
  }

  export { getPelicula, getPeliculas };