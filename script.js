const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//define function to calculate based on buttton clicked
const calculate= (btnValue) => {
  if (btnValue==="=" && btnValue !== "") {
    //if output has '%' replace it with '/100' before calculating evaluation
    output = eval(output.replace("%", "/100"));  
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //IF DEL button is clicked, remove the lastb character from the output
    output = output.toString().slice(0, -1);
  } else {
    //if output is empty, and button is specialCharacters then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};


//Add event listeners to the buttons, call calculate() on click.
buttons.forEach((button) => {
    //button click listener calls calculate() wth dataset value 
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});