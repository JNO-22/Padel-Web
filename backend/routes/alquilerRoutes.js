import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
  obtenerAlquileres,
  nuevoAlquiler,
  obtenerAlquiler,
  eliminarAlquiler,
  editarAlquiler,
} from "../controllers/alquilerController.js";

const router = express.Router();

router
  .route("/")
  .get(checkAuth, obtenerAlquileres)
  .post(checkAuth, nuevoAlquiler);

router
  .route("/:id")
  .get(checkAuth, obtenerAlquiler)
  .put(checkAuth, editarAlquiler)
  .delete(checkAuth, eliminarAlquiler);

export default router;
