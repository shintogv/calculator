// Accessing DOM elements
let input = document.getElementById("input");
let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

// To get access to all buttons
for (const item of btn) {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    screen.value += btnText;
  });

  // When AC is clicked erase
  if (btnText === "AC") {
    btnText = "";
    screen.value = "";
    input.value = "";
  }

  //When divide button is clicked
  if (btnText === "÷") {
    btnText = "/";
  }

  // When multiply button is clicked
  if (btnText === "×") {
    btnText = "*";
  }
}

const returnEval = (args) => {
  return eval(args);
};

const getResult = () => {
  input.value = screen.value;
  screen.value = returnEval(screen.value);
};
