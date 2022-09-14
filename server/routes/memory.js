import express from "express";
import { getAllMemories } from "../controllers/memories.js";

const router = express.Router();

// Get ALl Memories

router.get("/", getAllMemories);

export default router;
