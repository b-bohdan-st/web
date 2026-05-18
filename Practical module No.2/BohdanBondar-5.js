function func5() {
    grade = prompt("Введіть вашу оцінку:");
    switch (grade) {
        case "12":
        case "11":
        case "10":
            console.log("Відмінний результат");
            alert("Відмінний результат");
            break;
        case "9":
        case "8":
        case "7":
            console.log("Добрий результат");
            alert("Добрий результат");
            break;
        case "6":
        case "5":
        case "4":
            console.log("Задовільний результат");
            alert("Задовільний результат");
            break;
        case "3":
        case "2":
        case "1":
            console.log("Потрібно покращити знання");
            alert("Потрібно покращити знання");
            break;
        default:
            console.log("Некоректна оцінка");
            alert("Некоректна оцінка");
            break;
    }
}