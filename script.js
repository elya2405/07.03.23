const inp = document.querySelector("#inputRotate");
const div = document.querySelector(".red");
inp.addEventListener("input", (e) => {
  const val = e.target.value;
  div.style.transform = `rotate(${val}deg)`;
});
