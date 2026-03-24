import express from "express";
import { chat } from '../controllers/chatbot.controller.js';
const chatBotRouter = express.Router();
chatBotRouter.post("/chat",chat)
export default chatBotRouter;