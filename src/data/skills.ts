import { SkillProps } from "../components/SkillBar";
import { 
  FaGitAlt, 
  FaDocker, 
  FaTerminal, 
  FaLock, 
  FaCodeBranch, 
  FaMobileAlt, 
  FaTachometerAlt
} from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import React from "react";

export const frontendSkills: SkillProps[] = [
  { name: "React.js", percentage: 92 },
  { name: "Angular", percentage: 88 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "Bootstrap", percentage: 92 },
  { name: "Redux", percentage: 85 }
];

export const backendSkills: SkillProps[] = [
  { name: "Node.js", percentage: 90 },
  { name: "Express.js", percentage: 88 },
  { name: "MongoDB", percentage: 90 },
  { name: "REST API", percentage: 92 },
  { name: "MEARN Stack", percentage: 88 }
];

export interface ToolSkill {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export const tools: ToolSkill[] = [
  {
    id: 1,
    name: "Git & GitHub",
    icon: React.createElement(FaGitAlt, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 2,
    name: "Docker",
    icon: React.createElement(FaDocker, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 3,
    name: "AWS",
    icon: React.createElement(FaCloud, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 4,
    name: "CLI",
    icon: React.createElement(FaTerminal, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 5,
    name: "CI/CD",
    icon: React.createElement(FaCodeBranch, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 6,
    name: "Responsive Design",
    icon: React.createElement(FaMobileAlt, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 7,
    name: "Security",
    icon: React.createElement(FaLock, { className: "text-primary text-2xl mb-2" })
  },
  {
    id: 8,
    name: "Performance Optimization",
    icon: React.createElement(FaTachometerAlt, { className: "text-primary text-2xl mb-2" })
  }
];
