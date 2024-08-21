var running_total = 0;

function clearResult(){
    
    console.log(`You clicked the CLEAR button!`);

    let digital_display = document.getElementById("digital_display");
    digital_display.textContent = "";
    running_total = 0;
}

function buttonClick(val){
    //log it
    console.log(`You clicked the ${val} button!`);
    console.log(digital_display);

    //listen for number or symbol
    if(typeof val === "number"){
        let digital_display = document.getElementById("digital_display");

        //display the number
        digital_display.textContent += val; //ERROR

        //TEST MESSAGE - DELETE AFTER TEST!
        console.log('hello');
    } else{
        
        //identify the first operand
        let first_operand = parseInt(digital_display);

        //log the first operand
        console.log(`The first operand is ${first_operand}`);

        //display the symbol
        digital_display.textContent += val;

    }

}