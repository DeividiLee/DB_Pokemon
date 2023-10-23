var database = require("../database/config")

function listar() {
    var instrucao = `
        
        select * from mostrar
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkPokemon, idUsuario) {
    var instrucao = `
        INSERT INTO team_pokemon (fkPokemon, fkUsuario) VALUES (${fkPokemon}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function enviar(mensagem) {
    var instrucao = `
        INSERT INTO geracao (geracao) VALUES (${mensagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function editar(nome,id) {
    var instrucao = `
        Update usuario set nome = '${nome}' where id = ${id}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    enviar,
    listar,
    editar
};

