import express from "express";
import { getAllMemories,createMemory, updateMemory } from "../controllers/memories.js";

const router = express.Router();

// Get ALl Memories

router.get("/", getAllMemories);
router.post("/", createMemory);
router.put("/:id", updateMemory);

export default router;
