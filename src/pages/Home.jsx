import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Smart City Traffic Dashboard",
    description:
      "Real-time dashboard analyzing traffic flow and pollution levels using Python and data visualization.",
    tech: "Python • Tableau • APIs",
    link: "#",
  },
  {
    title: "Logistics Route Optimizer",
    description:
      "Optimizes delivery routes using graph algorithms like Dijkstra and TSP.",
    tech: "MERN • Algorithms • Node.js",
    link: "#",
  },
  {
    title: "Metro Token System",
    description:
      "Software system for generating, validating, and managing metro tokens.",
    tech: "PHP • MySQL • XAMPP",
    link: "#",
  },
  {
    title: "Forensic Model Research",
    description:
      "Comparative analysis of digital forensic investigation models and development of an improved framework.",
    tech: "Cyber Forensics • Research",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-16">

      <h1 className="text-5xl font-bold mb-12">
        Sampati Anvekar
      </h1>

      <p className="text-zinc-400 mb-16 max-w-xl">
        Curious developer exploring software systems, research, and problem solving.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

    </div>
  );
}