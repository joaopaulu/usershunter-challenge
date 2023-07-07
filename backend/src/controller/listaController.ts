import { Request, Response } from "express";
import { obterDadosExternos } from "../services/apiService";

export async function obterLista(req: Request, res: Response): Promise<void> {
  try {
    const lista = await obterDadosExternos();
    res.json(lista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter a lista" });
  }
}
