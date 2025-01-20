const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

const aboutMeText = "Johann Liwag is the name, 19 Years old, I like coding, playing the guitar, going to the gym, cooking, etc.";
const educationText = "Cuurently on my third year in BS Information Technology: Major in Web Technology, Soon taking MS Computer Science.";
const experienceText = "3 Years of Experience in Software Development, Custom Artificial Intelligence Model Training.";
const skillsText = "Some of my most notable skills include: Full-Stack Web Development, Advanced Data Structures and Algorithms, Public Speaking.";
const projectsText = "- HULECa: Hyperactive Unmanned Law Enforcement Camera<br>- Cr8tive Sync: Kwento Kard<br>- JOJANG MOMENT<br>- More on GitHub";
const contactText = "Facebook: Johann Sebastian Philip<br>GitHub: wehejojo";

if (name) {
  document.getElementById("greeting").innerHTML = `Greetings, ${name}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".choices h4");

  const modals = {
    opt1: {
      modalId: "modal1",
      textId: "about_me",
      text: aboutMeText,
    },
    opt2: {
      modalId: "modal2",
      textId: "education",
      text: educationText,
    },
    opt3: {
      modalId: "modal3",
      textId: "experience",
      text: experienceText
    },
    opt4: {
      modalId: "modal4",
      textId: "skills",
      text: skillsText
    },
    opt5: {
      modalId: "modal5",
      textId: "projects",
      text: projectsText
    },
    opt6: {
      modalId: "modal6",
      textId: "contact",
      text: contactText
    }
  };

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
      const modalInfo = modals[selectedOption.id];
      if (modalInfo) {
        const modalElement = document.getElementById(modalInfo.modalId);

        if (modalElement) {
          modalElement.classList.remove("hidden");
          modalElement.classList.add("visible");

          generateDialogue(modalInfo.textId, modalInfo.text);
        }
      }
    }

    options[currentIndex].classList.add("selected");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      Object.values(modals).forEach(({ modalId }) => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
          modalElement.classList.add("hidden");
          modalElement.classList.remove("visible");
        }
      });
    }
  });
});

function generateDialogue(elementId, text) {
  let output = "";
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      output += text[i];
      element.innerHTML = output;
    }, i * 50);
  }
}
