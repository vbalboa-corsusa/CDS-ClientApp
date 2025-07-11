import axios from 'axios';
import { OrdenPedido } from '../models/OrdenPedido';

// Detectar entorno y definir baseURL
// let baseUrl = '';

// Usar Render como API principal
// baseUrl = 'https://cds-api.onrender.com';
let baseUrl = import.meta.env.VITE_API_URL_HTTPS; // Por defecto

if (window.location.hostname === "localhost") {
  baseUrl = import.meta.env.VITE_API_URL_HTTPS;
} else {
  baseUrl = import.meta.env.VITE_API_URL_NUBE;
}

// Instancia de Axios
const api = axios.create({
  baseURL: baseUrl,
});

// ---- Funciones para endpoints ---- //
export const getVendedores = () => api.get('/Vendedor'); //1
export const getClientes = () => api.get('/Cliente'); //2
export const getFormaPago = () => api.get('/FormaPago'); //3
export const getMonedas = () => api.get('/Moneda'); //4

// --- Código antiguo para pedidos y ordenes de pedido ---
// export const getPedidos = () => api.get('/Pedido');
// export const guardarPedido = (pedido: any) => api.post('/OrdenPedido', pedido);
// Agrega aquí más endpoints según necesites

// --- NUEVO CÓDIGO para endpoints de Órdenes de Pedido ---
// Construir la URL específica para OrdenPedido
const ordenPedidoUrl = `${baseUrl}/OrdenPedido`;

// Obtener todas las órdenes de pedido
export const getOrdenesPedido = () => axios.get<OrdenPedido[]>(ordenPedidoUrl);

// Obtener una orden de pedido por ID
export const getOrdenPedidoById = (id: number) => axios.get(`${ordenPedidoUrl}/${id}`);

// Crear una nueva orden de pedido
export const createOrdenPedido = (orden: any) => axios.post(ordenPedidoUrl, orden);

// Actualizar una orden de pedido existente
export const updateOrdenPedido = (id: number, orden: any) => axios.put(`${ordenPedidoUrl}/${id}`, orden);

// Eliminar una orden de pedido
export const deleteOrdenPedido = (id: number) => axios.delete(`${ordenPedidoUrl}/${id}`);

export default api;
