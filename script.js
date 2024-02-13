const letters = document.querySelectorAll('#text h1');

let delay = 0;

letters.forEach((letter, index) => {
    setInterval(() => {
        letter.style.color = 'yellow'; 
        setTimeout(() => {
            letter.style.color = 'white'; 
        }, 1000);
    }, 3000 + index * 10); 
});