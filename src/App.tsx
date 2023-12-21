// App.js

import React from "react";
import Form from "./components/CalcForm.tsx";
import theme from "./assets/themes/Main.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { Container, Typography } from "@mui/material";

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Dados do formulário:", formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Calculadora de Combústivel
        </Typography>
        <Form onSubmit={handleFormSubmit} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
