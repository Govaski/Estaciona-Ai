import React from 'react';
import { Box, Button, TextField, Typography, styled, keyframes, Grid, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";


const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;


const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: '20px',

  background: 'linear-gradient(to right, black 50%, #1a472a 50%)',
  

  [theme.breakpoints.down('md')]: {
    background: 'linear-gradient(to bottom, black 50%, #1a472a 50%)',
  },
}));


const FormsWrapper = styled(Grid)(({ theme }) => ({
  maxWidth: "1000px",
  width: "100%",

  [theme.breakpoints.up('md')]: {
    justifyContent: "space-between",
  },
}));


const Card = styled(Box)({
  background: "#ffffff",
  borderRadius: "20px",
  padding: "40px 30px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  animation: `${fadeInUp} 0.8s ease forwards`,
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


const LoginCard = ({ title, description, logoAlt, linkCadastro, linkText, toLogin }) => (
  <Card>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Logo src={logo} alt={logoAlt} />
      <Typography variant="h5" fontWeight="bold" color="#333" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="#666" textAlign="center">
        {description}
      </Typography>
    </Box>
    <StyledTextField label="Email" type="email" fullWidth />
    <StyledTextField label="Senha" type="password" fullWidth />
    
    <StyledButton
      variant="contained"
      fullWidth
      component={RouterLink}
      to={toLogin}
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
        to={linkCadastro}
        sx={{ textDecoration: "none", fontWeight: "bold", color: "#1a472a" }}
      >
        {linkText}
      </MuiLink>
    </Typography>
  </Card>
);


function Login() {
  return (
    <MainContainer>
      <FormsWrapper container spacing={5} justifyContent="center" alignItems="center">

        <Grid item xs={12} md={6}>
          <LoginCard
            title="Sou Motorista"
            description="Acesse sua conta para gerenciar suas reservas."
            logoAlt="Logo Motorista"
            toLogin="/motorista"
            linkCadastro="/cadastro-motorista"
            linkText="Cadastre-se como motorista."
            
          />
        </Grid>


        <Grid item xs={12} md={6}>
          <LoginCard
            title="Sou Estabelecimento"
            description="Acesse para gerenciar suas vagas e reservas."
            logoAlt="Logo Estabelecimento"
            toLogin="/estabelecimento"
            linkCadastro="/cadastro-estabelecimento"
            linkText="Cadastre seu estabelecimento."
          />
        </Grid>
      </FormsWrapper>
    </MainContainer>
  );
}

export default Login;