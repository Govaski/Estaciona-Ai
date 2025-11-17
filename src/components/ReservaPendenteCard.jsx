import {
    AppBar, Toolbar, Typography, Box, Container, TextField, Button, Grid, Card, CardContent, Divider
} from '@mui/material';
import { styled } from '@mui/system';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const DARK_BACKGROUND = '#121212';
const DARK_SURFACE = '#1e1e1e';
const LIGHT_TEXT = '#ffffff';
const MUTED_TEXT = '#b0b0b0';
const CARD_SURFACE = '#252525';
const PRIMARY_COLOR = '#1a472a';
const PENDING_COLOR = '#00bfff';
const RESERVED_COLOR = '#ffaa00';
const FINISHED_COLOR = '#00cc66';


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

export default function ReservaPendente() {
    return (
        <StyledCard>
            <CardContent>
                <CardContentWrapper>


                    <Box sx={{ flexGrow: 1, width: { xs: '100%', md: 'auto' } }}>
                        <Typography variant="h5" fontWeight="900" color={LIGHT_TEXT} sx={{ mb: 0.5 }}>
                            Estacionamento do Aeroporto
                        </Typography>
                        <Typography color={MUTED_TEXT} variant="body1" sx={{ mt: 0.5 }}>
                            10 de Novembro, 06:00 - 18:00
                        </Typography>
                        <Typography variant="body2" sx={{ color: MUTED_TEXT }}>
                            Local: Terminal 1, Vaga G-42
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
                        <AccessTimeOutlinedIcon sx={{ color: PENDING_COLOR, fontSize: '1.8rem', mr: 1.5 }} />
                        <Typography variant="h6" fontWeight="bold" sx={{ color: PENDING_COLOR }}>
                            Pendente
                        </Typography>
                    </Box>


                    <Button
                        onClick={() => {document.getElementById("card-reserva").remove()}}
                        size="large"
                        fullWidth={true}
                        variant="outlined"
                        sx={{
                            textTransform: 'none',
                            color: PENDING_COLOR,
                            borderColor: PENDING_COLOR,
                            fontWeight: 'bold',
                            borderRadius: '10px',
                            py: '10px',
                            ml: { xs: 0, md: 3 },
                            mt: { xs: 1, md: 0 },
                            '&:hover': {
                                backgroundColor: `rgba(0, 191, 255, 0.1)`,
                                borderColor: PENDING_COLOR,
                            }
                        }}
                    >
                        Cancelar Pedido
                    </Button>

                </CardContentWrapper>
            </CardContent>
        </StyledCard>
    )
}