import express from "express";
import dotenv from "dotenv";
import { serve } from "inngest/express";
import { inngest } from "./inngest";
import { functions } from "./events";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions: functions }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});