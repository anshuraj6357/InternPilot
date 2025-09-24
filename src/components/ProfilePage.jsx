import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Upload, 
  Download, 
  ExternalLink, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  BookOpen,
  Award,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export function ProfilePage() {
  const appliedInternships = [
    { 
      company: "Google", 
      role: "Software Engineering Intern", 
      status: "In Review", 
      skillMatch: 87, 
      appliedDate: "2 days ago",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=40&h=40&fit=crop"
    },
    { 
      company: "Microsoft", 
      role: "Frontend Developer Intern", 
      status: "Application Sent", 
      skillMatch: 92, 
      appliedDate: "5 days ago",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=40&h=40&fit=crop"
    },
    { 
      company: "Amazon", 
      role: "Full Stack Developer", 
      status: "Interview Scheduled", 
      skillMatch: 78, 
      appliedDate: "1 week ago",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=40&h=40&fit=crop"
    },
  ];

  const skills = [
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "React", level: 78, category: "Frontend" },
    { name: "Node.js", level: 65, category: "Backend" },
    { name: "Python", level: 72, category: "Programming" },
    { name: "MongoDB", level: 60, category: "Database" },
    { name: "Git", level: 80, category: "Tools" },
  ];

  const missingSkills = [
    { name: "TypeScript", importance: "High", resources: 3 },
    { name: "Docker", importance: "Medium", resources: 5 },
    { name: "AWS", importance: "High", resources: 4 },
    { name: "System Design", importance: "High", resources: 6 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="w-4 h-4" />
                Update Photo
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-semibold mb-2">Arjun Kumar</h1>
                  <p className="text-gray-600 mb-3">Computer Science Engineering Student</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Mumbai, Maharashtra
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      arjun.kumar@college.edu
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      3rd Year
                    </div>
                  </div>
                </div>
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Export Profile
                </Button>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-700">Profile Completion</span>
                  <span className="text-sm font-medium text-blue-700">85%</span>
                </div>
                <Progress value={85} className="mb-2" />
                <p className="text-xs text-blue-600">Complete your profile to get better internship matches!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resume Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Resume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">Current Resume: resume_v3.pdf</p>
              <p className="text-xs text-gray-500 mb-4">Uploaded 2 weeks ago</p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button size="sm" className="w-full gap-2">
                  <Upload className="w-4 h-4" />
                  Upload New
                </Button>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Resume Tips</p>
                  <p className="text-xs text-yellow-700">Your resume is missing key skills for tech internships.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Skills Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">{skill.category}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={skill.level} className="flex-1" />
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applied Internships */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Applied Internships ({appliedInternships.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appliedInternships.map((internship, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <img 
                      src={internship.logo} 
                      alt={internship.company}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{internship.role}</h4>
                      <p className="text-sm text-gray-600">{internship.company}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge 
                          variant={
                            internship.status === "In Review" ? "secondary" :
                            internship.status === "Interview Scheduled" ? "default" : "outline"
                          }
                          className="text-xs"
                        >
                          {internship.status}
                        </Badge>
                        <span className="text-xs text-gray-500">{internship.appliedDate}</span>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Skill Match</span>
                          <span className="font-medium text-green-600">{internship.skillMatch}%</span>
                        </div>
                        <Progress value={internship.skillMatch} className="mt-1 h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Missing Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Skills to Improve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {missingSkills.map((skill, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                    <Badge 
                      variant={skill.importance === "High" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {skill.importance} Priority
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{skill.resources} learning resources available</p>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink className="w-3 h-3" />
                    Start Learning
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}