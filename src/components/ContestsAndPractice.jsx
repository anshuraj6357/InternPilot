import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Zap, 
  Target,
  Medal,
  Mic,
  Video,
  MessageSquare,
  HelpCircle,
  Crown,
  TrendingUp,
  Award
} from "lucide-react";

export function ContestsAndPractice() {
  const [activeTab, setActiveTab] = useState("contests");

  const liveContests = [
    {
      id: 1,
      title: "Daily Coding Challenge #245",
      type: "Algorithm",
      difficulty: "Medium",
      timeLeft: "2h 30m",
      participants: 1250,
      prize: "500 XP + Badge",
      status: "live",
      problems: 3
    },
    {
      id: 2,
      title: "JavaScript Quiz Marathon",
      type: "Quiz",
      difficulty: "Easy",
      timeLeft: "45m",
      participants: 890,
      prize: "300 XP",
      status: "live",
      problems: 20
    },
    {
      id: 3,
      title: "System Design Challenge",
      type: "Design",
      difficulty: "Hard",
      timeLeft: "3h 15m",
      participants: 450,
      prize: "1000 XP + Certificate",
      status: "live",
      problems: 2
    }
  ];

  const upcomingContests = [
    {
      id: 4,
      title: "Weekly Coding Contest #156",
      type: "Algorithm",
      difficulty: "Mixed",
      startsIn: "2 days",
      expectedParticipants: 5000,
      prize: "₹10,000 prize pool",
      problems: 5
    },
    {
      id: 5,
      title: "React Development Sprint",
      type: "Project",
      difficulty: "Intermediate",
      startsIn: "5 days",
      expectedParticipants: 800,
      prize: "Internship Opportunities",
      problems: 1
    }
  ];

  const leaderboards = [
    {
      type: "National",
      myRank: 2847,
      totalUsers: 125000,
      topUsers: [
        { rank: 1, name: "Arpit Sharma", college: "IIT Delhi", points: 15420, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { rank: 2, name: "Priya Patel", college: "IIT Bombay", points: 14890, avatar: "https://images.unsplash.com/photo-1494790108755-2616b332189d?w=40&h=40&fit=crop&crop=face" },
        { rank: 3, name: "Rahul Singh", college: "BITS Pilani", points: 14250, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" }
      ]
    },
    {
      type: "State (Maharashtra)",
      myRank: 156,
      totalUsers: 8500,
      topUsers: [
        { rank: 1, name: "Sneha Kulkarni", college: "COEP Pune", points: 12840, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" },
        { rank: 2, name: "Amit Joshi", college: "VJTI Mumbai", points: 12300, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" },
        { rank: 3, name: "Neha Desai", college: "PICT Pune", points: 11950, avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face" }
      ]
    },
    {
      type: "College",
      myRank: 23,
      totalUsers: 450,
      topUsers: [
        { rank: 1, name: "Vikram Rao", college: "Your College", points: 8940, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { rank: 2, name: "Ananya Gupta", college: "Your College", points: 8650, avatar: "https://images.unsplash.com/photo-1494790108755-2616b332189d?w=40&h=40&fit=crop&crop=face" },
        { rank: 3, name: "Rohan Mehta", college: "Your College", points: 8420, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" }
      ]
    }
  ];

  const mockInterviews = [
    {
      id: 1,
      company: "Google",
      type: "Technical Round",
      difficulty: "Hard",
      duration: "45 minutes",
      topics: ["Data Structures", "Algorithms", "System Design"],
      rating: 4.8,
      attempted: 1240,
      nextSlot: "Today 3:00 PM"
    },
    {
      id: 2,
      company: "Microsoft",
      type: "Behavioral Round",
      difficulty: "Medium",
      duration: "30 minutes",
      topics: ["Leadership", "Problem Solving", "Communication"],
      rating: 4.6,
      attempted: 890,
      nextSlot: "Tomorrow 10:00 AM"
    },
    {
      id: 3,
      company: "Amazon",
      type: "Coding Round",
      difficulty: "Medium",
      duration: "60 minutes",
      topics: ["Dynamic Programming", "Graphs", "Trees"],
      rating: 4.7,
      attempted: 1560,
      nextSlot: "Today 6:00 PM"
    }
  ];

  const communityRooms = [
    {
      id: 1,
      title: "JavaScript Fundamentals Q&A",
      members: 245,
      isLive: true,
      topic: "Closures & Scope",
      moderator: "Senior Dev @Google",
      category: "Learning"
    },
    {
      id: 2,
      title: "System Design Study Group",
      members: 189,
      isLive: true,
      topic: "Microservices Architecture",
      moderator: "SDE-3 @Amazon",
      category: "Discussion"
    },
    {
      id: 3,
      title: "Interview Experiences Sharing",
      members: 156,
      isLive: false,
      topic: "FAANG Interview Tips",
      moderator: "HR @Microsoft",
      category: "Experience"
    },
    {
      id: 4,
      title: "Doubt Solving - Data Structures",
      members: 78,
      isLive: true,
      topic: "Trees & Graphs",
      moderator: "CS Professor",
      category: "Help"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Hard": return "text-red-600 bg-red-50";
      default: return "text-blue-600 bg-blue-50";
    }
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-4 h-4 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-4 h-4 text-gray-400" />;
    if (rank === 3) return <Medal className="w-4 h-4 text-amber-600" />;
    return <span className="w-4 h-4 text-center text-xs font-medium">{rank}</span>;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Contests & Practice Hub</h1>
          <p className="text-gray-600">Compete, learn, and practice with AI-powered interviews</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Trophy className="w-4 h-4" />
            My Achievements
          </Button>
          <Button className="gap-2">
            <Play className="w-4 h-4" />
            Quick Practice
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Trophy className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">47</p>
                <p className="text-xs text-gray-600">Contests Participated</p>
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
                <p className="text-2xl font-semibold">342</p>
                <p className="text-xs text-gray-600">Problems Solved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">#23</p>
                <p className="text-xs text-gray-600">College Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">8</p>
                <p className="text-xs text-gray-600">Badges Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="contests">Live Contests</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboards</TabsTrigger>
          <TabsTrigger value="interviews">Mock Interviews</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {/* Live Contests */}
        <TabsContent value="contests" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-green-600" />
                  Live Contests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liveContests.map((contest) => (
                    <div key={contest.id} className="border rounded-lg p-4 hover:bg-green-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{contest.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">{contest.type}</Badge>
                            <Badge className={`text-xs ${getDifficultyColor(contest.difficulty)}`}>
                              {contest.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            LIVE
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {contest.timeLeft} left
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {contest.participants} participating
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          {contest.prize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {contest.problems} problems
                        </div>
                      </div>

                      <Button size="sm" className="w-full gap-2">
                        <Play className="w-3 h-3" />
                        Join Contest
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Upcoming Contests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingContests.map((contest) => (
                    <div key={contest.id} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{contest.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">{contest.type}</Badge>
                            <Badge className={`text-xs ${getDifficultyColor(contest.difficulty)}`}>
                              {contest.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-blue-600 text-sm font-medium">
                            Starts in {contest.startsIn}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          ~{contest.expectedParticipants} expected
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          {contest.prize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {contest.problems} problems
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Calendar className="w-3 h-3" />
                        Set Reminder
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Leaderboards */}
        <TabsContent value="leaderboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {leaderboards.map((board, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    {board.type} Leaderboard
                  </CardTitle>
                  <div className="text-sm text-gray-600">
                    Your rank: #{board.myRank.toLocaleString()} / {board.totalUsers.toLocaleString()}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {board.topUsers.map((user, userIndex) => (
                      <div key={userIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center justify-center w-6">
                          {getRankIcon(user.rank)}
                        </div>
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-xs text-gray-600">{user.college}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">{user.points.toLocaleString()}</p>
                          <p className="text-xs text-gray-600">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Full Leaderboard
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Mock Interviews */}
        <TabsContent value="interviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                AI Interview Coach
              </CardTitle>
              <p className="text-sm text-gray-600">Practice with our AI-powered interview system that analyzes your voice, video, and responses</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockInterviews.map((interview) => (
                  <div key={interview.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{interview.company} Style</h3>
                        <p className="text-sm text-gray-600">{interview.type}</p>
                      </div>
                      <Badge className={`text-xs ${getDifficultyColor(interview.difficulty)}`}>
                        {interview.difficulty}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Clock className="w-3 h-3" />
                        {interview.duration}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Users className="w-3 h-3" />
                        {interview.attempted} attempted
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Trophy className="w-3 h-3" />
                        {interview.rating}/5.0 rating
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-700 mb-1">Topics covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {interview.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-green-600 font-medium">Next available slot: {interview.nextSlot}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 gap-2">
                          <Video className="w-3 h-3" />
                          Start Interview
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Mic className="w-3 h-3" />
                          Voice Only
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Community */}
        <TabsContent value="community" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Group Discussions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityRooms.filter(room => room.category === "Discussion" || room.category === "Learning").map((room) => (
                    <div key={room.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{room.title}</h3>
                          <p className="text-xs text-gray-600">Topic: {room.topic}</p>
                          <p className="text-xs text-gray-600">Moderator: {room.moderator}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {room.isLive && (
                            <div className="flex items-center gap-1 text-green-600 text-xs">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              LIVE
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Users className="w-3 h-3" />
                          {room.members} members
                        </div>
                        <Button size="sm" variant={room.isLive ? "default" : "outline"} className="gap-2">
                          <MessageSquare className="w-3 h-3" />
                          {room.isLive ? "Join Now" : "Join Room"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Doubt Solving Rooms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityRooms.filter(room => room.category === "Help" || room.category === "Experience").map((room) => (
                    <div key={room.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{room.title}</h3>
                          <p className="text-xs text-gray-600">Topic: {room.topic}</p>
                          <p className="text-xs text-gray-600">Moderator: {room.moderator}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {room.isLive && (
                            <div className="flex items-center gap-1 text-green-600 text-xs">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              LIVE
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Users className="w-3 h-3" />
                          {room.members} members
                        </div>
                        <Button size="sm" variant={room.isLive ? "default" : "outline"} className="gap-2">
                          <HelpCircle className="w-3 h-3" />
                          {room.isLive ? "Get Help" : "Join Room"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Ask a Question</h4>
                  <p className="text-xs text-gray-600 mb-3">Get help from seniors and mentors in real-time</p>
                  <Button size="sm" className="gap-2">
                    <MessageSquare className="w-3 h-3" />
                    Ask Question
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}