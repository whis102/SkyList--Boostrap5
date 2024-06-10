document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.getElementById('days');
    const monthYearDisplay = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentDate = new Date();

    function renderCalendar(date) {
        daysContainer.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDayIndex = new Date(year, month + 1, 0).getDay();
        const prevLastDay = new Date(year, month, 0).getDate();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const nextDays = 7 - lastDayIndex - 1;

        monthYearDisplay.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        for (let i = firstDayIndex; i > 0; i--) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.classList.add('prev-date');
            day.innerText = prevLastDay - i + 1;
            daysContainer.appendChild(day);
        }

        for (let i = 1; i <= lastDay; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.innerText = i;
            if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
                day.classList.add('today');
            }
            daysContainer.appendChild(day);
        }

        for (let i = 1; i <= nextDays; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.classList.add('next-date');
            day.innerText = i;
            daysContainer.appendChild(day);
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});


i18next.init( {
    lng: 'en', // initial language
    resources: {
        en: {
            translation: {
                "welcome": "Welcome to our website!"
            }
        },
        es: {
            translation: {
                "welcome": "¡Bienvenido a nuestro sitio web!"
            }
        },
        fr: {
            translation: {
                "welcome": "Bienvenue sur notre site Web!"
            }
        }
    }
}, function(err, t) {
    // initialized and ready to go!
    updateContent();
});

// Function to update content based on selected language
function updateContent() {
    document.getElementById('translatedContent').innerHTML = i18next.t('welcome');
}

// Event listener for language switcher
document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        i18next.changeLanguage(lang, updateContent);
    });
} );


