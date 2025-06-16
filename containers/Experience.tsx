import Canvas from "@/components/Canvas";
import ExperienceTimeline from "@/components/ExperienceTimeline";

function Experience() {
  return (
    <div className="relative flex w-full z-[999] min-h-fit" id="experience">
      <Canvas />
      <ExperienceTimeline />
    </div>
  );
}

export default Experience;