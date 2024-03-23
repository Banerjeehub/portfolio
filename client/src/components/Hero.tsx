import { motion } from "framer-motion";
import Contact from "./Contact";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900 h-screen pt-32">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hi,I'm{" "}
          <span className="bg-gradient-to-br from-blue-600 to-pink-500 text-transparent bg-clip-text">
            {" "}
            Padmanava Banerjee
          </span>
          ,
        </h1>
        <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to my Personal Portfolio.
        </h1>
        <p className="  mb-8 text-lg font-normal text-gray-500 lg:text-4xl sm:px-16 lg:px-48 dark:text-gray-400">
          A final year student and an aspiring Full Stack Web developer
        </p>
        <div className="flex flex-row gap-5 justify-center mb-7">
          <motion.div whileHover={{ scale: 1.3 }}>
            <a href="https://github.com/Banerjeehub">
              <img className="h-12 rounded-full" src="/public/git.png" alt="" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }}>
            <a href="https://www.linkedin.com/in/mrbanerjee23/">
              <img
                className="h-12 rounded-full"
                src="/public/ldin.png"
                alt=""
              />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-rose-700 hover:bg-rose-500 focus:ring-4 focus:ring-white dark:focus:ring-white"
            onClick={() => scrollToSection("Skills")}
          >
            Skills
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6 6-6"
              />
            </svg>
          </a>
          <a
            href="https://drive.google.com/file/d/1DqMSu66kOLvTpMvf2eTO5HW6m0XhPBfX/view?usp=sharing"
            download="padmanava.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-70"
          >
            My Resume
          </a>
          <div className="pl-4">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
