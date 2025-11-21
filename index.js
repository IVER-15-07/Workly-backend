import dotenv from 'dotenv';
import axios from 'axios';
import http from 'http';
import app from './src/app.js';
import { initializeSocket } from './src/socket.js';

dotenv.config();
const PORT = process.env.PORT || 3000 ;

const server = http.createServer(app);
initializeSocket(server);

try {
  const { data } = await axios.get('https://api.ipify.org?format=json');
  console.log("🌐 IP pública de la aplicación:", data.ip);
} catch (err) {
  console.error("Error al obtener IP:", err.message);
}
server.listen(PORT, () => {
  console.log(`🚀 Server corriendo en http://localhost:${PORT}`);
});