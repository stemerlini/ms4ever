
const translations = {
    en: {
        flagClass: 'fi fi-gb', // English flag (Great Britain)
        header: "Welcome to Our Wedding",
        rsvpTitle: "RSVP",
        fullName: "Your Full Name",
        willYouAttend: "Will you attend?",
        yes: "Yes",
        no: "No",
        guestCount: "How many additional guests will be attending with you?",
        dietaryRestrictions: "Dietary Restrictions or Allergies",
        songRequest: "Song Requests",
        submit: "Submit",
        footer: "Thank you for being part of our special day!",
    },
    it: {
        flagClass: 'fi fi-it', // Italian flag
        header: "Benvenuti al nostro matrimonio",
        rsvpTitle: "RSVP",
        fullName: "Il tuo nome completo",
        willYouAttend: "Parteciperai?",
        yes: "Sì",
        no: "No",
        guestCount: "Quanti ospiti aggiuntivi parteciperanno con te?",
        dietaryRestrictions: "Restrizioni dietetiche o allergie",
        songRequest: "Richieste musicali",
        submit: "Conferma",
        footer: "Grazie per essere parte del nostro giorno speciale!",
    },
    el: {
        flagClass: 'fi fi-gr', // Greek flag
        header: "Καλώς ήρθατε στον γάμο μας",
        rsvpTitle: "RSVP",
        fullName: "Το πλήρες όνομά σας",
        willYouAttend: "Θα παρευρεθείτε;",
        yes: "Ναι",
        no: "Όχι",
        guestCount: "Πόσοι επιπλέον καλεσμένοι θα σας συνοδεύσουν;",
        dietaryRestrictions: "Διατροφικοί περιορισμοί ή αλλεργίες",
        songRequest: "Αιτήματα τραγουδιών",
        submit: "Υποβολή",
        footer: "Ευχαριστούμε που είστε μέρος της ξεχωριστής μας ημέρας!",
    },
};

export const language = {
    init() {
        // Set default language from localStorage or fallback to English
        const savedLang = localStorage.getItem('language') || 'en';
        this.changeLanguage(savedLang);

        // Add event listener for language switch
        document.getElementById('button-language').addEventListener('click', () => {
            this.switchLanguage();
        });
    },

    changeLanguage(lang) {
        // Update text content
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach((element) => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update the flag icon
        const flagElement = document.getElementById('language-flag');
        if (translations[lang] && translations[lang].flagClass) {
            flagElement.className = translations[lang].flagClass; // Update flag icon
        }

        // Save selected language to localStorage
        localStorage.setItem('language', lang);
    },

    switchLanguage() {
        // Get the current language
        const currentLang = localStorage.getItem('language') || 'en';

        // Determine the next language in sequence
        const langOrder = ['en', 'it', 'el'];
        const nextLangIndex = (langOrder.indexOf(currentLang) + 1) % langOrder.length;
        const nextLang = langOrder[nextLangIndex];

        // Change to the next language
        this.changeLanguage(nextLang);
    },
};
