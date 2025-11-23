import { Router } from "express";
import {crearConversacionGrupal, getMessages, createOrGetConversation , listUsuarios, crearConversacionPrivada, getConversacion, crearGrupo, agregarParticipanteAGrupo, eliminarParticipanteDeGrupo, listarParticipantes} from "../controllers/chat.controller.js";
const router = Router();

router.post("/conversations/get-or-create", createOrGetConversation);


router.get("/conversations/:id/messages", getMessages);
router.get("/usuarios", listUsuarios);
router.post("/conversacion/privada", crearConversacionPrivada);
router.post("/conversacion/grupal", crearConversacionGrupal);
router.get("/conversacion/:id", getConversacion);
router.post("/conversacion/grupal", crearGrupo);
router.post("/conversacion/:conversacionId/agregar-participante", agregarParticipanteAGrupo);
router.post("/conversacion/:conversacionId/eliminar-participante", eliminarParticipanteDeGrupo);
router.get("/conversacion/:conversacionId/participantes", listarParticipantes);
export default router;