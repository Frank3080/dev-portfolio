import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Personal Portfolio",
      link: "https://github.com/Frank3080/Fruit-shop",
      description:
        "In the vast tapestry of human existence, history unfurls as a rich narrative, woven with the threads of triumphs, upheavals, and the quiet moments that shape civilizations. From the ancient epochs where empires rose and fell, leaving behind whispers of their grandeur in the remnants of forgotten ruins, to the Renaissance period, a rebirth of ideas and cultural enlightenment that breathed new life into art, science, and philosophy.",
      videoLink: "img.jpg",
    },
    {
      name: "Personal Portfolio",
      link: "https://github.com/Frank3080/Fruit-shop",
      description:
        "In the vast tapestry of human existence, history unfurls as a rich narrative, woven with the threads of triumphs, upheavals, and the quiet moments that shape civilizations. From the ancient epochs where empires rose and fell, leaving behind whispers of their grandeur in the remnants of forgotten ruins, to the Renaissance period, a rebirth of ideas and cultural enlightenment that breathed new life into art, science, and philosophy.",
      videoLink: "img.jpg",
    },
    {
      name: "Personal Portfolio",
      link: "https://github.com/Frank3080/Fruit-shop",
      description:
        "In the vast tapestry of human existence, history unfurls as a rich narrative, woven with the threads of triumphs, upheavals, and the quiet moments that shape civilizations. From the ancient epochs where empires rose and fell, leaving behind whispers of their grandeur in the remnants of forgotten ruins, to the Renaissance period, a rebirth of ideas and cultural enlightenment that breathed new life into art, science, and philosophy.",
      videoLink: "img.jpg",
    },
  ];

  return (
    <main className="flex flex-col flex-1 bg-slate-100">
      {projects.map((project, projectIndex) => {
        return (
          <ProjectCard
            key={projectIndex}
            project={project}
            index={projectIndex}
          />
        );
      })}
    </main>
  );
}
