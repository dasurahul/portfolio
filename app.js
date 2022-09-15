const name = "Rahul";
const fullName = "Dasu Rahul";
const designation = "Software Engineer";
const descriptions = [
  "I’m living the dream.",
  "I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. Today, I’m working from home as a software engineer for Kellton, and I get to show off all these elements of who I am.",
  "I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!",
];
const socialLinks = [
  {
    name: "linkedin",
    image: "images/linkedin.svg",
    href: "https://linkedin.com/in/dasu-rahul",
  },
  {
    name: "github",
    image: "images/github.svg",
    href: "https://github.com/dasurahul",
  },
  {
    name: "hackerrank",
    image: "images/hackerrank.svg",
    href: "https://www.hackerrank.com/rock97456",
  },
];
const experiences = [
  {
    image: "images/kellton.png",
    time: "2022 August - Present",
    title: "Software Engineer",
    company: "Kellton Tech Solutions Limited",
  },
  {
    image: "images/kellton.png",
    time: "2022 February - 2022 August",
    title: "Trainee - Software Development",
    company: "Kellton Tech Solutions Limited",
  },
];
const skills = [
  {
    id: "html",
    name: "HTML",
    percentage: 90,
  },
  {
    id: "css",
    name: "CSS",
    percentage: 90,
  },
  {
    id: "javacript",
    name: "JavaScript",
    percentage: 80,
  },
  {
    id: "reactjs",
    name: "React.js",
    percentage: 80,
  },
  {
    id: "nodejs",
    name: "Node.js",
    percentage: 70,
  },
  {
    id: "expressjs",
    name: "Express.js",
    percentage: 70,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    percentage: 60,
  },
];
const certifications = [
  {
    image: "images/aws.svg",
    name: "AWS Partner: Accreditation (Technical)",
    organization: "Amazon Web Services (AWS)",
    url: "https://www.credly.com/badges/8845c98b-b482-4197-986e-b0ccefb211fb?source=linked_in_profile",
  },
  {
    image: "images/aws.svg",
    name: "AWS Partner: Cloud Economics Accreditation",
    organization: "Amazon Web Services (AWS)",
    url: "https://www.credly.com/badges/af330a78-18d9-4bf0-99d2-8caffd656bc7/linked_in_profile",
  },
  {
    image: "images/aws.svg",
    name: "AWS Partner: Accreditation (Business)",
    organization: "Amazon Web Services (AWS)",
    url: "https://www.credly.com/badges/507f78ae-8122-4f9a-87d5-b1cdd43ae376/linked_in_profile",
  },
  {
    image: "images/hackerrank.svg",
    name: "React (Basic) Certificate",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/07cc06c37c11",
  },
  {
    image: "images/hackerrank.svg",
    name: "CSS Certificate",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/13f1053481f2",
  },
];
const educations = [
  {
    image: "images/college.svg",
    year: "2019 - 2022",
    name: "BCA",
    college: "Bhanja College of Computer and Management",
  },
  {
    image: "images/college.svg",
    year: "2017 - 2019",
    name: "10+2",
    college: "Kabi Samrat Upendra Bhanja College",
  },
];
const projects = [
  {
    title: "Photos App",
    href: "https://rahul-photos-app.netlify.app",
    src: "images/photos-app.png",
  },
  {
    title: "Sunnyside Agency Landing Page",
    href: "https://sunnyside-agency-rahul.netlify.app",
    src: "images/sunnyside-agency-landing-page.png",
  },
  {
    title: "Loopstudios Landing Page",
    href: "https://loop-studios-landing-page-by-rahul.netlify.app",
    src: "images/loopstudios-landing-page.png",
  },
  {
    title: "YelpCamp",
    href: "https://yelpcamp-rahul.netlify.app",
    src: "images/yelpcamp.png",
  },
];
const quotation = "Code is like humor. When you have to explain it, it’s bad.";
const address = "Odisha, India";
const phoneNumber = "+91 9337 086 565";
const emailAddress = "dasurahul598@gmail.com";
document.querySelector(".logo div").innerText = name;
document.querySelector(".me > img").src = "images/profile-picture.png";
document.querySelector(".me > img").alt = fullName;
document.querySelector(".me h3").innerText = fullName;
document.querySelector(".me p").innerText = designation;
const descriptionContainer = document.querySelector(".description");
descriptions.forEach((description) => {
  const paragraph = document.createElement("p");
  paragraph.innerText = description;
  descriptionContainer.append(paragraph);
});
const socialLinksContainer = document.querySelectorAll(".social-links");
socialLinksContainer.forEach((container) => {
  socialLinks.forEach((socialLink) => {
    const link = document.createElement("a");
    link.href = socialLink.href;
    link.target = "_blank";
    const image = document.createElement("img");
    image.src = socialLink.image;
    image.alt = socialLink.name;
    link.append(image);
    container.append(link);
  });
});
const experiencesContainer = document.querySelector(".experiences");
experiences.forEach((experience) => {
  const experienceContainer = document.createElement("div");
  experienceContainer.classList.add("experience");
  const image = document.createElement("img");
  image.src = experience.image;
  image.alt = experience.company;
  const container = document.createElement("div");
  const time = document.createElement("div");
  time.innerText = experience.time;
  const title = document.createElement("div");
  title.innerText = experience.title;
  const company = document.createElement("div");
  company.innerText = experience.company;
  container.append(time, title, company);
  experienceContainer.append(image, container);
  experiencesContainer.append(experienceContainer);
});
const skillsContainer = document.querySelector(".skills");
skills.forEach((skill) => {
  const skillContainer = document.createElement("div");
  skillContainer.classList.add("skill");
  const skillName = document.createElement("div");
  skillName.classList.add("skill-name");
  skillName.innerText = skill.name;
  const progress = document.createElement("div");
  progress.id = skill.id;
  progress.classList.add("progress");
  skillContainer.append(skillName, progress);
  skillsContainer.append(skillContainer);
  var circle = new ProgressBar.Circle("#" + progress.id, {
    color: "#777",
    strokeWidth: 4,
    trailWidth: 1,
    easing: "easeInOut",
    duration: 2000,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#777", width: 1 },
    to: { color: "#238ca9", width: 4 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value + "%");
      }
    },
  });
  const value = skill.percentage / 100;
  circle.animate(value);
});
const certificationsContainer = document.querySelector(".certifications");
certifications.forEach((certification) => {
  const certificationContainer = document.createElement("div");
  certificationContainer.classList.add("certification");
  const image = document.createElement("img");
  image.src = certification.image;
  image.alt = certification.name;
  const container = document.createElement("div");
  const name = document.createElement("div");
  name.innerText = certification.name;
  const organization = document.createElement("div");
  organization.innerText = certification.organization;
  const link = document.createElement("a");
  link.href = certification.url;
  link.target = "_blank";
  const viewImage = document.createElement("img");
  viewImage.src = "images/arrow-up-right-from-square.svg";
  viewImage.alt = "icon";
  link.append("View", viewImage);
  container.append(name, organization, link);
  certificationContainer.append(image, container);
  certificationsContainer.append(certificationContainer);
});
const educationsContainer = document.querySelector(".educations");
educations.forEach((education) => {
  const educationContainer = document.createElement("div");
  educationContainer.classList.add("education");
  const image = document.createElement("img");
  image.src = education.image;
  image.alt = education.college;
  const container = document.createElement("div");
  const yearContainer = document.createElement("div");
  yearContainer.innerText = education.year;
  const nameContainer = document.createElement("div");
  nameContainer.innerText = education.name;
  const collegeContainer = document.createElement("div");
  collegeContainer.innerText = education.college;
  container.append(yearContainer, nameContainer, collegeContainer);
  educationContainer.append(image, container);
  educationsContainer.append(educationContainer);
});
const projectsContainer = document.querySelector(".projects-grid");
projects.forEach((project) => {
  const projectContainer = document.createElement("a");
  projectContainer.href = project.href;
  projectContainer.target = "_blank";
  projectContainer.dataset.projectname = project.title;
  const image = document.createElement("img");
  image.src = project.src;
  image.alt = project.title;
  projectContainer.append(image);
  projectsContainer.append(projectContainer);
});
document.querySelector(".social-profiles > img").src =
  "images/profile-picture.png";
document.querySelector(".social-profiles > img").alt = fullName;
document.querySelector(".social-profiles > p").innerText = fullName;
document.querySelector(".quotation p").innerText = quotation;
document.querySelector(".address").innerText = address;
document.querySelector(".email-address").innerText = emailAddress;
document.querySelector(".phone-number").innerText = phoneNumber;
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
  menu.classList.remove("closed");
  menu.classList.add("opened");
});
const closeButton = document.querySelector(".menu-close-button");
closeButton.addEventListener("click", () => {
  menu.classList.add("closed");
  menu.classList.remove("opened");
});
