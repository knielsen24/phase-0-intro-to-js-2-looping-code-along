// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const surprise = ["surprise", "birthday", "baby shower"]


const writeCards = (names, event) => {
    const thankYouNote = []
    for (let i = 0; i < names.length; i++) {
        thankYouNote.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouNote;
}

console.log(writeCards(names, surprise[0]));

const countDown = () => {
    let x = 11;
        while (x <= 11 && x > 0) {
            x--;
            console.log(x);
        }
}

countDown();