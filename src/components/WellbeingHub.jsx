import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Heart, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  Brain, 
  Smile,
  Moon,
  Coffee,
  Activity,
  MessageCircle,
  Phone,
  Shield,
  Target,
  Calendar,
  Zap,
  Users,
  BookOpen,
  Headphones
} from "lucide-react";

export function WellbeingHub() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState("focus"); // focus, short-break, long-break
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds

  const wellnessStats = [
    { label: "Focus Sessions", value: "23", change: "+5 this week", icon: Target, color: "blue" },
    { label: "Meditation Streaks", value: "7 days", change: "Personal best!", icon: Brain, color: "green" },
    { label: "Mood Score", value: "8.2/10", change: "+0.5 this week", icon: Smile, color: "yellow" },
    { label: "Sleep Quality", value: "Good", change: "7.2 hrs avg", icon: Moon, color: "purple" },
  ];

  const focusTimerModes = [
    { id: "focus", label: "Focus", duration: 25, color: "bg-blue-500" },
    { id: "short-break", label: "Short Break", duration: 5, color: "bg-green-500" },
    { id: "long-break", label: "Long Break", duration: 15, color: "bg-purple-500" },
  ];

  const meditationSessions = [
    {
      id: 1,
      title: "Morning Energy Boost",
      duration: "10 minutes",
      type: "Guided Meditation",
      difficulty: "Beginner",
      narrator: "Dr. Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      tags: ["Energy", "Morning", "Motivation"],
      rating: 4.8,
      completed: 1240
    },
    {
      id: 2,
      title: "Stress Relief for Students",
      duration: "15 minutes",
      type: "Breathing Exercise",
      difficulty: "Beginner",
      narrator: "Meditation Expert",
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop",
      tags: ["Stress Relief", "Anxiety", "Calm"],
      rating: 4.9,
      completed: 2100
    },
    {
      id: 3,
      title: "Focus & Concentration",
      duration: "20 minutes",
      type: "Mindfulness",
      difficulty: "Intermediate",
      narrator: "Dr. Meditation Guru",
      thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=200&fit=crop",
      tags: ["Focus", "Concentration", "Productivity"],
      rating: 4.7,
      completed: 890
    },
    {
      id: 4,
      title: "Sleep Preparation",
      duration: "25 minutes",
      type: "Sleep Meditation",
      difficulty: "All Levels",
      narrator: "Sleep Specialist",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      tags: ["Sleep", "Relaxation", "Night"],
      rating: 4.8,
      completed: 1560
    }
  ];

  const mentalHealthResources = [
    {
      type: "Crisis Support",
      title: "National Suicide Prevention Helpline",
      contact: "9152987821",
      availability: "24/7",
      description: "Immediate help for crisis situations",
      icon: Phone,
      urgent: true
    },
    {
      type: "Counseling",
      title: "Student Counseling Services",
      contact: "Book Appointment",
      availability: "Mon-Fri 9AM-6PM",
      description: "Professional counseling for students",
      icon: MessageCircle,
      urgent: false
    },
    {
      type: "Peer Support",
      title: "Student Mental Health Community",
      contact: "Join Group",
      availability: "Always Open",
      description: "Connect with other students for support",
      icon: Users,
      urgent: false
    },
    {
      type: "Self-Help",
      title: "Mental Health Resources Library",
      contact: "Access Resources",
      availability: "24/7",
      description: "Articles, videos, and self-help tools",
      icon: BookOpen,
      urgent: false
    }
  ];

  const moodTracker = [
    { day: "Mon", mood: 7, energy: 6, stress: 4 },
    { day: "Tue", mood: 8, energy: 7, stress: 3 },
    { day: "Wed", mood: 6, energy: 5, stress: 6 },
    { day: "Thu", mood: 9, energy: 8, stress: 2 },
    { day: "Fri", mood: 8, energy: 7, stress: 3 },
    { day: "Sat", mood: 9, energy: 9, stress: 2 },
    { day: "Sun", mood: 8, energy: 8, stress: 3 },
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    const selectedMode = focusTimerModes.find(mode => mode.id === timerMode);
    setTimeLeft(selectedMode.duration * 60);
  };

  const getMoodColor = (mood) => {
    if (mood >= 8) return "bg-green-500";
    if (mood >= 6) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "text-green-600 bg-green-50";
      case "Intermediate": return "text-yellow-600 bg-yellow-50";
      case "Advanced": return "text-red-600 bg-red-50";
      default: return "text-blue-600 bg-blue-50";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Wellbeing Hub</h1>
          <p className="text-gray-600">Take care of your mental health and productivity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Activity className="w-4 h-4" />
            Weekly Report
          </Button>
          <Button className="gap-2 bg-red-600 hover:bg-red-700">
            <Phone className="w-4 h-4" />
            Emergency Support
          </Button>
        </div>
      </div>

      {/* Wellness Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {wellnessStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className={`text-xs text-${stat.color}-600`}>
                      {stat.change}
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

      <Tabs defaultValue="focus" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="focus">Focus Timer</TabsTrigger>
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="mood">Mood Tracker</TabsTrigger>
          <TabsTrigger value="support">Mental Health</TabsTrigger>
        </TabsList>

        {/* Focus Timer */}
        <TabsContent value="focus" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Pomodoro Focus Timer
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6">
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 144 144">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 64}`}
                      strokeDashoffset={`${2 * Math.PI * 64 * (1 - timeLeft / (25 * 60))}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold">{formatTime(timeLeft)}</div>
                    <div className="text-sm text-gray-600 capitalize">{timerMode.replace('-', ' ')}</div>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <Button onClick={toggleTimer} className="gap-2">
                    {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isTimerRunning ? 'Pause' : 'Start'}
                  </Button>
                  <Button variant="outline" onClick={resetTimer} className="gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </Button>
                </div>

                <div className="flex gap-2">
                  {focusTimerModes.map((mode) => (
                    <Button
                      key={mode.id}
                      variant={timerMode === mode.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setTimerMode(mode.id);
                        setTimeLeft(mode.duration * 60);
                        setIsTimerRunning(false);
                      }}
                      className="gap-2"
                    >
                      <div className={`w-3 h-3 rounded-full ${mode.color}`}></div>
                      {mode.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Today's Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Completed Sessions</p>
                      <p className="text-xs text-gray-600">Great progress today!</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">4</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Focus Time</span>
                      <span className="font-medium">1h 40m</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Break Time</span>
                      <span className="font-medium">20m</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Productivity Score</span>
                      <span className="font-medium text-green-600">85%</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-600 mb-2">Weekly Goal Progress</p>
                    <Progress value={68} className="mb-1" />
                    <p className="text-xs text-gray-600">17/25 sessions this week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Meditation */}
        <TabsContent value="meditation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Guided Meditation Sessions
              </CardTitle>
              <p className="text-sm text-gray-600">Reduce stress and improve focus with guided meditation</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {meditationSessions.map((session) => (
                  <div key={session.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={session.thumbnail} 
                        alt={session.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs bg-white/90">
                          {session.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge variant="secondary" className="text-xs bg-black/70 text-white">
                          {session.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{session.title}</h3>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                        <Badge className={`text-xs ${getDifficultyColor(session.difficulty)}`}>
                          {session.difficulty}
                        </Badge>
                        <span>By {session.narrator}</span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Smile className="w-3 h-3" />
                          {session.rating}/5.0
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {session.completed} completed
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {session.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button size="sm" className="w-full gap-2">
                        <Headphones className="w-3 h-3" />
                        Start Session
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mood Tracker */}
        <TabsContent value="mood" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smile className="w-5 h-5" />
                  Weekly Mood Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moodTracker.map((day, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{day.day}</span>
                        <span className="text-sm text-gray-600">{day.mood}/10</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 w-12">Mood</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getMoodColor(day.mood)}`}
                            style={{ width: `${day.mood * 10}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 w-12">Energy</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${day.energy * 10}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 w-12">Stress</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-red-500"
                            style={{ width: `${day.stress * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Log Today's Mood</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">How are you feeling today?</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <button
                          key={num}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white text-xs font-medium transition-colors"
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Energy Level</label>
                    <div className="flex gap-2">
                      {['Low', 'Medium', 'High'].map((level) => (
                        <Button key={level} variant="outline" size="sm" className="flex-1">
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">What's affecting your mood?</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Studies', 'Work', 'Social', 'Health', 'Family', 'Other'].map((factor) => (
                        <Button key={factor} variant="outline" size="sm">
                          {factor}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <Activity className="w-4 h-4" />
                    Log Mood
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Mental Health Support */}
        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Mental Health Support & Resources
              </CardTitle>
              <p className="text-sm text-gray-600">Professional support and resources for your mental wellbeing</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mentalHealthResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div key={index} className={`border rounded-lg p-4 ${resource.urgent ? 'border-red-200 bg-red-50' : 'hover:shadow-md'} transition-shadow`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${resource.urgent ? 'bg-red-100' : 'bg-gray-100'}`}>
                          <Icon className={`w-5 h-5 ${resource.urgent ? 'text-red-600' : 'text-gray-600'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-sm">{resource.title}</h3>
                            {resource.urgent && (
                              <Badge variant="destructive" className="text-xs">
                                Emergency
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-600">
                                <span className="font-medium">{resource.availability}</span>
                              </p>
                            </div>
                            <Button 
                              size="sm" 
                              variant={resource.urgent ? "destructive" : "outline"}
                              className="gap-2"
                            >
                              <Icon className="w-3 h-3" />
                              {resource.contact}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Remember</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• It's okay to not be okay sometimes</li>
                  <li>• Seeking help is a sign of strength, not weakness</li>
                  <li>• Your mental health is just as important as your physical health</li>
                  <li>• Small steps towards self-care can make a big difference</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}