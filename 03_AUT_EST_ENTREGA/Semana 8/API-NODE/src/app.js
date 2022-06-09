//import { openDb } from './configDB.js';
import { 
    createTable, 
    insertProjeto,
    updateProjeto,
    getProjeto,
    selectProjeto,
    deleteProjeto, 
} from './Controller/Projeto.js';

import { router } from './router/routes.js';
import axios from 'axios';
import express from 'express';

const app = express();
app.use(express.json());
const PORT = 3000;

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("Curriculo"))

createTable();

app.use("/", router);

// "/projeto" CRUD sem informar o modulo

app.get('/projeto', async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let project = await getProjeto(req.body);
    res.json(project);
});

app.post('/projeto', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    insertProjeto(req.body)
    res.json({
        "statusCode":200
    })
});

// "/projeto/:id CRUD informando o modulo"

app.get('/projeto/:id', async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let project = await selectProjeto(req.params.id);
    res.json(project);
});

app.put('/projeto/:id', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.params && !req.params.id){
        res.json({
            "statusCode":"400",
            "msg":"Favor informar o módulo",
        })
    }
    else{
        updateProjeto(req.body, req.params.id)
        res.json({
            "statusCode":200
       })
    }
});

app.delete('/projeto/:id', async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let project = await deleteProjeto(req.params.id);
    res.json(project);
});


app.listen(PORT, () =>
  console.log(`Server running on port http://127.0.0.1:${PORT}`)
);