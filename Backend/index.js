import express from "express";
import "dotenv/config";
import chatBotRouter from "./src/routes/chatbot.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "https://www.vikramk.space"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server Started Successfully!");
});
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

app.use("/api", chatBotRouter);
