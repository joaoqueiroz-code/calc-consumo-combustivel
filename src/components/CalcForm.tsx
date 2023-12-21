import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    placa: '',
    modelo: '',
    capacidadeTanque: '',
    cargaMaxima: '',
    consumoMedio: '',
    distanciaPercorrida: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Placa"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Modelo"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Capacidade do Tanque (litros)"
          type="number"
          name="capacidadeTanque"
          value={formData.capacidadeTanque}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Carga Máxima (toneladas)"
          type="number"
          name="cargaMaxima"
          value={formData.cargaMaxima}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Consumo Médio (litros por 100 km)"
          type="number"
          name="consumoMedio"
          value={formData.consumoMedio}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Distância Percorrida na Jornada (km)"
          type="number"
          name="distanciaPercorrida"
          value={formData.distanciaPercorrida}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ width: 1 }} color="primary">
          Enviar
        </Button>
      </form>
  );
};

export default Form;
