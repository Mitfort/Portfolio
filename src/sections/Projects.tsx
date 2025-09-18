import { useState, useEffect } from "react";
import { projects } from "../constants"
import { File, FolderOpen, FolderClosed, X, Github, ExternalLink} from "lucide-react";

const Projects = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects[0]["files"][0])>(null);

  const toggleFolder = (name: string) => {
    setOpenFolder((prev) => (prev === name ? null : name));
  };

  // Close modal with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="projects" className="section-spacing c-space">
      <h2 className="text-heading mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((folder) => {
          const isOpen = openFolder === folder.name;
          return (
            <div
              key={folder.name}
              className={`p-6 rounded-2xl bg-gradient-to-b ${folder.color} hover-animation`}
            >
              <div
                className="flex items-center gap-3 mb-4 cursor-pointer select-none"
                onClick={() => toggleFolder(folder.name)}
              >
                {isOpen ? <FolderOpen size={28} /> : <FolderClosed size={28} />}
                <h3 className="text-xl font-semibold">{folder.name}</h3>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 pt-1">
                  {folder.files.map((file) => (
                    <div
                      key={file.name}
                      onClick={() => setSelectedProject(file)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/40 hover:bg-primary/60 transition-colors cursor-pointer text-sm"
                    >
                      <File size={14} />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
        >
          <div className="bg-navy rounded-2xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-neutral-400 hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{selectedProject.name}</h3>
            <p className="text-neutral-300 text-sm mb-4">{selectedProject.desc}</p>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                className="flex items-center gap-2 bg-primary/50 hover:bg-primary/70 text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                className="flex items-center gap-2 bg-aqua/50 hover:bg-aqua/70 text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;