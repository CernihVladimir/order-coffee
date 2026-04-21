const submitButton = document.querySelector('.submit-button');
const modal = document.getElementById('modal');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('active');
    console.log('заказ принят');
});