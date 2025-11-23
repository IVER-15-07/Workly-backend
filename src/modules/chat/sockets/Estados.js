import { MensajeEstadoService } from "../services/MensajeEstado.service.js";


export function registerEstadoHandlers(io, socket) {
  // Confirmar recibido
  socket.on("confirmarRecibido", async ({ mensajeId, usuarioId, conversacionId } = {}) => {
    try {
      if (!mensajeId || !usuarioId) return;
      await MensajeEstadoService.marcarRecibido(Number(mensajeId), Number(usuarioId));
      const payload = { mensajeId: Number(mensajeId), usuarioId: Number(usuarioId), recibido: true };
      if (conversacionId) io.to(`conv_${conversacionId}`).emit("estadoMensaje", payload);
      else socket.emit("estadoMensaje", payload);
    } catch (err) {
      console.error("[WS] confirmarRecibido error:", err);
      socket.emit("errorMensaje", { message: err?.message || "Error confirmarRecibido" });
    }
  });

  // Confirmar visto (lectura)
  socket.on("confirmarVisto", async ({ mensajeId, usuarioId, conversacionId } = {}) => {
    try {
      if (!mensajeId || !usuarioId) return;
      await MensajeEstadoService.marcarVisto(Number(mensajeId), Number(usuarioId));
      const payload = { mensajeId: Number(mensajeId), usuarioId: Number(usuarioId), visto: true, recibido: true };
      if (conversacionId) io.to(`conv_${conversacionId}`).emit("estadoMensaje", payload);
      else socket.emit("estadoMensaje", payload);
    } catch (err) {
      console.error("[WS] confirmarVisto error:", err);
      socket.emit("errorMensaje", { message: err?.message || "Error confirmarVisto" });
    }
  });

  // Obtener estados de un mensaje (con ack)
  socket.on("obtenerEstadosMensaje", async ({ mensajeId } = {}, ack) => {
    try {
      if (!mensajeId) return typeof ack === "function" && ack({ ok: false, error: "mensajeId requerido" });
      const estados = await MensajeEstadoService.obtenerEstadosMensaje(Number(mensajeId));
      typeof ack === "function" && ack({ ok: true, data: estados });
    } catch (err) {
      console.error("[WS] obtenerEstadosMensaje error:", err);
      typeof ack === "function" && ack({ ok: false, error: err?.message || "Error" });
    }
  });

  // Listar estados por usuario (con ack)
  socket.on("listarEstadosUsuario", async ({ usuarioId } = {}, ack) => {
    try {
      if (!usuarioId) return typeof ack === "function" && ack({ ok: false, error: "usuarioId requerido" });
      const list = await MensajeEstadoService.listarEstadosPorUsuario(Number(usuarioId));
      typeof ack === "function" && ack({ ok: true, data: list });
    } catch (err) {
      console.error("[WS] listarEstadosUsuario error:", err);
      typeof ack === "function" && ack({ ok: false, error: err?.message || "Error" });
    }
  });
}