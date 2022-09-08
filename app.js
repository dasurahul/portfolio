const name = "Rahul";
const fullName = "Dasu Rahul";
const dateOfBirth = "14 Dec, 2001";
const address = "Bhanjanagar, Odisha";
const pinCode = "761126";
const emailAddress = "dasurahul598@gmail.com";
const phoneNumber = "+91 9337 086 565";
const educations = [
  {
    year: "2019 - 2022",
    name: "BCA",
    college: "Bhanja College of Computer and Management",
  },
];
const experiences = [
  {
    year: "2022 Aug - Present",
    name: "Software Engineer",
    at: "Kellton Tech Solutions Limited",
  },
  {
    year: "2022 Feb - 2022 Aug",
    name: "Trainee - Software Development",
    at: "Kellton Tech Solutions Limited",
  },
];
const skills = [
  {
    name: "HTML",
    img: "images/html.png",
    percentage: "75%",
  },
  {
    name: "CSS",
    img: "images/css.png",
    percentage: "75%",
  },
  {
    name: "JavaScript",
    img: "images/javascript.png",
    percentage: "50%",
  },
  {
    name: "React.js",
    img: "images/react.png",
    percentage: "50%",
  },
  {
    name: "Bootstrap",
    img: "images/bootstrap.png",
    percentage: "75%",
  },
];
const badges = [
  {
    name: "CSS",
    description: "LinkedIn Skill Assessment Badge",
  },
  {
    name: "React.js",
    description: "LinkedIn Skill Assessment Badge",
  },
  {
    name: "JavaScript",
    description: "Silver Badge from HackerRank",
  },
];
const achievements = [
  {
    title: "CSS Certificate",
    description: "Got CSS Certificate from HackerRank",
  },
  {
    title: "React Certificate",
    description: "Got React Certificate from HackerRank",
  },
  {
    title: "Frontendmentor Projects",
    description: "Completed 6 projects from frontendmentor.io",
  },
  {
    title: "AWS Certificate",
    description: "Got AWS Partner: Accreditation (Technical) Certificate",
  },
];
const projects = [
  {
    title: "NFT Preview Card Component",
    href: "https://zen-feynman-768415.netlify.app",
    src: "images/nft-preview-card-component.png",
  },
  {
    title: "Advice Generator App",
    href: "https://advice-generator-by-rahul.netlify.app",
    src: "images/advice-generator-app.png",
  },
  {
    title: "Sunnyside Agency Landing Page",
    href: "https://sunnyside-agency-rahul.netlify.app",
    src: "images/sunnyside-agency-landing-page.png",
  },
  {
    title: "Huddle Landing Page",
    href: "https://huddle-landing-page-with-alternating-feature-blocks-by-rahul.netlify.app",
    src: "images/huddle-landing-page.png",
  },
  {
    title: "Photos App",
    href: "https://rahul-photos-app.netlify.app",
    src: "images/photos-app.png",
  },
  {
    title: "YelpCamp",
    href: "https://yelpcamp-rahul.netlify.app",
    src: "images/yelpcamp.PNG",
  },
  {
    title: "AIRY Hotels",
    href: "https://airy-hotels.netlify.app",
    src: "images/airy-hotels.png",
  },
  {
    title: "Loopstudios Landing Page",
    href: "https://loop-studios-landing-page-by-rahul.netlify.app",
    src: "images/loopstudios-landing-page.png",
  },
  {
    title: "Sneakers Page",
    href: "https://sneakers-company.netlify.app",
    src: "images/sneakers.png",
  },
  {
    title: "Intro component with signup form",
    href: "https://signup-form-rahul.netlify.app",
    src: "images/signup-form.PNG",
  },
];
const linkedInProfileUrl = "https://www.linkedin.com/in/dasu-rahul";
const githubProfileUrl = "https://www.github.com/dasurahul";
const quotation =
  "I believe that whatever doesn't kill you, simply makes you stranger.";

document.querySelector(".logo div").innerHTML = name;
document.querySelector(".name").innerHTML = name;
const fullNamePlace = document.querySelectorAll(".full-name");
document.querySelector(".date-of-birth").innerHTML = dateOfBirth;
const addressPlace = document.querySelectorAll(".address");
document.querySelector(".pin-code").innerHTML = pinCode;
const emailAddressPlace = document.querySelectorAll(".email-address");
const phoneNumberPlace = document.querySelectorAll(".phone-number");
const educationsContainer = document.querySelector(".educations");
const experiencesContainer = document.querySelector(".experiences");
const skillsContainer = document.querySelector(".skills");
const badgesContainer = document.querySelector(".badges");
const achievementsContainer = document.querySelector(".achievements");
const projectsContainer = document.querySelector(".projects-grid");
document.querySelector(".linkedin").href = linkedInProfileUrl;
document.querySelector(".github").href = githubProfileUrl;
document.querySelector(".quotation p").innerHTML = quotation;

fullNamePlace.forEach((eachPlace) => {
  eachPlace.innerHTML = fullName;
});

addressPlace.forEach((eachPlace) => {
  eachPlace.innerHTML = address;
});

emailAddressPlace.forEach((eachPlace) => {
  eachPlace.innerHTML = emailAddress;
});

phoneNumberPlace.forEach((eachPlace) => {
  eachPlace.innerHTML = phoneNumber;
});

educations.forEach((education) => {
  const educationDiv = document.createElement("div");
  educationDiv.classList.add("education");
  const yearDiv = document.createElement("div");
  yearDiv.innerHTML = "<strong>" + education.year + "</strong>";
  const nameDiv = document.createElement("div");
  nameDiv.innerHTML = "<strong>" + education.name + "</strong>";
  const universityDiv = document.createElement("div");
  universityDiv.classList.add("gray");
  universityDiv.innerHTML = education.college;
  educationDiv.append(yearDiv, nameDiv, universityDiv);
  educationsContainer.append(educationDiv);
});

experiences.forEach((experience) => {
  const experienceDiv = document.createElement("div");
  experienceDiv.classList.add("experience");
  const yearDiv = document.createElement("div");
  yearDiv.innerHTML = "<strong>" + experience.year + "</strong>";
  const nameDiv = document.createElement("div");
  nameDiv.innerHTML = "<strong>" + experience.name + "</strong>";
  const atDiv = document.createElement("div");
  atDiv.classList.add("gray");
  atDiv.innerHTML = experience.at;
  experienceDiv.append(yearDiv, nameDiv, atDiv);
  experiencesContainer.append(experienceDiv);
});

skills.forEach((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill");
  const colDiv = document.createElement("div");
  colDiv.classList.add("col");
  const nameDiv = document.createElement("div");
  const strongDiv = document.createElement("strong");
  strongDiv.innerHTML = skill.name;
  nameDiv.append(strongDiv);
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = skill.img;
  image.alt = skill.name;
  image.classList.add("skill-logo");
  imageDiv.append(image);
  colDiv.append(nameDiv);
  colDiv.append(imageDiv);
  skillDiv.append(colDiv);
  const percentageDiv = document.createElement("div");
  percentageDiv.dataset.percentage = skill.percentage;
  percentageDiv.classList.add("skill-percentage");
  skillDiv.append(percentageDiv);
  skillsContainer.append(skillDiv);
});

badges.forEach((badge) => {
  const badgeDiv = document.createElement("div");
  const nameDiv = document.createElement("strong");
  nameDiv.innerHTML = badge.name;
  const descriptionDiv = document.createElement("span");
  descriptionDiv.classList.add("gray");
  descriptionDiv.classList.add("small");
  descriptionDiv.innerHTML = " - " + badge.description;
  badgeDiv.append(nameDiv, descriptionDiv);
  badgesContainer.append(badgeDiv);
});

achievements.forEach((achievement) => {
  const achievementDiv = document.createElement("div");
  achievementDiv.classList.add("achievement");
  const titleDiv = document.createElement("div");
  titleDiv.innerHTML = "<strong>" + achievement.title + "</strong>";
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("gray");
  descriptionDiv.classList.add("small");
  descriptionDiv.innerHTML = achievement.description;
  achievementDiv.append(titleDiv, descriptionDiv);
  achievementsContainer.append(achievementDiv);
});

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.add("open");
});

const closeButton = document.querySelector(".menu-close-button");
closeButton.addEventListener("click", () => {
  menu.classList.remove("open");
});

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
