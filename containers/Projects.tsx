import Canvas from "@/components/Canvas";
import ProjectsGrid from "@/components/ProjectsGrid";

function Projects() {
  return (
    <div className="relative flex w-full z-[999] min-h-fit" id="projects">
      <Canvas />
      <ProjectsGrid />
    </div>
  );
}

export default Projects;