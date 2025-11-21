import express from "express";

//import chat from '../modules/conversation/routes/chat.route.js';
import auth from '../modules/auth/routes/usuario.route.js';

const router = express.Router();

//router.use('/chat', chat);
router.use('/auth', auth);

export default router;