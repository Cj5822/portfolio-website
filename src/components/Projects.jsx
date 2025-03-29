import guesswho from "/public/guesswho.jpg";
import web3 from "/public/web3.jpg";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: guesswho,
    title: "Guess Who",
    description:
      "Guess Who is crime investigation game where players take on the role of detectives and work to solve a mystery. Players must gather clues, interrogate suspects, and piece together the evidence to uncover the truth behind the crime.",
    technologies: ["Java", "CSS", "JavaFX"],
    github: "https://github.com/Cj5822/guess-who",
  },
  {
    image: web3,
    title: "Web3 P2P Website",
    description:
      "Web3 P2P Website is a decentralized platform that enables users to connect and trade directly with each other without intermediaries. Although it is still in the early stages of development, it showcases the decentralised nature of P2P trading.",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Material UI",
      "React",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Cj5822/web3-p2p-website",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt=""
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[900px]"
          />
        </a>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
