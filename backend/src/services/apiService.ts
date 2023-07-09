import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=5";

export async function obterDadosExternos(): Promise<any[]> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter os dados da API externa");
  }
}
