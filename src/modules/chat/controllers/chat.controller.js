import { ChatService } from "../services/chat.service.js";

export async function crearConversacionGrupal(req, res) {
  try {
    const { titulo, participantes } = req.body; 
    const conversacionGrupal = await ChatService.crearConversacionGrupal(titulo, participantes);
    return res.status(201).json({ success: true, data: conversacionGrupal });
  } catch (err) {
    console.error("Error en crear conversación grupal:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
}

export async function createOrGetConversation(req, res) {
  try {
    const { usuario1id, usuario2id } = req.body;
    const conversacion = await ChatService.crearORecuperarConversacion(Number(usuario1id), Number(usuario2id));
    return res.status(200).json({ success: true, data: conversacion });
  } catch (err) {
    console.error("Error en crear o recuperar conversación:", err);
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Error interno del servidor",
      data: null
    });
  }
};

export async function getMessages(req, res) {
  try {
    const { conversacionid } = req.params;
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