const submitButton = document.querySelector('.submit-button');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

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

function declinateDrinks(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 20) {
        return `${count} напитков`;
    }
    
    if (lastDigit === 1) {
        return `${count} напиток`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${count} напитка`;
    } else {
        return `${count} напитков`;
    }
}

function showModal() {
    const drinksCount = document.querySelectorAll('.beverage').length;
    const message = `Вы заказали ${declinateDrinks(drinksCount)}`;
    modalMessage.textContent = message;
    modal.classList.add('active');
}

// Обработчик кнопки ""
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    showModal();
});

// Закрытие модального окна по клику на оверлей
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

document.querySelectorAll('.beverage').forEach(addDeleteHandler);
updateNumbers();

addButton.addEventListener('click', addBeverage);