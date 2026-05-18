function func3() {
    let score = Number(prompt("Введіть вашу кількість балів:"));
    let homeworkDone = prompt("Чи виконані домашні завдання? (Так/Ні)").toLowerCase();
    let finalTestPassed = prompt("Чи пройдено фінальний тест? (Так/Ні)").toLowerCase();
    let counter = 0;

    if(score >= 70) {
        counter += 1;
    }
    else if (score < 70) {
        return;
    }
    else {
        console.log("Дані введено невірно!");
        alert("Дані введено невірно!");
    }

    if(homeworkDone === "так") {
        counter += 1;
    }
    else if (homeworkDone === "ні") {
        return;
    }
    else {
        console.log("Дані введено невірно!");
        alert("Дані введено невірно!");
    }

    if(finalTestPassed  === "так") {
        counter += 1;
    }
    else if (finalTestPassed  === "ні") {
        return;
    }
    else {
        console.log("Дані введено невірно!");
        alert("Дані введено невірно!");
    }

    if (counter === 3) {
        console.log("Сертифікат успішно отримано");
        alert("Сертифікат успішно отримано");
    }
    else {
        console.log("Умови для отримання сертифіката не виконані");
        alert("Умови для отримання сертифіката не виконані");
    }
}