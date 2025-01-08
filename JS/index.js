//Global variable declerations
let input = document.getElementById("num");
let evalBttn = document.getElementById("eval-btn");
let result = document.getElementById("result");
let redoBttn = document.getElementById("redo-btn");
let inputVal = document.getElementById("num").value;
let primeMsg; 

//remove redo button
redoBttn.style.display = "none";

//Click on Evaluate button
function evalPrime(){
    result.innerText = getNum(); //result div set to prime message returned in getNum()
    evalBttn.style.display = "none";
    redoBttn.style.display = "inline-block";
}

//Click on Start Over button
function startOver(){
    evalBttn.style.display = "inline-block";
    redoBttn.style.display = "none";
    result.innerText = ""; //result set to empty value
}

//Calculate whether user input is a prime number
function getNum(){
    let remainder;
    let divisor = inputVal - 1;

    //errors and exceptions
    if(inputVal < 1){
        primeMsg = "Error. Start over."
    }
    else if(inputVal == 1 || inputVal == 2){
        primeMsg = `${inputVal} is prime`;
    }

    //prime number calculation
    while (divisor > 1){
        remainder = inputVal % divisor;
       
        console.log(`${inputVal} / ${divisor} has a remainder of ${remainder}`)

        if(remainder === 0){
            primeMsg = `${inputVal} is not prime`;
            divisor = 1;

        }else{
            primeMsg = `${inputVal} is prime`;
        }
        divisor--;
    }
    return primeMsg;
}
