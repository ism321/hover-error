const error = document.querySelector(".error");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (!pattern.test(input.value)) {
    error.classList.remove("hidden");
    input.classList.add("active");
  } else {
    error.classList.add("hidden");
    const inputValue = input.value;
    alert(`${inputValue}`);
    window.location.reload()
  }
});

// // input.addEventListener("click", function (e) {
// //     window.location.reload();
// });
