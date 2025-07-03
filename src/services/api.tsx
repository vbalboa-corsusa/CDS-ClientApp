import axios from 'axios';

// Detectar entorno y definir baseURL
let baseUrl = '';

if (window.location.hostname === 'localhost') {
  // En entorno local, usar HTTPS directamente para evitar redirección 307
  baseUrl = import.meta.env.VITE_API_URL_HTTPS || 'https://localhost:7002';
} else {
  // En producción (Railway, nube, etc.)
  baseUrl = import.meta.env.VITE_API_URL_NUBE;
}

// Instancia de Axios
const api = axios.create({
  baseURL: baseUrl,
});

// ---- Funciones para endpoints ---- //
export const getVendedores = () => api.get('/Vendedor'); //1
export const getClientes = () => api.get('/Cliente'); //2
export const getProductos = () => api.get('/Producto');
export const getPedidos = () => api.get('/Pedido');
export const postPedido = (data: any) => api.post('/Pedido', data);
// Agrega aquí más endpoints según necesites

export default api;
