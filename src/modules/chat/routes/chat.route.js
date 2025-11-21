import { Router } from "express";
import { ChatController } from "../controllers/chat.controller.js";
const router = Router();

router.post("/conversations/get-or-create", ChatController.createOrGetConversation);
router.get("/conversations/:id/messages", ChatController.getMessages);

export default router;