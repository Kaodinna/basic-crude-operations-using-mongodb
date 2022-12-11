import express, { Request, Response, Router } from "express";
import { Register, Login } from "../controller/userController";

const router: Router = express.Router();

router.post("/signup", Register);
router.post("/login", Login);

export default router;
