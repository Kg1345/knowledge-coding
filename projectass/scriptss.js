// document.getElementById("increment");

 const incrementBtn = document.getElementById("incrementBtn");
 const decrementBtn = document.getElementById("decrementBtn");
 const resetBtn = document.getElementById("resetBtn");
 const displayValue = document.getElementById("displayValue");

// for decrement button click
decrementBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText = value - 1;
    }else {
        alert("Negative value not allowed");
    }
});

//  for increment button click 

incrementBtn.addEventListener("click" , ()  => {
    const value = Number(displayValue.innerText);
    if(value >= 10) {
        alert("10+ values are not allowed");

    } else{
        displayValue.innerText = value + 1 ;
    }
});

//  for reset btn 

resetBtn.addEventListener("click" , () => {
    displayValue.innerText = 0 ;
});