import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";

const agregarTarea = async (req, res) => {
  const { proyecto } = req.body;
  if (!proyecto.match(/^[0-9a-fA-F]{24}$/)) {
    const error = new Error("No existe el proyecto");
    return res.status(401).json({ msg: error.message });
  }
  const existeProyecto = await Proyecto.findById(proyecto);
  if (!existeProyecto) {
    const error = new Error("No existe proyecto");
    return res.status(404).json({ msg: error.message });
  }
  res.json(existeProyecto);
  if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("No tienes los permisos");
    return res.status(401).json({ msg: error.message });
  }
  try {
    const tareaAlmacenada = await Tarea.create(req.body);
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};
const obtenerTarea = async (req, res) => {
  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    const tarea = await Tarea.findById(id).populate("proyecto");

    if (!tarea) {
      const error = new Error("Tarea no encontrada");
      return res.status(404).json({ msg: error.message });
    }
    if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
      const error = new Error("Accion no valida");
      return res.status(401).json({ msg: error.message });
    }
    res.json(tarea);
  }
};
const actualizarTarea = async (req, res) => {
  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    const tarea = await Tarea.findById(id).populate("proyecto");

    if (!tarea) {
      const error = new Error("Tarea no encontrada");
      return res.status(404).json({ msg: error.message });
    }
    if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
      const error = new Error("Accion no valida");
      return res.status(401).json({ msg: error.message });
    }
    tarea.nombre = req.body.nombre || tarea.nombre
    tarea.descripcion = req.body.descripcion || tarea.descripcion
    tarea.prioridad = req.body.prioridad || tarea.prioridad
    tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega
    try {
        const tareaAlmacenada = await tarea.save()
        res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error);
    }
  }
};
const eliminarTarea = async (req, res) => {};
const cambiarEstado = async (req, res) => {};
export {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
};
