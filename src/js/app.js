// Importa las funciones necesarias desde los servicios de la API.
import { getFuncionesDelDia } from './Services/funcionApi.js';
import { getPeliculas } from './Services/peliculaApi.js';
import { setupSearchForm } from '../js/Components/searchForm.js';

import { mostrarPeliculas, mostrarFuncionesHoy } from '../js/Functions/helpers.js';

// Agrega un escuchador de eventos que reacciona cuando el DOM está completamente cargado.
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Obtiene las películas utilizando la función importada y las muestra en el DOM.
    const peliculas = await getPeliculas();
    mostrarPeliculas(peliculas);

    // Obtiene las funciones del día actual utilizando la función importada y las muestra en el DOM.
    const funcionesHoy = await getFuncionesDelDia();
    mostrarFuncionesHoy(funcionesHoy);
  } catch (error) {
    // Registra errores en la consola si ocurren durante la obtención de datos o la manipulación del DOM.
    console.error('Error al cargar la página:', error);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setupSearchForm();
  // Inicializar otros componentes y funcionalidades...
});

// Las funciones mostrarPeliculas y mostrarFuncionesHoy son responsables de crear elementos HTML y agregarlos al DOM.
// Estas funciones deben ser definidas en el archivo 'helpers.js' y deben manejar correctamente la estructura del DOM.