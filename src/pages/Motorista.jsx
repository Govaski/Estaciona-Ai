import { 
  AppBar, Toolbar, Typography, Box, Container, TextField, Button, Grid, Card, CardContent, Divider
} from '@mui/material';
import { styled } from '@mui/system';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import ReservaPendente from '../components/ReservaPendenteCard';
import ProximasReservas from '../components/ProximasReservasCard';


const DARK_BACKGROUND = '#121212';
const DARK_SURFACE = '#1e1e1e';
const LIGHT_TEXT = '#ffffff';
const MUTED_TEXT = '#b0b0b0';
const CARD_SURFACE = '#252525';
const PRIMARY_COLOR = '#1a472a'; 
const PENDING_COLOR = '#00bfff'; 
const RESERVED_COLOR = '#ffaa00';
const FINISHED_COLOR = '#00cc66';



const StyledAppBar = styled(AppBar)({
  backgroundColor: PRIMARY_COLOR,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
});

const HeaderButton = styled(Button)({
  fontWeight: 'bold',
  textTransform: 'none',
  color: LIGHT_TEXT,
  padding: '8px 15px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
});

const SearchBoxBg = styled(Box)({
  backgroundColor: DARK_SURFACE,
  padding: '60px 0', 
  marginBottom: '40px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
});


const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#383838',
    color: LIGHT_TEXT,
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 10px rgba(26,71,42,0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: PRIMARY_COLOR,
      borderWidth: '2px',
      boxShadow: '0 0 15px rgba(26,71,42,0.4)',
    },
    '& .MuiOutlinedInput-input': {
      padding: '16.5px 30px', 
      color: LIGHT_TEXT,
    },
    '& fieldset': {
      borderColor: '#555',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: MUTED_TEXT,
    opacity: 1,
    fontSize: '1.05rem',
  },
  '& .MuiInputLabel-root': {
    display: 'none',
  },
});

const StyledSearchButton = styled(Button)({
  backgroundColor: PRIMARY_COLOR,
  color: LIGHT_TEXT,
  borderRadius: '12px',
  padding: '16.5px 40px', 
  fontWeight: 'bold',
  fontSize: '1.1rem',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#145c2a',
    transform: 'translateY(-2px)',
  },
});



const StyledCard = styled(Card)({
  borderRadius: '15px',
  backgroundColor: CARD_SURFACE,
  boxShadow: '0 10px 40px rgba(0,0,0,0.5)', 

  '& .MuiCardContent-root': {
    padding: '25px', 
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
});


const CardContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',


  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '15px', 
  },
}));


const SectionHeader = ({ title, color }) => (
    <Box sx={{ mb: 4, mt: 5 }}>
        <Typography 
            variant="h4" 
            fontWeight="bold" 
            color={color || LIGHT_TEXT} 
            gutterBottom 
            sx={{ mb: 1 }}
        >
            {title}
        </Typography>
        <Divider sx={{ bgcolor: color || MUTED_TEXT, height: 2, width: '100px', borderRadius: '2px', mb: 1 }} />
    </Box>
);




function Motorista() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: DARK_BACKGROUND, minHeight: '100vh' }}>
      

      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h5" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
            Motorista
          </Typography>
          <HeaderButton>Meu Perfil</HeaderButton>
          <HeaderButton>Histórico</HeaderButton>
        </Toolbar>
      </StyledAppBar>

      

      <SearchBoxBg>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            fontWeight="900" 
            color={LIGHT_TEXT} 
            gutterBottom 
            sx={{ mb: 4 }}
          >
            Encontre sua vaga ideal
          </Typography>

          <Grid 
            container 
            spacing={2} 
            alignItems="center"
            justifyContent="center" 
          >
            <Grid item xs={12} md={6.5}>
              <StyledTextField
                fullWidth
                placeholder="Onde quer estacionar?"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={1.5}>
              <StyledSearchButton fullWidth>
                Pesquisar
              </StyledSearchButton>
            </Grid>
          </Grid>
        </Container>
      </SearchBoxBg>



      <Container maxWidth="lg" sx={{ pt: 4, pb: 6 }}>
        

        <SectionHeader title="Reservas Pendentes" color={PENDING_COLOR} />

        <Grid container spacing={4}>

            <Grid item xs={12} id="card-reserva">
              <ReservaPendente></ReservaPendente>
            </Grid>
        </Grid>



        <SectionHeader title="Próximas Reservas" color={RESERVED_COLOR} />

        <Grid container spacing={4}>

            <Grid item xs={12}>
                <ProximasReservas></ProximasReservas>
            </Grid>
        </Grid>


         <SectionHeader title="Histórico de Reservas" color={FINISHED_COLOR} />

        <Grid container spacing={4}>
             <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <CardContentWrapper>

                    <Box sx={{ flexGrow: 1, width: { xs: '100%', md: 'auto' } }}>
                      <Typography variant="h5" fontWeight="900" color={LIGHT_TEXT} sx={{ mb: 0.5 }}>
                        Shopping Iguatemi
                      </Typography>
                      <Typography color={MUTED_TEXT} variant="body1" sx={{ mt: 0.5 }}>
                        22 de Setembro, 14:00 - 16:00
                      </Typography>
                      <Typography variant="body2" sx={{ color: MUTED_TEXT }}>
                        Local: R. Alameda da Vaga, 123
                      </Typography>
                    </Box>

                    <Box 
                      display="flex" 
                      alignItems="center" 
                      sx={{ 
                        minWidth: '180px', 
                        borderLeft: { xs: 'none', md: '1px solid #333' },
                        borderTop: { xs: '1px solid #333', md: 'none' },
                        pt: { xs: 2, md: 0 },
                        mt: { xs: 2, md: 0 },
                        px: { xs: 0, md: 3 },
                        width: { xs: '100%', md: 'auto' },
                      }}
                    >
                        <CheckCircleOutlineIcon sx={{ color: FINISHED_COLOR, fontSize: '1.8rem', mr: 1.5 }} />
                        <Typography variant="h6" fontWeight="bold" sx={{ color: FINISHED_COLOR }}>
                            Finalizado
                        </Typography>
                    </Box>

                    <Button
                      size="large"
                      fullWidth={true}
                      variant="outlined"
                      sx={{
                        textTransform: 'none',
                        color: '#a0c0a0',
                        borderColor: PRIMARY_COLOR,
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        py: '10px',
                        ml: { xs: 0, md: 3 },
                        mt: { xs: 1, md: 0 },
                        '&:hover': {
                          backgroundColor: 'rgba(26, 71, 42, 0.2)',
                          borderColor: PRIMARY_COLOR,
                        },
                      }}
                    >
                      Ver Detalhes
                    </Button>
                    
                  </CardContentWrapper>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

      </Container>
    </Box>
  );
}

export default Motorista;