import profile from "/public/profile.png";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profile}
            alt=""
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] cursor-pointer rounded-full object-cover object-top shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-s-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl h-[5rem]">
            Caleb Jung
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-80 text-4xl font-light md:text-3xl">
            Software Developer
          </h3>
          <p className="md:text-base text-sm text-gray-400 text-center mt-5">
            Hey, I'm Caleb, a passionate software egineering student at the
            University of Auckland. I like to build full stack applications and
            solve real world problems. I'm currently looking for internships to
            gain more skills and experience so I can fulfill my dream of
            becoming a full time software developer. In my free time I like to
            play games, watch shows/animes, and go gym. Feel free to reach out if you want to connect!
          </p>

          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/caleb-jung-32b64b2b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-xl transition-all duration-200 opacity-70 hover:opacity-100 hover:text-blue-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Cj5822"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-xl transition-all duration-200 opacity-70 hover:opacity-100 hover:text-blue-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              <BsGithub />
            </a>
            <a
              href="/Caleb_Jung_Resume_2026.pdf"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100 hover:text-blue-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              download
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
