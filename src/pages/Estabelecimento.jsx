import { AppBar, Toolbar, Typography, Box, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#1a472a',
  boxShadow: 'none',
});

const StyledCard = styled(Card)({
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
});

const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
});

function Estabelecimento() {
  const vagasDisponiveis = 15;
  const reservasAtivas = 5;
  const faturamentoDiario = 'R$ 150,00';
  const vagas = [
    { id: 1, nome: 'Vaga A1', status: 'Disponível' },
    { id: 2, nome: 'Vaga A2', status: 'Ocupada' },
    { id: 3, nome: 'Vaga B1', status: 'Reservada' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>

      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel do Estabelecimento
          </Typography>
          <Button color="inherit">Vagas</Button>
          <Button color="inherit">Faturamento</Button>
          <Button color="inherit">Meu Perfil</Button>
        </Toolbar>
      </StyledAppBar>


      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="#666">Vagas Disponíveis</Typography>
                <Typography variant="h3" fontWeight="bold" color="#1a472a">{vagasDisponiveis}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="#666">Reservas Ativas</Typography>
                <Typography variant="h3" fontWeight="bold" color="#1a472a">{reservasAtivas}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="#666">Faturamento de Hoje</Typography>
                <Typography variant="h3" fontWeight="bold" color="#1a472a">{faturamentoDiario}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>


        <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: '15px' }}>
          <SectionTitle variant="h5">Gerenciamento de Vagas</SectionTitle>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#1a472a', color: '#fff', borderRadius: '15px', mb: 2 }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Adicionar Nova Vaga
          </Button>
          <List>
            {vagas.map((vaga) => (
              <React.Fragment key={vaga.id}>
                <ListItem sx={{ backgroundColor: '#fff', borderRadius: '10px', mb: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <ListItemText primary={vaga.nome} secondary={`Status: ${vaga.status}`} />
                  <Button size="small" sx={{ mr: 1, color: '#1a472a' }}>
                    Editar
                  </Button>
                  <Button size="small" color="error">
                    Remover
                  </Button>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}

export default Estabelecimento;