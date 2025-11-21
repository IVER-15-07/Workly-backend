import prisma from '../../../config/database.js';

export const usuarioRepository = {


    buscarPorEmail: (email) =>
        prisma.usuario.findUnique({ where: { email } }),

    buscarPorId: (id) =>
        prisma.usuario.findUnique({ where: { id } }),


    crear: (datos) =>
        prisma.usuario.create({ data: datos }),

};