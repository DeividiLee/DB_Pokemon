var pokemonModel = require("../models/pokemonModel");

function listar(req, res) {
    pokemonModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idTeam = req.body.idTeam;

    if (idTeam == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    pokemonModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("pokemon criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}