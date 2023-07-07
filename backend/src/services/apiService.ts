import axios from "axios";

export async function obterDadosExternos(): Promise<any[]> {
  try {
    const response = await axios.get(
      "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json"
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Erro ao obter os dados da API externa");
  }
}
