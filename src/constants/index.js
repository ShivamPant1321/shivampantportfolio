import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a fresher in full stack development and an aspiring data analyst, equipped with knowledge in technologies such as React, Redux, MySQL, MongoDB, Node.js, Express.js, Power BI, and Java. Eager to leverage these skills, I aim to build impactful applications and contribute to data-driven decision-making processes.`;

export const ABOUT_TEXT = `I am a dedicated and versatile fresher in full stack development with aspirations to become a data analyst. I have foundational knowledge in technologies like React, Redux, Node.js, MySQL, MongoDB, and Power BI. My journey in tech began with a curiosity for understanding systems and has grown into a passion for building impactful solutions. I enjoy learning continuously and tackling new challenges to broaden my skills. In addition to coding, I’m interested in exploring new technologies, staying active, and contributing to projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "May - Aug 2024",
    role: "Apprenticeship",
    company: "GirlScript Summer of Code(GSSoC)",
    description: ` Actively contributed to GirlScript Summer of Code, enhancing GitHub proficiency and web development skills. Worked 
on collaborative projects, gaining insights into teamwork and project management. Mentored by Program Manager Mr. 
Sanjay Viswanathan, who provided valuable guidance and support throughout the experience.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "Html"],
  },
];

export const PROJECTS = [
  {
    title: "OnTheGo",
    image: project1,
    description:
      "The platform helps students find travel partners for safer and cost-effective journeys. Architected robust backend utilizing MongoDB and JWT for secure user authentication leading to 30% reduction in response times for API calls. Engineered a comprehensive technology reducing load time by 40%.",
    technologies: [
      "JavaScript",
      "HTML",
      "React",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Express.js",
      "Firebase",
      "Google OAuth",
    ],
  },
  {
    title: "Heart Disease Predictor",
    image: project2,
    description:
      "A simple machine learning project that predicts heart disease risk using user input.",
    technologies: [
      "Machine Learning Algorithms (Logistic Regression, Decision Tree, SVM)",
      "Frameworks (Scikit-Learn)",
      "Data visualization (Matplotlib)",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },
];

export const CONTACT = {
  address:
    "1208/20/4, Street-6 Block-A, Bhai Himmat Singh Nagar, Dugri, Ludhiana",
  phoneNo: "+91 7973455580 ",
  email: "pantshivam.mamta@gmail.com",
};
