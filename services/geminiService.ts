import { GoogleGenAI, Type } from "@google/genai";
import { ProjectIdea, GeneratorParams } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectIdea = async (params: GeneratorParams): Promise<ProjectIdea> => {
  const prompt = `
    Sen kıdemli bir yazılım mimarısın. Aşağıdaki kriterlere uygun, geliştiriciler için detaylı bir "Side Project" veya "Portfolio Project" fikri oluştur.
    
    Kriterler:
    - Rol/Alan: ${params.role}
    - Teknoloji Stack İsteği: ${params.techStack || "En uygun modern teknolojileri seç"}
    - Zorluk Seviyesi: ${params.difficulty}
    
    Çıktı Formatı (JSON):
    - title: Projenin havalı teknik ismi (İngilizce).
    - description: Projenin ne olduğu ve hangi mimari kalıpları kullandığı (Türkçe).
    - why: "Neden Yapmalısın?" açıklaması. Bu projeyi yapmanın kariyerine veya teknik bilgisine katkısını anlatan profesyonel bir cümle (Türkçe).
    - tags: Kullanılacak teknolojilerin listesi (örn: React, Redis, Docker).
    - difficulty: Zorluk seviyesi (KOLAY, ORTA, veya ZOR).
    
    Lütfen yanıtı saf JSON olarak ver.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            why: { type: Type.STRING },
            tags: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            difficulty: { type: Type.STRING } // Will map to enum manually to be safe
          },
          required: ["title", "description", "why", "tags", "difficulty"]
        }
      }
    });

    const data = JSON.parse(response.text || "{}");
    
    return {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      why: data.why,
      tags: data.tags,
      difficulty: data.difficulty as any,
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Proje fikri oluşturulamadı. Lütfen tekrar deneyin.");
  }
};