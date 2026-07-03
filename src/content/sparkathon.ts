import type { PrizeTierRecord, ProblemStatementRecord } from "./types";

/** Sparkathon event configuration (editable from /admin → Sparkathon). */
export const sparkathonDefaults = {
  eventDate: "2026-09-15T10:00:00+05:30",
  dateIsTentative: true,
  registrationLink: "",
  venue: "Mini Auditorium, NIT Hamirpur",
} as const;

export const prizeTiers: PrizeTierRecord[] = [
  { place: 1, label: "Winner", amountInr: 10000, extras: "+ additional gifts", sortOrder: 0 },
  { place: 2, label: "1st Runner-up", amountInr: 6000, extras: "+ additional gifts", sortOrder: 1 },
  { place: 3, label: "2nd Runner-up", amountInr: 3000, extras: "+ additional gifts", sortOrder: 2 },
];

/**
 * The 18 official problem statements, transcribed from the released posters
 * (originals kept at /img/sparkathon/problem-statements/ for reference).
 */
export const problemStatements: ProblemStatementRecord[] = [
  {
    code: "PS-101",
    title: "Autonomous Self-Evolving Energy Grid",
    description:
      "Traditional power grids are rigid and struggle to efficiently integrate renewable energy sources. The challenge is to design a distributed energy grid that uses artificial intelligence and multi-agent reinforcement learning to dynamically reconfigure energy flow, storage allocation, and load balancing. The system should automatically adapt to changing demand, renewable energy fluctuations, and grid faults while maximizing efficiency and resilience.",
    category: "Software",
    theme: "Smart Energy / AI",
    imageUrl: "/img/sparkathon/problem-statements/ps-101.png",
    sortOrder: 0,
  },
  {
    code: "PS-102",
    title: "Autonomous Blockchain Energy Economy",
    description:
      "Energy markets are still centralized and inefficient. The goal is to develop a decentralized energy trading platform where households and industries can trade excess renewable energy using blockchain technology. Smart meters and AI-based demand prediction should automatically negotiate prices and execute transactions through secure smart contracts.",
    category: "Software",
    theme: "Blockchain / Smart Energy",
    imageUrl: "/img/sparkathon/problem-statements/ps-102.png",
    sortOrder: 1,
  },
  {
    code: "PS-103",
    title: "Swarm Robotics for Renewable Infrastructure Repair",
    description:
      "Large solar farms and wind turbine installations require continuous inspection and maintenance. The challenge is to design a swarm robotics system capable of autonomously inspecting renewable infrastructure, detecting faults, and performing minor repair tasks. The robots should collaborate using swarm intelligence to improve efficiency and reduce maintenance costs.",
    category: "Hardware & Software",
    theme: "Robotics / Renewable Energy",
    imageUrl: "/img/sparkathon/problem-statements/ps-103.png",
    sortOrder: 2,
  },
  {
    code: "PS-104",
    title: "AI-Driven Cybersecurity Shield for Smart Grids",
    description:
      "Smart grids rely heavily on digital communication and IoT systems, making them vulnerable to cyber attacks. The challenge is to develop an intelligent cybersecurity framework that uses AI to detect abnormal activities, prevent cyber intrusions, and protect energy infrastructure in real time.",
    category: "Software",
    theme: "Cybersecurity / AI",
    imageUrl: "/img/sparkathon/problem-statements/ps-104.png",
    sortOrder: 3,
  },
  {
    code: "PS-105",
    title: "Carbon-Negative Blockchain Trading Protocol",
    description:
      "Many blockchain systems consume significant energy and contribute to carbon emissions. The challenge is to design an environmentally sustainable blockchain protocol that measures and offsets carbon footprints while enabling secure digital transactions. The protocol should incentivize carbon-negative operations and support green energy initiatives.",
    category: "Software",
    theme: "Blockchain / Sustainability",
    imageUrl: "/img/sparkathon/problem-statements/ps-105.png",
    sortOrder: 4,
  },
  {
    code: "PS-106",
    title: "AI-Controlled Solid-State Grid Architecture",
    description:
      "Future energy grids require faster response and higher efficiency. The problem is to design a grid architecture based on solid-state transformers controlled by artificial intelligence. The system should manage power distribution dynamically and maintain stability even under fluctuating renewable energy inputs.",
    category: "Hardware & Software",
    theme: "Smart Grid / AI",
    imageUrl: "/img/sparkathon/problem-statements/ps-106.png",
    sortOrder: 5,
  },
  {
    code: "PS-107",
    title: "Self-Adaptive Climate-Resilient Floating Solar Platform",
    description:
      "Floating solar panels installed on lakes and reservoirs face challenges due to weather variations and water movement. The objective is to design a floating solar platform that automatically adjusts its position and angle based on sunlight and environmental conditions to maximize energy production.",
    category: "Hardware & Software",
    theme: "Renewable Energy",
    imageUrl: "/img/sparkathon/problem-statements/ps-107.png",
    sortOrder: 6,
  },
  {
    code: "PS-108",
    title: "Dynamic Disaster Communication Hub",
    description:
      "During natural disasters, communication networks often collapse, making rescue coordination difficult. The challenge is to design a portable and rapidly deployable communication hub that can create an emergency wireless network to enable communication between rescue teams and affected populations.",
    category: "Hardware & Software",
    theme: "Disaster Management / Communication",
    imageUrl: "/img/sparkathon/problem-statements/ps-108.png",
    sortOrder: 7,
  },
  {
    code: "PS-109",
    title: "Development of Non-Electrical Solar Tracker",
    description:
      "Solar panels generate maximum energy when aligned with the sun, but traditional trackers rely on electrical motors and sensors. The challenge is to develop a low-cost mechanical solar tracking system that uses passive mechanisms such as thermal expansion or gravity to track sunlight without using electricity.",
    category: "Hardware",
    theme: "Renewable Energy",
    imageUrl: "/img/sparkathon/problem-statements/ps-109.png",
    sortOrder: 8,
  },
  {
    code: "PS-110",
    title: "AI-Based Electricity Theft Detection",
    description:
      "Electricity theft is a major problem in many regions and leads to financial losses for utilities. The objective is to develop an AI-based monitoring system that analyzes consumption patterns and identifies abnormal usage that may indicate electricity theft.",
    category: "Software",
    theme: "AI / Smart Grid",
    imageUrl: "/img/sparkathon/problem-statements/ps-110.png",
    sortOrder: 9,
  },
  {
    code: "PS-111",
    title: "Low-Cost Decentralized Smart Air Purification System",
    description:
      "Air pollution is a growing issue in urban areas. The challenge is to design an affordable decentralized air purification system that can be installed in homes or small communities and uses IoT sensors to monitor and improve air quality.",
    category: "Hardware & Software",
    theme: "Environmental Technology",
    imageUrl: "/img/sparkathon/problem-statements/ps-111.png",
    sortOrder: 10,
  },
  {
    code: "PS-112",
    title: "Energy Theft Detection System",
    description:
      "Illegal electricity tapping and meter tampering create huge losses in the power sector. The challenge is to develop a system using smart sensors and data analytics that can detect unauthorized connections and alert authorities in real time.",
    category: "Hardware & Software",
    theme: "Smart Grid",
    imageUrl: "/img/sparkathon/problem-statements/ps-112.png",
    sortOrder: 11,
  },
  {
    code: "PS-113",
    title: "Smart Traffic Management System for Urban Congestion",
    description:
      "Urban traffic congestion causes delays, pollution, and accidents. The goal is to develop a smart traffic management system that uses real-time traffic data and AI algorithms to optimize traffic signals and reduce congestion.",
    category: "Software",
    theme: "Smart Cities / AI",
    imageUrl: "/img/sparkathon/problem-statements/ps-113.png",
    sortOrder: 12,
  },
  {
    code: "PS-114",
    title: "Smart Energy Theft Detection System",
    description:
      "Power utilities require efficient monitoring systems to reduce energy losses. The challenge is to design a smart energy monitoring system that uses IoT sensors and machine learning algorithms to identify irregular consumption patterns and detect power theft.",
    category: "Hardware & Software",
    theme: "Smart Energy",
    imageUrl: "/img/sparkathon/problem-statements/ps-114.png",
    sortOrder: 13,
  },
  {
    code: "PS-115",
    title: "Renewable Energy Integration System",
    description:
      "Renewable energy sources such as solar and wind are intermittent and difficult to integrate into traditional grids. The challenge is to develop a system that efficiently integrates renewable energy with existing power infrastructure while maintaining grid stability.",
    category: "Hardware & Software",
    theme: "Renewable Energy",
    imageUrl: "/img/sparkathon/problem-statements/ps-115.png",
    sortOrder: 14,
  },
  {
    code: "PS-116",
    title: "Smart Buildings and Homes",
    description:
      "Energy consumption in buildings contributes significantly to global energy demand. The objective is to design smart building systems that automatically optimize energy usage through intelligent lighting, climate control, and appliance management.",
    category: "Hardware & Software",
    theme: "Smart Cities / IoT",
    imageUrl: "/img/sparkathon/problem-statements/ps-116.png",
    sortOrder: 15,
  },
  {
    code: "PS-117",
    title: "Real-Time Smart Grid Fault Detection",
    description:
      "Faults in electrical grids can lead to power outages and infrastructure damage. The challenge is to develop a real-time monitoring system that quickly detects faults in transmission and distribution networks and triggers automated corrective actions.",
    category: "Hardware & Software",
    theme: "Smart Grid",
    imageUrl: "/img/sparkathon/problem-statements/ps-117.png",
    sortOrder: 16,
  },
  {
    code: "PS-118",
    title: "Smart Street Light System",
    description:
      "Street lighting consumes a large amount of electricity in cities. The goal is to design an intelligent street lighting system that automatically adjusts brightness based on traffic, time, and environmental conditions to save energy.",
    category: "Hardware & Software",
    theme: "Smart Cities / IoT",
    imageUrl: "/img/sparkathon/problem-statements/ps-118.png",
    sortOrder: 17,
  },
];
