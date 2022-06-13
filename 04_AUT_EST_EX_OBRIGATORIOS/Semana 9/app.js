import express from "express";
import path from "path";

const PORT = 3000;
const app = express();
app.use(express.static("./exs"))

export const router = express.Router();
const __dirname = path.resolve();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/ex1", (req, res) => {
  res.sendFile(path.join(__dirname, "./exs/ex1/inteli1.html"));
  });

app.get("/ex2", (req, res) => {
    res.sendFile(path.join(__dirname, "./exs/ex2/inteli2.html"));
  });

app.get("/ex3", (req, res) => {
    res.sendFile(path.join(__dirname, "./exs/ex3/inteli3.html"));
  });

app.get("/ex4", (req, res) => {
    res.sendFile(path.join(__dirname, "./exs/ex4/inteli4.html"));
  });

app.get("/ex5", (req, res) => {
    res.sendFile(path.join(__dirname, "./exs/ex5/inteli5.html"));
  });


  app.listen(PORT, () =>
  console.log(`Server running on port http://127.0.0.1:${PORT}`)
);