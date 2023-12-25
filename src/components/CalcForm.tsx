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

interface FormErrors {
  plate?: string;
  model?: string;
  tankCapacity?: string;
  maxLoad?: string;
  averageConsumption?: string;
  distanceTraveled?: string;
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

  const validate = (values: FormData) => {
    const errors: FormErrors = {};

    if (!values.plate) {
      errors.plate = "Campo obrigatório";
    }

    if (!values.model) {
      errors.model = "Campo obrigatório";
    }

    if (values.tankCapacity === "" || isNaN(values.tankCapacity as number)) {
      errors.tankCapacity = "Digite um valor numérico";
    }

    if (values.maxLoad === "" || isNaN(values.maxLoad as number)) {
      errors.maxLoad = "Digite um valor numérico";
    }

    if (values.averageConsumption === "" || isNaN(values.averageConsumption as number)) {
      errors.averageConsumption = "Digite um valor numérico";
    }

    if (values.distanceTraveled === "" || isNaN(values.distanceTraveled as number)) {
      errors.distanceTraveled = "Digite um valor numérico";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ values, handleChange, errors }) => (
        <Form>
          <Field
            as={TextField}
            fullWidth
            label="Placa"
            name="plate"
            value={values.plate}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.plate)}
            helperText={errors.plate}
          />
          <Field
            as={TextField}
            fullWidth
            label="Modelo"
            name="model"
            value={values.model}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.model)}
            helperText={errors.model}
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
            error={Boolean(errors.tankCapacity)}
            helperText={errors.tankCapacity}
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
            error={Boolean(errors.maxLoad)}
            helperText={errors.maxLoad}
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
            error={Boolean(errors.averageConsumption)}
            helperText={errors.averageConsumption}
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
            error={Boolean(errors.distanceTraveled)}
            helperText={errors.distanceTraveled}
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
