const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%", "*", "/", "-", "+", "="]
let output ="";

// Define fuction to calculate based on button clicked.
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        // If output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));

    }else if(btnValue === "AC"){
    output = ""
    }else if( btnValue === "Del"){
        // If Del button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1)

    }else{
        // If output is empty and button is specialchars then return
        if(output === "" && specialchars.includes(btnValue)) return;
        output += btnValue;
    }
   display.value = output;
};



//Add event listener to buttons, call calculator() on click.

buttons.forEach(button => {
    //Button click listener calls calculator() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
});


