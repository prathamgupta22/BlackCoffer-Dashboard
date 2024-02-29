import express from "express";
import cors from "cors";
import dataRouter from "./routes/data.routes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//routes
app.get("/", (req, res) => {
  res.send({ message: "HELLO" });
});

app.use("/api/data", dataRouter);

export { app };
