function formatNumber(value) {
    return value
        .toLocaleString('uk-UA')
        .replace(/\u00A0/g, ' ');
}

function func3() {
    let usd_1 = 43.7;
    let usd_2 = 44.7;
    let usd_3 = 45.7;
    let usd_sum = usd_1 + usd_2 + usd_3;

    let balance = 210000;
    let amount_1 = 60000;
    let amount_2 = 2600 * usd_2;
    let amount_3 = 1700 * usd_3;

    let costs = 3500 * 3 + 4000 * 3 + 9.99 * usd_sum;
    let income = amount_1 + amount_2 + amount_3;
    let tax = 4500 + income * 0.05;
    let end_balance = balance + income - costs - tax;

    console.log(`В цьому кварталі Максим витратив ${formatNumber(costs)} грн.\nЗагальний дохід Максима за квартал становить ${formatNumber(income)} грн.\nЗагальна сума податків становить ${formatNumber(tax)} грн\nОтже, наприкінці кварталу залишок на рахунку Максима становить ${formatNumber(end_balance)} грн.`);
    alert(`В цьому кварталі Максим витратив ${formatNumber(costs)} грн.\nЗагальний дохід Максима за квартал становить ${formatNumber(income)} грн.\nЗагальна сума податків становить ${formatNumber(tax)} грн\nОтже, наприкінці кварталу залишок на рахунку Максима становить ${formatNumber(end_balance)} грн.`);
}