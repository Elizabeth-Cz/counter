const counter = document.getElementById("display");
const incrementBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const decrementBtn = document.getElementById("subtract");

let countValue = 0;

incrementBtn.addEventListener("click", plus);
decrementBtn.addEventListener("click", minus);
resetBtn.addEventListener("click", reset);

function color() {
  if (countValue < 0) {
    counter.style.color = "#A44646";
  } else if (countValue > 0) {
    counter.style.color = "#46A46C";
  } else {
    counter.style.color = "";
  }
}

function plus() {
  countValue += 1;
  counter.innerHTML = countValue;
  color();
}
function minus() {
  countValue -= 1;
  counter.innerHTML = countValue;
  color();
}
function reset() {
  countValue = 0;
  counter.innerHTML = countValue;
  color();
}
