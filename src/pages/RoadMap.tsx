"use client";
import { useState } from "react";
import { getLearningRoadmap } from "@/lib/geminiClient";
import RoadmapDisplay from "@/components/RoadmapDisplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import IntelliCourseAIHeader from "@/components/IntelliCourseAI_Header";

const RoadmapGenerator = () => {
  const [degree, setDegree] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [goal, setGoal] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<{ [month: string]: string[] } | null>(
    null
  );
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const cgpaNum = parseFloat(cgpa);
    if (isNaN(cgpaNum) || cgpaNum < 0 || cgpaNum > 10.0) {
      toast({
        title: "Invalid CGPA",
        description: "Please enter a valid CGPA between 0.0 and 10.0",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const result = await getLearningRoadmap(
        degree,
        cgpaNum.toString(),
        goal,
        interests
          .split(",")
          .map((i) => i.trim())
          .join(", ")
      );
      setRoadmap(result);
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Unable to generate roadmap. Please try again later.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <IntelliCourseAIHeader />
      <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-10">
          {/* Left Side GIF and Title */}
          <div className="relative flex-2 flex justify-center items-center w-full lg:w-1/2 mt-3 gap-4">
            {/* Rotated ROADMAP Text – Only visible on desktop */}
            <div className="hidden lg:block absolute -left-40 top-1/2 -translate-y-1/2 text-5xl font-extrabold tracking-widest text-white rotate-[-90deg] whitespace-nowrap">
              ROADMAP
            </div>

            {/* Image – Visible on all screens */}
            <img
              src="/assets/RM.png" // ✅ Make sure this is in the public/assets folder
              alt="Roadmap Generator"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg"
            />
          </div>

          {/* Right Side Form */}
          <div className="flex-1 mt-16">
            <Card className="w-full border shadow-lg animate-fade-in">
              <form onSubmit={handleGenerate}>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-heading">
                    AI-Powered Roadmap Generator
                  </CardTitle>
                  <CardDescription>
                    Enter your academic background and goals to receive a
                    personalized month-wise learning roadmap.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="degree" className="text-sm font-medium">
                      Current/Target Degree
                    </label>
                    <Select value={degree} onValueChange={setDegree} required>
                      <SelectTrigger id="degree">
                        <SelectValue placeholder="Select your degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">
                          Bachelor's (B.Tech)
                        </SelectItem>
                        <SelectItem value="mtech">Master's (M.Tech)</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="self-paced">
                          Self-Paced Learning
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cgpa" className="text-sm font-medium">
                      Current CGPA (0.0 - 10.0)
                    </label>
                    <Input
                      id="cgpa"
                      type="text"
                      placeholder="e.g., 8.2"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="goal" className="text-sm font-medium">
                      Career Goal
                    </label>
                    <Input
                      id="goal"
                      type="text"
                      placeholder="e.g., Frontend Developer, Data Scientist"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interests" className="text-sm font-medium">
                      Learning Interests
                    </label>
                    <Textarea
                      id="interests"
                      placeholder="e.g., React, UI/UX, Animation"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      className="min-h-[100px]"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Separate multiple interests using commas.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Generating Roadmap..." : "Generate Roadmap"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>

        {roadmap && (
          <div className="w-full max-w-4xl mt-10">
            <RoadmapDisplay roadmap={roadmap} />
          </div>
        )}
      </div>
    </>
  );
};

export default RoadmapGenerator;
