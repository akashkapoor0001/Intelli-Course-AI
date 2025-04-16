import { useState, useEffect } from 'react';
import ProfileForm from '@/components/ProfileForm';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, BookmarkPlus, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock course data
const mockCourses: CourseProps[] = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    provider: "Stanford University",
    description: "This course provides a broad introduction to machine learning, data mining, and statistical pattern recognition.",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.8,
    tags: ["Machine Learning", "Data Science", "AI"],
    url: "#",
    gradientClass: "card-gradient-1"
  },
  {
    id: 2,
    title: "Modern Web Development",
    provider: "University of Michigan",
    description: "Learn the basics of web development with a focus on front-end frameworks and responsive design.",
    level: "Beginner",
    duration: "6 weeks",
    rating: 4.6,
    tags: ["Web Development", "JavaScript", "React"],
    url: "#",
    gradientClass: "card-gradient-2"
  },
  {
    id: 3,
    title: "Data Science with Python",
    provider: "IBM",
    description: "Learn how to analyze data using Python and its powerful libraries such as pandas, NumPy, and Matplotlib.",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.5,
    tags: ["Python", "Data Analysis", "Statistics"],
    url: "#",
    gradientClass: "card-gradient-3"
  },
  {
    id: 4,
    title: "Business Analytics for Decision Making",
    provider: "Wharton School",
    description: "Develop skills to analyze data for making better business decisions in various domains.",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.7,
    tags: ["Business", "Analytics", "Decision Making"],
    url: "#",
    gradientClass: "card-gradient-4"
  }
];

const Dashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<CourseProps[]>([]);
  
  useEffect(() => {
    document.title = "Dashboard | CourseCompass";
  }, []);

  const handleProfileSubmit = (profileData: { interests: string; degree: string; cgpa: string }) => {
    setIsLoading(true);
    
    // Simulate API call to get AI recommendations
    setTimeout(() => {
      setRecommendedCourses(mockCourses);
      setShowForm(false);
      setIsLoading(false);
    }, 2000);
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
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <CourseCardSkeleton key={i} />
                    ))}
                  </div>
                ) : (
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
                )}
              </TabsContent>
              
              <TabsContent value="saved" className="mt-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You haven't saved any courses yet.</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </main>
    </div>
  );
};

// Skeleton loader for course cards
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
