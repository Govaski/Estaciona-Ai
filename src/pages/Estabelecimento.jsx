import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemText, Divider, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'; 
import axios from 'axios'; 

const COLOR_PRIMARY = '#1a472a'; 
const COLOR_ALERT = '#ffc107'; 
const COLOR_SECONDARY = '#ff6f00'; 

const StyledAppBar = styled(AppBar)({
  backgroundColor: COLOR_PRIMARY,
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


const API_BASE_URL = 'http://localhost:8080/api';

function Estabelecimento() {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState({
      total: 0,
      disponiveis: 0,
      ocupadas: 0,
      pendentes: 0, 
  });

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const vagasResponse = await axios.get(`${API_BASE_URL}/vaga/getAll`); 
      const todasVagas = vagasResponse.data;
      setVagas(todasVagas);

      const disponiveis = todasVagas.filter(v => v.status === 'DISPONIVEL').length;
      const ocupadas = todasVagas.filter(v => v.status === 'OCUPADA').length;
      const pendentes = todasVagas.filter(v => v.status === 'PENDENTE_APROVACAO').length; 
      
      setDashboardData({
          total: todasVagas.length,
          disponiveis: disponiveis,
          ocupadas: ocupadas,
          pendentes: pendentes, 
      });

    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      setError("Não foi possível conectar ao backend ou carregar os dados. Verifique o console.");
    } finally {
      setLoading(false);
    }
  }, []);


  const handleApproval = async (vagaId, status) => {
    const endpoint = `${API_BASE_URL}/vaga/${vagaId}/${status === 'APROVAR' ? 'aprovar' : 'rejeitar'}`;
    const action = status === 'APROVAR' ? 'Aprovação' : 'Rejeição';

    try {
        await axios.put(endpoint);
        alert(`Vaga ID ${vagaId}: ${action} realizada com sucesso.`);
        fetchDashboardData(); 
    } catch (err) {
        console.error(`Erro na ${action} da vaga ${vagaId}:`, err);
        alert(`Erro ao realizar ${action}. Verifique a rota e o console.`);
    }
  };


  const handleAddVaga = async () => {
    const novaVaga = {
      identificador: `Vaga ${dashboardData.total + 1}`,
      tipoVeiculo: 'CARRO' 
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/vaga`, novaVaga);
      alert(`Vaga ${response.data.identificador} adicionada com sucesso!`);
      fetchDashboardData(); 
    } catch (err) {
      console.error("Erro ao adicionar vaga:", err);
      alert("Erro ao adicionar vaga. Verifique a autenticação e o console.");
    }
  };


  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);


  const vagasPendentes = vagas.filter(v => v.status === 'PENDENTE_APROVACAO');
  const vagasAtivas = vagas.filter(v => v.status !== 'PENDENTE_APROVACAO');



  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Painel do Estabelecimento
          </Typography>
          <Button color="inherit">Vagas</Button>
          <Button color="inherit">Meu Perfil</Button>
        </Toolbar>
      </StyledAppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        

        <Grid container spacing={3} sx={{ mb: 4 }}>

          <Grid item xs={12} md={4}> 
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="#666">Vagas Disponíveis</Typography>
                <Typography variant="h3" fontWeight="bold" color={COLOR_PRIMARY}>{dashboardData.disponiveis}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" color="#666">Vagas Ocupadas</Typography>
                <Typography variant="h3" fontWeight="bold" color={COLOR_PRIMARY}>{dashboardData.ocupadas}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ borderLeft: `5px solid ${COLOR_ALERT}` }}>
              <CardContent>
                <Typography variant="h6" color="#666">⚠️ Pendentes de Aprovação</Typography>
                <Typography variant="h3" fontWeight="bold" color={COLOR_ALERT}>{dashboardData.pendentes}</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} /> 


        {dashboardData.pendentes > 0 && (
          <Box sx={{ p: 3, backgroundColor: COLOR_ALERT + '33', borderRadius: '15px', mb: 4 }}> 
            <SectionTitle variant="h5" sx={{ color: COLOR_SECONDARY }}>🚨 Vagas para Aprovar</SectionTitle>
            <Typography variant="body2" sx={{ mb: 2 }}>{dashboardData.pendentes} vaga(s) aguardando sua validação.</Typography>

            <List>
              {vagasPendentes.map((vaga) => (
                <React.Fragment key={vaga.id}>
                  <ListItem sx={{ backgroundColor: '#fff', borderRadius: '10px', mb: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <ListItemText primary={`ID: ${vaga.id} | ${vaga.identificador}`} secondary={`Tipo: ${vaga.tipoVeiculo || 'N/A'}`} />
                    
                    <Button 
                        size="small" 
                        variant="contained"
                        sx={{ mr: 1, backgroundColor: COLOR_PRIMARY, '&:hover': { backgroundColor: '#10301a' } }}
                        startIcon={<CheckCircleOutlineIcon />}
                        onClick={() => handleApproval(vaga.id, 'APROVAR')}
                    >
                      Aprovar
                    </Button>

                    <Button 
                        size="small" 
                        color="error"
                        variant="outlined"
                        startIcon={<CancelOutlinedIcon />}
                        onClick={() => handleApproval(vaga.id, 'REJEITAR')}
                    >
                      Rejeitar
                    </Button>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}


        <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: '15px' }}>
          <SectionTitle variant="h5">Gerenciamento de Vagas Ativas</SectionTitle>
          
          <Button
            variant="contained"
            onClick={handleAddVaga} 
            sx={{ backgroundColor: COLOR_PRIMARY, color: '#fff', borderRadius: '15px', mb: 2 }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Adicionar Nova Vaga
          </Button>
          
          {loading && <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>}
          
          {error && <Alert severity="error">{error}</Alert>}
          
          {!loading && !error && (
            <List>
              {vagasAtivas.map((vaga) => (
                <React.Fragment key={vaga.id}>
                  <ListItem sx={{ backgroundColor: '#fff', borderRadius: '10px', mb: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <ListItemText primary={vaga.identificador} secondary={`Status: ${vaga.status}`} />
                    <Button size="small" sx={{ mr: 1, color: COLOR_PRIMARY }}>
                      Entrada (Simular)
                    </Button>
                    <Button size="small" color="error">
                      Remover (DELETE)
                    </Button>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
              {vagasAtivas.length === 0 && <Typography>Nenhuma vaga ativa cadastrada.</Typography>}
            </List>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Estabelecimento;