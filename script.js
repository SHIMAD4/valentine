const bubblyButtons = document.querySelector(".bubbly-button");
const counterParent = document.getElementById("counterParent");
let counter = document.getElementById("counter");
let allowNavigation = false

counterParent.addEventListener('click', (e) => {
    if(!allowNavigation) {
        e.preventDefault()
    }
})

const animateButton = (e) => {
    e.preventDefault();

    e.target.classList.remove('animate');
    e.target.classList.add('animate');

    setTimeout(() => {
        e.target.classList.remove('animate');
    }, 700);

    let counterValue = +counter.textContent;
    counterValue--;

    if (counterValue > 0) {
        counter.textContent = `${counterValue}`;
    } else {
        counter.textContent = "0";

        printHello('Я кончил, спасибо!');

        counter.remove()
        allowNavigation = true

        counterParent.textContent = "Прочитать сообщение..."
        counterParent.style.textDecoration = 'underline'
        counterParent.style.color = 'rgb(223, 125, 141)'
        counterParent.style.cursor = 'pointer'
    }
};

const printHello = (msg) => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            alert(msg);
        });
    });
};

bubblyButtons.addEventListener('click', animateButton, false);