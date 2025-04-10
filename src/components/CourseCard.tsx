
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, BookOpen, Star } from "lucide-react";

export interface CourseProps {
  id: number;
  title: string;
  provider: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  tags: string[];
  url: string;
  gradientClass: string;
}

const CourseCard = ({ 
  title, 
  provider, 
  description, 
  level, 
  duration, 
  rating, 
  tags, 
  url,
  gradientClass 
}: CourseProps) => {
  return (
    <Card className={`w-full border hover:shadow-md transition-all duration-300 ${gradientClass} animate-fade-in-right`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
            <CardDescription className="text-sm font-medium">{provider}</CardDescription>
          </div>
          <Badge className="bg-primary/80">{level}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-white/50 hover:bg-white/80">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>Course</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Course <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
