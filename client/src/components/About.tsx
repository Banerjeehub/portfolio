const About = () => {
  return (
    <section
      id="About"
      className="dark:bg-gray-900 flex flex-row pb-40 justify-center items-center text-white p-16 h-lvh"
    >
      <div className="flex flex-col flex-1 pl-52 gap-9">
        <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          About Me
        </h1>
        <span className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-xl dark:text-gray-400">
          Hi, I'm Padmanava Banerjee, a passionate developer specializing in
          full-stack web development using React, Next.js, MongoDB, Redis,
          TypeScript and spme other techs.Additional skills and expertise are
          detailed in the Skills section above. Let's collaborate to bring your
          ideas to life and create innovative solutions that make a difference.
        </span>
      </div>
      <div className="flex flex-1 flex-col ml-36 gap-9">
        <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-rose-700">
          Education
        </h1>
        <div className="flex flex-col mb-4 text-xl font-medium tracking-tight leading-none text-gray-900 md:text-5xl lg:text-lg dark:text-gray-400 ">
          <span>Bachelor of Technology</span>
          <span>ECE in Guru Nanak Institute of Technology</span>
          <span>September 2021 - June 2024</span>
        </div>
        <div className="flex flex-col mb-4 text-xl font-medium tracking-tight leading-none text-gray-900 md:text-5xl lg:text-lg dark:text-gray-400">
          <span>Diploma</span>
          <span>ECE in Guru Nanak Institute of Technology</span>
          <span>July 2018 - August 2021</span>
        </div>
      </div>
    </section>
  );
};

export default About;
