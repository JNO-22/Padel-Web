import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/Home/Home.jsx";
import Alquiler from "./Pages/Rent/alquiler.jsx";
import Registrar from "./Pages/Registrar/Registrar.jsx";
import Login from "./Pages/Login/Login.jsx";
import Layout from "./Components/NavBar/Layout.jsx";
import NuevoPassword from "./Pages/ResetPassword/NuevoPassword.jsx";
import OlvidePassword from "./Pages/ResetPassword/OlvidePassword.jsx";
import ConfirmarCuenta from "./Pages/Registrar/ConfirmarCuenta.jsx";
import Theme from "./theme/Theme.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

// finde router = createBrowserRouter.

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/olvide-password",
        element: <OlvidePassword />,
      },
      { path: "/olvide-password/:token", element: <NuevoPassword /> },
      {
        path: "/confirmar/:id",
        element: <ConfirmarCuenta />,
      },
      {
        path: "/alquiler",
        element: <Alquiler />,
      },
    ],
  },
  {
    path: "/register",
    element: <Registrar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={Theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
