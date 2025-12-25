
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
export const getSeafoodAdvice = async (userPrompt: string) => {
  // Always initialize GoogleGenAI with the API key from process.env as a named parameter
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Ele-Bot', the luxury seafood sommelier for Eleyoyo Seafood Market in Lagos, Nigeria. 
        Your tone is confident, professional, and helpful. 
        You know everything about Shrimps, Prawns, Lobsters, Crabs, and various Fresh Fish available in Ebute Ero.
        You can provide recipes, storage tips, or market information. 
        Eleyoyo is open 24 hours at 131 Adeniji Adele Rd.
        Keep responses concise and elegant.`,
      },
    });

    // response.text is a property, not a method, and directly returns the generated text content.
    return response.text || "The tide is high, but I couldn't find an answer for you. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the ocean. Please call us directly!";
  }
};
