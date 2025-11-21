import { usuarioRepository } from "../repositories/usuario.repository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import admin from "../../../config/firebaseAdmin.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

function generateToken(user) {
    // acceso seguro a la relación rol_usuario y fallback

    const payload = {
        id: user.id,
        email: user.email,


    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export const usuarioService = {

    async registrarUsuario(data) {
        const { nombre, email, contrasena, } = data;
        if (!nombre || !email || !contrasena) {
            throw new Error("Nombre, email, contrasena  son requeridos");
        }

        const existe = await usuarioRepository.buscarPorEmail(email);
        if (existe) {
            throw new Error("Usuairo ya registrado con ese email");
        }

        const hashed = await bcrypt.hash(contrasena, 10);
        const nuevoUsuario = await usuarioRepository.crear({
            nombre,
            email,
            contrasena: hashed,
        });
        return nuevoUsuario;
    },

    async login(email, contrasena) {
        const usuario = await usuarioRepository.buscarPorEmail(email);
        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }
        const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!passwordMatch) {
            throw new Error("Contraseña incorrecta");
        }

        const token = generateToken(usuario);
        return { usuario, token };
    },

    async firebaseLogin(idToken) {
        if (!idToken)
            throw new Error("ID token es requerido");
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const email = decodedToken.email;

        const usuario = await usuarioRepository.buscarPorEmail(email);
        if (!usuario) {
            usuario = await usuarioRepository.crear({
                nombre: decodedToken.name || email,
                email: decodedToken.email,
                contrasena: null,
                propfilePicture: decodedToken.picture || null,
            });
        }
        const token = generateToken(usuario);
        return { usuario, token };
    }

};