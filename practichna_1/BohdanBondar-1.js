function func1() {
    let amount = Number(prompt("Введіть ціну в доларах наприклад, 3500 або 2800):"));
    let UAH_price = amount*0.95*43.7;
    const formatted_price = UAH_price
        .toLocaleString('uk-UA')
        .replace(/\u00A0/g, ' ');
    // alert(`Після виконання проєкту, буде нараховано ${formatted_price} грн з урахуванням комісії банку!`);
    console.log(`Після виконання проєкту, буде нараховано ${formatted_price} грн з урахуванням комісії банку!`);
}