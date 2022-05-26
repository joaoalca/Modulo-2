//import { openDb } from "./configDB";
import 
{ createTable, getProjeto, insertProjeto, updateProjeto } from "./Controller/Projeto.js";

import express from "express";
const app = express();
app.use(express.json());

createTable();

app.get("/show", (req, res) => {//nao esta funcionando
    let project = getProjeto(req.params.id);
    res.json(project);
})

app.post("/insertProjeto", (req, res) => {
    insertProjeto(req.body);
    res.json({
        "StatusCode": 200
    })
})
app.post("/updateProjeto", (req, res) => {
    updateProjeto(req.body);
    res.json({
        "StatusCode": 200
    })
})


app.listen(3000, ()=>console.log("API rodando"))