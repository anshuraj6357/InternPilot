import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import  axios  from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CheckCircle } from 'lucide-react';
import React, { useState, useRef } from 'react';

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
  const fileInputRef = useRef(null);
  const [resumeFile, setResumefile] = useState(" ");
  const [uploaded, setuploaded] = useState(false);


  const handlefilechange = async(e) => {
    const file = e.target.files[0];
    setResumefile(file);
    setuploaded(true);
    try {
        const formData = new FormData();
  formData.append("resume", file);
      
    const response =await axios.post("http://localhost:5000/api/user/Resume",formData);
    console.log("response from backend",response);
      
    } catch (error) {
      console.error("Error in uploading the file",error);
      
    }


    console.log("file changed", file)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted")
  }

  // const profile={
  //   name:"arjyu",
  //   image,
  //   branch,
  //   address,
  //   mail,
  //   phone,
  //   AllresumeSkills,
  //   alappliedInternships,
  //   skillstoimprove,
  //   year,
  //   profilecompletion,
  //   uploadresume,
  //   uploadresumetime,
  //   resumetips,


  // }

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
            <form
           
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="grid lg:grid-cols-2 gap-10"
            >
              {/* Resume Upload Card */}
              <div className="space-y-6">
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 pointer-events-none"></div>

                  <div className="p-10 space-y-8">
                    {/* Header */}
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                        <Upload className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                        Upload Your Resume
                      </h2>
                    </div>

                    {/* File Upload Area */}
                    <label
                      htmlFor="resume-upload"
                      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    >
                      <Upload className="w-10 h-10 text-blue-500 mb-3" />
                      <span className="text-gray-700 font-medium">Drag & Drop or Click to Upload</span>
                      <span className="text-sm text-gray-500 mt-1">PDF or TXT (Max 5MB)</span>
                      <input
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.txt"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={(e) => e.target.files?.[0] && handlefilechange(e)}
                      />
                    </label>

                    {/* Success / Status */}
                    {uploaded ? (
                      <div className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg p-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <p className="text-gray-700 font-medium">{resumeFile.name}</p>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm italic text-center">No resume uploaded yet</p>
                    )}
                  </div>
                </div>
              </div>
            </form>


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