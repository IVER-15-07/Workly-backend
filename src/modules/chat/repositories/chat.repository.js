import prisma from "./../../../config/database.js";

export const ChatRepository = {
  async crearConversacion(data) {
    return prisma.conversacion.create({ data });
  },

  async getConversacionPorId(id) {
    return prisma.conversacion.findUnique({
      where: { id },
      include: { participantes: true, mensajes: true },
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


  async obtenerOCrearConversacionEntre(userAId, userBId, titulo) {
    // buscar conversación existente entre ambos usuarios
    const existing = await prisma.conversacion.findFirst({
      where: {
        participantes: {
          every: {
            usuarioId: {
              in: [userAId, userBId],
            },
          },
        },
      },
      include: { participantes: true, mensajes: true },
    });

    if (existing) return existing;

    // crear nueva conversación
    const newConv = await prisma.conversacion.create({
      data: {
        titulo,
        tipo: "privado",
        participantes: {
          create: [{ usuarioId: userAId }, { usuarioId: userBId }],
        },
      },
      include: { participantes: true, mensajes: true },
    });

    return newConv;
  },


  // crear grupos aaaaah 
  
};