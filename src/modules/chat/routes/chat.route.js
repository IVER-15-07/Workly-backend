import { Router } from "express";
import { getMessages, listUsuarios, crearConversacionPrivada, getConversacion, crearGrupo, crearConversacionGrupal} from "../controllers/chat.controller.js";
const router = Router();

router.get("/conversations/:id/messages", getMessages);
router.get("/usuarios", listUsuarios);
router.post("/conversacion/privada", crearConversacionPrivada);
router.post("/conversacion/grupal", crearConversacionGrupal);
router.get("/conversacion/:id", getConversacion);
router.post("/conversacion/grupal", crearGrupo);

export default router;