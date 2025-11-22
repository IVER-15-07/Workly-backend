import { Router } from "express";
import { getMessages, createOrGetConversation , listUsuarios, crearConversacionPrivada, getConversacion, crearGrupo} from "../controllers/chat.controller.js";
const router = Router();

router.post("/conversations/get-or-create", createOrGetConversation);


router.get("/conversations/:id/messages", getMessages);
router.get("/usuarios", listUsuarios);
router.post("/conversacion/privada", crearConversacionPrivada);
router.get("/conversacion/:id", getConversacion);
router.post("/conversacion/grupal", crearGrupo);
export default router;