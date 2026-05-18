function func6() {
    let temperature = Number(prompt("Введіть температуру в кімнаті: (у °C)"));
    let sensorError = prompt("Чи є помилка датчика? (Так/Ні)").toLowerCase();
    
    if (sensorError === "так") {
        console.log("Помилка датчика температури");
        alert("Помилка датчика температури");
    }
    else if (sensorError === "ні") {
        if (temperature < 18) {
            console.log("Увімкнути обігрів");
            alert("Увімкнути обігрів");
        }
        else if (temperature >= 18 && temperature <= 25) {
            console.log("Температура комфортна");
            alert("Температура комфортна");
        }
        else if (temperature > 25) {
            console.log("Увімкнути кондиціонер");
            alert("Увімкнути кондиціонер");
        }
        else {
            console.log("Дані введено невірно!")
            alert.log("Дані введено невірно!")
        }
    }
    else {
        console.log("Дані введено невірно!")
        alert.log("Дані введено невірно!")
    }
}