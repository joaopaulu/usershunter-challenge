import axios from "axios";

export async function obterDadosExternos(): Promise<any[]> {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?inc=name,phone,email,location,picture&results=10"
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter os dados da API externa");
  }
}
