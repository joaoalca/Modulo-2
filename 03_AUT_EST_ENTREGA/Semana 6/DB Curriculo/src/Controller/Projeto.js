import { openDb  } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Projeto ( modulo INTEGER PRIMARY KEY, cliente TEXT, proposta TEXT, carga INTEGER)')
    })
}

export async function insertProjeto(Projeto){
    openDb().then(db=>{
        db.run('INSERT INTO Projeto (cliente, proposta, carga) VALUES (?,?,?)', [Projeto.cliente, Projeto.proposta, Projeto.carga])
    })
}

export async function updateProjeto(Projeto){
    openDb().then(db=>{
        db.run('UPDATE Projeto SET cliente=?, proposta=?, carga=? WHERE modulo=?', [Projeto.cliente, Projeto.proposta, Projeto.carga, Projeto.modulo])
    })
}
export async function getProjeto(id) {
    return openDb().then(async (db) => {
      const res = await db.all("SELECT * FROM Projeto WHERE modulo=?", [id]);
      return res;
    });
  }