const buttons = document.querySelectorAll(".btn");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#delete-btn");
const equalBtn = document.querySelector("#equal-btn");

const display = document.querySelector("#display");

const insert = (num) => {
  const displayValue = display.innerHTML;
  display.innerHTML = displayValue + num;
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const buttonValue = button.innerHTML;
    insert(buttonValue);
  })
);

clearBtn.addEventListener("click", () => {
  display.innerHTML = "";
});

deleteBtn.addEventListener("click", () => {
  const displayValue = display.innerHTML;
  display.innerHTML = displayValue.substring(0, displayValue.length - 1);
});

equalBtn.addEventListener("click", () => {
  const displayValue = display.innerHTML;
  if (displayValue) {
    display.innerHTML = eval(displayValue);
  }
});
