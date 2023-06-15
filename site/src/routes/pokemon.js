var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");


router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /pokemon/cadastrar
   pokemonController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /pokemon/listar
    pokemonController.listar(req, res);
});

module.exports = router;