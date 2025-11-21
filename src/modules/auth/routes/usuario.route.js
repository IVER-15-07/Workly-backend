import { Router } from "express";
import { registrarUsuario, login, firebaseLogin } from "../controllers/usuario.controller.js";

//import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/registro", registrarUsuario);
router.post("/login", login);
router.post("/login-firebase", firebaseLogin);

export default router;