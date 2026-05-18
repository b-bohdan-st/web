function func2() {
    let day = prompt("Введіть день тижня:").toLowerCase();
    let price = 0;
    switch (day) {
        case "понеділок":
        case "вівторок":
        case "середа":
            price = 150;
            console.log(`Вартість квитка складає ${price} грн`);
            alert(`Вартість квитка складає ${price} грн`);
            break;
        case "четвер":
        case "п’ятниця":
            price = 200;
            console.log(`Вартість квитка складає ${price} грн`);
            alert(`Вартість квитка складає ${price} грн`);
            break;
        case "субота":
        case "неділя":
            price = 250;
            console.log(`Вартість квитка складає ${price} грн`);
            alert(`Вартість квитка складає ${price} грн`);
            break;
        default:
            console.log("День тижня введено невірно!");
            alert("День тижня введено невірно!");
    }
}