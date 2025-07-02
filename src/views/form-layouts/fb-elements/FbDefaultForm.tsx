import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  /*
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  */
  MenuItem,
  Box,
} from '@mui/material';


import BaseCard from '../../../components/BaseCard/BaseCard';
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

/* BUSCADOR 
import { Container, HeaderContainer, Table, SearchInput } from "./"; */

const FbDefaultForm = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  /*
  const [value, setValue] = React.useState('');

  const handleChange2 = (event: any) => {
    setValue(event.target.value);
  };

  const [cliente] = React.useState('');
  const [formaPago] = React.useState('');
  const [moneda] = React.useState('');
  const [vendedor] = React.useState('');
  const [vendedor1] = React.useState('');
  const [vendedor2] = React.useState('');
  const [lider] = React.useState('');

  const [number, setNumber] = React.useState('');

  const handleChange3 = (event: any) => {
    setNumber(event.target.value);
  };
  
  const [checked, setChecked] = React.useState(true);
  */

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}

        <BaseCard title="REGISTRO DE PEDIDOS">
        
        <form>
        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>
          <TextField
            fullWidth
            id="standard-select-number-cliente"
            variant="outlined"
            select
            label="Cliente"
            //value={cliente}
            //onChange={handleChange3}
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
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="cliente-proveedor"
            label="Cliente Proveedor"
            variant="outlined"
            defaultValue=""
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
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="fecha-inicio"
            label="Fecha de Inicio"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="fecha-procesamiento"
            label="Fecha de Procesamiento VI"
            variant="outlined"
            defaultValue=""
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
            //value={formaPago}
            //onChange={handleChange3}
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
            //value={moneda}
            //onChange={handleChange3}
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
            defaultValue=""
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
            //value={vendedor}
            //onChange={handleChange3}
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
            id="standard-select-number-vendedor1"
            variant="outlined"
            select
            label="Vendedor 1"
            //value={vendedor1}
            //onChange={handleChange3}
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
            id="standard-select-number-vendedor2"
            variant="outlined"
            select
            label="Vendedor 2"
            //value={vendedor2}
            //onChange={handleChange3}
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
            id="standard-select-number-lider"
            variant="outlined"
            select
            label="Lider"
            //value={lider}
            //onChange={handleChange3}
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

        </Box>

        <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>

          <TextField
            id="num-operacion"
            label="N° de Operación"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

            <TextField
            id="num-referencia-cliente"
            label="N° Referencia de Cliente"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />          

          <TextField
            id="ubruta-cotizacion"
            label="Ubruta Cotización"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <FormControlLabel
              control={
              <Checkbox
                //checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              }
              label="Comisión compartida"
          />

        </Box>

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
