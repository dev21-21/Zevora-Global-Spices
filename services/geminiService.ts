import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeImage = async (base64Image: string): Promise<string> => {
  try {
    // Clean base64 string if it contains the data URL prefix
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg', // Assuming jpeg for simplicity, API handles most standard types
              data: cleanBase64
            }
          },
          {
            text: "You are an expert AI Food Quality Inspector for a premium spice export company. Analyze this image. If it contains spices, herbs, or agricultural produce, identify them specifically (including variety if possible), estimate their visual quality grade (Premium, Standard, Low), and list potential culinary uses or export markets. If it is not a food item, briefly describe what it is and state 'NO SPICE DETECTED'. Format the output as a technical inspection log with headers."
          }
        ]
      }
    });

    return response.text || "No analysis generated.";
  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw new Error("Failed to analyze image. Please try again.");
  }
};
