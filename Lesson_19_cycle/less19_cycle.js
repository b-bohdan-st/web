// Завдання 1

function func1() {
    for (i=0; i < 11; i++) {
        console.log(i);
    }
}

// Завдання 2

function func2() {
    let number = Number(prompt("Введіть ваше число:"));
    for(let i=1; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// Завдання 3

function func3() {
    let number = Number(prompt("Введіть ваше число:"));
    let sum = 0;
    for (let i=1; i <= number; i++) {
        sum += i;
    }
    console.log(sum);
}

// Завдання 4

function func4() {
    let number = Number(prompt("Введіть ваше число:"));
    for (let i=number; i>=1; i--) {
        console.log(i);
    }
}

// Завдання 5

function func5() {
    let number = Number(prompt("Введіть ваше число:"));
    for (let i=1; i<=10; i++) {
        console.log(`${number} x ${i} = ${number*i}`);
    }
}

// Завдання 6

function func6() {
    let password = "admin123";
    let get_password;
    do {
        get_password = String(prompt("Введіть ваш пароль:"));
        if (get_password !== password) {
            alert("Неправильний пароль");
        }
    } while (get_password !== password);
    alert("Пароль правильний");
}

// Завдання 7

function func7() {
    let password = "admin123";
    let get_password;
    for (let i = 0; i < 3; i++) {
        get_password = String(prompt("Введіть ваш пароль:"));
        if (get_password === password) {
            alert("Доступ дозволено");
            break;
        }
        else if (i === 2) {
            alert("Доступ заблоковано");
        }
    }
}

// Завдання 8

function func8() {
    for (i=0; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }

    // for (i=1; i <= 20; i+=2) {
    //     console.log(i)
    // }
}

// Завдання 9

function func9() {
    let count = 0;
    let number = Number(prompt("Введіть ваше число:"));
    do {
        number = Math.floor(number / 10);
        count += 1;
    } while (number !== 0);
    console.log(count);
}

// Завдання 10

function func10() {
    let guess_number = Math.floor(Math.random() * 100);
    let number;
    do {
        number = prompt("Введіть ваше число:");
        if (number === null) {
            alert("Гру скасовано");
            return;
        }
        if (isNaN(number)) {
            alert("Введіть число");
            continue;
        }
        number = Number(number);
        if (number > guess_number) {
            alert("Менше");
        }
        else if (number < guess_number) {
            alert("Більше");
        }
    } while (number !== guess_number);
    alert("Ви вгадали");
}