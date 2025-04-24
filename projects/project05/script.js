const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const properties = {
  dark: {
    backgroundColor1: "rgb(0 0 0 / 50%)",
    backgroundColor2: "rgb(255 255 255 / 50%)",
    text: "Dark Mode",
    iconAdd: "fa-moon",
    iconRemove: "fa-sun",
    imgType: "dark",
  },
  light: {
    backgroundColor1: "rgb(255 255 255 / 50%)",
    backgroundColor2: "rgb(0 0 0 / 50%)",
    text: "Light Mode",
    iconAdd: "fa-sun",
    iconRemove: "fa-moon",
    imgType: "light",
  },
};

function setProperties(mode) {
  const props = properties[mode];
  console.log(props);
  nav.style.backgroundColor = props.backgroundColor1;
  textBox.style.backgroundColor = props.backgroundColor2;
  toggleIcon.children[0].textContent = props.text;
  toggleIcon.children[1].classList.remove(props.iconRemove);
  toggleIcon.children[1].classList.add(props.iconAdd);
  image1.src = `img/undraw_proud_coder_${props.imgType}.svg`;
  image2.src = `img/undraw_feeling_proud_${props.imgType}.svg`;
  image3.src = `img/undraw_conceptual_idea_${props.imgType}.svg`;
}

// function imageMode(color) {
//   image1.src = `img/undraw_proud_coder_${color}.svg`;
//   image2.src = `img/undraw_feeling_proud_${color}.svg`;
//   image3.src = `img/undraw_conceptual_idea_${color}.svg`;
// }

// Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("dark");
// }

// Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   imageMode("light");
// }

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    setProperties("dark");
    // darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    setProperties("light");
    // lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Session Storage For Theme
const currentTheme = sessionStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  setProperties(currentTheme);
  if (currentTheme === "dark") toggleSwitch.checked = true;
}
