import { projects } from "../assets/Data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="Projects" className="bg-gray-900 h-screen">
      <span className="ext-4xl font-extrabold flex flex-row justify-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-10">
        Projects
      </span>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-14 lg:max-w-none lg:py-10">
          <div className="mt-6  space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {projects.map((data) => (
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <motion.img
                    whileHover={{ scale: 1.3 }}
                    src={data.img}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-100">
                  <a target="_blank" rel="noreferrer" href={data.link}>
                    <span className="absolute inset-0"></span>
                    {data.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-100">
                  {data.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
