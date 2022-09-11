const name = "Rahul";
const fullName = "Dasu Rahul";
const dateOfBirth = "14 Dec, 2001";
const address = "Bhanjanagar, Odisha";
const pinCode = "761126";
const emailAddress = "dasurahul598@gmail.com";
const phoneNumber = "+91 9337 086 565";
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
const skillsContainer = document.querySelector(".skills");

const educations = [
  {
    year: "2019 - 2022",
    name: "BCA",
    college: "Bhanja College of Computer and Management",
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

// skills.forEach((skill) => {
//   const skillDiv = document.createElement("div");
//   skillDiv.classList.add("skill");
//   const colDiv = document.createElement("div");
//   colDiv.classList.add("col");
//   const nameDiv = document.createElement("div");
//   const strongDiv = document.createElement("strong");
//   strongDiv.innerHTML = skill.name;
//   nameDiv.append(strongDiv);
//   const imageDiv = document.createElement("div");
//   const image = document.createElement("img");
//   image.src = skill.img;
//   image.alt = skill.name;
//   image.classList.add("skill-logo");
//   imageDiv.append(image);
//   colDiv.append(nameDiv);
//   colDiv.append(imageDiv);
//   skillDiv.append(colDiv);
//   const percentageDiv = document.createElement("div");
//   percentageDiv.dataset.percentage = skill.percentage;
//   percentageDiv.classList.add("skill-percentage");
//   skillDiv.append(percentageDiv);
//   skillsContainer.append(skillDiv);
// });

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
  menu.classList.remove("closed");
  menu.classList.add("opened");
});

const closeButton = document.querySelector(".menu-close-button");
closeButton.addEventListener("click", () => {
  menu.classList.add("closed");
  menu.classList.remove("opened");
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
