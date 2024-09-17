let operand1 = 0;
let operand2 = 0;
let operator = "";
let result = 0;
let operator_set = false;

//prevent double-tap zoom-in
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

function click_function(val){
    let display = document.getElementById("digital_display");

    if(!isNaN(val)){    //display the number the user clicked
        display.textContent += val;
    } else if(val != "="){ //display the operator the user clicked...
        
        if(display.textContent === ""){ //UNLESS the user has not clicked a number yet!
            alert("invalid format used.");
        }else{
            operator = val; //identifies the operator used
            operator_set = true;
            operand1 = display.textContent;   //sets the first value
            display.textContent += val;   //display the operator
        }

    } else if(val == "="){  //perform the calculation and display the result
        let operands = (display.textContent).split(operator);
        operand2 = operands[1];

        switch(operator){
            case "+":
                result = Number(operand1) + Number(operand2);
                break;
            case "-":
                result = Number(operand1) - Number(operand2);
                break;
            case "x":
                result = Number(operand1) * Number(operand2);
                break;
            case "/":
                result = Number(operand1) / Number(operand2);
                break;
        }

        display.textContent = Number(result);
    }
}

function clear_function(){
    let display = document.getElementById("digital_display");   //target the display
    display.textContent = ""; //reassign it an empty value
}