import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Cadastro from './pages/cadastro';
import DashboardMotorista from './pages/DashboardMotorista';
import DashboardEstabelecimento from './pages/DashboardEstabelecimento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard-motorista" element={<DashboardMotorista />} />
        <Route path="/dashboard-estabelecimento" element={<DashboardEstabelecimento />} />
      </Routes>
    </Router>
  );
}

export default App;
