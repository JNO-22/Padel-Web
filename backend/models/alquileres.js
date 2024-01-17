import mongoose from "mongoose";

const alquilerSchema = new mongoose.Schema(
  {
    isPadel: {
      type: Boolean,
      required: true,
    },
    idUsuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    fechaAlquiler: {
      type: Date,
      default: Date.now,
    },
    duracion: {
      type: Number,
      trim: true,
      required: true,
    },
    estado: {
      type: String,
      default: "Activo",
    },
    precio: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Alquiler = mongoose.model("Alquiler", alquilerSchema);
export default Alquiler;
