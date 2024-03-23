import { db } from "../../assets/Data";
import { motion } from "framer-motion";

const Database = () => {
  return (
    <div>
      <span className="text-4xl font-extrabold flex flex-row justify-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-10">
        Databases
      </span>
      <div className="mt-8">
        <ul className="flex flex-row gap-12 text-white justify-center items-center">
          {db.map((d) => (
            <motion.li
              whileHover={{ scale: 1.3 }}
              className="flex flex-col justify-center items-center cursor-pointer"
              key={d.name}
            >
              <img className="h-12 mb-3 bg-transparent" src={d.img} alt="" />
              <span>{d.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Database;
