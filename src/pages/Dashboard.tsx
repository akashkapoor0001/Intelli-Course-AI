import { useState, useEffect, useMemo, ReactNode } from "react";
import CountUp from "react-countup";
import ProfileForm from "@/components/ProfileForm";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, BookmarkPlus, Sparkles, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { getCourseRecommendations } from "@/lib/geminiClient";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<CourseProps[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);
  const [savedCourses, setSavedCourses] = useState<CourseProps[]>([]);
  const COLORS = ["#60A5FA", "#FBBF24", "#F87171"]; // blue, yellow, red

  const toggleSaveCourse = (course: CourseProps) => {
    setSavedCourses((prevSaved) => {
      const alreadySaved = prevSaved.some((c) => c.id === course.id);
      return alreadySaved
        ? prevSaved.filter((c) => c.id !== course.id)
        : [...prevSaved, course];
    });
  };

  useEffect(() => {
    document.title = "Dashboard | IntelliCourse";
    const savedProfile = localStorage.getItem("profileData");
    const savedCourses = localStorage.getItem("recommendedCourses");
    const formSubmitted = localStorage.getItem("formSubmitted");

    if (savedProfile && savedCourses && formSubmitted === "true") {
      setShowForm(false);
      setRecommendedCourses(JSON.parse(savedCourses));
    }
  }, []);

  const handleProfileSubmit = async (profileData: {
    interests: string;
    degree: string;
    cgpa: string;
  }) => {
    setIsLoading(true);
    setShowForm(false);
    setError(null);
    try {
      const courses = await getCourseRecommendations(
        profileData.interests,
        profileData.degree,
        profileData.cgpa
      );
      setRecommendedCourses(courses);
      localStorage.setItem("profileData", JSON.stringify(profileData));
      localStorage.setItem("recommendedCourses", JSON.stringify(courses));
      localStorage.setItem("formSubmitted", "true");
      setShowForm(false);
    } catch (err) {
      console.error("Failed to fetch course recommendations:", err);
      setError("Failed to fetch course recommendations. Please try again.");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const InsightCard = ({
    title,
    value,
  }: {
    title: string;
    value: ReactNode;
  }) => {
    const numericValue = typeof value === "number" ? value : Number(value);

    return (
      <div className="p-6 rounded-xl bg-background/20 backdrop-blur-md flex flex-col items-center text-center space-y-3 shadow-md border border-gray-700">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          {Number.isFinite(numericValue) ? (
            <CountUp start={0} end={numericValue} duration={0.75} separator="," className="text-blue-500" />
          ) : (
            value
          )}
        </motion.div>
      </div>
    );
  };

  const CourseCardSkeleton = () => (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );

  // Insights Calculation
  const insights = useMemo(() => {
    const totalCourses = recommendedCourses.length;

    const keywordCount: Record<string, number> = {};
    let beginnerCount = 0;
    let intermediateCount = 0;
    let advancedCount = 0;

    recommendedCourses.forEach((course) => {
      // Check for keywords/skills field
      const skills = course.skills?.length
        ? course.skills
        : course.keywords?.length
        ? course.keywords
        : [];

      skills.forEach((skill: string) => {
        if (skill.trim()) {
          // Ignore empty strings
          keywordCount[skill] = (keywordCount[skill] || 0) + 1;
        }
      });

      if (course.level === "Beginner") beginnerCount++;
      else if (course.level === "Intermediate") intermediateCount++;
      else if (course.level === "Advanced") advancedCount++;
    });

    // Find most common skill only if there are skills counted
    const mostCommonSkill =
      Object.keys(keywordCount).length > 0
        ? Object.keys(keywordCount).sort(
            (a, b) => keywordCount[b] - keywordCount[a]
          )[0]
        : "No skills available";

    return {
      totalCourses,
      mostCommonSkill,
      beginnerCount,
      intermediateCount,
      advancedCount,
    };
  }, [recommendedCourses]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header />
      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        {showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="max-w-3xl text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                Discover Your Perfect Learning Path
              </h1>
              <p className="text-lg text-muted-foreground">
                Let our AI match you with courses that align with your academic
                goals and interests.
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <ProfileForm onProfileSubmit={handleProfileSubmit} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-3xl font-bold text-gradient">
                  Your Personalized Course Recommendations
                </h1>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("profileData");
                  localStorage.removeItem("recommendedCourses");
                  localStorage.removeItem("formSubmitted");
                  setRecommendedCourses([]);
                  setShowForm(true);
                }}
                className="px-3 py-1.5 text-sm font-medium text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
              >
                ← Back to Profile Form
              </button>
            </div>

            <Separator className="my-4" />

            {error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : (
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-background/10 backdrop-blur-lg">
                  <TabsTrigger value="all" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> All Courses
                  </TabsTrigger>
                  <TabsTrigger
                    value="saved"
                    className="flex items-center gap-2"
                  >
                    <BookmarkPlus className="h-4 w-4" /> Saved Courses
                  </TabsTrigger>
                  <TabsTrigger
                    value="insights"
                    className="flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors duration-200 p-2 rounded-lg"
                  >
                    <BarChart3 className="h-4 w-4" /> Insights
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[...Array(6)].map((_, i) => (
                        <CourseCardSkeleton key={i} />
                      ))}
                    </div>
                  ) : recommendedCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recommendedCourses.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CourseCard
                            {...course}
                            onSave={toggleSaveCourse}
                            isSaved={savedCourses.some(
                              (c) => c.id === course.id
                            )}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground py-6">
                      No courses found for your profile.
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="saved" className="mt-6">
                  {savedCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {savedCourses.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CourseCard
                            {...course}
                            onSave={toggleSaveCourse}
                            isSaved={true}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        You haven't saved any courses yet.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="insights" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  >
                    {/* Left Side: Insight Cards */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        <InsightCard
                          title="Total Courses"
                          value={Number(insights.totalCourses)}
                        />

                        <InsightCard
                          title="Top Skill"
                          value={
                            <span className="text-red-600">
                              {insights.mostCommonSkill}
                            </span>
                          }
                        />
                        <InsightCard
                          title="Beginner Courses"
                          value={Number(insights.beginnerCount)}
                        />
                        <InsightCard
                          title="Intermediate Courses"
                          value={Number(insights.intermediateCount)}
                        />
                        <InsightCard
                          title="Advanced Courses"
                          value={Number(insights.advancedCount)}
                        />
                      </div>
                    </div>

                    {/* Right Side: Charts */}
                    <div className="bg-background/20 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-700">
                      <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
                        Course % Levels
                      </h2>

                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={[
                              {
                                name: "Beginner",
                                value: insights.beginnerCount,
                              },
                              {
                                name: "Intermediate",
                                value: insights.intermediateCount,
                              },
                              {
                                name: "Advanced",
                                value: insights.advancedCount,
                              },
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label={({ name, percent }) =>
                              `${name}: ${(percent * 100).toFixed(0)}%`
                            } // ✨ Better labels on pie slices
                            dataKey="value"
                          >
                            {COLORS.map((color, index) => (
                              <Cell key={`cell-${index}`} fill={color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value, name) => [
                              `${value} Courses`,
                              `${name}`,
                            ]} // ✨ Cleaner tooltip format
                            contentStyle={{
                              backgroundColor: "#1f2937", // dark background
                              borderRadius: "8px",
                              border: "none",
                              color: "#fff",
                            }}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>

                      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4 text-center">
                        Difficulty Level Overview
                      </h2>

                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                          data={[
                            {
                              name: "Beginner",
                              Courses: insights.beginnerCount,
                            },
                            {
                              name: "Intermediate",
                              Courses: insights.intermediateCount,
                            },
                            {
                              name: "Advanced",
                              Courses: insights.advancedCount,
                            },
                          ]}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, "dataMax"]} />
                          <Tooltip
                            formatter={(value) => [`${value} Courses`]} // ✨ Better hover
                            contentStyle={{
                              backgroundColor: "#1f2937", // dark background
                              borderRadius: "8px",
                              border: "none",
                              color: "#fff",
                            }}
                          />
                          <Legend />
                          <Bar
                            dataKey="Courses"
                            fill="#60A5FA"
                            radius={[10, 10, 0, 0]}
                            isAnimationActive={true} // Animation is active by default
                            animationDuration={1500} // Animation duration in milliseconds
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
