import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import MemoryRoutes from "./routes/memory.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/memory", MemoryRoutes);

app.listen(port, () =>
   console.log(`Server is listening on port ${port}`.bgCyan)
);
