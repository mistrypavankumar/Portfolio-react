/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Mistry Pavan Kumar",
  logo_name: "MistryPavanKumar",
  nickname: "Pavan",
  subTitle:
    "Hi, I'm Pavan, a Full Stack Developer 🚀 from Hyderabad, India. Currently a sophomore student contributing to various open-sourced projects and working on quite a few personal projects.",
  resumeLink:
    "https://drive.google.com/file/d/1-9ILHZfmmnZvoIzQQloJ_rH48i4hxNvH/view?usp=sharing",
  portfolio_repository: "https://github.com/mg143pavankumar/Portfolio-react",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/mg143pavankumar",
  // linkedin: "https://www.linkedin.com/in/mistry-pavan-kumar-5067b21b1/",
  // gmail: "pavansharma.mg143@gmail.com",
  // gitlab: "https://gitlab.com/mg143pavankumar",
  // facebook: "https://www.facebook.com/pavan.mistry.143mg.77/",
  // twitter: "https://twitter.com/pavan7143mg",
  // instagram: "https://www.instagram.com/pavan_kumar143mg/"

  {
    name: "Github",
    link: "https://github.com/mg143pavankumar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mistry-pavan-kumar-5067b21b1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pavansharma.mg143@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pavan7143mg",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pavan.mistry.143mg.77/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pavan_kumar143mg/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/pavan_kumar143mg?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/pavan_kumar777",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bharat Institute of Engineering and Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "biet-logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I secured first place in Hackathon with over 100 participants for coming up with the idea of Agrodrone. Though agrodrones already exist, our model is more affordable and efficient.",
      ],
      website_link: "http://biet.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Cognitive class.ai",
      logo_path: "cognitiveclass.png",
      certificate_link:
        "https://drive.google.com/file/d/1E4ix5A3JWzAbI3XuAmv3QQEK5bsRf0yH/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/V77LNKZFC3CV",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Programming for Web with JavaScript",
      subtitle: "- Chris Murphy",
      logo_path: "penn_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/92fcf493c93e477faab40ce616306af6",
      alt_name: "edX",
      color_code: "#FFBB0099",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.edx.org/certificates/232fa167e3d54dd38c2c6289d5de9344",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "SQL and Relational Databases",
      subtitle: "- Cognitive class.ai",
      logo_path: "cognitiveclass.png",
      certificate_link:
        "https://drive.google.com/file/d/17yu_YgiTDZWoaeYDjoqnXo9sRy4EmZsq/view",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Java for android",
      subtitle: "- Vanderbilt university",
      logo_path: "vu.png",
      certificate_link:
        "https://drive.google.com/file/d/1rOguNkfs_Y8SZJMSbCMoGbqC-aNe_Add/view",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed various Internships in the field of Full Stack Development that gave me industry exposure on both Front End and Back End development. Apart from Developing Web and Mobile applications, I love teaching and writing about Tech. Hence I actively contribute to Open Source Communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Basic Banking Application using Flutter and SQflite",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "TSF_logo.png",
          duration: "February 2021 - March 2021",
          location: "Work From Home",
          description:
            "During this Internship, I developed a basic banking application in which we can transfer amount from one user to another in a single click. To develop this app i had used flutter and sqflite as a backend.",
          color: "#1597bb",
        },
        {
          title: "Linux developer Intern",
          company: "Swecha",
          company_url: "https://swecha.org/",
          logo_path: "logo2.png",
          duration: "July 2020 - August 2020",
          location: "Work From Home",
          description:
            "Developed a Debian Distro, an Operating System based on Linux kernel. The Distro comes pre-installed with all the softwares and Engineer would require.            ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Part-Time Jobs",
      experiences: [
        {
          title: "Software Development Associate",
          company: "Kabb",
          company_url: "https://www.kabb.in",
          logo_path: "kabb.jpeg",
          duration: "Jul 2022 - Present ",
          location: "Work From Home",
          description:
            "Working as a Software Development Associate in the field of Mobile Application Development using React Native",
          color: "#7752A7",
        },
        {
          title: "Flutter Developer",
          company: "OrgSpeak",
          company_url: "https://orgspeak.com/",
          logo_path: "orgSpeak.jpeg",
          duration: "Oct 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "Worked as a Flutter Developer in the field of Mobile Application Development and my role was as an front-end developer.",
          color: "#4a71e9",
        },
        {
          title: "Full Stack Developer",
          company: "SoftWeb Technologies",
          company_url: "https://www.softwebcompany.tech",
          logo_path: "softWeb-tech.jpg",
          duration: "May 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "Worked as a Full Stack Developer in the field of Web Development and Mobile Application Development using React, React Navtive, Mongodb, firebase, etc.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pavan_kumar1.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://mg143pavankumar.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Laxmi ganapthi colony, Thattiannaram, Hyderabad - 500068",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@17.357193,78.5905192,15z/data=!4m5!7m4!1m2!1s101440642366560785550!2sChZqczVaaGZRN19wMXhjTG1OaEExWF9REggHBbY8-eHe_A%3D%3D!2e2?hl=en",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8688668145",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
