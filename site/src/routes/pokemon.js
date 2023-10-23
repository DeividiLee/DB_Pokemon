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

router.post("/editar", function (req, res) {
    // função a ser chamada quando acessar /pokemon/cadastrar
   pokemonController.editar(req, res);
});

module.exports = router;