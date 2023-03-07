const inp = document.querySelector("#inputRotate");
const div = document.querySelector(".red");
inp.addEventListener("input", (e) => {
  const val = e.target.value;
  div.style.transform = `rotate(${val}deg)`;
});

const exam = [
  {
    name: "john",
    age: 20,
    url: "https://zachiska.com/wp-content/uploads/2019/12/73414958_2429105324085170_2500640154078220638_n.jpg",
  },
  {
    name: "john",
    age: 20,
    url: "https://zachiska.com/wp-content/uploads/2019/12/73414958_2429105324085170_2500640154078220638_n.jpg",
  },
  {
    name: "john",
    age: 20,
    url: "https://zachiska.com/wp-content/uploads/2019/12/73414958_2429105324085170_2500640154078220638_n.jpg",
  },
];
console.log(exam);
for (let i = 0; i < exam.length; i++) {
  const element = exam[i];
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const img = document.createElement("img");
  h3.textContent = element.name;
  p.textContent = element.age;
  img.src = element.url;
  img.alt = element.name;
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  document.body.appendChild(div);
}
