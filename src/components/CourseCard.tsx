// components/CourseCard.tsx
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, BookOpen, Star, GraduationCap } from "lucide-react";

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

const tagColors = ["bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-yellow-500", "bg-green-500"];


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
    <div className="flex flex-col h-full">
  <div className="flex flex-col justify-between flex-grow">
    <Card
      className={`group relative flex flex-col justify-between h-full overflow-hidden border-white/5 hover:border-white/10 transition-all duration-300 ${gradientClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold text-gradient">{title}</CardTitle>
            <CardDescription className="text-sm font-medium flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              {provider}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
            {level}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-white/80 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
<Badge
  key={index}
  variant="outline"
  className={`text-white/90 ${tagColors[index % tagColors.length]} bg-opacity-20`}
>
  {tag}
</Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-white/60 pt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>Course</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* External Footer Button that visually matches the card */}
  <div className="border-t border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200">
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 text-gray-400 w-full px-4 py-2"
    style={{
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 500,
      fontSize: '15px',
    }}
  >
    View Course <ExternalLink className="h-4 w-4" />
  </a>
</div>


</div>

  );
};


export default CourseCard;
