import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  zoho,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "BackEnd Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Zoho Corporation",
    company_website: "https://www.zohocorp.com/",
    icon: zoho,
    iconBg: "#fff0d9",
    date: "Jun 2020 - Jan 2024",
    points: [
      "Increased system flexibility by 30% through the enhancement of data type support, reducing reliance on specialized custom functions.",
      "Improved operational efficiency by 25% by architecting and implementing a feature that streamlined the use of common data across multiple data centers.",
      "Optimized workflow organization by developing a folder structuring system, leading to a 20% reduction in user error rates.",
      "Mentored junior engineers, leading to a 15% improvement in team productivity through knowledge sharing and code review processes.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Zoho Corporation",
    company_website: "https://www.zohocorp.com/",
    icon: zoho,
    iconBg: "#fff0d9",
    date: "Jan 2020 - May 2020",
    points: [
      "Resolved critical bugs and developed key features, contributing to a 15% increase in user satisfaction for a major web application.",
      "Presented detailed software lifecycle reports, leading to a 10% improvement in project timelines based on actionable insights.",
      "Contributed to peer code reviews, ensuring high standards of code quality and scalability, and reducing technical debt by 20%.",
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Tawfik",
  fullName: "Mohammed Tawfik",
  email: "mohammedtawfik51@gmail.com",
  role: "Software Engineer",
  about: `I'm a skilled software engineer and I have recently completed a Master of Science, majoring in Computing and Software Engineering at Epita. I have a passion for all things technology and design, from software engineering & machine learning to 3D graphics..

In addition to my love of technology and design, I am also interested in Education, Football and Cats.

Below are details of some of projects I have developed over my 10 plus years of coding experience.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/mohammed-tawfik-09241712a/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Mohtawfik",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
