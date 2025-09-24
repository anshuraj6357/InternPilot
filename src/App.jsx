import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { ProfilePage } from "./components/ProfilePage";
import { InternshipMatching } from "./components/InternshipMatching";
import { SkillDevelopment } from "./components/SkillDevelopment";
import { ContestsAndPractice } from "./components/ContestsAndPractice";
import { CompanyInsights } from "./components/CompanyInsights";
import { WellbeingHub } from "./components/WellbeingHub";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard />;
      case "profile":
        return <ProfilePage />;
      case "internships":
        return <InternshipMatching />;
      case "skills":
        return <SkillDevelopment />;
      case "contests":
        return <ContestsAndPractice />;
      case "insights":
        return <CompanyInsights />;
      case "mentorship":
        return <div className="p-6"><h1>Peer Mentorship & Marketplace</h1><p>Coming soon...</p></div>;
      case "certificates":
        return <div className="p-6"><h1>Blockchain Certificates</h1><p>Coming soon...</p></div>;
      case "roadmap":
        return <div className="p-6"><h1>AI Career Roadmap</h1><p>Coming soon...</p></div>;
      case "wellbeing":
        return <WellbeingHub />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}