// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyC7YLdHtW7N3eLIN5IzXtgCCKHb_kSt7-4");

// export const getCourseRecommendations = async (
//   interests: string,
//   degree: string,
//   cgpa: string
// ) => {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

//   const prompt = `
// You are an AI course recommender.

// Student Profile:
// - Interests: ${interests}
// - Degree: ${degree}
// - CGPA: ${cgpa}

// Suggest **at least 6 real, high-quality courses** from trusted platforms like Coursera, edX, Udemy, FutureLearn, or LinkedIn Learning.

// Each course must include:
// - id: unique number
// - title: A descriptive title of the course
// - provider: The platform offering the course (e.g., Coursera, Udemy, edX)
// - short description: A brief summary of the course content
// - level: One of the following: "Beginner", "Intermediate", or "Advanced"
// - duration: Estimated time to complete (e.g., "6 weeks", "10 hours")
// - rating: A number from 1 to 5
// - tags: A list of relevant course tags (e.g., ["AI", "Machine Learning", "Data Science"])
// - skills: A list of specific skills the course teaches (e.g., ["Neural Networks", "Python", "Pandas"])
// - keywords: Additional keywords related to the course (e.g., ["ML", "AI", "Deep Learning"])
// - url: A real, working URL of the course from the platform
// - gradientClass: Randomly choose from "card-gradient-1", "card-gradient-2", "card-gradient-3", or "card-gradient-4"

// Output the course data in **valid JSON array format only**, with no markdown, commentary, or extra text.
// `;

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

// ---------------- Course Recommendations ----------------
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
- title
- provider
- short description
- level
- duration
- rating (1-5)
- tags
- skills
- keywords
- url
- gradientClass: choose from "card-gradient-1", "card-gradient-2", "card-gradient-3", "card-gradient-4"

Output the course data in **valid JSON array format only**, no markdown or extra text.
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const cleanText = text.replace(/```json\n?|```/g, "").trim();

  try {
    const recommendations = JSON.parse(cleanText);
    return recommendations;
  } catch (err) {
    console.error("❌ Failed to parse course JSON:\n", cleanText);
    return [];
  }
};



// ---------------- Learning Roadmap ----------------
export const getLearningRoadmap = async (
  degree: string,
  cgpa: string,
  goal: string,
  interests: string
) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const prompt = `
  You are an expert AI career guide.
  
  Student Profile:
  - Degree: ${degree}
  - CGPA: ${cgpa}
  - Goal: ${goal}
  - Interests: ${interests}
  
  Create a personalized 3-month learning roadmap for the student.
  
  Each month should include a list of 3 specific and actionable learning goals or activities.
  
  For each activity, provide:
  1. A short description of the learning goal
  2. The name of a **real online course** that fulfills that goal
  3. A direct **link** to the course (from platforms like Coursera, edX, Udemy, or similar)
  
  Respond in **valid JSON object format only** like this:
  {
    "Month 1": [
      {
        "goal": "Learn the fundamentals of Machine Learning",
        "course_name": "Machine Learning by Andrew Ng",
        "course_link": "https://www.coursera.org/learn/machine-learning"
      },
      ...
    ],
    "Month 2": [ ... ],
    "Month 3": [ ... ]
  }
  Ensure all course links are accessible and relevant.
  `;
  

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const cleanText = text.replace(/```json\n?|```/g, "").trim();

  try {
    const roadmap = JSON.parse(cleanText);
    return roadmap;
  } catch (err) {
    console.error("❌ Failed to parse roadmap JSON:\n", cleanText);
    return {
      "Month 1": [],
      "Month 2": [],
      "Month 3": []
    };
  }
};
