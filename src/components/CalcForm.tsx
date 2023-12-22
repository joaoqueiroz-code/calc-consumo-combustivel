import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { TextField, Button } from "@mui/material";

interface FormData {
  plate: string;
  model: string;
  tankCapacity: number | "";
  maxLoad: number | "";
  averageConsumption: number | "";
  distanceTraveled: number | "";
}

interface Props {
  onSubmit: (values: FormData, actions: FormikHelpers<FormData>) => void;
}

const initialValues: FormData = {
  plate: "",
  model: "",
  tankCapacity: "",
  maxLoad: "",
  averageConsumption: "",
  distanceTraveled: "",
};

const CalcForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>) => {
    onSubmit(values, actions);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form>
          <Field
            as={TextField}
            fullWidth
            label="Placa"
            name="plate"
            value={values.plate}
            onChange={handleChange}
            margin="normal"
          />
          <Field
            as={TextField}
            fullWidth
            label="Modelo"
            name="model"
            value={values.model}
            onChange={handleChange}
            margin="normal"
          />
          <Field
            as={TextField}
            fullWidth
            label="Capacidade do Tanque (litros)"
            type="number"
            name="tankCapacity"
            value={values.tankCapacity}
            onChange={handleChange}
            margin="normal"
          />
          <Field
            as={TextField}
            fullWidth
            label="Carga Máxima (toneladas)"
            type="number"
            name="maxLoad"
            value={values.maxLoad}
            onChange={handleChange}
            margin="normal"
          />
          <Field
            as={TextField}
            fullWidth
            label="Consumo Médio (litros por 100 km)"
            type="number"
            name="averageConsumption"
            value={values.averageConsumption}
            onChange={handleChange}
            margin="normal"
          />
          <Field
            as={TextField}
            fullWidth
            label="Distância Percorrida na Viagem (km)"
            type="number"
            name="distanceTraveled"
            value={values.distanceTraveled}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: 1 }}
            color="primary"
          >
            CALCULAR
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CalcForm;
