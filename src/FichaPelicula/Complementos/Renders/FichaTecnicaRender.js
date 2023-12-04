export default function GenerarFichaTecnica(pelicula) {
    const fichaTecnica = document.createElement('div');
    fichaTecnica.className = 'row';
    fichaTecnica.innerHTML = `
    <h1>${pelicula.titulo.toUpperCase()}</h1>
    <section class="ficha-tecnica-container">
        <div class="titulo-imagen">
            <img src="${pelicula.poster}" class="imagen-ficha" >
        </div>
        <div class="ficha-tecnica">

            <!-- Incluso podría crear un foreach que me cree esto, total tiene el mismo nombre de las variables-->
            <table class="tabla-tecnica">
                <thead>
                    <tr>
                        <th class="encabezado-tecnico"><h4>FICHA TECNICA</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <h5>TITULO:</h5>
                        </th>
                        <th>
                            ${pelicula.titulo.toUpperCase()}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <h5>GENERO:</h5>
                        </th>
                        <th>
                        ${pelicula.genero.nombre.toUpperCase()}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <h5>DURACION:</h5>
                        </th>
                        <th >
                            180 MINS
                        </th>
                    </tr>
                    <tr>
                        <th class="sinopsis">
                            <h5>SINOPSIS:</h5>
                        </th>
                        <th class="sinopsis">
                        ${pelicula.sinopsis}
                        </th>
                    </tr>
                    <tr>
                        <th class="sinopsis">
                            <h5>TRAILER:</h5>
                        </th>
                        <th>
                            <iframe class="trailer" src="${pelicula.trailer}" title="${pelicula.titulo} frameborder="0" allowfullscreen></iframe>
                        </th>
                    </tr>

                </tbody>
            </table>
    `;

    return fichaTecnica;
};
