import Image from "next/image"; // Import Image from Next.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Hero = () => {
  // const [showCard, setShowCard] = useState(false);
  return (
    <div className="hero-container mt-16 md:mt-0" id="section1">
      {/* <Card flipped={showCard} set={(state) => setShowCard(state)} /> */}
      <Image src='/image/femme.png' className="profile-img mt-32" width={300} height={300} alt="icon" />
      <div className="hero-text">
        <h1><span className="text-orange-400">Salut,</span> je suis <span className="text-yellow-300">Marjorie Kehil</span> 👋</h1>
        <p>
         Je suis une développeuse junior back-end basée à Dijon. Je me spécialise dans la création d&apos;applications robustes en mettant l&apos;accent sur Node.js. Je suis passionnée par la création de solutions efficaces et évolutives pour relever divers défis dans le domaine du développement web. De la logique côté serveur à l&apos;optimisation des interactions avec la base de données, j&apos;apprécie chaque aspect du processus de développement back-end.
        </p>
        <div className="social-icons">
        <a
              href="https://github.com/Zwina"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/marjorie-kehil/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8 text-white" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;