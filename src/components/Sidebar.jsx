import { 
  User, 
  Search, 
  TrendingUp, 
  Trophy, 
  Building2, 
  Users, 
  Award, 
  Route,
  Heart,
  Home
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Sidebar({ activeTab, setActiveTab }) {
  const navigationItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'internships', label: 'Find Internships', icon: Search },
    { id: 'skills', label: 'Skill Development', icon: TrendingUp },
    { id: 'contests', label: 'Contests & Practice', icon: Trophy },
    { id: 'insights', label: 'Company Insights', icon: Building2 },
    { id: 'mentorship', label: 'Peer Mentorship', icon: Users },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'roadmap', label: 'Career Roadmap', icon: Route },
    { id: 'wellbeing', label: 'Wellbeing Hub', icon: Heart },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IS</span>
          </div>
          <div>
            <h1 className="font-semibold">InternShip</h1>
            <p className="text-xs text-gray-500">Skill Gap Analysis</p>
          </div>
        </div>
      </div>

      {/* User Profile Summary */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">Arjun Kumar</p>
            <p className="text-xs text-gray-500">CSE Student</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">85% Profile Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 h-11 ${
                activeTab === item.id ? 'bg-blue-50 text-blue-700 border-blue-200' : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          );
        })}
      </nav>

      {/* Bottom Stats */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-blue-700">This Week</span>
            <span className="text-xs text-blue-600">🔥 3 day streak</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">XP Points</span>
              <span className="font-medium text-blue-700">1,240</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Rank</span>
              <span className="font-medium text-blue-700">#23 in College</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
