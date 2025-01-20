let name;

// const confirmButton = document.getElementById("confirm");
// if (confirmButton) {
//   confirmButton.onclick = () => {
//     const input = document.getElementById("name");
//     const val = input.value;

//     if (!val) {
//       alert("NAME THE MOMENT");
//       location.reload();
//     } else {
//       name = input.value;
//       input.value = "";

//       location.href = `./home.html?name=${encodeURIComponent(name)}`;
//     }
//   };
// }

document.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    const input = document.getElementById("name");
    const val = input.value;

    if (!val) {
      alert("NAME THE MOMENT");
      location.reload();
    } else {
      name = input.value;
      input.value = "";
      
      location.href = `./home.html?name=${encodeURIComponent(name)}`;
    }
  }
});