
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ProfileFormProps {
  onProfileSubmit: (profileData: {
    interests: string;
    degree: string;
    cgpa: string;
  }) => void;
}

const ProfileForm = ({ onProfileSubmit }: ProfileFormProps) => {
  const [interests, setInterests] = useState('');
  const [degree, setDegree] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate CGPA
    const cgpaNum = parseFloat(cgpa);
    if (isNaN(cgpaNum) || cgpaNum < 0 || cgpaNum > 10.0) {
      toast({
        title: "Invalid CGPA",
        description: "Please enter a valid CGPA between 0.0 and 4.0",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Process form data
    setTimeout(() => {
      onProfileSubmit({ interests, degree, cgpa });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl border shadow-lg animate-fade-in">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl gradient-heading">Complete Your Profile</CardTitle>
          <CardDescription>
            Share your academic background and interests to get personalized course recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="interests" className="text-sm font-medium">Your Interests</label>
            <Textarea 
              id="interests" 
              placeholder="e.g., Machine Learning, Web Development, Data Science, Psychology, Literature..." 
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="min-h-[100px]"
              required
            />
            <p className="text-xs text-muted-foreground">
              List topics, subjects, or fields you're interested in learning about
            </p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="degree" className="text-sm font-medium">Current/Target Degree</label>
            <Select value={degree} onValueChange={setDegree} required>
              <SelectTrigger id="degree">
                <SelectValue placeholder="Select your degree" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                <SelectItem value="master">Master's Degree</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
                <SelectItem value="certificate">Certificate Program</SelectItem>
                <SelectItem value="self-paced">Self-Paced Learning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="cgpa" className="text-sm font-medium">Current CGPA (0.0 - 10.0)</label>
            <Input 
              id="cgpa" 
              type="text" 
              placeholder="e.g., 8.0" 
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : "Get Recommendations"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProfileForm;
