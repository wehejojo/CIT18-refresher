setTimeout(() => {
  document.getElementById("msg1").classList.add("hidden");
  document.getElementById("msg2").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("msg2").classList.add("hidden");
    document.getElementById("moment").classList.remove("hidden");
  }, 3000);
}, 3000);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const all = document.querySelectorAll("*");

    all.forEach(el => {
      el.style.color = "black";
    });

    setTimeout(() => {
      location.href = "./pages/name.html";
    }, 1000);
  }
});
