"use client";
import { useState } from "react";
import { getLearningRoadmap } from "@/lib/geminiClient";
import RoadmapDisplay from "@/components/RoadmapDisplay";

const RoadmapGenerator = () => {
  const [degree, setDegree] = useState("BTech in CS");
  const [cgpa, setCgpa] = useState(8.2);
  const [goal, setGoal] = useState("Frontend Developer");
  const [interests, setInterests] = useState("React, UI/UX, Animation");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<{ [month: string]: string[] } | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await getLearningRoadmap(
        degree,
        cgpa.toString(),
        goal,
        interests.split(",").map((i) => i.trim()).join(", ")
      );
      setRoadmap(result);
    } catch (error) {
      alert("Failed to generate roadmap.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Roadmap Generator</h1>

      <div className="space-y-4 max-w-lg">
        <input value={degree} onChange={(e) => setDegree(e.target.value)} placeholder="Degree"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <input value={cgpa} type="number" onChange={(e) => setCgpa(parseFloat(e.target.value))} placeholder="CGPA"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Career Goal"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <input value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="Interests (comma separated)"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
        <button onClick={handleGenerate}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold">
          {loading ? "Generating..." : "Generate Roadmap"}
        </button>
      </div>

      {roadmap && <RoadmapDisplay roadmap={roadmap} />}
    </div>
  );
};

export default RoadmapGenerator;
