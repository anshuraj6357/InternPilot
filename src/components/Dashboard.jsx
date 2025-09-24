import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  Calendar,
  ArrowRight
} from "lucide-react";

export function Dashboard() {
  const quickStats = [
    { label: "Profile Completion", value: "85%", change: "+5%", icon: Target, color: "blue" },
    { label: "Skills Matched", value: "12/15", change: "+2", icon: TrendingUp, color: "green" },
    { label: "Applications Sent", value: "8", change: "+3", icon: Calendar, color: "orange" },
    { label: "XP This Week", value: "340", change: "+120", icon: Award, color: "purple" },
  ];

  const recentActivities = [
    { action: "Applied to", company: "Google Summer Internship", time: "2 hours ago", type: "application" },
    { action: "Completed", company: "React Basics Course", time: "1 day ago", type: "learning" },
    { action: "Participated in", company: "Daily Coding Challenge", time: "2 days ago", type: "contest" },
    { action: "Connected with", company: "Senior Dev Mentor", time: "3 days ago", type: "mentorship" },
  ];

  const upcomingDeadlines = [
    { title: "TCS Internship Application", daysLeft: 3, urgent: true },
    { title: "JavaScript Assessment", daysLeft: 5, urgent: false },
    { title: "Mock Interview Session", daysLeft: 7, urgent: false },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Welcome back, Arjun! 👋</h1>
            <p className="text-blue-100">You're doing great! Keep up the momentum and reach your goals.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">1,240</div>
            <div className="text-blue-200 text-sm">Total XP Points</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className={`text-xs text-${stat.color}-600 flex items-center gap-1`}>
                      <TrendingUp className="w-3 h-3" />
                      {stat.change} this week
                    </p>
                  </div>
                  <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'application' ? 'bg-blue-500' :
                    activity.type === 'learning' ? 'bg-green-500' :
                    activity.type === 'contest' ? 'bg-orange-500' : 'bg-purple-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="text-gray-600">{activity.action}</span>
                      <span className="font-medium ml-1">{activity.company}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-3 rounded-lg border border-gray-200">
                  <p className="font-medium text-sm mb-2">{deadline.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">
                      {deadline.daysLeft} days left
                    </span>
                    <Badge variant={deadline.urgent ? "destructive" : "secondary"} className="text-xs">
                      {deadline.urgent ? "Urgent" : "Upcoming"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              View All Deadlines
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-blue-50 hover:border-blue-200">
              <Target className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Find Internships</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-green-50 hover:border-green-200">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span className="text-sm">Learn Skills</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-orange-50 hover:border-orange-200">
              <Award className="w-6 h-6 text-orange-600" />
              <span className="text-sm">Take Contest</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-purple-50 hover:border-purple-200">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-sm">Find Mentor</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}