import mongoose from "mongoose";
const proyectoShema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    fechaEntrega: {
      type: Date,
      default: Date.now(),
    },
    cliente: {
      type: String,
      required: true,
      trim: true,
    },
    creador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    colaboradores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
  },
  { timestamps: true }
);

const Proyecto = mongoose.model("Proyecto", proyectoShema);
export default Proyecto;
