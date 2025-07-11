import React, { useEffect, useState } from 'react';
import 'src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { getOrdenesPedido } from '../../services/api';
// Importar el modelo OrdenPedido
import { OrdenPedido } from '../../models/OrdenPedido';
import { FaFilter } from 'react-icons/fa';

const App = () => {
  const [data, setData] = useState<OrdenPedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [limite, setLimite] = useState(10); // Por defecto 10

  // Estados para búsqueda y filtros
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filtros, setFiltros] = useState({
    cliente: '',
    vendedor: '',
    estado: '',
    fechaDesde: '',
    fechaHasta: ''
  });

  useEffect(() => {
    getOrdenesPedido()
      .then(response => {
        setData(response.data as OrdenPedido[]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener las órdenes de pedido:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;

  // Filtrado de datos
  const dataFiltrada = data.filter(op => {
    // Filtro de búsqueda general (en cliente o vendedor)
    const searchLower = search.toLowerCase();
    const matchSearch =
      op.RazonSocialCliente?.toLowerCase().includes(searchLower) ||
      op.Vendedor1?.toLowerCase().includes(searchLower);
    // Filtros avanzados
    const matchCliente = filtros.cliente === '' || (op.RazonSocialCliente?.toLowerCase().includes(filtros.cliente.toLowerCase()));
    const matchVendedor = filtros.vendedor === '' || (op.Vendedor1?.toLowerCase().includes(filtros.vendedor.toLowerCase()));
    const matchEstado = filtros.estado === '' || ((filtros.estado === 'activo' && op.Estado) || (filtros.estado === 'inactivo' && !op.Estado));
    const matchFechaDesde = filtros.fechaDesde === '' || (op.FecRecepcion && op.FecRecepcion >= filtros.fechaDesde);
    const matchFechaHasta = filtros.fechaHasta === '' || (op.FecRecepcion && op.FecRecepcion <= filtros.fechaHasta);
    return matchSearch && matchCliente && matchVendedor && matchEstado && matchFechaDesde && matchFechaHasta;
  });

  return (
    <>
      <div>
        <h1 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '30px',
          margin: '20px 0',
          padding: '10px',
          backgroundColor: 'rgb(0, 47, 255)',
          borderRadius: '50px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}>Buscar Registro / ORDEN PEDIDO</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
          <input
            style={{
              backgroundColor: 'rgba(127, 227, 245, 0.5)',
              color: 'darkblue',
              width: '100%',
              padding: '15px',
              borderRadius: '10px',
              border: '3px solid darkblue',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              fontSize: '16px',
            }}
            placeholder="Buscar por Cliente o Vendedor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'darkblue' }}
            onClick={() => setShowFilters(true)}
            title="Filtros avanzados"
          >
            <FaFilter />
          </button>
        </div>
      </div>

      {/* Modal de filtros */}
      <Modal isOpen={showFilters} toggle={() => setShowFilters(false)}>
        <ModalHeader toggle={() => setShowFilters(false)}>Filtros avanzados</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Cliente:</label>
            <input type="text" className="form-control" value={filtros.cliente} onChange={e => setFiltros({ ...filtros, cliente: e.target.value })} />
            <label>Vendedor:</label>
            <input type="text" className="form-control" value={filtros.vendedor} onChange={e => setFiltros({ ...filtros, vendedor: e.target.value })} />
            <label>Estado:</label>
            <select className="form-control" value={filtros.estado} onChange={e => setFiltros({ ...filtros, estado: e.target.value })}>
              <option value="">Todos</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
            <label>Fecha Recepción desde:</label>
            <input type="date" className="form-control" value={filtros.fechaDesde} onChange={e => setFiltros({ ...filtros, fechaDesde: e.target.value })} />
            <label>Fecha Recepción hasta:</label>
            <input type="date" className="form-control" value={filtros.fechaHasta} onChange={e => setFiltros({ ...filtros, fechaHasta: e.target.value })} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setShowFilters(false)}>Aplicar</button>
          <button className="btn btn-secondary" onClick={() => { setFiltros({ cliente: '', vendedor: '', estado: '', fechaDesde: '', fechaHasta: '' }); setShowFilters(false); }}>Limpiar</button>
        </ModalFooter>
      </Modal>

      <label>
        Mostrar&nbsp;
        <select value={limite} onChange={e => setLimite(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        &nbsp;registros.
      </label>
      <div className="App"
      style={{ overflowX: 'auto', marginLeft: '0px' }}>
        <br />
        <table className="table table-bordered"
          style={{
          width: "200%",
          fontSize: "14px",
          tableLayout: "auto",
        }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Cliente Final</th>
              <th>Cliente Proveedor</th>
              <th>Fecha Recepcion</th>
              <th>Fecha Inicio</th>
              <th>Fecha Procesamiento VI</th>
              <th>Forma de Pago</th>
              <th>Moneda</th>
              <th>Total sin IGV</th>
              {/* <th>N° Documento</th> */}
              <th>Vendedor</th>
              <th>Activo</th>
              <th className='sticky-col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(dataFiltrada) && dataFiltrada.slice(0, limite).map(op => (
              <tr key={op.IdOpci}>
                <td>{op.IdOpci}</td>
                <td>{op.RazonSocialCliente}</td>
                <td>{op.ClienteFinal}</td>
                <td>{op.ClienteProveedor}</td>
                <td>{op.FecRecepcion?.substring(0, 10)}</td>
                <td>{op.FecInicio?.substring(0, 10)}</td>
                <td>{op.FecProcVi?.substring(0, 10)}</td>
                <td>{op.FormaPago?.NombreFormaPago ?? ''}</td>
                <td>{op.Moneda?.NombreMoneda ?? ''}</td>
                <td>{op.TotalSinIgv}</td>
                {/* <td>{op.NumDocVendedor}</td> */}
                <td>{op.Vendedor1}</td>
                <td>{op.Estado ? 'Activo' : 'Inactivo'}</td>
                <td className='sticky-col'>
                  <button className="btn btn-primary">Editar</button>{' '}
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
