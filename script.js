const newInpt = document.querySelector("#inpt");
const newBtn = document.querySelector("#btn");
const newItem = document.querySelector("#item");

newItem.addEventListener("click", addItem);

function addItem() {
  if (newInpt.value.trim() != "") {
    const itemLi = document.createElement("li");
    newItem.append(itemLi);

    itemLi.textContent = newInpt.value;

    newInpt.value = "";

    
  }
}
