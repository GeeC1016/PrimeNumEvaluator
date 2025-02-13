window.onload = function start(){
  let input = document.getElementById("num");
  let errorMsgField = document.getElementById("error-msg");
  let evalBttn = document.getElementById("eval-btn");
  let result = document.getElementById("result");
  let startOverBttn = document.getElementById("redo-btn");
  input.innerText = "";
  errorMsgField.innerText = "";
  evalBttn.style.visibility = "visible";
  result.innerText = "";
  startOverBttn.style.visibility = "hidden";
  
}

//************************************************************
//calculate prime logic
//************************************************************
function primeCalc(n){
  //declerations
  let isPrime = true;
  for (let divisor = n-1; divisor > 1; divisor--){
    if (n % divisor === 0){
    isPrime = false;
    divisor = 1;
    }
  }
  return isPrime;
}



//************************************************************
//empty input
//************************************************************
function error(n){
  let myError = "";
  let trimInput = n.trim();
  let num = Number(n);
  if (trimInput === ""){
    myError = "Please enter a whole number greater than or equal to 2";
  }else if(n.includes(".")){
    //find "." location
    let dotIndex = n.indexOf(".");
    let StringEnding = n.slice(dotIndex);
    //each character in string ending should only equal 0
    //if a character is equal to something other than 0 then throw error
    for (i = 0; i < StringEnding.length; i++){
      if (StringEnding[i] !== "0"){
        myError = "Please enter a whole number greater than or equal to 2";
        i = StringEnding.length;
      }
    }
  }else if (!num){
    myError = "Please enter a whole number greater than or equal to 2";
  }else if (num < 2){ 
    myError = "Please enter a whole number greater than or equal to 2"; 
  }
  return myError;
}


//************************************************************
//invalid decimal input
//************************************************************

//************************************************************
//not a number error
//************************************************************

//************************************************************
//less than 2 error
//************************************************************

//************************************************************
//function when user presses start over button
//************************************************************
function startOver(){
  let errorMsgField = document.getElementById("error-msg");
  let evalBttn = document.getElementById("eval-btn");
  let result = document.getElementById("result");
  let startOverBttn = document.getElementById("redo-btn");
  
  errorMsgField.innerText = "";
  evalBttn.style.display = "inline-block";
  result.innerText = "";
  startOverBttn.style.visibility = "hidden";
  
  }



//************************************************************
//function - handles user input
//************************************************************
function handleUserInput(){
  //DOM declerations
  let input = document.getElementById("num");
  let errorMsgField = document.getElementById("error-msg");
  let evalBttn = document.getElementById("eval-btn");
  let result = document.getElementById("result");
  let startOverBttn = document.getElementById("redo-btn");

  //Value declerations
  let inputText = "";
  errorMsgField.innerText = "";

  if (error(input.value) !== ""){
    let myError = "Please enter a whole number greater than or equal to 2.";
    errorMsgField.innerText = myError;
    throw new Error(myError);
  }else{
    inputText = input.value;
    let isPrime = primeCalc(inputText);
    console.log(inputText)
    console.log(typeof inputText)

    evalBttn.style.display = "none";
    startOverBttn.style.visibility = "visible";

    if (isPrime === true){
      result.innerText = `${inputText} is a prime number`;
    }else{
      result.innerText = `${inputText} is NOT a prime number`;
    }
    console.log(result.innerText);
  }
}





// console.log(errorMessages("n"));
// console.log(errorMessages(1));
// console.log(errorMessages(1));

//throw new Error

