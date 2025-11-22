import prisma from "./../../../config/database.js";

export const ChatRepository = {

  async listUsuarios() {
    return prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        propfilePicture: true
      }
    });
  },

  async crearConversacion({ titulo, tipo, participantes }) {
    return prisma.conversacion.create({
      data: {
        titulo,
        tipo,
        participantes: Array.isArray(participantes)
          ? {
            create: participantes.map((id) => ({
              usuario: { connect: { id: Number(id) } },
            })),
          }
          : participantes && participantes.create
            ? participantes
            : { create: [] },
      },
      include: {
        participantes: { include: { usuario: true } },
        mensajes: true,
      },
    });
  },


  async obtenerConversacionPrivada(userAId, userBId) {
    return prisma.conversacion.findFirst({
      where: {
        tipo: "privado",
        AND: [
          { participantes: { some: { usuarioId: Number(userAId) } } },
          { participantes: { some: { usuarioId: Number(userBId) } } },
        ],
      },
      include: {
        participantes: { include: { usuario: true } },
        mensajes: true,
      },
    });
  },





    async listConversacionesPorUsuario(usuarioId) {
    return prisma.conversacion.findMany({
      where: {
        participantes: {
          some: { usuarioId },
        },
      },
      include: {
        participantes: true, mensajes: {
          orderBy: { creadoEn: "desc" }
        }
      },
    });
  },








  // Agregar participante a grupo
  async agregarParticipante(conversacionId, usuarioId) {
    return prisma.conversacionParticipante.create({
      data: {
        conversacionId,
        usuarioId,
      },
    });
  },

  // Eliminar participante de grupo
  async eliminarParticipante(conversacionId, usuarioId) {
    return prisma.conversacionParticipante.delete({
      where: {
        conversacionId_usuarioId: {
          conversacionId,
          usuarioId,
        },
      },
    });
  },

  // Opcional: obtener todos los participantes de un grupo
  async getParticipantes(conversacionId) {
    return prisma.conversacionParticipante.findMany({
      where: { conversacionId },
      include: { usuario: true },
    });
  },

  async crearMensaje(data) {
    return prisma.mensaje.create({ data });
  },

  async getMensajesPorConversacion(conversacionId) {
    return prisma.mensaje.findMany({
      where: { conversacionId },
      orderBy: { creadoEn: "asc" },
    });
  },


};