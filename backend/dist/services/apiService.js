"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obterDadosExternos = obterDadosExternos;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const API_URL = "https://randomuser.me/api/?results=5";
async function obterDadosExternos() {
  try {
    const response = await _axios.default.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter os dados da API externa");
  }
}