import { ChatService } from "../services/chat.service.js";



export async function crearGrupo (req, res) {
  try {
    const { titulo, participantes } = req.body;
    const nuevoGrupo = await ChatService.crearConversacionGrupal(titulo, participantes);
    return res.status(201).json({ success: true, data: nuevoGrupo });
  } catch (err) {
    console.error("Error en crear grupo:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}



export async function getMessages(req, res) {
  try {
    const conversacionid  = req.params.id;
    const mensajes = await ChatService.getMensajes(Number(conversacionid));
    return res.status(200).json({ success: true, data: mensajes });
  } catch (err) {
    console.error("Error en recuperar mensajes:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

export async function listUsuarios(req, res) {
  try {
    const usuarios = await ChatService.getListUsuarios();
    return res.status(200).json({ success: true, data: usuarios });
  } catch (err) {
    console.error("Error en listar usuarios:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

export async function crearConversacionPrivada(req, res) {
  try {
    const { participantes, titulo } = req.body;
    const [usuario1id, usuario2id] = participantes.map(Number);
    const conversacionPrivada = await ChatService.crearConversacionPrivada(Number(usuario1id), Number(usuario2id), titulo);
    return res.status(201).json({ success: true, data: conversacionPrivada });
  } catch (err) {
    console.error("Error en crear conversación privada:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

export async function getConversacion(req, res) {
  try {
    const { id } = req.params;
    const conversacion = await ChatService.getListConversacionesPorUsuario(Number(id));
    return res.status(200).json({ success: true, data: conversacion });
  } catch (err) {
    console.error("Error en recuperar conversación:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}




export async function agregarParticipanteAGrupo(req, res) {
  try {
    const { conversacionId, usuarioId } = req.body;
    const actualizado = await ChatService.agregarParticipanteAGrupo(Number(conversacionId), Number(usuarioId));
    return res.status(200).json({ success: true, data: actualizado });
  } catch (err) {
    console.error("Error en agregar participante al grupo:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

export async function eliminarParticipanteDeGrupo(req, res) {
  try {
    const { conversacionId, usuarioId } = req.body;
    const actualizado = await ChatService.eliminarParticipanteDeGrupo(Number(conversacionId), Number(usuarioId));
    return res.status(200).json({ success: true, data: actualizado });
  } catch (err) {
    console.error("Error en eliminar participante del grupo:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}
export async function listarParticipantes(req, res) {
  try {
    const { conversacionId } = req.params;
    const participantes = await ChatService.listarParticipantes(Number(conversacionId));
    return res.status(200).json({ success: true, data: participantes });
  } catch (err) {
    console.error("Error en listar participantes del grupo:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

//recuperar los chat  de  grupo como  de  privado  para un usuario

export async function getConversacionesUsuario(req, res) {
  try {
     const usuarioId = req.params.usuarioId || req.query.usuarioId || (req.body && req.body.usuarioId);
    const conversaciones = await ChatService.getListchatprivadosUsuario(Number(usuarioId));
    return res.status(200).json({ success: true, data: conversaciones });
  } catch (err) {
    console.error("Error en recuperar conversaciones del usuario:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

export async function getConversacionesgrupoUsuario(req, res) {
  try {
     const usuarioId = req.params.usuarioId || req.query.usuarioId || (req.body && req.body.usuarioId);
    const conversaciones = await ChatService.getListchatgrupalesUsuario(Number(usuarioId));
    return res.status(200).json({ success: true, data: conversaciones });
  } catch (err) {
    console.error("Error en recuperar conversaciones grupales del usuario:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}
