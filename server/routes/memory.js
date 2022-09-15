import express from "express";
import { getAllMemories,createMemory } from "../controllers/memories.js";

const router = express.Router();

// Get ALl Memories

router.get("/", getAllMemories);
router.post("/", createMemory);

export default router;
