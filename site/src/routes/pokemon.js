var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");


router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /pokemon/cadastrar
   pokemonController.cadastrar(req, res);
});

router.post("/enviar", function (req, res) {
    // função a ser chamada quando acessar /pokemon/cadastrar
   pokemonController.enviar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /pokemon/listar
    pokemonController.listar(req, res);
});

function editar(novaDescricao, nome) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucao = `
        UPDATE usuario SET descricao = '${novaDescricao}' WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = router;