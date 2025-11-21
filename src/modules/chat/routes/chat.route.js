import { Router } from "express";
import { getMessages, createOrGetConversation } from "../controllers/chat.controller.js";
const router = Router();

router.post("/conversations/get-or-create", createOrGetConversation);
router.get("/conversations/:id/messages", getMessages);

export default router;