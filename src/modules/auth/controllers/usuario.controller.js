import {usuarioService} from "../services/usuario.service.js";

export async function registrarUsuario(req, res) {
    try {
        const resultado = await usuarioService.registrarUsuario(req.body);
        return res.status(200).json({ success: true, mensaje: "Usuario registrado", data: resultado });
    } catch (err) {
        console.error("Error en registrarUsuario:", err);
        return res.status(err.status || 500).json({
            success: false,
            message: err.message || "Error interno del servidor",
            data: null
        });
    }
}

export async function login(req, res) {
    try {
        const { email, contrasena } = req.body;
        const resultado = await usuarioService.login(email, contrasena);
        return res.status(200).json({ success: true, mensaje: "Login exitoso", data: resultado });
    } catch (err) {
        console.error("Error en login:", err);
        return res.status(err.status || 500).json({
            success: false,
            message: err.message || "Error interno del servidor",
            data: null
        });
    }
}

export const firebaseLogin = async (req, res) => {
  try {
       const { idToken } = req.body;
       const resultado = await usuarioService.firebaseLogin(idToken);
       return res.status(200).json({ success: true, mensaje: "Login con Firebase exitoso", data: resultado });
  } catch (err) {
    console.error("Error en firebaseLogin  :", err);
    res.status(500).json({ error: err.message });
  }
};