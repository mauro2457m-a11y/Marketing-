import { GoogleGenAI } from "@google/genai";

export async function getAIResponse(userQuestion: string, productContext: string, personality: string): Promise<string> {
  // IMPORTANT: The API key is injected automatically by the platform.
  // DO NOT add any logic to handle the API key.
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Erro: Chave de API não configurada. Por favor, configure a variável de ambiente API_KEY.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `${personality}

    Aqui estão os detalhes completos do curso para você usar como base:
    ---
    ${productContext}
    ---

    Pergunta do usuário: "${userQuestion}"

    Responda à pergunta do usuário com base estritamente nas informações fornecidas. Se a resposta não estiver claramente nas informações, diga educadamente que você não tem essa informação e sugira que entrem em contato com o suporte.
    `;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    if (response && response.text) {
        return response.text;
    } else {
        return "Desculpe, não consegui gerar uma resposta. Tente novamente.";
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao me conectar com a IA. Por favor, tente novamente mais tarde.";
  }
}