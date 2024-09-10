let operand1 = 0;
let operand2 = 0;
let operator = "";
let result = 0;
let operator_set = false;

function click_function(val){
    let display = document.getElementById("digital_display");

    //if val is a NUMBER
    if(!isNaN(val)){
        display.innerHTML += val;
    } else if(val != "="){ //If val is NOT A NUMBER
        operator = val; //identifies the operator used
        operator_set = true;
        operand1 = display.innerHTML;   //sets the first value
        display.innerHTML += val;   //display the operator
    } else if(val == "="){
        display.innerHTML += val;   //display the "=" character
        operand2 = (display.innerHTML).substring(((display.innerHTML).indexOf(operator)+1),((display.innerHTML).indexOf("=")));
        
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

        display.innerHTML = Number(result);
    }
}

function clear_function(){
    let display = document.getElementById("digital_display");   //target the display
    display.innerHTML = ""; //reassign it an empty value
}