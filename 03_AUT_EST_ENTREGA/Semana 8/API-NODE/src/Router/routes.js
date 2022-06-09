import express from "express";
import path from "path";

export const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Curriculo com js/screens/index.html"));
});
