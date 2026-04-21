const submitButton = document.querySelector('.submit-button');
const modal = document.getElementById('modal');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('active');
    console.log('заказ принят');
});
const container = document.getElementById('beveragesContainer');
const addButton = document.querySelector('.add-button');

function updateNumbers() {
    const beverages = document.querySelectorAll('.beverage');

    beverages.forEach((beverage, index) => {
        const title = beverage.querySelector('.beverage-count');
        title.textContent = `Напиток №${index + 1}`;

        const deleteBtn = beverage.querySelector('.delete-button');

        deleteBtn.style.display = beverages.length > 1 ? 'inline-block' : 'none';
    });
}

function addDeleteHandler(beverage) {
    const deleteBtn = beverage.querySelector('.delete-button');

    deleteBtn.addEventListener('click', () => {
        const beverages = document.querySelectorAll('.beverage');

        if (beverages.length > 1) {
            beverage.remove();
            updateNumbers();
        }
    });
}

function addBeverage() {
    const template = document.querySelector('.beverage');
    const newBeverage = template.cloneNode(true);

    newBeverage.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

    newBeverage.querySelectorAll('input[type="radio"]').forEach((rb, i) => {
        rb.checked = i === 0;
    });

    container.appendChild(newBeverage);

    addDeleteHandler(newBeverage);
    updateNumbers();
}

document.querySelectorAll('.beverage').forEach(addDeleteHandler);
updateNumbers();

addButton.addEventListener('click', addBeverage);
