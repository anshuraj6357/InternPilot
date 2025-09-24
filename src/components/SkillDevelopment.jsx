import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award, 
  TrendingUp, 
  Users, 
  Globe, 
  Wifi,
  Star,
  CheckCircle,
  Target,
  Zap,
  Download
} from "lucide-react";

export function SkillDevelopment() {
  const [activeLanguage, setActiveLanguage] = useState("english");

  const learningPaths = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Complete path from beginner to advanced web developer",
      progress: 65,
      totalModules: 12,
      completedModules: 8,
      duration: "6 months",
      difficulty: "Intermediate",
      students: 45000,
      rating: 4.8,
      xpReward: 1200,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      nextModule: "Building REST APIs with Express.js"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn data analysis, visualization, and ML algorithms",
      progress: 30,
      totalModules: 15,
      completedModules: 4,
      duration: "8 months",
      difficulty: "Advanced",
      students: 32000,
      rating: 4.9,
      xpReward: 1500,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
      nextModule: "Data Preprocessing Techniques"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native",
      progress: 15,
      totalModules: 10,
      completedModules: 1,
      duration: "4 months",
      difficulty: "Beginner",
      students: 28000,
      rating: 4.7,
      xpReward: 800,
      skills: ["React Native", "JavaScript", "Mobile UI/UX"],
      nextModule: "React Native Fundamentals"
    }
  ];

  const resourceCards = [
    {
      title: "Advanced JavaScript Concepts",
      type: "Video Course",
      duration: "3h 45m",
      language: "English",
      difficulty: "Intermediate",
      rating: 4.8,
      students: 12500,
      price: "Free",
      provider: "FreeCodeCamp",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      tags: ["JavaScript", "ES6", "Async/Await"],
      offline: true
    },
    {
      title: "React Hooks सीखें",
      type: "Video Course",
      duration: "2h 30m",
      language: "Hindi",
      difficulty: "Beginner",
      rating: 4.6,
      students: 8900,
      price: "Free",
      provider: "CodeWithHarry",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      tags: ["React", "Hooks", "State Management"],
      offline: true
    },
    {
      title: "API Development with Node.js",
      type: "Interactive Tutorial",
      duration: "4h 15m",
      language: "English",
      difficulty: "Intermediate",
      rating: 4.7,
      students: 15600,
      price: "₹499",
      provider: "Coding Ninjas",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
      tags: ["Node.js", "Express", "REST API"],
      offline: false
    },
    {
      title: "Python Basics - தமிழில்",
      type: "Video Course",
      duration: "5h 20m",
      language: "Tamil",
      difficulty: "Beginner",
      rating: 4.5,
      students: 6700,
      price: "Free",
      provider: "Tamil Programming",
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
      tags: ["Python", "Programming Basics"],
      offline: true
    },
    {
      title: "Database Design in తెలుగు",
      type: "Written Guide",
      duration: "2h 45m",
      language: "Telugu",
      difficulty: "Intermediate",
      rating: 4.4,
      students: 4200,
      price: "Free",
      provider: "Telugu Tech",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop",
      tags: ["SQL", "Database", "Design Patterns"],
      offline: true
    },
    {
      title: "Git & GitHub Essentials",
      type: "Interactive Lab",
      duration: "1h 30m",
      language: "English",
      difficulty: "Beginner",
      rating: 4.9,
      students: 25000,
      price: "Free",
      provider: "GitHub Learning Lab",
      thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
      tags: ["Git", "Version Control", "Collaboration"],
      offline: false
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first module", earned: true, xp: 50 },
    { name: "Week Warrior", description: "Learn for 7 consecutive days", earned: true, xp: 100 },
    { name: "JavaScript Ninja", description: "Master JavaScript fundamentals", earned: true, xp: 200 },
    { name: "React Rookie", description: "Build your first React app", earned: false, xp: 150 },
    { name: "API Architect", description: "Create your first REST API", earned: false, xp: 250 },
    { name: "Community Helper", description: "Help 5 fellow learners", earned: false, xp: 100 },
  ];

  const getLanguageResources = () => {
    if (activeLanguage === "english") return resourceCards.filter(r => r.language === "English");
    if (activeLanguage === "hindi") return resourceCards.filter(r => r.language === "Hindi");
    if (activeLanguage === "regional") return resourceCards.filter(r => ["Tamil", "Telugu"].includes(r.language));
    return resourceCards;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Skill Development Dashboard</h1>
          <p className="text-gray-600">Personalized learning paths to boost your career</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Wifi className="w-4 h-4" />
            Offline Mode
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Resources
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">13</p>
                <p className="text-xs text-gray-600">Modules Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">1,240</p>
                <p className="text-xs text-gray-600">XP Points Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">28h</p>
                <p className="text-xs text-gray-600">Learning Time</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">3</p>
                <p className="text-xs text-gray-600">Skills Mastered</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Paths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Personalized Learning Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div key={path.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">{path.title}</h3>
                    <p className="text-sm text-gray-600">{path.description}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {path.difficulty}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{path.completedModules}/{path.totalModules} modules</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {path.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {path.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {path.rating}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {path.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{path.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Next: {path.nextModule}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gap-2">
                      <Play className="w-3 h-3" />
                      Continue
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Zap className="w-3 h-3" />
                      {path.xpReward} XP
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Learning Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeLanguage} onValueChange={setActiveLanguage} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Languages</TabsTrigger>
              <TabsTrigger value="english">English</TabsTrigger>
              <TabsTrigger value="hindi">हिंदी</TabsTrigger>
              <TabsTrigger value="regional">Regional</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeLanguage} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getLanguageResources().map((resource, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={resource.thumbnail} 
                        alt={resource.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {resource.offline && (
                          <Badge variant="secondary" className="text-xs bg-white/90">
                            <Download className="w-3 h-3 mr-1" />
                            Offline
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="text-xs bg-black/70 text-white">
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-2">{resource.title}</h3>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {resource.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {resource.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {resource.students.toLocaleString()}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-green-600">{resource.price}</p>
                          <p className="text-xs text-gray-600">{resource.provider}</p>
                        </div>
                        <Button size="sm" className="gap-2">
                          <Play className="w-3 h-3" />
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Achievements & Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievements & Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`border rounded-lg p-4 ${achievement.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${achievement.earned ? 'bg-green-100' : 'bg-gray-200'}`}>
                    {achievement.earned ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Award className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.name}</h4>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Zap className="w-3 h-3 text-yellow-600" />
                      <span className="text-xs font-medium text-yellow-600">{achievement.xp} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}