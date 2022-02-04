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
