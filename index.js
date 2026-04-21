const container = document.getElementById('beveragesContainer');
const addButton = document.querySelector('.add-button');

function updateNumbers() {
    const beverages = document.querySelectorAll('.beverage');
    beverages.forEach((beverage, index) => {
        const title = beverage.querySelector('.beverage-count');
        title.textContent = `Напиток №${index + 1}`;
    });
}

function addBeverage() {
    const template = document.querySelector('.beverage');
        const newBeverage = template.cloneNode(true);
    
    container.appendChild(newBeverage);

    updateNumbers();
}

addButton.addEventListener('click', addBeverage);