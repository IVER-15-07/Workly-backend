import prisma from "../../../config/database.js";

export const MensajeEstadoRepository = {

  // Crear estado de mensaje para un usuario
  async crearEstado({ mensajeId, usuarioId }) {
    return prisma.mensajeEstado.create({
      data: {
        mensajeId,
        usuarioId,
        visto: false,
        recibido: false,
      },
    });
  },

  // Marcar mensaje como recibido
  async marcarRecibido(mensajeId, usuarioId) {
    return prisma.mensajeEstado.update({
      where: { mensajeId_usuarioId: { mensajeId, usuarioId } },
      data: { recibido: true },
    });
  },

  // Marcar mensaje como visto
  async marcarVisto(mensajeId, usuarioId) {
    return prisma.mensajeEstado.update({
      where: { mensajeId_usuarioId: { mensajeId, usuarioId } },
      data: { visto: true },
    });
  },

  // Obtener todos los estados de un mensaje
  async obtenerEstadosPorMensaje(mensajeId) {
    return prisma.mensajeEstado.findMany({
      where: { mensajeId },
      include: { usuario: true },
    });
  },

  // Obtener estado de un usuario específico
  async obtenerEstado(mensajeId, usuarioId) {
    return prisma.mensajeEstado.findUnique({
      where: { mensajeId_usuarioId: { mensajeId, usuarioId } },
    });
  },

  // Listar mensajes de un usuario con su estado
  async listEstadosPorUsuario(usuarioId) {
    return prisma.mensajeEstado.findMany({
      where: { usuarioId },
      include: { mensaje: true },
    });
  },
};
