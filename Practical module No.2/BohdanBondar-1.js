function func1() {
    let isAuthorized = prompt("Ви авторизовані на сайті? (Так/Ні)").toLowerCase();
    let internetSpeed = Number(prompt("Вкажіть вашу шкидкість інтернету: (число Мб/с))"));
    let isBanned = prompt("Ваш акаунт НЕ заблоковано? (Так/Ні)").toLowerCase();
    let counter = 0;

    if(isAuthorized === "так") {
        counter += 1;
    }
    else if (isAuthorized === "ні") {
        return;
    }
    else {
        console.log("Дані введено невірно!");
        alert("Дані введено невірно!");
    }

    if(internetSpeed >= 20) {
        counter += 1;
    }
    else if (internetSpeed < 20) {
        return;
    }
    else {
        console.log("Дані введено невірно!");
        alert("Дані введено невірно!");
    }

    if(isBanned === "ні") {
        counter += 1;
    }
    else if (isBanned === "так") {
        return;
    }
    else {
        console.log("Дані введено невірно!");
        alert("Дані введено невірно!");
    }

    if (counter === 3) {
        console.log("Доступ дозволено");
        alert("Доступ дозволено");
    }
    else {
        console.log("Доступ заборонено");
        alert("Доступ заборонено");
    }
}