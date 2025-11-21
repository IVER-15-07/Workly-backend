import { ChatRepository } from "../repositories/chat.repository.js";

export const ChatService = {
  async crearConversacion(titulo, tipo = "privado", participantes = []) {
    const conv = await ChatRepository.crearConversacion({
      titulo,
      tipo,
      participantes: {
        create: participantes.map((userId) => ({ usuarioId: userId })),
      },
    });
    return conv;
  },

  async obtenerOCrearConversacionEntre(userAId, userBId, titulo) {
    return ChatRepository.obtenerOCrearConversacionEntre(userAId, userBId, titulo);
  },

  async crearMensaje({ contenido, remitenteId, conversacionId }) {
    // valida existencia de conversación / remitente si quieres
    const msg = await ChatRepository.crearMensaje({
      contenido,
      remitenteId,
      conversacionId,
    });
    return msg;
  },

  async getMensajes(conversacionId) {
    return ChatRepository.getMensajesPorConversacion(conversacionId);
  },

  async getConversacion(id) {
    return ChatRepository.getConversacionPorId(id);
  },
};