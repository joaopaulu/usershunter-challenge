import { obterDadosExternos } from "@services/apiService";
import { Request, Response } from "express";

export async function obterLista(req: Request, res: Response): Promise<void> {
  try {
    const lista = await obterDadosExternos();
    res.json(lista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter a lista" });
  }
}
