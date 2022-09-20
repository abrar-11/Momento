import express from "express";
import colors from "colors";
import MemoryRoutes from "./routes/memory.js";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database.js";

dotenv.config();

// Connecting to Database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "5mb" }));

app.use(cors());


app.use("/memory", MemoryRoutes);

app.listen(port, () =>
   console.log(`Server is listening on port ${port}`.underline.magenta)
);
