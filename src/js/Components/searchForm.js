// Este archivo define el formulario y su comportamiento.
export function setupSearchForm() {
  const searchForm = document.getElementById('search-form');
  
  searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const titulo = document.getElementById('titulo-pelicula').value;
      const genero = document.getElementById('genero-pelicula').value;
      const fecha = document.getElementById('fecha-funcion').value;
      
      // Aquí puedes invocar una función de búsqueda que podría estar definida en otro lugar,
      // posiblemente importada desde otro módulo si quieres separar la lógica de la interfaz
      // de usuario de la lógica de la aplicación.
      realizarBusqueda(titulo, genero, fecha);
  });
}

function realizarBusqueda(titulo, genero, fecha) {
  // Realiza la solicitud a la API con los valores proporcionados y maneja la respuesta.
  console.log("Buscar películas con:", titulo, genero, fecha);
  // Aquí podrías llamar a la API y luego actualizar el DOM con los resultados.
}