import axios from 'axios';

// Detectar entorno y definir baseURL
let baseUrl = '';

// Usar Render como API principal
baseUrl = 'https://cds-api.onrender.com';

// Instancia de Axios
const api = axios.create({
  baseURL: baseUrl,
});

// ---- Funciones para endpoints ---- //
export const getVendedores = () => api.get('/Vendedor'); //1
export const getClientes = () => api.get('/Cliente'); //2
export const getFormaPago = () => api.get('/FormaPago'); //3
export const getMonedas = () => api.get('/Moneda'); //4

export const getPedidos = () => api.get('/Pedido');
export const guardarPedido = (pedido: any) => api.post('/OrdenPedido', pedido);
// Agrega aquí más endpoints según necesites

export default api;
