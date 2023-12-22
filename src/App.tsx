import React, { useState } from "react";
import Form from "./components/CalcForm.tsx";
import theme from "./assets/themes/Main";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { calculateFuel } from "./modules/functions/calculateFuel.ts";

function App() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const response:any = await calculateFuel(formData);
      setModalData(response);
      handleOpen();
    } catch (error) {
      console.error("Erro ao calcular combustível:", error);
      // Lidar com o erro, se necessário
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "5px",
    border: "1px solid #00000075",
    boxShadow: 24,
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Calculadora de Combustível
        </Typography>
        <Form onSubmit={handleFormSubmit} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Resultado
            </Typography>
            {modalData !== null && (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData}
              </Typography>
            )}
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}

export default App;
