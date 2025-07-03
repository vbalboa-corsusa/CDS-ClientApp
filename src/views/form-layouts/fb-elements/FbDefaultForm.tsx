import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  MenuItem,
  Box,
} from '@mui/material';

import { getVendedores } from '../../../services/api';
import BaseCard from '../../../components/BaseCard/BaseCard';

// Define FormData interface here if not imported
export interface FormData {
  cliente: string;
  clienteFinal: string;
  clienteProveedor: string;
  fechaRecepcion: string;
  fechaInicio: string;
  fechaProcesamiento: string;
  formaPago: string;
  moneda: string;
  totalSinIgv: string;
  vendedor: string;
  vendedor1: string;
  vendedor2: string;
  lider: string;
  numOperacion: string;
  numReferenciaCliente: string;
  ubrutaCotizacion: string;
  comisionCompartida: boolean;
}

export interface Vendedor {
  idVendedor: string;
  nombreVendedor: string;
  // add other fields as needed
}

// Datos estáticos para otros campos
const numbers = [
  {
    value: 'one',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
  {
    value: 'three',
    label: 'Three',
  },
  {
    value: 'four',
    label: 'Four',
  },
];

const FbDefaultForm = () => {
  // Estado para vendedores
  const [vendedores, setVendedores] = React.useState<Vendedor[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  
  // Estados para los campos del formulario
  const [formData, setFormData] = React.useState<FormData>({
    cliente: '',
    clienteFinal: '',
    clienteProveedor: '',
    fechaRecepcion: '',
    fechaInicio: '',
    fechaProcesamiento: '',
    formaPago: '',
    moneda: '',
    totalSinIgv: '',
    vendedor: '',
    vendedor1: '',
    vendedor2: '',
    lider: '',
    numOperacion: '',
    numReferenciaCliente: '',
    ubrutaCotizacion: '',
    comisionCompartida: false,
  });

  // Obtener vendedores al cargar el componente
React.useEffect(() => {
  getVendedores()
    .then((res) => setVendedores(res.data as Vendedor[]))
      .catch((err) => {
        console.error('Error al obtener vendedores:', err);
        setError('Error al cargar los vendedores. Por favor, intente nuevamente.');
        setLoading(false);
      });
  }, []);

  const handleFormChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar los datos a tu API
    alert('Formulario enviado correctamente. Revisa la consola para ver los datos.');
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}

        <BaseCard title="REGISTRO DE PEDIDOS">
        
        <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>
          <TextField
            fullWidth
            id="standard-select-number-cliente"
            variant="outlined"
            select
            label="Cliente"
            name="cliente"
            value={formData.cliente}
            onChange={handleFormChange}
            sx={{
              mb: 2,
            }}
          >
            {numbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="cliente-final"
            label="Cliente Final"
            variant="outlined"
            name="clienteFinal"
            value={formData.clienteFinal}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="cliente-proveedor"
            label="Cliente Proveedor"
            variant="outlined"
            name="clienteProveedor"
            value={formData.clienteProveedor}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

        </Box>
        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>

            <TextField
            id="fecha-recepcion"
            label="Fecha de Recepción"
            variant="outlined"
            name="fechaRecepcion"
            value={formData.fechaRecepcion}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="fecha-inicio"
            label="Fecha de Inicio"
            variant="outlined"
            name="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="fecha-procesamiento"
            label="Fecha de Procesamiento VI"
            variant="outlined"
            name="fechaProcesamiento"
            value={formData.fechaProcesamiento}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

        </Box>

        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>

          <TextField
            fullWidth
            id="standard-select-number-forma-pago"
            variant="outlined"
            select
            label="Forma de Pago"
            name="formaPago"
            value={formData.formaPago}
            onChange={handleFormChange}
            sx={{
              mb: 2,
            }}
          >
            {numbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            id="standard-select-number-moneda"
            variant="outlined"
            select
            label="Moneda"
            name="moneda"
            value={formData.moneda}
            onChange={handleFormChange}
            sx={{
              mb: 2,
            }}
          >
            {numbers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          
          <TextField
            id="total-sin-igv"
            label="Total sin IGV"
            variant="outlined"
            name="totalSinIgv"
            value={formData.totalSinIgv}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

        </Box>

        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>          

          <TextField
            fullWidth
            id="standard-select-number-vendedor"
            variant="outlined"
            select
            label="Vendedor"
            name="vendedor"
            value={formData.vendedor}
            onChange={handleFormChange}
            disabled={loading}
            helperText={error ? error : ''}
            error={!!error}
            sx={{
              mb: 2,
            }}
          >
            {loading ? (
              <MenuItem disabled>Cargando vendedores...</MenuItem>
            ) : vendedores.length === 0 ? (
              <MenuItem disabled>No hay vendedores disponibles</MenuItem>
            ) : (
              vendedores.map((vendedor) => (
                <MenuItem key={vendedor.idVendedor} value={vendedor.idVendedor}>
                  {vendedor.nombreVendedor}
                </MenuItem>
              ))
            )}
          </TextField>
          
          <TextField
            fullWidth
            id="standard-select-number-vendedor1"
            variant="outlined"
            select
            label="Vendedor 1"
            name="vendedor1"
            value={formData.vendedor1}
            onChange={handleFormChange}
            disabled={loading}
            sx={{
              mb: 2,
            }}
          >
            {loading ? (
              <MenuItem disabled>Cargando vendedores...</MenuItem>
            ) : vendedores.length === 0 ? (
              <MenuItem disabled>No hay vendedores disponibles</MenuItem>
            ) : (
              vendedores.map((vendedor) => (
                <MenuItem key={vendedor.idVendedor} value={vendedor.idVendedor}>
                  {vendedor.nombreVendedor}
                </MenuItem>
              ))
            )}
          </TextField>

          <TextField
            fullWidth
            id="standard-select-number-vendedor2"
            variant="outlined"
            select
            label="Vendedor 2"
            name="vendedor2"
            value={formData.vendedor2}
            onChange={handleFormChange}
            disabled={loading}
            sx={{
              mb: 2,
            }}
          >
            {loading ? (
              <MenuItem disabled>Cargando vendedores...</MenuItem>
            ) : vendedores.length === 0 ? (
              <MenuItem disabled>No hay vendedores disponibles</MenuItem>
            ) : (
              vendedores.map((vendedor) => (
                <MenuItem key={vendedor.idVendedor} value={vendedor.idVendedor}>
                  {vendedor.nombreVendedor}
                </MenuItem>
              ))
            )}
          </TextField>

          <TextField
            fullWidth
            id="standard-select-number-lider"
            variant="outlined"
            select
            label="Lider"
            name="lider"
            value={formData.lider}
            onChange={handleFormChange}
            disabled={loading}
            sx={{
              mb: 2,
            }}
          >
            {loading ? (
              <MenuItem disabled>Cargando vendedores...</MenuItem>
            ) : vendedores.length === 0 ? (
              <MenuItem disabled>No hay lideres disponibles</MenuItem>
            ) : (
              vendedores.map((vendedor) => (
                <MenuItem key={vendedor.idVendedor} value={vendedor.idVendedor}>
                  {vendedor.nombreVendedor}
                </MenuItem>
              ))
            )}
          </TextField>                    

        </Box>

        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>

          <TextField
            id="num-operacion"
            label="N° de Operación"
            variant="outlined"
            name="numOperacion"
            value={formData.numOperacion}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

            <TextField
            id="num-referencia-cliente"
            label="N° Referencia de Cliente"
            variant="outlined"
            name="numReferenciaCliente"
            value={formData.numReferenciaCliente}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />          

          <TextField
            id="ubruta-cotizacion"
            label="Ubruta Cotización"
            variant="outlined"
            name="ubrutaCotizacion"
            value={formData.ubrutaCotizacion}
            onChange={handleFormChange}
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <FormControlLabel
              control={
              <Checkbox
                checked={formData.comisionCompartida}
                onChange={handleFormChange}
                name="comisionCompartida"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              }
              label="Comisión compartida"
          />

        </Box>

          {/* <TextField
            id="outlined-multiline-static"
            label="Descripción"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
          /> */}
          
          {/* <TextField
            id="readonly-text"
            label="Read Only"
            defaultValue=""
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
          /> */}
          
          {/* <Grid
            container
            spacing={0}
            sx={{
              mb: 2,
            }}
          >
            <Grid size={{ lg: 4, md: 6, sm: 12 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="Check this custom checkbox"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Check this custom checkbox"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                  />
                }
                label="Check this custom checkbox"
              />
            </Grid>
            <Grid size={{ lg: 4, md: 6, sm: 12 }}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange2}
                >
                  <FormControlLabel
                    value="radio1"
                    control={<Radio />}
                    label="Toggle this custom radio"
                  />
                  <FormControlLabel
                    value="radio2"
                    control={<Radio />}
                    label="Toggle this custom radio"
                  />
                  <FormControlLabel
                    value="radio3"
                    control={<Radio />}
                    label="Toggle this custom radio"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid> */}
          <div>
          
          <Button
            sx={{ display: 'flex', justifyContent: 'center', mx: 'auto', mt: 2 }}
            color="primary"
            variant="contained"
            type="submit">
              GUARDAR
          </Button>

          </div>
        </form>
      </BaseCard>
    </div>
  );
};

export default FbDefaultForm;
