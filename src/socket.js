import { Server as SocketServer } from "socket.io";
import { enviarMensaje } from "./modules/chat/sockets/enviarMensaje.js";
import { joinConversacion } from "./modules/chat/sockets/joinConversacion.js";
import { salirConversacion } from "./modules/chat/sockets/salirConversacion.js";

export function initializeSocket(server) {
    const io = new SocketServer(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PUT", "DELETE"],
        }
    });

    io.on("connection", (socket) => {
        console.log(`[WS] Nuevo cliente conectado: ${socket.id}`);
        socket.on("enviarMensaje", (payload, ack) => enviarMensaje(socket, payload, ack, io));
        socket.on("joinConversacion", (data) => joinConversacion(socket, data));
        socket.on("salirConversacion", (data) => salirConversacion(socket, data));
        socket.on("disconnect", () => {
            console.log(`[WS] Cliente desconectado: ${socket.id}`);
        });
    });


    return io;
}