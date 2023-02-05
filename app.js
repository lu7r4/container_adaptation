const cards = document.querySelectorAll('.card');
const obs = new ResizeObserver(entries => {
    entries.forEach(card => {
        let w = card.contentRect.width;

        w >= 370 ? card.target.classList.add('card_wide') : card.target.classList.remove('card_wide')

    })
})
cards.forEach(el => obs.observe(el))

const container = document.querySelectorAll('.container');
const obj = new ResizeObserver(entries => {
    entries.forEach(container => {
        let cont = container.contentRect.width;
if(cont <= 800) {
    container.target.classList.add('container_narrow')
 }
 else {container.target.classList.remove('container_narrow')}
    })
})
container.forEach(el => obj.observe(el))
