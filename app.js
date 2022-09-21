const skills = [
  {
    id: "mongodb",
    percentage: 60,
  },
  {
    id: "expressjs",
    percentage: 70,
  },
  {
    id: "nodejs",
    percentage: 70,
  },
  {
    id: "reactjs",
    percentage: 80,
  },
  {
    id: "javascript",
    percentage: 80,
  },
  {
    id: "css",
    percentage: 90,
  },
  {
    id: "html",
    percentage: 90,
  },
];

skills.forEach((skill) => {
  var circle = new ProgressBar.Circle("#" + skill.id, {
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
