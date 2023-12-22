import React from "react";
import Form from "./components/CalcForm.tsx";
import theme from "./assets/themes/Main.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { Container, Typography } from "@mui/material";
import { calculateFuel } from "./modules/functions/calculateFuel.ts"

function App() {
  const handleFormSubmit = (formData) => {
    const response = calculateFuel(formData);
    console.log(response);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Calculadora de Combústivel
        </Typography>
        <Form onSubmit={handleFormSubmit} />
      </Container>
    </ThemeProvider>
  );
}

export default App;