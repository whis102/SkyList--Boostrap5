i18next.init({
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
});
