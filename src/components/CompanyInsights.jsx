import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  TrendingUp, 
  Building2, 
  DollarSign, 
  Users, 
  Calendar,
  BarChart3,
  PieChart,
  Glasses,
  MapPin,
  Award,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Eye
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

export function CompanyInsights() {
  const hiringTrends = [
    { month: 'Jan', openings: 120, applications: 3200 },
    { month: 'Feb', openings: 145, applications: 3800 },
    { month: 'Mar', openings: 180, applications: 4500 },
    { month: 'Apr', openings: 210, applications: 5200 },
    { month: 'May', openings: 190, applications: 4800 },
    { month: 'Jun', openings: 220, applications: 5600 },
  ];

  const skillDemand = [
    { skill: 'JavaScript', demand: 85, growth: 12 },
    { skill: 'Python', demand: 78, growth: 8 },
    { skill: 'React', demand: 72, growth: 15 },
    { skill: 'Node.js', demand: 65, growth: 10 },
    { skill: 'AWS', demand: 68, growth: 18 },
    { skill: 'Docker', demand: 45, growth: 22 },
    { skill: 'TypeScript', demand: 52, growth: 25 },
    { skill: 'Machine Learning', demand: 38, growth: 30 },
  ];

  const salaryData = [
    { experience: 'Fresher', min: 300000, max: 600000, average: 450000 },
    { experience: '1-2 years', min: 500000, max: 1000000, average: 750000 },
    { experience: '2-4 years', min: 800000, max: 1600000, average: 1200000 },
    { experience: '4-6 years', min: 1200000, max: 2500000, average: 1850000 },
    { experience: '6+ years', min: 2000000, max: 4000000, average: 3000000 },
  ];

  const companyCategories = [
    { name: 'Tech Giants', value: 35, color: '#3B82F6' },
    { name: 'Startups', value: 40, color: '#10B981' },
    { name: 'Consulting', value: 15, color: '#F59E0B' },
    { name: 'Finance', value: 10, color: '#EF4444' },
  ];

  const topCompanies = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=40&h=40&fit=crop",
      openings: 45,
      avgSalary: "₹28 LPA",
      growth: 12,
      difficulty: "Hard",
      acceptance: "2.3%"
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=40&h=40&fit=crop",
      openings: 38,
      avgSalary: "₹25 LPA",
      growth: 8,
      difficulty: "Hard",
      acceptance: "3.1%"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=40&h=40&fit=crop",
      openings: 52,
      avgSalary: "₹22 LPA",
      growth: 15,
      difficulty: "Medium",
      acceptance: "4.2%"
    },
    {
      name: "Flipkart",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop",
      openings: 29,
      avgSalary: "₹18 LPA",
      growth: 20,
      difficulty: "Medium",
      acceptance: "6.8%"
    },
    {
      name: "Zomato",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
      openings: 22,
      avgSalary: "₹15 LPA",
      growth: 25,
      difficulty: "Easy",
      acceptance: "12.5%"
    }
  ];

  const virtualTours = [
    {
      company: "Google Bangalore",
      type: "360° Office Tour",
      duration: "12 minutes",
      views: 45000,
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      features: ["Work Spaces", "Cafeteria", "Recreation Areas", "Meeting Rooms"]
    },
    {
      company: "Microsoft Hyderabad",
      type: "VR Experience",
      duration: "8 minutes",
      views: 32000,
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop",
      features: ["Innovation Labs", "Collaboration Spaces", "Employee Wellness"]
    },
    {
      company: "Amazon Mumbai",
      type: "Interactive Tour",
      duration: "15 minutes",
      views: 28000,
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop",
      features: ["Fulfillment Center", "Tech Hub", "Employee Facilities"]
    }
  ];

  const formatSalary = (amount) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Hard": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Company Insights Dashboard</h1>
          <p className="text-gray-600">Market trends, salary insights, and virtual office tours</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Glasses className="w-4 h-4" />
            VR/AR Tours
          </Button>
          <Button className="gap-2">
            <BarChart3 className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">1,240</p>
                <p className="text-xs text-gray-600">Active Companies</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +12% this month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">5,680</p>
                <p className="text-xs text-gray-600">Open Positions</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +18% this month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">₹12.5L</p>
                <p className="text-xs text-gray-600">Avg. Fresher Salary</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +8% this year
                </p>
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
                <p className="text-2xl font-semibold">68%</p>
                <p className="text-xs text-gray-600">Hiring Growth</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  vs last year
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Hiring Trends</TabsTrigger>
          <TabsTrigger value="skills">Skill Demand</TabsTrigger>
          <TabsTrigger value="salary">Salary Insights</TabsTrigger>
          <TabsTrigger value="tours">Virtual Tours</TabsTrigger>
        </TabsList>

        {/* Hiring Trends */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Hiring Trends (Last 6 Months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={hiringTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="openings" stroke="#3B82F6" strokeWidth={2} name="Job Openings" />
                    <Line type="monotone" dataKey="applications" stroke="#10B981" strokeWidth={2} name="Applications" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Company Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <RechartsPieChart>
                    <Pie
                      data={companyCategories}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                    >
                      {companyCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {companyCategories.map((category, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: category.color }}></div>
                      <span className="text-xs">{category.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Companies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Top Hiring Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {topCompanies.map((company, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">{company.name}</h4>
                        <Badge className={`text-xs ${getDifficultyColor(company.difficulty)}`}>
                          {company.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Openings:</span>
                        <span className="font-medium">{company.openings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg Salary:</span>
                        <span className="font-medium text-green-600">{company.avgSalary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Growth:</span>
                        <span className="font-medium text-blue-600">+{company.growth}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Acceptance:</span>
                        <span className="font-medium">{company.acceptance}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full mt-3 gap-2">
                      <Eye className="w-3 h-3" />
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Demand */}
        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                In-Demand Skills & Growth Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillDemand.map((skill, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{skill.skill}</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{skill.demand}% demand</span>
                        <span className={`text-sm font-medium ${skill.growth > 15 ? 'text-green-600' : skill.growth > 10 ? 'text-yellow-600' : 'text-blue-600'}`}>
                          +{skill.growth}% growth
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Progress value={skill.demand} className="h-2" />
                      </div>
                      <div className="w-20">
                        <div className={`h-2 rounded-full ${skill.growth > 15 ? 'bg-green-500' : skill.growth > 10 ? 'bg-yellow-500' : 'bg-blue-500'}`} 
                             style={{ width: `${Math.min(skill.growth * 3, 100)}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Salary Insights */}
        <TabsContent value="salary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Salary Prediction by Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="experience" />
                  <YAxis tickFormatter={formatSalary} />
                  <Tooltip formatter={(value) => formatSalary(value)} />
                  <Bar dataKey="min" fill="#93C5FD" name="Minimum" />
                  <Bar dataKey="average" fill="#3B82F6" name="Average" />
                  <Bar dataKey="max" fill="#1E40AF" name="Maximum" />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h4 className="font-semibold mb-2">Your Salary Prediction</h4>
                <p className="text-sm text-gray-600 mb-3">Based on your current skills and experience level</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-blue-700">₹4.5 - 6.5 LPA</p>
                    <p className="text-xs text-gray-600">Fresher Level</p>
                  </div>
                  <Button size="sm" className="gap-2">
                    <TrendingUp className="w-3 h-3" />
                    Improve Skills
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Virtual Tours */}
        <TabsContent value="tours" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Glasses className="w-5 h-5" />
                AR/VR Virtual Office Tours
              </CardTitle>
              <p className="text-sm text-gray-600">Experience company workspaces before you apply</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {virtualTours.map((tour, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={tour.thumbnail} 
                        alt={tour.company}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs bg-white/90">
                          {tour.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="text-xs bg-black/70 text-white">
                          {tour.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{tour.company}</h3>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {tour.views.toLocaleString()} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {tour.rating}/5.0
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {tour.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 gap-2">
                          <Glasses className="w-3 h-3" />
                          Start Tour
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <MapPin className="w-3 h-3" />
                          Location
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}