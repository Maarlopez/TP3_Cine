// helpers.js
export function mostrarPeliculas(peliculas) {
    const container = document.getElementById('peliculas-container');
    // Limpia el contenedor antes de agregar nuevas tarjetas
    container.innerHTML = '';
    peliculas.forEach(pelicula => {
      const peliculaElement = // crea el elemento de la película
      container.appendChild(peliculaElement);
    });
  }
  
  export function mostrarFuncionesHoy(funciones) {
    const container = document.getElementById('funciones-container');
    // Limpia el contenedor antes de agregar nuevas funciones
    container.innerHTML = '';
    funciones.forEach(funcion => {
      const funcionElement = // crea el elemento de la función
      container.appendChild(funcionElement);
    });
  }  