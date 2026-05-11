const display = document.getElementById("calculation");

function press(value) {
    const operators=/[+\-*/]/;
    if(operators.test(value)) {
        if(operators.test(display.value.slice(-1))) {
            display.value=display.value.slice(0,-1)+value;
        } else {
            display.value+=value;
        }
        return;
    }
    if(value===".") {
        if(display.value===""||operators.test(display.value.slice(-1))) {
            display.value+="0.";
            return;
        }
        const parts=display.value.split(/[+\-*/]/);
        const currentNumber=parts[parts.length-1];
        if(!currentNumber.includes(".")) {
            display.value+=".";
        }
        return;
    }
    if(value==="0") {
        if(display.value==="0") {
            return;
        }

        const parts=display.value.split(/[+\-*/]/);
        const currentNumber=parts[parts.length-1];
        if(currentNumber==="0") {
            return;
        }
    }
    if(display.value==="0"&&value!==".") {
        display.value=value;
    } else {
        const parts=display.value.split(/[+\-*/]/);
        const currentNumber=parts[parts.length-1];
        if(currentNumber==="0") {
            display.value=display.value.slice(0,-1)+value;
        } else {
            display.value+=value;
        }
    }
}

function clearAll() {
    display.value = "";
}

function clearEntry() {
    display.value = "";
}

function erase() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = formatResult(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function square() {
    try {
        display.value = eval(display.value);
        display.value = Math.pow(Number(display.value), 2);
    }
    catch {
        display.value = "Error";
    }    
}

function sqrt() {  
    try {
        display.value = eval(display.value);
        display.value = Math.sqrt(Number(display.value));
    }
    catch {
        display.value = "Error";
    }    
}

function fraction() {
    try {
        display.value = eval(display.value);
        display.value = 1 / Number(display.value);    
    }
    catch {
        display.value = "Error";
    }    
}

function plusMinus() {
    try {
        display.value = eval(display.value);
        display.value = Number(display.value) * -1;
    }
    catch {
        display.value = "Error";
    }    
}

display.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});

function formatResult(val) {
    return parseFloat(Number(val).toFixed(10));
}