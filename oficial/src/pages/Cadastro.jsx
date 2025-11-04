import { useState } from 'react';
import { Box, Button, TextField, Typography, styled, keyframes, Grid, Link as MuiLink, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


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

const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [isMotorista, setIsMotorista] = useState(true);


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (event) => {
    setIsMotorista(event.target.checked);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    alert("Cadastro realizado com sucesso! 🎉");

    
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setIsMotorista(true);
  };

  return (
    <Container>
      <Grid container spacing={5} justifyContent="center" maxWidth="450px" sx={{ py: { xs: 4, md: 0 }, px: { xs: 2, md: 0 } }}>
        <Grid item xs={12}>
          <Card>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Logo src={logo} alt="Logo" />
              <Typography variant="h5" fontWeight="bold" color="#333" sx={{ mb: 1 }}>
                Crie sua conta
              </Typography>
              <Typography variant="body2" color="#666" textAlign="center">
                Junte-se a nós para encontrar a melhor vaga ou gerenciar seu estacionamento.
              </Typography>
            </Box>

            <FormWrapper component="form" onSubmit={handleSubmit}>
              <StyledTextField 
                label="Nome Completo" 
                type="text" 
                fullWidth 
                required 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <StyledTextField 
                label="Email" 
                type="email" 
                fullWidth 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledTextField 
                label="Senha" 
                type={showPassword ? 'text' : 'password'} 
                fullWidth 
                required 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
              <StyledTextField 
                label="Confirme a Senha" 
                type="password" 
                fullWidth 
                required 
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />

    
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isMotorista}
                      onChange={handleCheckboxChange}
                      sx={{ '&.Mui-checked': { color: '#1a472a' } }}
                    />
                  }
                  label="Sou Motorista"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!isMotorista}
                      onChange={handleCheckboxChange}
                      sx={{ '&.Mui-checked': { color: '#1a472a' } }}
                    />
                  }
                  label="Sou Estabelecimento"
                />
              </Box>
              
              <StyledButton variant="contained" fullWidth type="submit">
                Cadastrar
              </StyledButton>

              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                Já tem uma conta?{" "}
                <MuiLink
                  component={RouterLink}
                  to="/login"
                  sx={{ textDecoration: "none", fontWeight: "bold", color: "#1a472a" }}
                >
                  Faça login
                </MuiLink>
              </Typography>
            </FormWrapper>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cadastro;