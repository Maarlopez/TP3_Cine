import FichaTecnicaRender from '../Renders/FichaTecnicaRender.js';

async function CargarFichaTecnica(id,pelicula) {
    const contenedor = document.getElementById(id);
    const unaFichaTecnica = FichaTecnicaRender(pelicula);
    contenedor.appendChild(unaFichaTecnica);
}

const laFichaTecnica = {
    Get: CargarFichaTecnica
};

export default laFichaTecnica;