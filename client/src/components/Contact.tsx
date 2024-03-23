import { useState } from "react";

const Contact = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const getIt = async () => {
    try {
      const res = await fetch("/hello");
      const data = await res.json();
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getIt();
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Another-Content-Type": "text/plain",
        },
        body: JSON.stringify({ email, message }),
      });
      console.log(response);

      if (response.ok) {
        setSendSuccess(true);
        setEmail("");
        setMessage("");
        console.log(email, message);
      } else {
        console.error("Failed to send email, asshole");
      }
    } catch (error) {
      console.error("Failed to send email 1", error);
    }

    setIsSending(false);
  };

  return (
    <section className="flex flex-col bg-gray-900 justify-center items-center gap-10">
      <div className="text-center">
        <button
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          onClick={toggleDrawer}
        >
          Contact Me
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-80 dark:bg-gray-800`}
      >
        <h5 className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Contact Me
        </h5>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-900 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-900 dark:hover:text-white"
          onClick={toggleDrawer}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@mail.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className={`${
              isSending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-rose-700 hover:bg-blue-800"
            } text-white w-full focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-rose-600 dark:hover:bg-rose-500 focus:outline-none dark:focus:ring-white block`}
          >
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>
        {sendSuccess && (
          <p className="mb-2 text-sm text-green-500 dark:text-green-400">
            Email sent successfully!
          </p>
        )}
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">
            mrbanerjeeofficial@outlook.com
          </a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:underline">
            +91-8918590371
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
