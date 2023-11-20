const getFunciones = async (fecha, titulo, genero) => {
    let result = [];
    let url = `http://localhost:5198/api/Funcion?`;
  
    // Construcción de la URL con parámetros
    if (fecha) {
      url += `fecha=${encodeURIComponent(fecha)}&`;
    }
    if (titulo) {
      url += `titulo=${encodeURIComponent(titulo)}&`;
    }
    if (genero) {
      url += `genero=${encodeURIComponent(genero)}&`;
    }
    
    // Eliminar el último '&' si está presente
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }
  
    // Realizar la solicitud HTTP
    let response = await fetch(url);
  
    if (response.ok) {
      result = await response.json();
    }
    return result;
  };

async function getFuncionesDelDia() {
  const hoy = new Date().toISOString().split('T')[0]; // Formato AAAA-MM-DD
  try {
    const response = await fetch(`http://localhost:5198/api/Funcion?fecha=${hoy}`);
    const funciones = await response.json();
    return funciones;
  } catch (error) {
    console.error('Error al obtener funciones:', error);
  }
}

export { getFunciones, getFuncionesDelDia };