export function salirConversacion(socket, { conversacionId }) {
      if (!conversacionId) return;

  const room = `conv_${conversacionId}`;
  socket.leave(room);

  console.log(`[WS] ${socket.id} salió de ${room}`);

}