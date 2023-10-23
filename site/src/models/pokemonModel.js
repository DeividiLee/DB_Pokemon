var database = require("../database/config")

function listar() {
    var instrucao = `
        create view mostrar as SELECT * FROM team_pokemon join todos_pokemon on idPokemon = fkPokemon join usuario on id = fkusuario where id = 1;
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
        INSERT INTO mensagem (mensagem) VALUES (${mensagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// function editar(novaDescricao, idAviso) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
//     var instrucao = `
//         UPDATE usuario SET descricao = '${novaDescricao}',  WHERE id = ${idAviso};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    cadastrar,
    enviar,
    listar,
    // editar
};

//// SELECT * FROM team_pokemon join todos_pokemon on idPokemon = fkPokemon;
// SELECT * FROM team_pokemon join todos_pokemon on idPokemon = fkPokemon ORDER BY idteam DESC LIMIT 1 ;