import image from "/public/image.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-s-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl h-[5rem]">
            Caleb Jung
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-80 text-4xl font-light md:text-3xl">
            Software Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I am a passionate Software Engineering student at the University of
            Auckland, eager to expand my knowledge and apply my skills in
            real-world settings. I thrive in collaborative environments and am
            driven by a strong determination to become a full-time software
            engineer. Continuously learning and staying up-to-date with the
            latest technologies, I am actively seeking internship opportunities
            to gain hands-on experience and contribute to meaningful projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
