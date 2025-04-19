// lib/geminiClient.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC7YLdHtW7N3eLIN5IzXtgCCKHb_kSt7-4"); // Replace with your Gemini API key

export const getCourseRecommendations = async (interests: string, degree: string, cgpa: string) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const prompt = `
  Based on the following student profile, suggest 4 high-quality online courses. 
  Include fields: title, provider, description, level, duration, rating (1-5), tags (array), url (as "#"), and a gradientClass (choose from: "card-gradient-1" to "card-gradient-4").

  Student Profile:
  Interests: ${interests}
  Degree: ${degree}
  CGPA: ${cgpa}

  Response format should be a JSON array of course objects like:
  [
    {
      "id": 1,
      "title": "Course Title",
      "provider": "Provider Name",
      "description": "Short description",
      "level": "Beginner | Intermediate | Advanced",
      "duration": "6 weeks",
      "rating": 4.5,
      "tags": ["tag1", "tag2"],
      "url": "#",
      "gradientClass": "card-gradient-1"
    },
    ...
  ]
  `;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  
  // 🧹 Clean Markdown formatting
  const cleanText = text
    .replace(/```json\n?/g, '')
    .replace(/```/g, '')
    .trim();
  
  const recommendations = JSON.parse(cleanText);
  return recommendations;  
};
