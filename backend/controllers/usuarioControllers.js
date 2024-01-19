import Usuario from "../models/usuarios.js";
import generarId from "../helper/generarid.js";
import generarJWT from "../helper/generarJWT.js";
import { emailRegistro, emailReset } from "../helper/emails.js";

import { model } from "mongoose";
const crear = async (req, res) => {
  // evitar duplicados
  const { email } = req.body;
  const usuarioExistente = await Usuario.findOne({ email: email });

  if (usuarioExistente) {
    const error = new Error("El usuario ya existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    await usuario.save();

    //enviar email de confirmacion
    emailRegistro({ nombre: usuario.nombre, email: usuario.email, token: usuario.token });

    res.json({
      msg: "Usuario creado exitosamente , revisa tu email para confirmar tu cuenta",
    });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  //Comprobar si el usuario existe
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ email: email });

  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }
  //comprobar si esta confirmado

  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  // comprobar password
  if (await usuario.comprobarPassword(password, usuario.password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario._id),
    });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await Usuario.findOne({ token });
  if (!usuarioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(403).json({ msg: error.message });
  }
  try {
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.findOne({ email: email });

  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  try {
    usuario.token = generarId();
    await usuario.save();
    res.json({ msg: "Hemos enviado un email con las instrucciones" });
    //enviar email de reset password
    emailReset({ nombre: usuario.nombre, email: usuario.email, token: usuario.token });
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Usuario.findOne({ token });

  if (!tokenValido) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  } else {
    res.json({ message: "Token valido", tokenValido });
  }
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const usuario = await Usuario.findOne({ token });

  if (usuario) {
    usuario.password = password;
    usuario.token = "";
    try {
      await usuario.save();
      res.json({ msg: "Password modificado correctamente" });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }
};

const perfil = async (req, res) => {
  const { usuario } = req;
  res.json({ usuario });
};
const Listar = async (req, res) => {
  const userMap = {};
  const usuarios = await Usuario.find()
    .then(function (users) {
      users.forEach(function (user) {
        userMap[user._id] = user;
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  res.json(userMap);
};

export {
  crear,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
  Listar,
};
