import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [txt, setTxt] = useState("Already have an account?");

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setTxt(showLogin ? "Already have an account?" : "Don't have an account?");
  };

  return (
    <section
      id="Auth"
      className="bg-gray-900 h-screen pb-32 flex flex-col items-center justify-center"
    >
      <div className="  text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl bg-gradient-to-br from-blue-600 to-pink-500 text-transparent bg-clip-text pb-24">
        <span> Let's Work Together</span>
      </div>
      <div className=" flex justify-center items-center flex-row gap-16 p-8 border border-rose-700 w-max h-max rounded-3xl">
        <div className="px-36">{showLogin ? <Login /> : <Register />}</div>
        <div className="flex flex-col">
          <span className="text-white text-3xl rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-none ">
            {txt}
          </span>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-900 border border-rose-900 focus:ring-4 focus:ring-rose-700 dark:focus:ring-rose-700"
            onClick={toggleForm}
          >
            {txt === "Already have an account?" ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
