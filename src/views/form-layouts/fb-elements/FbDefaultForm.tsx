import React, { useEffect, useState } from 'react';
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
    value: 'Luis Suarez',
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

  const [vendedor, setVendedor] = useState<any[]>([]);
  const [formdata, setFormdata] = useState({ vendedor: '' });

  useEffect(() => {
    import('axios').then(({ default: axios }) => {
      axios.get('http://localhost:7200/Vendedor')
        .then((res) => {
          setVendedor(res.data as any[]);
        })
        .catch((err) => {
          console.error('Error al obtener vendedor:', err);
        });
    });
  }, []);

  /*
  interface FormData {
    vendedor: string;
  }
    */

  interface VendedorOption {
    value: string;
    label: string;
  }

  interface CheckboxState {
    checkedA: boolean;
    checkedB: boolean;
    checkedC: boolean;
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const [state, setState] = React.useState<CheckboxState>({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  /*
  const [value, setValue] = React.useState<string>('');

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  */

  /*const [vendedor, setVendedor] = React.useState<string>('');*/

  /*
  const [formaPago] = React.useState<string>('');
  const [moneda] = React.useState<string>('');
  const [vendedor] = React.useState<string>('');
  const [vendedor1] = React.useState<string>('');
  const [vendedor2] = React.useState<string>('');
  const [lider] = React.useState<string>('');

  const [number, setNumber] = React.useState<string>('');

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };
  
  const [checked, setChecked] = React.useState<boolean>(true);
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
            {numbers.map((option: VendedorOption) => (
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
            {numbers.map((option: VendedorOption) => (
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
            {numbers.map((option: VendedorOption) => (
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
            value={formdata.vendedor}
            onChange={handleSelectChange}
            sx={{
              mb: 2,
            }}
          >
            {vendedor.map((option: VendedorOption) => (
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
            {numbers.map((option: VendedorOption) => (
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
            {numbers.map((option: VendedorOption) => (
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
            {numbers.map((option: VendedorOption) => (
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

