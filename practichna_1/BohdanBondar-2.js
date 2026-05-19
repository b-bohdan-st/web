function formatNumber(value) {
    return value
        .toLocaleString('uk-UA')
        .replace(/\u00A0/g, ' ');
}

function func2() {
    let DollarExchangeRate = 43.7;

    let amount_1 = Number(prompt("Введіть прибуток в гривнях (наприклад, 68000 або 102 400):"));
    let amount_2 = Number(prompt("Введіть прибуток в гривнях (наприклад, 2600 або 3000):"))*DollarExchangeRate;
    let amount_3 = Number(prompt("Введіть прибуток в гривнях (наприклад, 1900 або 5000):"))*DollarExchangeRate;

    let sum = amount_1 + amount_2 + amount_3;
    let tax = 4500 + sum * 0.05

    console.log(`Загальна сума доходу Максима складає ${formatNumber(sum)} грн.\nВ кінці кварталу Максиму необхідно сплатити ${formatNumber(tax)} грн.`)
    alert(`Загальна сума доходу Максима складає ${formatNumber(sum)} грн.\nВ кінці кварталу Максиму необхідно сплатити ${formatNumber(tax)} грн.`)
}