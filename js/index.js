let inputShortLink = document.getElementById("inputShortLink");
let listNav = document.getElementById("listNav");
let xMark = document.getElementById("xMark");
let submitShortLink = document.getElementById("submitShortLink");
let errorInput = document.getElementById("errorInput");
let form = document.querySelector("form");
let Aside = document.querySelector("aside");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

listNav.onclick = () => {
  Aside.style.display = "block";
  Aside.style.right = "0";
  Aside.style.transition = "0.5s";
  listNav.display = "none";
};
xMark.onclick = () => {
  Aside.style.display = "none";
  Aside.style.right = "-50%";
  Aside.style.transition = "0.5s";
  listNav.display = "block";
};

// if (inputShortLink.value == "") {
//     inputShortLink.style.background = 'red';
//     errorInput.textContent = "Please enter a short link";
//     errorInput.style.color = 'red';
// } else {
//     errorInput.textContent = "";
// }
