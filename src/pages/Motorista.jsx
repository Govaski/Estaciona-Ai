
import { AppBar, Toolbar, Typography, Box, Container, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#1a472a',
  boxShadow: 'none',
});

const SearchContainer = styled(Box)({
  padding: '40px',
  textAlign: 'center',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    backgroundColor: '#fff',
  },
});

const StyledCard = styled(Card)({
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
});

function Motorista() {
  return (
    <Box sx={{ flexGrow: 1 }}>
 
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel do Motorista
          </Typography>

          <Button color="inherit">Meu Perfil</Button>
          <Button color="inherit">Histórico</Button>
        </Toolbar>
      </StyledAppBar>


      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

        <SearchContainer>
          <Typography variant="h4" gutterBottom>
            Encontre sua vaga ideal
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <StyledTextField
                fullWidth
                placeholder="Pesquisar por endereço, local ou bairro..."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Button variant="contained" sx={{ backgroundColor: '#1a472a', color: '#fff', borderRadius: '50px', py: '14px' }}>
                Pesquisar
              </Button>
            </Grid>
          </Grid>
        </SearchContainer>


        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Histórico de Estacionamento
          </Typography>
          <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6">Shopping Iguatemi</Typography>
                  <Typography color="text.secondary">22 de Setembro, 14:00 - 16:00</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>Status: <span style={{ color: 'green', fontWeight: 'bold' }}>Finalizado</span></Typography>
                </CardContent>
              </StyledCard>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Motorista;