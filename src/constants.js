// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import sqliteLogo from './assets/tech_logo/sqlite.jpg';
// Experience & learning Section Logo's
import codingblock from './assets/company_logo/codingblock.jpg';
import drdo from './assets/company_logo/Drdo.jpg';

//education Section Logo's
import ggsipulogo from './assets/education_logo/ggsipulogo.jpg';
import kvlogo from './assets/education_logo/kvlogo.jpg';

//projects Section Logo's
import aimusic from './assets/project_logo/aimusic.png';
import expensetracker from './assets/project_logo/expensetracker.png';
import ieee from './assets/project_logo/ieee.png';
import Videochat from './assets/project_logo/Videochat.png';
import Memorymeld from './assets/project_logo/Memory-meld.png';
import noteMaking from './assets/project_logo/noteMaking.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQLite', logo:sqliteLogo  },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const experiences = [
    {
      id: 0,
      img: drdo,
      role: "Backend Developer Intern",
      company: "DRDO",
      date: "jun 2024 - Aug 2024",
      desc: 'Built an AI-powered IEEE Document Formatter during my internship at DRDO, using HTML, CSS, JS for the frontend and Python with LLaMA on the backend. The tool converts PDF documents into properly structured IEEE research papers, automating sections like Abstract, Introduction, and References.',
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "sqlite",
        "Python",
        "LLaMA",
        "AI",
      ],
    },
    {
  id: 1,
  img: codingblock,
 role: "Fullstack Developer",
  company: "Coding Blocks",
  desc: "Completed an intensive Full Stack Web Development course at Coding Blocks, mastering real-world applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Gained hands-on experience in building scalable web apps, integrating frontend and backend, implementing authentication, and designing responsive UIs with best industry practices.",
  skills: [
    "ReactJS",
    "Redux",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git",
  ],
},

 {
  id: 2,
  img: codingblock,
  role: "Data Structures & Algorithms",
  company: "Coding Blocks",
  desc: "Completed a structured Data Structures and Algorithms course at Coding Blocks, gaining strong problem-solving skills through hands-on coding practice and competitive programming. Covered core concepts like arrays, linked lists, trees, graphs, recursion, dynamic programming, and time-space complexity analysis.",
  skills: [
    "Java",
    "Algorithms",
    "Data Structures",
    "Problem Solving",
    "Recursion",
    "Dynamic Programming",
    "Greedy Algorithms",
    "STL",
    "Competitive Programming",
  ],
}
];

export const education = [
{
      id: 0,
      img: kvlogo,
      school: "Kendriya Vidyalaya Gole Market, New Delhi",
      date: "Apr 2015 - March 2016",
      grade: "90.8%",
      desc: "I completed my Class 10 from Kendriya Vidyalaya (CBSE), where I developed a strong interest in Science and Computer Applications—an early step toward my journey in technology.",
      degree: "CBSE(X), Science with Computer Application",
    },

     {
      id: 1,
      img: kvlogo,
      school: "Kendriya Vidyalaya Gole Market, New Delhi",
      date: "Apr 2017 - March 2018",
      grade: "86%",
      desc: "I pursued my Class 12 education at Kendriya Vidyalaya (CBSE), where I built a solid foundation in Physics, Chemistry, and Mathematics (PCM), which continues to support my engineering journey.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: ggsipulogo,
      school: "GGSIPU University, New Delhi",
      date: " Aug 2022- July 2026",
      grade: "9.0 CGPA",
      desc:' Currently pursuing my final year of B.Tech in Computer Science from GGSIPU University, New Delhi , I have had the opportunity to dive deep into the world of technology through subjects like DSA, DBMS, and Web Development. Working on various real-world projects during this time has helped me translate classroom concepts into practical applications, fueling my passion for software engineeringg ',
      degree: "Bachelor of Technology - BTECH (Computer Science)",
    },

  ];


   export const projects = [
    {
      id: 0,
      title: "AI Music Generator",
      description:
        "A full-stack web application that uses an LSTM neural network to generate original musical melodies. The platform features a complete user authentication system, a personal dashboard to save and manage generated songs, and an advanced in-browser player with real-time visualization and playback controls.",
      image: aimusic,
      tags: ["python",'Flask framework', 'SQLite',"HTML", "TailwindCSS", "JavaScript"],
      github: "https://github.com/sumitdiwaka/Music-Generation-Using-LSTM",
      webapp: "",
    },
        {
      id: 1,
      title: "Video-Chat-App",
      description:
        "A Full-Stack Slack Clone This is a feature-rich, full-stack video chat application that mimics the core functionalities of Slack. It includes real-time messaging, video and audio calls, file sharing, and much more. This project is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates several modern technologies to provide a seamless user experience..",
      image: Videochat,
      tags: ["React",'Node js', 'Express js',"MongoDB", "TailwindCSS", "clerk",],
      github: "https://github.com/sumitdiwaka/video-chat-app",
      webapp: "http://video-chat-app-frontend-alpha.vercel.app",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "A full-stack financial tracker that helps users monitor income and expenses with real-time analytics. The application includes secure user authentication, a responsive dashboard with interactive visualizations (charts and graphs), and time-based filters to analyze financial trends efficiently.",
      image: expensetracker,
      tags: ["React JS", "Node JS", "MongoDB", "TailwindCSS", "Express JS",'JWT'],
      github: "https://github.com/sumitdiwaka/Expense-Tracker",
      webapp: "https://expense-tracker-bzq1.vercel.app",
    },
    {
      id: 3,
      title: "IEEE Document Formatter",
      description:
       'An intelligent web platform developed to automate the conversion of research documents into IEEE-compliant formats. The system uses Large Language Models (LLMs) to parse and restructure content while ensuring strict adherence to IEEE guidelines, significantly reducing manual formatting efforts.',
      image: ieee,
      tags: ["HTML",
        "CSS",
        "JavaScript",
        "sqlite",
        "Python",
        "LLaMA",
        "AI",],
      github: "https://github.com/sumit-kumar-2104/IEEE_Document_Formatter",
      webapp: "https://ieee-document-formatter-2.onrender.com",
    },
    {
      id: 4,
      title: "MindScribe",
      description:
        "A Modern Full-Stack Note-Taking Application MindScribe is a sleek, secure, and modern full-stack note-taking application designed to provide a seamless and visually appealing user experience. It features a secure authentication system with both passwordless OTP and Google OAuth, allowing users to quickly sign up and manage their notes. The application boasts a stunning dark mode UI with glassmorphism effects and subtle animations.",
      image: noteMaking,
      tags: ["React",  "Node js", "Express js",'MongoDB','TailwindCSS','Passport js'],
      github: "https://github.com/sumitdiwaka/Highway-Delite-Ass",
      webapp: "https://highway-delite-ass.vercel.app",
    },
    {
      id: 5,
      title: "Memory Game",
      description:
        "A Memory Match Game Mind Meld is a sleek, modern, and responsive card-matching memory game built as a frontend development assignment. The game challenges players to find all matching pairs of cards in the shortest amount of time and with the fewest moves. It features a clean user interface, smooth animations, and a persistent leaderboard to encourage replayability.",
      image: Memorymeld,
      tags: ["React", "TailwindCSS", "Framer Motion", ],
      github: "https://github.com/sumitdiwaka/Memory-LSOYS-Games---Apps",
      webapp: "https://memory-lsoys-games-apps.vercel.app",
    }, 
    ];