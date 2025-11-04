import { Box, styled, keyframes } from '@mui/system';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/favicon.png';


const fadeInZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.05) rotate(3deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;


const AnimatedBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'black',
});


const AnimatedLogo = styled('img')({
  width: '150px',
  animation: `
    ${fadeInZoom} 1.2s ease-out forwards,
    ${pulse} 2.5s ease-in-out infinite 1.5s
  `,
});

function Home() {
  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigate('/login');
    }, 3500); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatedBox>
      <AnimatedLogo src={logo} alt="Logo do Estacionamento" />
    </AnimatedBox>
  );
}

export default Home;
