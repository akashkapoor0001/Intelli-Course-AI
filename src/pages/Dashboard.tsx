import { useState, useEffect } from 'react';
import ProfileForm from '@/components/ProfileForm';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, BookmarkPlus, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCourseRecommendations } from '@/lib/geminiClient';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<CourseProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Dashboard | CourseCompass";
  }, []);

  const handleProfileSubmit = async (profileData: { interests: string; degree: string; cgpa: string }) => {
    setIsLoading(true);
    setShowForm(false);
    setError(null);
    try {
      const courses = await getCourseRecommendations(profileData.interests, profileData.degree, profileData.cgpa);
      setRecommendedCourses(courses);
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
                Let our AI match you with courses that align with your academic goals and interests.
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
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold text-gradient">
                Your Personalized Course Recommendations
              </h1>
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
                  <TabsTrigger value="saved" className="flex items-center gap-2">
                    <BookmarkPlus className="h-4 w-4" /> Saved Courses
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
                          <CourseCard {...course} />
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
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You haven't saved any courses yet.</p>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </motion.div>
        )}
      </main>
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

export default Dashboard;
