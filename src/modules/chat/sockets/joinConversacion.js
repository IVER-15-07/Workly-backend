import { ChatService } from "../services/chat.service";

export async function salirConversacion(socket, { conversacionId, userId }) {
    try {
        if (!conversacionId || !userId) {
            return socket.emit("errorMessage", {
                error: "conversacionId y userId son requeridos"
            });
        }
        const room = `conv_${conversacionId}`;
        socket.join(room);
        console.log(`socket ${socket.id} left ${room}`);

        const mesajes = await ChatService.getMensajes(conversacionId);
        socket.emit("historialConversacion", mesajes);

    } catch (err) {
        socket.emit("errorMensaje", { error: err.message });
    }
}
