var pokemonModel = require("../models/pokemonModel");

function listar(req, res) {
    pokemonModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            console.log('DENGTRO DA CONTROLLER LISTAR')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var fkPokemon = req.body.pokemonServer;
    var idUsuario = req.body.usuarioServer;

    if (fkPokemon == undefined) {
        res.status(400).send("Seu pokemon está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } 

    pokemonModel.cadastrar(fkPokemon, idUsuario).then(function(resposta){
        res.status(200).send("pokemon criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// function editar(req, res) {
//     var novaDescricao = req.body.descricao;
    

//     pokemonModel.editar(novaDescricao)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );

// }
function enviar(req, res) {
    var mensagem = req.body.mensagemServer

    if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    } 

    pokemonModel.enviar(mensagem).then(function(resposta){
        res.status(200).send("mensagem criada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    listar,
    cadastrar,
    // editar,
    enviar
}