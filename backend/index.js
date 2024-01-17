import express from "express";
import connectDB from "./config/db.js";
import usuarioRouters from "./routes/usuarioRouters.js";
import alquilerRouters from "./routes/alquilerRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
connectDB();

// Configurar CORS
const WhiteList = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (WhiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Routes
app.use("/usuario", usuarioRouters);
app.use("/alquiler", alquilerRouters);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
