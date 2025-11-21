import { ChatService } from "../services/chat.service.js";

const RATE_LIMIT_INTERVAL = 1500;
const ultimoMensaje = new Map();

export async function enviarMensaje(socket, payload) {

    try {
        const { contenido, remitenteId, conversacionId } = payload || {};
        if (!contenido || !remitenteId || !conversacionId) {
            return socket.emit("errorMensaje", {
                error: "contenido, remitenteId y conversacionId son requeridos"
            });
        }
        const anterior = ultimoMensaje.get(socket.id);
        const ahora = Date.now();

        if (anterior && (ahora - anterior) < RATE_LIMIT_INTERVAL) {
            if (ack) ack({ error: "Demasiados mensajes. Por favor espera un momento." });
            return;
        }

        ultimoMensaje.set(socket.id, ahora);

        const mensajeGuardado = await ChatService.crearMensaje({
            contenido,
            remitenteId,
            conversacionId
        });

        const room = `conv_${conversacionId}`;
        io.to(room).emit("recibirMensaje", mensajeGuardado);

        if (ack) ack({ success: true, mensaje: mensajeGuardado });
    } catch (err) {
        socket.emit("errorMensaje", { error: err.message });
    }
}