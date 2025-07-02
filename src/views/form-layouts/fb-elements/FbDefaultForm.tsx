import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
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

  const [value, setValue] = React.useState('');

  const handleChange2 = (event: any) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState('');

  const handleChange3 = (event: any) => {
    setNumber(event.target.value);
  };

  const [checked, setChecked] = React.useState(true);

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
            id="standard-select-number"
            variant="outlined"
            select
            label="Cliente"
            value={number}
            onChange={handleChange3}
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
            id="default-value"
            label="Cliente Final"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="default-value"
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
            id="default-value"
            label="Fecha de Recepción"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="default-value"
            label="Fecha de Inicio"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

          <TextField
            id="default-value"
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
            id="standard-select-number"
            variant="outlined"
            select
            label="Forma de Pago"
            value={number}
            onChange={handleChange3}
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
            id="standard-select-number"
            variant="outlined"
            select
            label="Moneda"
            value={number}
            onChange={handleChange3}
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
            id="default-value"
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
            id="standard-select-number"
            variant="outlined"
            select
            label="Vendedor"
            value={number}
            onChange={handleChange3}
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
            id="standard-select-number"
            variant="outlined"
            select
            label="Vendedor 1"
            value={number}
            onChange={handleChange3}
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
            id="standard-select-number"
            variant="outlined"
            select
            label="Vendedor 2"
            value={number}
            onChange={handleChange3}
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
            id="standard-select-number"
            variant="outlined"
            select
            label="Lider"
            value={number}
            onChange={handleChange3}
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
            id="default-value"
            label="N° de Operación"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />

            <TextField
            id="default-value"
            label="N° Referencia de Cliente"
            variant="outlined"
            defaultValue=""
            fullWidth
            sx={{
              mb: 2,
            }}
          />          

          <TextField
            id="default-value"
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
                checked={checked}
                onChange={handleChange}
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
