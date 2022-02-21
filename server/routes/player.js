import express from "express";
import * as playerController from "../controllers/playerController.js";
const router = express.Router();

//Router
router.get("/", playerController.get);

export default router;
