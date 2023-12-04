export default function GenerarCompra(funcionId,horario,fecha,disponibles) {
    const compra = document.createElement('div');
    compra.className = 'confirmar-compra';
    compra.innerHTML = `
        <h4 class='texto-compra'>COMPLETAR COMPRA</h4>
        <span class='texto-compra' id="fecha"> FECHA: ${fecha} </span>
        <span class='texto-compra' id="horario"> HORARIO: ${horario} </span>
        <span class='texto-compra' id="disponibles" data-value=${disponibles}> DISPONIBLES: ${disponibles} </span>
        <input type="text" placeholder="Ingrese su nombre" class="input-nombre" id='input-nombre'>
        <div id="nombreError" class="error-message" style="display:none;">El nombre solo debe contener letras y espacios.</div>
        <div class="boton-comprar">
            <span class="botones-aum-dis bor-izq" id="disminuir"><i class='bx bx-minus'></i></span> 
            <span class="cantidad-boletos" id="contador-boletos">0</span>
            <span class="botones-aum-dis bor-der" id="aumentar"><i class='bx bx-plus'></i></span>
        </div>
        <div class="container-boton-compra">
            <span class="boton-compra">CONFIRMAR</span>
        </div>
  
    `;

    return compra;
};