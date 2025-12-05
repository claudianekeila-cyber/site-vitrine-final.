import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateQuickAudit = async (businessName: string, niche: string): Promise<AuditResult> => {
  try {
    const prompt = `
      Atue como um especialista sênior em SEO Local e Google Meu Negócio.
      O usuário tem um negócio chamado "${businessName}" no nicho de "${niche}".
      
      Gere uma resposta estruturada contendo:
      1. Uma lista concisa de 4 dicas críticas e específicas para melhorar o perfil do Google desse tipo de negócio.
      2. Um breve resumo motivacional (máximo 2 frases) sobre por que estar no topo do Google mudará o faturamento deles.
      
      Mantenha o tom profissional, seguro e persuasivo.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            checklist: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de 4 dicas de otimização"
            },
            summary: {
              type: Type.STRING,
              description: "Resumo motivacional curto"
            }
          },
          required: ["checklist", "summary"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AuditResult;
    }
    
    throw new Error("Resposta vazia da IA");

  } catch (error) {
    console.error("Erro ao gerar auditoria:", error);
    return {
      checklist: [
        "Complete todas as informações de contato.",
        "Adicione fotos de alta qualidade do local.",
        "Solicite avaliações de clientes satisfeitos.",
        "Responda a todas as dúvidas e comentários."
      ],
      summary: "Aparecer bem no Google é fundamental para atrair mais clientes locais."
    };
  }
};