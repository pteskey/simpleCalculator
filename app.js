let displayTotal = "";
let display = document.getElementById("numDisplay");

function calcButton(number) {
  displayTotal = displayTotal + number;
  display.value = displayTotal;
}

function calcOperator(oper) {
  displayTotal = displayTotal + oper;
  display.value = displayTotal;
}

function solve() {
  let x = document.getElementById("numDisplay").value;
  let y = eval(x);
  document.getElementById("numDisplay").value = y;
}

function clearButton() {
  displayTotal = "";
  display.value = displayTotal;
}

display.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equal").click();
  }
});
