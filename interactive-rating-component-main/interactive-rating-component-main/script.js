const rateButtons = document.querySelectorAll('.rates .rate');
const selected = document.querySelector('.selected');
const submit = document.querySelector('.cta button');
const ratingPage = document.querySelector('.rating');

rateButtons.forEach((button,index) => {
    button.addEventListener('click', ()=> {
        selected.innerHTML = `You selected ${index + 1} out of 5`
    })
})

submit.addEventListener('click', ()=> {
    ratingPage.classList.toggle('clicked')
})