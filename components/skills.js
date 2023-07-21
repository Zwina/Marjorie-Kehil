// components/Skills.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faNodeJs,
  faPhp,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="skills-container" id="section3">
      <h2 className="text-yellow-300">Langages, frameworks et logiciels</h2>
      <div className="grid-skills pb-8 border-b">
        <div className="skill-card html">
          <FontAwesomeIcon icon={faHtml5} className="w-8 h-8 text-white" />
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <FontAwesomeIcon icon={faCss3} className="w-8 h-8 text-white" />
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <FontAwesomeIcon icon={faJs} className="w-8 h-8 text-white" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card php">
          <FontAwesomeIcon icon={faPhp} className="w-8 h-8 text-white" />
          <p>PHP</p>
        </div>
        <div className="skill-card java">
          <FontAwesomeIcon icon={faJava} className="w-8 h-8 text-white" />
          <p>JAVA</p>
        </div>
        <div className="skill-card mysql">
          <img src="/image/mysql.svg" alt="sql" className="w-8 h-8 text-white"/>
          <p>MySQL</p>
        </div>
        <div className="skill-card postgresql">
        <img src="/image/postgresql.svg" alt="sql" className="w-8 h-8 text-white"/>
          <p>PostgreSQL</p>
        </div>
      </div>
      <div className="grid-skills pb-8 border-b">
        
        <div className="skill-card node">
          <FontAwesomeIcon icon={faNodeJs} className="w-8 h-8 text-white" />
          <p>Node</p>
        </div>
        <div className="skill-card react">
          <FontAwesomeIcon icon={faReact} className="w-8 h-8 text-white" />
          <p>React</p>
        </div>
        <div className="skill-card next">
        <img src="/image/next.svg" alt="next" className="w-8 h-8 text-white"/>
          <p>Next.js</p>
        </div>
        <div className="skill-card tailwind">
        <img src="/image/tailwind.svg" alt="css" className="w-8 h-8 text-white"/>
          <p>TailwindCSS</p>
        </div>
        <div className="skill-card bootstrap">
          <FontAwesomeIcon icon={faBootstrap} className="w-8 h-8 text-white" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-card wordpress">
          <FontAwesomeIcon icon={faWordpress} className="w-8 h-8 text-white" />
          <p>Wordpress</p>
        </div>
        
      </div>
      <div className="grid-skills">
        <div className="skill-card git">
          <FontAwesomeIcon icon={faGit} className="w-8 h-8 text-white" />
          <p>Git</p>
        </div>
        <div className="skill-card github">
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
          <p>GitHub</p>
        </div>
        <div className="skill-card looping">
        <img src="/image/looping.svg" alt="css" className="w-8 h-8 text-white"/>
          <p>Looping</p>
        </div>
        <div className="skill-card figma">
          <FontAwesomeIcon icon={faFigma} className="w-8 h-8 text-white" />
          <p>Figma</p>
        </div>
        <div className="skill-card jira">
          <FontAwesomeIcon icon={faJira} className="w-8 h-8 text-white" />
          <p>Jira</p>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
