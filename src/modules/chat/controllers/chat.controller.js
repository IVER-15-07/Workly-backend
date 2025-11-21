import { ChatService } from "../services/chat.service.js";

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

