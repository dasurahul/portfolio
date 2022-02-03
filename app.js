const name = "Rahul";
const fullName = "Dasu Rahul";
const dateOfBirth = "14 Dec, 2001";
const address = "Bhanjanagar, Odisha";
const pinCode = "761126";
const emailAddress = "dasurahul598@gmail.com";
const phoneNumber = "+91 9337 086 565";

document.querySelector(".logo div").innerHTML = name;
document.querySelector(".name").innerHTML = name;
const fullNamePlace = document.querySelectorAll(".full-name");
document.querySelector(".date-of-birth").innerHTML = dateOfBirth;
const addressPlace = document.querySelectorAll(".address");
document.querySelector(".pin-code").innerHTML = pinCode;
const emailAddressPlace = document.querySelectorAll(".email-address");
const phoneNumberPlace = document.querySelectorAll(".phone-number");

fullNamePlace.forEach((eachPlace) => {
  eachPlace.innerHTML = fullName;
});

addressPlace.forEach((eachPlace) => {
  eachPlace.innerHTML = address;
});

phoneNumberPlace.forEach((eachPlace) => {
  eachPlace.innerHTML = phoneNumber;
});

emailAddressPlace.forEach((eachPlace) => {
  eachPlace.innerHTML = emailAddress;
});
