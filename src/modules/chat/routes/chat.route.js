import { Router } from "express";
import { getMessages , listUsuarios, 
    crearConversacionPrivada, getConversacion,
     crearGrupo, agregarParticipanteAGrupo, 
     eliminarParticipanteDeGrupo, 
     listarParticipantes,
     getConversacionesUsuario,
     getConversacionesgrupoUsuario
    } from "../controllers/chat.controller.js";


const router = Router();

router.get("/usuarios", listUsuarios);


router.get("/conversaciones/usuario/:usuarioId", getConversacionesUsuario);
router.post("/conversacion/privada", crearConversacionPrivada);

router.get("/conversaciones/grupo/:usuarioId", getConversacionesgrupoUsuario);
router.post("/conversacion/grupal", crearGrupo);

router.get("/conversations/:id/messages", getMessages);

router.post("/conversacion/:conversacionId/agregar-participante", agregarParticipanteAGrupo);
router.post("/conversacion/:conversacionId/eliminar-participante", eliminarParticipanteDeGrupo);
router.get("/conversacion/:conversacionId/participantes", listarParticipantes);



router.get("/conversaciones/:usuarioId", getConversacion);
export default router;