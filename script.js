"use strict"

//used id selectors for input and output values
const inputValue=document.getElementById("input-value");
const outputValue=document.getElementById("output-value");
const convertStatus=document.getElementById("convert-status");

//lets use query selector for buttons
const convertBtn=document.querySelector("#convert-btn");
const resetBtn=document.querySelector("#reset-btn");
const swapBtn=document.querySelector("#swap-btn");

//Lets access "From" && "To" conversion parameters

let fromSelector = document.querySelector('#from-select');
let toSelector = document.querySelector('#to-select');

// Helping variables
 let conversionCount=0;

 //helping functions
 function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}


// Swap Button Functionality

swapBtn.addEventListener('click', () => {

    const fromArray = [];
    const toArray = [];

    // getting selected items 
    for (let i = 0; i < 4; i++) {
        fromArray[i] = fromSelector.options[i].selected;
        toArray[i] = toSelector.options[i].selected;
    }
    // swapping selected items

    fromArray.filter((item, index) => {
        if (item) {
            toSelector.options[index].selected = true;   // in to array 
    })
    toArray.filter((item, index) => {
        if (item) {
            fromSelector.options[index].selected = true;
        }
    })

    // swaping input fields and output field  values
    if(conversionCount!==0 || inputValue.value!=="" && outputValue.innerText!=="Loading...")
    {
        convertStatus.innerText="Please Press Convert Button";
        inputValue.value = outputValue.innerText;
        outputValue.innerText="";
    }

});

//Reset Button Functionality

resetBtn.addEventListener('click', () => {
    
    if(outputValue.innerText==="Loading...")
    {
        inputValue.value = '';
        //console.log("satish");
    }
    else
    {
        inputValue.value="";
        outputValue.innerText='';
    }

});

//Convert Button Functionality

convertBtn.addEventListener('click', () => {
    if (inputValue.value === '') {
        return alert("Input is empty");
    }
    const val = inputValue.value;
    // checking if both values are same 
    if (fromSelector.value === toSelector.value && inputValue.value) {
        alert("No Conversions Possible, Please Select different Bases !");
    }
    else {
        if (fromSelector.value === "Decimal" && toSelector.value === "Binary") {
            if(isNumeric(inputValue.value)===true)
            {
                outputValue.innerText = parseInt(val).toString(2);
                conversionCount++;
            }
            else
            {
                alert("Invalid Decimal Input")
            }
            
        }
        else if (fromSelector.value === "Decimal" && toSelector.value === "Octal") {
            if(isNumeric(inputValue.value)===true)
            {
                outputValue.innerText = parseInt(val).toString(8);
                conversionCount++;
            }
            else
            {
                alert("Invalid Decimal Input")
            }
            
        }
        else if (fromSelector.value === "Decimal" && toSelector.value === "Hexadecimal") {
            if(isNumeric(inputValue.value)===true)
            {
                outputValue.innerText = parseInt(val).toString(16);
                conversionCount++;
            }
            else
            {
                alert("Invalid Decimal Input")
            }  
        }
        else if (fromSelector.value === "Binary" && toSelector.value === "Decimal") {
            if(/^[01]+$/.test(inputValue.value)===true)
            {
                outputValue.innerText = parseInt(val, 2);  // converting binary to decimal
                conversionCount++;
            }
            else{
                alert("Invalid Binary Input");
            }  
        }
        
        else if (fromSelector.value === "Binary" && toSelector.value === "Octal") {
            if(/^[01]+$/.test(inputValue.value)===true)
            {
                const dec = parseInt(val, 2); 
                outputValue.innerText = parseInt(dec).toString(8);
                conversionCount++;
            }
            else
            {
                alert("Invalid Binary Input");
            }
            
        }
        
        else if (fromSelector.value === "Binary" && toSelector.value === "Hexadecimal" && /^[01]+$/.test(inputValue.value)) {
            if(/^[01]+$/.test(inputValue.value)===true)
            {
                const dec = parseInt(val, 2); // converting binary to Hexadecimal
                outputValue.innerText = parseInt(dec).toString(16);
                conversionCount++;
            }
            else
            {
                alert("Invalid Binary Input");
            }
            
        }
        else if (fromSelector.value === "Octal" && toSelector.value === "Decimal") {
            outputValue.innerText = parseInt(val, 8);
        }
        else if (fromSelector.value === "Octal" && toSelector.value === "Binary") {
            const dec = parseInt(val, 8); // converting Octal to decimal
            outputValue.innerText = parseInt(val).toString(2);
        }
        else if (fromSelector.value === "Octal" && toSelector.value === "Hexadecimal") {
            const dec = parseInt(val, 8); // converting Octal to decimal
            outputValue.innerText = parseInt(val).toString(16);
        }
        else if (fromSelector.value === "Hexadecimal" && toSelector.value === "Decimal") {
            
            outputValue.innerText = parseInt(val, 16);
        }
        else if (fromSelector.value === "Hexadecimal" && toSelector.value === "Binary") {
            const dec = parseInt(val, 16); // converting Hexadecimal to decimal
            outputValue.innerText = parseInt(dec).toString(2);
        }
        else if (fromSelector.value === "Hexadecimal" && toSelector.value === "Octal") {
            const dec = parseInt(val, 16); // converting Hexadecimal to decimal
            outputValue.innerText = parseInt(dec).toString(8);
        }
    }
    if(conversionCount!=0)
    {
        outputValue.style.fontSize="4em";
    }
    convertStatus.innerText="The converted number is:"
    outputValue.style.color="green";

});







