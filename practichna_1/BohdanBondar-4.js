function formatNumber(value) {
    return value
        .toLocaleString('uk-UA')
        .replace(/\u00A0/g, ' ');
}

function func4() {
    let income_1 = 100000;
    let income_2 = 200000;
    let income_3 = 300000;
    let income_4 = 150000;

    let sum = income_1 + income_2 + income_3 + income_4;
    let tax = sum * 0.05;
    let fund1 = sum * 0.1;
    let fund2 = sum * 0.05;
    let bank_transfers = 2500 * 51.2 + 3000 * 43.7;
    let total = sum - tax - fund1 - fund2 - bank_transfers - 100000 - 18000;

    console.log(`За рік Максим заробив — ${formatNumber(sum)} грн\nЄдиний податок 5% складає ${formatNumber(tax)} грн\nВідрахування у фонди «Повернись живим» та «Діти Героїв» складає ${formatNumber(fund1)} грн та ${formatNumber(fund2)} грн відповідно\nНа валютну карту сумарно відкладено ще ${formatNumber(bank_transfers)} грн\nЗалишок на рахунку Максима складає ${formatNumber(total)} грн`);
    alert(`За рік Максим заробив — ${formatNumber(sum)} грн\nЄдиний податок 5% складає ${formatNumber(tax)} грн\nВідрахування у фонди «Повернись живим» та «Діти Героїв» складає ${formatNumber(fund1)} грн та ${formatNumber(fund2)} грн відповідно\nНа валютну карту сумарно відкладено ще ${formatNumber(bank_transfers)} грн\nЗалишок на рахунку Максима складає ${formatNumber(total)} грн`);
}