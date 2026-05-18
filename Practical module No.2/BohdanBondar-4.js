function func4() {
    let genre = prompt("Введіть жанр музики:").toLowerCase();
    switch (genre) {
        case "rock":
            console.log("Увімкнено рок-плейлист");
            alert("Увімкнено рок-плейлист");
            break;
        case "pop":
            console.log("Увімкнено поп-плейлист");
            alert("Увімкнено поп-плейлист");
            break;
        case "jazz":
            console.log("Увімкнено джаз-плейлист");
            alert("Увімкнено джаз-плейлист");
            break;
        case "classical":
            console.log("Увімкнено класичну музику");
            alert("Увімкнено класичну музику");
            break;
        default:
            console.log("Жанр не знайдено");
            alert("Жанр не знайдено");
    }
}