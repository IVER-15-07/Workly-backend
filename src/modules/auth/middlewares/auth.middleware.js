import jwt from "jsonwebtoken";
import { usuarioRepository } from "../repository/usuario.repository.js";

const JWT_SECRET = process.env.JWT_SECRET;

export async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ message: "Token requerido" });

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await usuarioRepository.buscarPorId(payload.id);
    if (!user) return res.status(401).json({ message: "Usuario no encontrado" });


    req.user = { id: user.id, nombre: user.nombre, email: user.email};
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}