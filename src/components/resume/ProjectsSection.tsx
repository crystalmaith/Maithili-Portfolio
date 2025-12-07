import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Finance Assistant",
    description: "A modern AI experience to understand and handle your own finace better.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
    bgColor: "bg-card",
  },
  {
    id: 2,
    title: "Medical Chatbot using RAG",
    description: "Interactive analytics dashboard for tracking investments and financial goals with real-time data.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Chart.js"],
    bgColor: "bg-secondary",
  },
  {
    id: 3,
    title: "Dungeons and Dragons",
    description: "First D&D game where AI is the Dungeon Master, using the basics of LangChain and LangGraph to play the master",
    tech: ["React Native", "Firebase", "Redux", "Figma"],
    bgColor: "bg-card",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block font-sans text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Portfolio
            </span>
            <h2 className="heading-section">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`group card-elegant ${project.bgColor} p-8 flex flex-col opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Number */}
                <span className="font-serif text-5xl font-light text-border mb-6">
                  0{project.id}
                </span>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="heading-card group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="body-text text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-sans uppercase tracking-wider bg-secondary text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors duration-300 group/link"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
