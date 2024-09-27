let operand1 = 0;
let operand2 = 0;
let operator = "";
let result = 0;

function click_function(val){
    let display = document.getElementById("digital_display");

    if(!isNaN(val)){    //display the NUMBER the user clicked
        display.textContent += val;
    } else if(val != "="){ // DO (or DONT) display the OPERATOR the user clicked...
        
        if(display.textContent === ""){ //DONT display if the display is empty
            alert("invalid format used.");
        }else{  //DO display if the display is not empty
            operator = val; //identifies the operator used
            operand1 = display.textContent;   //sets the first value
            display.textContent += val;   //display the operator

            //Calculate PERCENTAGE
            if(val === "%"){
                operand1 = Number(operand1) / 100;
                display.textContent = operand1;
            }
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