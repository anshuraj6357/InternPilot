import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Building2, 
  Filter,
  Heart,
  ExternalLink,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export function InternshipMatching() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    duration: "",
    stipend: "",
    company: ""
  });

  const internships = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineering Intern",
      location: "Bangalore, India",
      duration: "3 months",
      stipend: "₹80,000/month",
      skillMatch: 87,
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=60&h=60&fit=crop",
      description: "Work on cutting-edge ML and AI projects with the Google Search team.",
      requirements: ["JavaScript", "Python", "React", "Node.js"],
      missingSkills: ["TypeScript", "GCP"],
      type: "Tech",
      posted: "2 days ago",
      applicants: 1200,
      saved: false
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Developer Intern",
      location: "Hyderabad, India",
      duration: "6 months",
      stipend: "₹75,000/month",
      skillMatch: 92,
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=60&h=60&fit=crop",
      description: "Build user interfaces for Microsoft Teams and Office applications.",
      requirements: ["React", "TypeScript", "CSS", "JavaScript"],
      missingSkills: ["Azure"],
      type: "Tech",
      posted: "1 week ago",
      applicants: 890,
      saved: true
    },
    {
      id: 3,
      company: "Amazon",
      role: "Full Stack Developer Intern",
      location: "Mumbai, India",
      duration: "4 months",
      stipend: "₹70,000/month",
      skillMatch: 78,
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=60&h=60&fit=crop",
      description: "Develop scalable web applications for Amazon's e-commerce platform.",
      requirements: ["Java", "Spring Boot", "React", "AWS"],
      missingSkills: ["Java", "Spring Boot", "AWS"],
      type: "Tech",
      posted: "3 days ago",
      applicants: 1500,
      saved: false
    },
    {
      id: 4,
      company: "Flipkart",
      role: "Product Design Intern",
      location: "Bangalore, India",
      duration: "3 months",
      stipend: "₹60,000/month",
      skillMatch: 65,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
      description: "Design user experiences for India's leading e-commerce platform.",
      requirements: ["Figma", "UI/UX", "Prototyping", "User Research"],
      missingSkills: ["Figma", "User Research", "Prototyping"],
      type: "Design",
      posted: "5 days ago",
      applicants: 650,
      saved: false
    },
    {
      id: 5,
      company: "Zomato",
      role: "Mobile App Developer Intern",
      location: "Delhi, India",
      duration: "4 months",
      stipend: "₹65,000/month",
      skillMatch: 71,
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop",
      description: "Build features for Zomato's food delivery mobile application.",
      requirements: ["React Native", "JavaScript", "Mobile Development"],
      missingSkills: ["React Native", "Mobile Development"],
      type: "Tech",
      posted: "1 day ago",
      applicants: 780,
      saved: false
    },
    {
      id: 6,
      company: "Paytm",
      role: "Data Science Intern",
      location: "Noida, India",
      duration: "6 months",
      stipend: "₹55,000/month",
      skillMatch: 68,
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=60&h=60&fit=crop",
      description: "Analyze user behavior and build ML models for financial services.",
      requirements: ["Python", "SQL", "Machine Learning", "Pandas"],
      missingSkills: ["Machine Learning", "SQL", "Pandas"],
      type: "Data",
      posted: "1 week ago",
      applicants: 920,
      saved: false
    }
  ];

  const getSkillMatchColor = (match) => {
    if (match >= 80) return "text-green-600 bg-green-50";
    if (match >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !selectedFilters.location || internship.location.includes(selectedFilters.location);
    const matchesDuration = !selectedFilters.duration || internship.duration.includes(selectedFilters.duration);
    const matchesStipend = !selectedFilters.stipend || (
      selectedFilters.stipend === "high" && parseInt(internship.stipend.replace(/[₹,/month]/g, '')) >= 70000 ||
      selectedFilters.stipend === "medium" && parseInt(internship.stipend.replace(/[₹,/month]/g, '')) >= 50000 && parseInt(internship.stipend.replace(/[₹,/month]/g, '')) < 70000 ||
      selectedFilters.stipend === "low" && parseInt(internship.stipend.replace(/[₹,/month]/g, '')) < 50000
    );
    
    return matchesSearch && matchesLocation && matchesDuration && matchesStipend;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Find Your Perfect Internship</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and career goals</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
          <Button variant="outline" className="gap-2">
            <Heart className="w-4 h-4" />
            Saved (3)
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search internships, companies, or roles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              <Select value={selectedFilters.location} onValueChange={(value) => setSelectedFilters({...selectedFilters, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedFilters.duration} onValueChange={(value) => setSelectedFilters({...selectedFilters, duration: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 months</SelectItem>
                  <SelectItem value="4">4 months</SelectItem>
                  <SelectItem value="6">6 months</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedFilters.stipend} onValueChange={(value) => setSelectedFilters({...selectedFilters, stipend: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Stipend" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">₹70K+ /month</SelectItem>
                  <SelectItem value="medium">₹50-70K /month</SelectItem>
                  <SelectItem value="low">Below ₹50K</SelectItem>
                </SelectContent>
              </Select>
              
              <Button className="gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{filteredInternships.length} internships found</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Sort by:</span>
          <Select defaultValue="match">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">Best Match</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="stipend">Highest Stipend</SelectItem>
              <SelectItem value="company">Company Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInternships.map((internship) => (
          <Card key={internship.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={internship.logo} 
                  alt={internship.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{internship.role}</h3>
                      <p className="text-gray-600 text-sm">{internship.company}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                      <Heart className={`w-4 h-4 ${internship.saved ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Skill Match */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Skill Match</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getSkillMatchColor(internship.skillMatch)}`}>
                    {internship.skillMatch}%
                  </span>
                </div>
                <Progress value={internship.skillMatch} className="mb-2" />
                {internship.missingSkills.length > 0 && (
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-orange-700 font-medium">Missing Skills:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {internship.missingSkills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {internship.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {internship.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  {internship.stipend}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  {internship.applicants} applicants
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{internship.description}</p>

              {/* Required Skills */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {internship.requirements.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Apply Now
                </Button>
                <Button variant="outline" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Improve Skills
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 text-center">Posted {internship.posted}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="gap-2">
          <Building2 className="w-4 h-4" />
          Load More Internships
        </Button>
      </div>
    </div>
  );
}