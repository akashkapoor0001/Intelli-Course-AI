// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyC7YLdHtW7N3eLIN5IzXtgCCKHb_kSt7-4");

// export const getCourseRecommendations = async (
//   interests: string,
//   degree: string,
//   cgpa: string
// ) => {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

//   const prompt = `
//   You are an AI course recommender.
  
//   Student Profile:
//   - Interests: ${interests}
//   - Degree: ${degree}
//   - CGPA: ${cgpa}
  
//   Suggest **at least 6 real, high-quality courses** from trusted platforms like Coursera, edX, Udemy, FutureLearn, or LinkedIn Learning. 
  
//   Each course must include:
//   - id: unique number
//   - title: A descriptive title of the course
//   - provider: The platform offering the course (e.g., Coursera, Udemy, edX)
//   - short description: A brief summary of the course content
//   - level: One of the following levels: "Beginner", "Intermediate", or "Advanced"
//   - duration: The estimated time to complete (e.g., "6 weeks", "10 hours")
//   - rating: A numeric rating from 1 to 5
//   - tags: A list of relevant course tags (e.g., ["AI", "Machine Learning", "Data Science"])
//   - url: The exact working URL of the course on the platform, without any placeholder or broken link (e.g., a real link from Coursera, edX, Udemy, or similar platforms)
//   - gradientClass: Randomly pick from "card-gradient-1" to "card-gradient-4"
  
//   Make sure the URLs you provide are **real and active** links directly to the course pages on the platforms mentioned above.
  
//   Output the course information in **valid JSON format** only (without markdown or any extra text).
//   `;
  

//   const result = await model.generateContent(prompt);
//   const text = result.response.text();

//   console.log("\n📦 Raw Gemini Response:\n", text);

//   const cleanText = text
//     .replace(/```json\n?/g, "")
//     .replace(/```/g, "")
//     .trim();

//   console.log("\n🧹 Cleaned JSON Text:\n", cleanText);

//   try {
//     const recommendations = JSON.parse(cleanText);
//     console.log("\n✅ Parsed Recommendations:\n", recommendations);
//     return recommendations;
//   } catch (err) {
//     console.error("\n❌ Failed to parse Gemini JSON. Raw content:\n", cleanText);
//     return [];
//   }
// };







import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC7YLdHtW7N3eLIN5IzXtgCCKHb_kSt7-4");

export const getCourseRecommendations = async (
  interests: string,
  degree: string,
  cgpa: string
) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const prompt = `
You are an AI course recommender.

Student Profile:
- Interests: ${interests}
- Degree: ${degree}
- CGPA: ${cgpa}

Suggest **at least 6 real, high-quality courses** from trusted platforms like Coursera, edX, Udemy, FutureLearn, or LinkedIn Learning.

Each course must include:
- id: unique number
- title: A descriptive title of the course
- provider: The platform offering the course (e.g., Coursera, Udemy, edX)
- short description: A brief summary of the course content
- level: One of the following: "Beginner", "Intermediate", or "Advanced"
- duration: Estimated time to complete (e.g., "6 weeks", "10 hours")
- rating: A number from 1 to 5
- tags: A list of relevant course tags (e.g., ["AI", "Machine Learning", "Data Science"])
- skills: A list of specific skills the course teaches (e.g., ["Neural Networks", "Python", "Pandas"])
- keywords: Additional keywords related to the course (e.g., ["ML", "AI", "Deep Learning"])
- url: A real, working URL of the course from the platform
- gradientClass: Randomly choose from "card-gradient-1", "card-gradient-2", "card-gradient-3", or "card-gradient-4"

Output the course data in **valid JSON array format only**, with no markdown, commentary, or extra text.
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  console.log("\n📦 Raw Gemini Response:\n", text);

  const cleanText = text
    .replace(/```json\n?/g, "")
    .replace(/```/g, "")
    .trim();

  console.log("\n🧹 Cleaned JSON Text:\n", cleanText);

  try {
    const recommendations = JSON.parse(cleanText);
    console.log("\n✅ Parsed Recommendations:\n", recommendations);
    return recommendations;
  } catch (err) {
    console.error("\n❌ Failed to parse Gemini JSON. Raw content:\n", cleanText);
    return [];
  }
};
