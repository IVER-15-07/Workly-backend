import { Server as SocketServer } from "socket.io";
import { ChatService } from "./modules/chat/services/chat.service.js";

export function initializeSocket(server) {
    const io = new SocketServer(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PUT", "DELETE"],
        }
    });


    io.on("connection", (socket) => {
        console.log("Cliente conectado:", socket.id);

        // join a room (cliente debe emitir 'joinConversation' con { conversacionId, userId })
        socket.on("joinConversation", async ({ conversacionId, userId }) => {
            if (!conversacionId) return;
            const room = `conv_${conversacionId}`;
            socket.join(room);
            console.log(`socket ${socket.id} join ${room}`);
            // opcional: enviar historial
            const messages = await ChatService.getMessages(conversacionId);
            socket.emit("conversationHistory", messages);
        });

        // enviar mensaje: payload { contenido, remitenteId, conversacionId }
        socket.on("sendMessage", async (payload) => {
            try {
                const saved = await ChatService.createMessage(payload);
                const room = `conv_${payload.conversacionId}`;
                // emitir solo a la room
                io.to(room).emit("receiveMessage", saved);
            } catch (err) {
                socket.emit("errorMessage", { error: err.message });
            }
        });

        socket.on("disconnect", () => {
            console.log("Cliente desconectado:", socket.id);
        });
    });


    return io;
}