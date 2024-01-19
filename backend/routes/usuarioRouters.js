import express from "express";
const router = express.Router();
import {
  crear,
  autenticar,
  confirmar,
  Listar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioControllers.js";
import checkAuth from "../middleware/checkAuth.js";

// creacion , actualizacion y eliminacion de usuarios

router.get("/lista", Listar);

router.post("/crear", crear); //creador
router.post("/login", autenticar); //login
router.get("/confirmar/:token", confirmar); //confirmador
router.post("/reset-password", olvidePassword); //Reseteo de contraseña
router.route("/reset-password/:token").get(comprobarToken).post(nuevoPassword); //confirmador y cambio de contraseña
router.get("/perfil", checkAuth, perfil);
export default router;
