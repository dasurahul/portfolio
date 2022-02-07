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
    name: "Bachelor of Computer Application",
    university: "Berhampur University",
  },
];
const experiences = [
  {
    year: "2022 Jan 31 - Present",
    name: "Trainee - Software Development",
    at: "Kellton Tech Solutions Limited",
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
    title: "Frontendmentor Projects",
    description: "Completed 6 projects from frontendmentor.io",
  },
  {
    title: "HackerRank Certificate",
    description: "Got CSS Certificate from HackerRank",
  },
];
const linkedInProfileUrl = "https://www.linkedin.com/in/rahul-dasu-3863b9218";
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
  universityDiv.innerHTML = education.university;
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
