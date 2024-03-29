// script.js
function pop (e) {
    let amount = 30;
    switch (e.target.dataset.type) {
        case 'shadow':
        case 'line':
            amount = 60;
            break;
    }
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = e.target.getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 30; i++) {
            createParticle(x, y, e.target.dataset.type);
        }
    } else {
        for (let i = 0; i < amount; i++) {
            createParticle(e.clientX, e.clientY, e.target.dataset.type);
        }
    }
}
function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    switch (type) {
        case 'square':
            particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет квадратов
            particle.style.border = '1px solid white'; // Бордюр квадратов
            break;
        case 'symbol':
            particle.innerHTML = ['&#9884;','&#9731;','&#10084;','&#10052;','&#10054;','&#9733;','&#9787;'][Math.floor(Math.random() * 7)]; // Символы
            particle.style.color = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет символов
            particle.style.fontSize = `${Math.random() * 24 + 10}px`; // Размер символов
            width = height = 'auto';
            break;
        case 'logo':
            particle.style.backgroundImage = 'url(https://atuin.ru/images/favicon.png)'; // Ссылка на картинку
            break;
        case 'shadow':
            var color = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет 
            particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`; // Тень
            particle.style.background = color;
            particle.style.borderRadius = '50%'; // Радиус
            width = height = Math.random() * 5 + 4; // Размеры
            break;
        case 'line':
            particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет линий
            height = 1; // Размер
            rotation += 1000;
            delay = Math.random() * 1000;
            break;
    }
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 5000, 
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    });
    animation.onfinish = removeParticle;
}
function removeParticle (e) {
    e.srcElement.effect.target.remove();
}
if (document.body.animate) {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
}
const promoCodeDisplay = document.getElementById('promoCodeDisplay');
const button = document.querySelector('button'); 

function pop(e) {
    let amount = 30;
    switch (e.target.dataset.type) {
        case 'shadow':
        case 'line':
            amount = 60;
            break;
    }
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = e.target.getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 30; i++) {
            createParticle(x, y, e.target.dataset.type);
        }
    } else {
        for (let i = 0; i < amount; i++) {
            createParticle(e.clientX, e.clientY, e.target.dataset.type);
        }
    }

    const promoCode = localStorage.getItem('promoCode');
    if (promoCode) {
        promoCodeDisplay.textContent = promoCode;
        button.style.display = 'none'; 
    } else {
        const promoCodes = ['website - на 50см', 'WOW - тебе крупно повезло', 'website -  на 50см', 'website - на 50см', 'website - на 50см'];
        const randomIndex = Math.floor(Math.random() * promoCodes.length);
        const randomPromoCode = promoCodes[randomIndex];
        localStorage.setItem('promoCode', randomPromoCode);
        promoCodeDisplay.textContent = 'Ваш промокод: ' + randomPromoCode;
        button.style.display = 'none'; // Скрываем кнопку после выдачи промокода
    }
}
document.body.addEventListener('click', createParticles);

function createParticles(event) {
    const x = event.clientX;
    const y = event.clientY;
    const type = 'shadow'; // Здесь можно указать тип частиц, который вы хотите создать
    const amount = 30; // Количество частиц

    for (let i = 0; i < amount; i++) {
        createParticle(x, y, type);
    }
}

function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    switch (type) {
        case 'square':
            particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет квадратов
            particle.style.border = '1px solid white'; // Бордюр квадратов
            break;
        case 'symbol':
            const symbols = ['&#9884;','&#9731;','&#10084;','&#10052;','&#10054;','&#9733;','&#9787;'];
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            const hue = Math.floor(Math.random() * 360); // Случайный оттенок красного цвета
            particle.innerHTML = randomSymbol; // Случайный символ
            particle.style.color = `hsl(${hue}, 70%, 60%)`; // Красный оттенок
            particle.style.fontSize = `${Math.random() * 24 + 10}px`; // Размер символов
            width = height = 'auto';
            break;
        case 'logo':
            particle.style.backgroundImage = 'url(https://atuin.ru/images/favicon.png)'; // Ссылка на картинку
            break;
        case 'shadow':
            const shadowColor = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет тени
            particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${shadowColor}`; // Тень
            particle.style.background = shadowColor;
            particle.style.borderRadius = '50%'; // Радиус
            width = height = Math.random() * 5 + 4; // Размеры
            break;
        case 'line':
            particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет линий
            height = 1; // Размер
            rotation += 1000;
            delay = Math.random() * 1000;
            break;
    }
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 5000, 
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    });
    animation.onfinish = removeParticle;
}
