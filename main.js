const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "black",
];
let i = 0;
let numberOfBoxes = localStorage.getItem("count") || 1;

function addChangeColor(box) {
  box.addEventListener("click", colorChange);
}

function colorChange(event) {
  const id = event.target.id;
  const color = colors[i % colors.length];
  event.target.style.backgroundColor = color;
  localStorage.setItem(id, color);
  i++;
}

const addMore = (index) => {
  const newBox = document.createElement("div");
  document.getElementById("main").appendChild(newBox);
  const color = localStorage.getItem("box-" + index);
  newBox.style.backgroundColor = color;
  newBox.id = "box-" + index;
  addChangeColor(newBox);
};

const addHandler = () => {
  numberOfBoxes++;
  localStorage.setItem("count", numberOfBoxes);
  addMore();
};

// on load
for (let j = 0; j < numberOfBoxes; j++) {
  addMore(j);
}
