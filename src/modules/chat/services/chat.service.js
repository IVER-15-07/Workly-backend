import { ChatRepository } from "../repositories/chat.repository.js";

export const ChatService = {
  async createConversation(titulo, tipo = "privado", participantes = []) {
    const conv = await ChatRepository.createConversation({
      titulo,
      tipo,
      participantes: {
        create: participantes.map((userId) => ({ usuarioId: userId })),
      },
    });
    return conv;
  },

  async getOrCreateConversationBetween(userAId, userBId, titulo) {
    return ChatRepository.getOrCreateConversationBetween(userAId, userBId, titulo);
  },

  async createMessage({ contenido, remitenteId, conversacionId }) {
    // valida existencia de conversación / remitente si quieres
    const msg = await ChatRepository.createMessage({
      contenido,
      remitenteId,
      conversacionId,
    });
    return msg;
  },

  async getMessages(conversacionId) {
    return ChatRepository.getMessagesByConversation(conversacionId);
  },

  async getConversation(id) {
    return ChatRepository.getConversationById(id);
  },
};