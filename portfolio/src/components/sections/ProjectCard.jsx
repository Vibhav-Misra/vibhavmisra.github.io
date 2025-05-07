import { Reveal } from "../Reveal";

// components/ProjectCard.jsx
export const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <Reveal>
      <div
        className="glass p-6 rounded-xl border border-white/10 
        hover:-translate-y-1 hover:border-blue-500/30
        hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
        transition-all"
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-200 text-black py-1 px-3 
            rounded-full text-sm transition hover:bg-blue-500/20 hover:text-white 
            hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View Project →
          </a>
        </div>
      </div>
    </Reveal>
  );
};
