import GenerarFuncionesYCompra from './GenerarFuncionesYCompra.js';
import ApiPelicula from '../../../services/peliculaApi.js';
import FichaTecnicaRender from './GenerarFichaTecnica.js';

const urlParams = new URLSearchParams(window.location.search);
const peliculaId = urlParams.get('peliculaId');
const unaPelicula = await ApiPelicula.Get(peliculaId);

FichaTecnicaRender.Get('ficha-pelicula', unaPelicula);
GenerarFuncionesYCompra.Get('funcion-compra', unaPelicula);