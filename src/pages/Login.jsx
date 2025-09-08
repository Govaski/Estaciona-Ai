import React from 'react';
import { Box, Button, TextField, Typography, styled, keyframes, Grid, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: `linear-gradient(135deg, #1a472a, #2b580c)`,
  padding: "20px",
});

const Card = styled(Box)({
  background: "#ffffff",
  borderRadius: "20px",
  padding: "40px 30px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  animation: `${fadeInUp} 0.8s ease forwards`,
  zIndex: 1,
});

const Logo = styled("img")({
  width: "70px",
  marginBottom: "15px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "#f0f0f0",
  },
  "& .MuiInputLabel-root": {
    color: "#666",
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#1a472a",
  borderRadius: "15px",
  padding: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#145c2a",
    transform: "scale(1.02)",
  },
});

function Login() {
  return (
    <Container sx={{ px: { xs: 2, md: 0 } }}>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ py: { xs: 4, md: 0 }, px: { xs: 2, md: 0 } }}
      >

        <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
          <Card>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Logo src={logo} alt="Logo Motorista" />
              <Typography variant="h5" fontWeight="bold" color="#333" sx={{ mb: 1 }}>
                Sou Motorista
              </Typography>
              <Typography variant="body2" color="#666" textAlign="center">
                Acesse sua conta para gerenciar suas reservas.
              </Typography>
            </Box>
            <StyledTextField label="Email" type="email" fullWidth />
            <StyledTextField label="Senha" type="password" fullWidth />

            <StyledButton
              variant="contained"
              fullWidth
              component={RouterLink}
              to="/motorista"
            >
              Entrar
            </StyledButton>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              <MuiLink
                component={RouterLink}
                to="/esqueci-a-senha"
                sx={{ textDecoration: "none", fontWeight: "bold", color: "#1a472a" }}
              >
                Esqueceu sua senha?
              </MuiLink>
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              <MuiLink
                component={RouterLink}
                to="/cadastro"
                sx={{ textDecoration: "none", fontWeight: "bold", color: "#1a472a" }}
              >
                Cadastre-se como motorista.
              </MuiLink>
            </Typography>
          </Card>
        </Grid>


        <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
          <Card>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Logo src={logo} alt="Logo Estabelecimento" />
              <Typography variant="h5" fontWeight="bold" color="#333" sx={{ mb: 1 }}>
                Sou Estabelecimento
              </Typography>
              <Typography variant="body2" color="#666" textAlign="center">
                Acesse para gerenciar suas vagas e reservas.
              </Typography>
            </Box>
            <StyledTextField label="Email" type="text" fullWidth />
            <StyledTextField label="Senha" type="password" fullWidth />
            
            <StyledButton
              variant="contained"
              fullWidth
              component={RouterLink}
              to="/estabelecimento"
            >
              Entrar
            </StyledButton>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              <MuiLink
                component={RouterLink}
                to="/esqueci-a-senha"
                sx={{ textDecoration: "none", fontWeight: "bold", color: "#1a472a" }}
              >
                Esqueceu sua senha?
              </MuiLink>
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              <MuiLink
                component={RouterLink}
                to="/cadastro"
                sx={{ textDecoration: "none", fontWeight: "bold", color: "#1a472a" }}
              >                
                Cadastre seu estabelecimento.
              </MuiLink>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;