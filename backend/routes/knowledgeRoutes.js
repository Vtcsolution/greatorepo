import express from "express";
import {
  getKnowledge,
  addOrUpdateCategory,
  getCategoryLinks
} from "../controllers/knowledgeController.js";

const router = express.Router();

router.get("/", getKnowledge);
router.post("/category", addOrUpdateCategory);
router.get("/links/:categoryName", getCategoryLinks);

export default router;
