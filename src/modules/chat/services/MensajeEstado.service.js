import { MensajeEstadoRepository } from "../repositories/mensaje.repository.js";

export const MensajeEstadoService = {

  // Crear estado cuando se envía un mensaje
  async crearEstadoMensaje(mensajeId, usuarioId) {
    return MensajeEstadoRepository.crearEstado({ mensajeId, usuarioId });
  },

  // Marcar recibido
  async marcarRecibido(mensajeId, usuarioId) {
    return MensajeEstadoRepository.marcarRecibido(mensajeId, usuarioId);
  },

  // Marcar visto
  async marcarVisto(mensajeId, usuarioId) {
    return MensajeEstadoRepository.marcarVisto(mensajeId, usuarioId);
  },

  // Obtener estados de un mensaje
  async obtenerEstadosMensaje(mensajeId) {
    return MensajeEstadoRepository.obtenerEstadosPorMensaje(mensajeId);
  },

  // Obtener estado de un mensaje para un usuario
  async obtenerEstadoUsuario(mensajeId, usuarioId) {
    return MensajeEstadoRepository.obtenerEstado(mensajeId, usuarioId);
  },

  // Listar todos los mensajes con estados de un usuario
  async listarEstadosPorUsuario(usuarioId) {
    return MensajeEstadoRepository.listEstadosPorUsuario(usuarioId);
  },
};
