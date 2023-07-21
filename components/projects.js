import { projectData } from "./data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className="projects-container" id="section4">
        <h2 className="text-yellow-300 mb-4">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectData.map((project) => (
        <>
          <a
            key={project.id}
            href={project.appLink} // Use appLink for the anchor's href
            target="_blank"
            rel="noopener noreferrer"
            className="card-project border border-white rounded-lg shadow-lg relative block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img object-cover w-full rounded-t-lg"
            />
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
            </a>
          </div>
        </>
      ))}
    </div>
    </div>
  );
};

export default Projects;
