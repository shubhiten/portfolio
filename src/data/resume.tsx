import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubhi Jain",
  initials: "SJ",
  url: "www.linkedin.com/in/shubhiijainn",
  location: "Jabalpur, MP",
  locationLink: "https://www.google.com/maps/place/Jabalpur,+Madhya+Pradesh",
  description: "My idea of fun? Opening a new repo and diving in blind.",
  summary:
    "I’m a second-year Computer Science student and a current fellow at Dora DAO’s Girls Who Yap program. I love turning ideas into real, useful tech—especially when it makes life a little easier (or cooler). My projects reflect that energy: TaskNest, a clean and simple React ToDo app for organizing your chaos; Clocast, an AI-based clothing recommender that helps you decide what to wear when your closet says “nothing to wear”; and HippoType, a fun typing speed tester that gives you instant feedback while you race the clock. I’m always excited to learn new things, write better code, and collaborate with people who want to build tech that actually makes a difference—while having a little fun along the way.",
  avatarUrl: "/me.png",
  skills: [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "HTML/CSS",
    "React.js",
    "GitHub",
    "VS Code",
    "Packet Tracer",
    "MySQL",
    "Data Structures Algorithms",
    "Object-Oriented Programming",
     ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "candidshubhi@gmail.com",
    tel: "‪+91 6386772811‬",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shubhiten",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/shubhiijainn",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/shubhiten/",
        icon: Icons.leetcode,
        navbar: true,
      },
      Devpost: {
        name: "Devpost",
        url: "https://devpost.com/shubhiten",
        icon: Icons.devpost,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:candidshubhi@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/crazykurkure",
        icon: Icons.x,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Dora DAO - Girls Who Yap Fellowship",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Open Innovation Fellow",
      logoUrl: "/dora-dao.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description:
        "Promoted feminist tech principles by co-leading 3 hands-on workshops on DAO governance and smart contracts for 50+ fellows, boosting active community engagement by 30%. Authored and documented 5 educational modules on DAO governance, which were adopted as standard onboarding materials for future cohorts.",
    },
    {
      company: "Google Developer Student Clubs (GDSC) - GGITS",
      href: "#",
      badges: ["Leadership"],
      location: "Jabalpur, MP",
      title: "Co-Lead",
      logoUrl: "/gdsc.png",
      start: "Apr 2024",
      end: "Present",
      description:
        "Elected to co-lead a 1000+ member chapter, planning a curriculum of 10+ workshops and 2 hackathons for the 2024-25 academic year to enhance peer skills in Flutter and Google Cloud.",
    },
  ],
  education: [
    {
      school: "Gyan Ganga Institute of Technology and Sciences",
      href: "https://ggits.org",
      degree:
        "Bachelor of Technology in Computer Science & Business Systems (CSBS) - Anticipated CGPA: 8.5/10.0",
      logoUrl: "/ggits.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Cisco Networking Academy",
      href: "https://www.netacad.com/",
      degree: "Cybersecurity Pathway",
      logoUrl: "/cisco.png",
      start: "Mar 2024",
      end: "Present",
      description:
        "Completed advanced modules covering network defense, cryptography, and endpoint security in C++ and Python, achieving a 95% average score on all assessments. Designed and deployed secure network topologies in Packet Tracer, successfully defending against 5+ simulated cyber-attack scenarios (e.g., DDoS, malware).",
    },
  ],
  projects: [
    {
      title: "TaskNest React ToDo App",
      href: "#",
      dates: "N/A",
      active: true,
      description:
        "Architected a responsive ToDo application with full CRUD functionality and persistent state management using browser local storage. Engineered a minimalist UI with Tailwind CSS that improved task management efficiency by implementing keyboard shortcuts and a drag-and-drop interface for prioritization.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Clocast AI Clothing Recommender",
      href: "#",
      dates: "N/A",
      active: true,
      description:
        "Developed a smart assistant that generates personalized outfit recommendations by integrating real-time weather data and user mood inputs. Built a RESTful API with Flask to process data from two external APIs, delivering dynamic clothing prompts via the OpenAI API.",
      technologies: ["Python", "Flask", "OpenAI API", "Weather API"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HippoType Typing Speed Tester",
      href: "#",
      dates: "N/A",
      active: true,
      description:
        "Created a web-based typing test that calculates Words Per Minute (WPM) and accuracy with over 99% precision against a dynamic quote library. Enhanced skill development by implementing instant visual feedback on incorrect keystrokes and tracking WPM improvement over time.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
