var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM team_pokemon join todos_pokemon on idPokemon = fkPokemon;
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

module.exports = {
    cadastrar,
    listar
};