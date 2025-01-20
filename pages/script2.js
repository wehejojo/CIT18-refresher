const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

const aboutMeText = "Johann Liwag is the name, 19 Years old, I like coding, playing the guitar, going to the gym, cooking, etc.";
const educationText = "";
const experienceText = "";
const skillsText = "";
const projectsText = "";
const contactText = "";

if (name) {
  document.getElementById("greeting").innerHTML = `Greetings, ${name}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".choices h4");
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  let currentIndex = 0;

  options[currentIndex].classList.add("selected");

  

  document.addEventListener("keydown", (event) => {
    options[currentIndex].classList.remove("selected");

    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + options.length) % options.length;
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % options.length;
    } else if (event.key === "Enter") {
      const selectedOption = options[currentIndex];
    }

    options[currentIndex].classList.add("selected");
  });
});
