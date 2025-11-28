import express from "express";
import {
  startChat,
  sendMessage,
  getChatHistory,
  getAllChats,
  getAllUserChats,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/start", startChat);
router.post("/send", sendMessage);
router.get("/all/:username", getAllChats);
router.get("/all-users", getAllUserChats); // Specific route BEFORE catch-all
router.get("/:chatId", getChatHistory); // Catch-all last

export default router;