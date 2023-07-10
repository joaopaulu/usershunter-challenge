"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obterLista = obterLista;
var _apiService = require("@services/apiService");
async function obterLista(req, res) {
  try {
    const lista = await (0, _apiService.obterDadosExternos)();
    res.json(lista);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erro ao obter a lista"
    });
  }
}