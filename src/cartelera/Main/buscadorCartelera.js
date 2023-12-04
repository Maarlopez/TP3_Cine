function GenerarbuscadorCartelera() {
    const busc = document.createElement('div');
    busc.className = 'container-filtrador container-filtrador-border fecha-busqueda ';
    busc.innerHTML = `
    <ul class="menu-filtro">
        <li>
            <div>
                <span id='genero'>GENERO</span><i class="fas fa-caret-down separador"></i>
            </div>
            <ul class="submenu-filtro">
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genAc"> ACCION</span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genAv"> AVENTURA</span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genFi"> FICCION</span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genCo"> COMEDIA </span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genDo"> DOCUMENTAL </span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genDr"> DRAMA </span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genFa"> FANTASIA </span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genMu"> MUSICAL </span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genSu"> SUSPENSO </span></li>
                    <li> <span class="texto genero" data-filter-type="genero" data-filter-value="genTe"> TERROR </span> </li>  
            </ul>       
        </li>
        
    </ul>
    `;

    return busc;
}

const contenedor = document.getElementById('buscadorInput');
const buscadorCartelera = GenerarbuscadorCartelera();
contenedor.appendChild(buscadorCartelera);
