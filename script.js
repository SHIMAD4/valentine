const bubblyButtons = document.querySelector(".bubbly-button")

const animateButton = (e) => {
    e.preventDefault()

    e.target.classList.remove('animate')
    e.target.classList.add('animate')

    setTimeout(() => {
        e.target.classList.remove('animate')
    }, 700);
}

bubblyButtons.addEventListener('click', animateButton, false);