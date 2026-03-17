import express from "express";
import cors from "cors";
import { detectIntent } from "./detectIntent.js";
import { responseFlows } from "./responses.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/", (req, res) => {
  res.json({ message: "Safe Conversation API is running" });
});

app.get("/api/chat", (req, res) => {
  res.json({
    message: "This endpoint expects POST requests.",
    example: {
      method: "POST",
      url: "/api/chat",
      body: {
        message: "moi",
        stage: "start",
      },
    },
  });
});

app.post("/api/chat", (req, res) => {
  const { message, stage } = req.body;

  const safeMessage = typeof message === "string" ? message : "";
  const safeStage = stage === "followup" ? "followup" : "start";

  const intent = detectIntent(safeMessage);

  const flow = responseFlows[intent] || responseFlows.neutral;
  const options = flow[safeStage] || flow.start;
  const response = pickRandom(options);

  let nextStage = "followup";

  if (intent === "goodbye" || intent === "not_in_mood") {
    nextStage = "closing";
  }

  res.json({
    userMessage: safeMessage,
    intent,
    stage: safeStage,
    response,
    nextStage,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});