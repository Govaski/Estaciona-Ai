import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Esqueci from "../pages/Esqueci";
import Motorista from "../pages/Motorista";
import Estabelecimento from "../pages/Estabelecimento";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/esqueci-a-senha",
        element: <Esqueci />
    },

    {
        path: "/motorista",
        element: <Motorista />
    },
    
    {
        path: "/estabelecimento",
        element: <Estabelecimento />
    },

]);