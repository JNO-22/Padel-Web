import jwt from "jsonwebtoken";
import Usuario from "../models/usuarios.js";

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = await Usuario.findById(decoded.id).select(
        "-password -confirmado -token -createdAt -updatedAt -__v"
      );
      return next();
    } catch (error) {
      return res.status(404).json({ message: "Ha habido un error " });
    }
  } else {
    const error = new Error("Token no valido o existente");
    return res.status(401).json({ message: error.message });
  }

  next();
};

export default checkAuth;
