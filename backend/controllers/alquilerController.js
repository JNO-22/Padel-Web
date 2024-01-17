import Alquiler from "../models/alquileres.js";
import Usuario from "../models/usuarios.js";

const obtenerAlquileres = async (req, res) => {
  const usuario = await Usuario.find(req.usuario);

  if (usuario.find((user) => user.rol === "admin")) {
    const alquileres = await Alquiler.find();
    res.json(alquileres);
  } else {
    const alquileres = await Alquiler.find()
      .where("idUsuario")
      .equals(req.usuario);
    res.json(alquileres);
  }
};

const nuevoAlquiler = async (req, res) => {
  const alquiler = new Alquiler(req.body);
  alquiler.idUsuario = req.usuario._id;
  try {
    const alquilerAlmacenado = await alquiler.save();
    res.json(alquilerAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerAlquiler = async (req, res) => {
  const { id } = req.params;

  const alquiler = await Alquiler.findById(id);
  const usuario = await Usuario.find(req.usuario);

  if (!alquiler) {
    const error = new Error("Alquiler no encontrado");
    return res.status(404).json({ message: error.message });
  }

  if (!usuario.find((user) => user.rol === "admin")) {
    if (alquiler.idUsuario.toString() !== req.usuario._id.toString()) {
      const error = new Error("Accion no valida");
      return res.status(401).json({ message: error.message });
    }
  }

  res.json(alquiler);
};

const eliminarAlquiler = async (req, res) => {
  const { id } = req.params;

  const alquiler = await Alquiler.findById(id);
  const usuario = await Usuario.find(req.usuario);

  if (!alquiler) {
    const error = new Error("Alquiler no encontrado");
    return res.status(404).json({ message: error.message });
  }

  if (!usuario.find((user) => user.rol === "admin")) {
    if (alquiler.idUsuario.toString() !== req.usuario._id.toString()) {
      const error = new Error("Accion no valida");
      return res.status(401).json({ message: error.message });
    }
  }

  try {
    await Alquiler.deleteOne();
    res.json({ message: "Alquiler eliminado" });
  } catch (error) {
    console.log(error);
  }
};

const editarAlquiler = async (req, res) => {
  const { id } = req.params;

  const alquiler = await Alquiler.findById(id);
  const usuario = await Usuario.find(req.usuario);

  if (!alquiler) {
    const error = new Error("Alquiler no encontrado");
    return res.status(404).json({ message: error.message });
  }

  if (!usuario.find((user) => user.rol === "admin")) {
    if (alquiler.idUsuario.toString() !== req.usuario._id.toString()) {
      const error = new Error("Accion no valida");
      return res.status(401).json({ message: error.message });
    }
  }

  alquiler.estado = req.body.estado || alquiler.estado;
  alquiler.fechaAlquiler = req.body.fechaAlquiler || alquiler.fechaAlquiler;
  alquiler.duracion = req.body.duracion || alquiler.duracion;
  alquiler.isPadel = req.body.isPadel || alquiler.isPadel;

  try {
    const alquilerAlmacenado = await alquiler.save();
    res.json(alquilerAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerAlquileres,
  nuevoAlquiler,
  obtenerAlquiler,
  eliminarAlquiler,
  editarAlquiler,
};
