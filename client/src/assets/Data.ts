interface Tech {
  name: string;
  img: string;
}
interface projects {
  name: string;
  img: string;
  link: string;
  details: string;
}
interface profiles {
  name: string;
  img: string;
  link: string;
}

const tech: Tech[] = [
  {
    name: "HTML",
    img: "/html.png",
  },
  {
    name: "CSS",
    img: "/css.svg",
  },
  {
    name: "SCSS",
    img: "/scss.svg",
  },
  {
    name: "Tailwind CSS",
    img: "/tl.webp",
  },
  {
    name: "React.js",
    img: "/react.svg",
  },
  {
    name: "Next.js",
    img: "/next.webp",
  },
  {
    name: "Express.js",
    img: "/ex.jpeg",
  },
  {
    name: "Node.js",
    img: "/node.png",
  },
  {
    name: "Docker",
    img: "/docker.png",
  },
  {
    name: "GitHub",
    img: "/github.jpeg",
  },
  {
    name: "Postman",
    img: "/pm.svg",
  },
  {
    name: "WebSocket",
    img: "/wbs.png",
  },
  {
    name: "Firebase",
    img: "/fib.svg",
  },
];

const db: Tech[] = [
  {
    name: "MongoDB",
    img: "/mg.svg",
  },
  {
    name: "Redis",
    img: "/rd.svg",
  },
  {
    name: "My SQL",
    img: "/msql.png",
  },
];

const lang: Tech[] = [
  {
    name: "C++",
    img: "/cpp.png",
  },
  {
    name: "Java",
    img: "/java.svg",
  },
  {
    name: "Javascript",
    img: "/js.png",
  },
  {
    name: "Typescript",
    img: "/ts.png",
  },
  {
    name: "Python",
    img: "/python.png",
  },
  {
    name: "SQL",
    img: "/sql.png",
  },
];

const projects: projects[] = [
  {
    name: "Full Stack - Blog Application",
    img: "/tcw.png",
    link: "https://thought-canvas.vercel.app/",
    details: "Next.js, MongoDB, Firebase",
  },
  {
    name: "Full Stack - Authentication System",
    img: "/authSystem.png",
    link: "https://next-auth-lxiai98n8-padmanava-banerjees-projects.vercel.app/signup",
    details: "Next.js, Tailwind Css, JWT, Node-mailer, Bcrypt.js",
  },
  {
    name: " Front End - Youtube Clone",
    img: "/you.png",
    link: "https://banerjeehub0youtubev3build.pages.dev/",
    details: "React.js, MaterialUI, RapidAPI",
  },
  {
    name: "Front End - Fitclub Web App",
    img: "/fitclub.png",
    link: "https://fitclubprojectbanerjeehub.pages.dev/",
    details: "React.js, Tailwind Css, Framer motion",
  },
];
const dsa: profiles[] = [
  {
    name: "Leetcode Profile",
    img: "/leet.png",
    link: "https://leetcode.com/Mr_Banerzee/",
  },
  {
    name: "GeeksForGeeks Profile",
    img: "/gfg.png",
    link: "https://auth.geeksforgeeks.org/user/mr_banerjee",
  },
  {
    name: "Coding Ninja Profile",
    img: "/cs.png",
    link: "https://www.codingninjas.com/studio/profile/Mr_Banerzee",
  },
  {
    name: "GeeksForGeeks GitHub Repository",
    img: "/gfg-git.png",
    link: "https://github.com/Banerjeehub/GFG",
  },
  {
    name: "Leetcode GitHub Repository",
    img: "/leet-git.png",
    link: "https://github.com/Banerjeehub/leetCode",
  },
];

export { tech, db, lang, projects, dsa };
