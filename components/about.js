// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container" id="section2">
      <h2 className="text-yellow-300">A propos</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
           Mon parcours dans le développement d'applications 
            a débuté après une formation d'ingénieur en agronomie. 
            Ma curiosité pour la résolution de problèmes m'a conduit à
            me spécialiser principalement dans le 
            vaste et passionnant monde du back-end, notamment Node.js. 
            J'ai acquis de l'expérience en travaillant avec divers
            outils et frameworks tels que React, Next.js et Node.js. Je suis
            toujours impatiente d'apprendre et de découvrir de nouvelles
            technologies, cherchant continuellement des opportunités pour
            améliorer mes compétences et mes connaissances. 
          </p>
          <p>
          Que ce soit en
            collaborant avec une équipe ou en travaillant de manière autonome,
            je m'épanouis dans des environnements dynamiques et je saisis chaque
            occasion d'apprentissage et de développement personnel. Je suis
            enthousiaste à l'idée de contribuer à créer des expériences web
            innovantes et conviviales. N'hésitez pas à me contacter pour que
            nous puissions collaborer et créer quelque chose d'extraordinaire
            ensemble ! 💻🚀
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/image/about.jpg"
            className="profile-img"
            width={300}
            height={500}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
