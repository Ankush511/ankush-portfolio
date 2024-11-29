import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    "title": "Mycroft",
    "position": "AI Engineer - Intern",
    "time": "Oct 2024 - Present",
    "location": "Bangalore, Karnataka, India",
    "description":
      "I develop and implement AI-driven solutions, including advanced document chunking strategies using LlamaParse and OpenAI GPT-4. I created a Retrieval-Augmented Generation (RAG) evaluation set utilizing Anthropics' Contextual Retrieval methods, tested various embedding models for performance optimization, and built APIs with FastAPI for seamless integrations.",
    "tech": [
      "Python",
      "OpenAI GPT-4",
      "LlamaParse",
      "LiteLLM",
      "FastAPI",
      "GitHub",
      "AWS",
      "Postman"
    ]
  },
  {
    title: "Ascella InfoSec",
    position: "Software Engineer - Intern",
    time: "Jul 2024 - Oct 2024",
    location: "Bangalore, Karnataka, India",
    description:
      "I help build and enhance the Ascella Groups Page. By implementing verticals and animations, I significantly improved the user experience. Additionally, I optimized the frontend performance, resulting in a smoother and more responsive interface. My work ensures that users enjoy an engaging and efficient experience on the platform.",
    tech: [
      "NextJs",
      "Tailwind",
      "Python",
      "GitHub",
      "Figma",
      "AWS",
      "ZohoCRM",
    ],
  },
  {
    title: "WiperSpray",
    position: "Data Analyst - Intern",
    time: "Sep 2023 - Nov 2023",
    location: "Mohali, Punjab, India",
    description:
      "I analyzed booking patterns and optimized service availability, leading to a 12% reduction in customer wait times. By implementing process improvements and automation solutions, I achieved a 15% increase in productivity. I collaborated with cross-functional teams to gather requirements, define project scopes, and ensure alignment with business objectives, fostering effective teamwork and project success.",
    tech: ["SQL", "Excel", "Python", "Google Data Analytics", "Tableau", "Github"],
  },
];
