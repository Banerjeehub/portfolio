import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Database from "./Database";

const Skills = () => {
  return (
    <section id="Skills" className="dark:bg-gray-900 h-screen">
      <div className="py-9 ">
        <Languages />
      </div>
      <div className="py-9 ">
        <Frameworks />
      </div>
      <div className="py-9 ">
        <Database />
      </div>
    </section>
  );
};

export default Skills;
