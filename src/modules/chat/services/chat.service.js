import { ChatRepository } from "../repositories/chat.repository.js";

export const ChatService = {


  async getListUsuarios() {
    return ChatRepository.listUsuarios();
  },

  async crearConversacionPrivada(userAId, userBId, titulo) {
    if (userAId === userBId) {
      throw new Error("No puedes crear un chat contigo mismo.");
    }
    const existing = await ChatRepository.obtenerConversacionPrivada(
      userAId,
      userBId
    );

    if (existing) return existing;
    return ChatRepository.crearConversacion({
      titulo: titulo || "Chat Privado",
      tipo: "privado",
      participantes: [userAId, userBId],
    });
  },


  async crearConversacionGrupal(titulo, participantes) {
    if (!participantes || participantes.length < 2) {
      throw new Error("Un grupo necesita al menos 2 participantes.");
    }

    // Convertir los IDs a números explícitamente
    const participantesNumeros = participantes.map(Number);

    return ChatRepository.crearConversacion({
      titulo,
      tipo: "grupal",
      participantes: participantesNumeros,
    });
  },



  
  async getListConversacionesPorUsuario(usuarioId) {
    return ChatRepository.listConversacionesPorUsuario(usuarioId);
  },

  async crearMensaje({ contenido, remitenteId, conversacionId }) {
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

  async agregarParticipanteAGrupo(conversacionId, usuarioId) {

    const existentes = await ChatRepository.getParticipantes(conversacionId);
    if (existentes.some(p => p.usuarioId === usuarioId)) {
      throw new Error("El usuario ya es participante del grupo");
    }

    return ChatRepository.agregarParticipante(conversacionId, usuarioId);
  },

  async eliminarParticipanteDeGrupo(conversacionId, usuarioId) {

    const existentes = await ChatRepository.getParticipantes(conversacionId);
    if (!existentes.some(p => p.usuarioId === usuarioId)) {
      throw new Error("El usuario no es participante del grupo");
    }

    return ChatRepository.eliminarParticipante(conversacionId, usuarioId);
  },

  async listarParticipantes(conversacionId) {
    return ChatRepository.getParticipantes(conversacionId);
  },

};