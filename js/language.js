
const translations = {
    en: {
        flagClass: 'fi fi-gb', // English flag (Great Britain)
        header: "Welcome to Our Wedding",
        rsvpTitle: "RSVP",
        fullName: "Your Full Name",
        inputFullName: "Enter your full name",
        willYouAttend: "Will you attend?",
        yes: "Yes",
        no: "No",
        guestCount: "How many additional guests will be attending with you?",
        dietaryRestrictions: "Dietary Restrictions or Allergies",
        songRequest: "Song Requests",
        submit: "Submit",
        footer: "Thank you for being part of our special day!",
        // -----------------------------------------------------
        headerTravel: "Useful Travel Information ✈️",
        gettingIn: "Getting In",
        gettingInDescription: "We recommend flying into <strong>Thessaloniki Airport 'Makedonia' (SKG)</strong>, conveniently located near the wedding venue.",
        gettingToCity: "Getting into the City Center",
        gettingToCityDescription: `
            - <strong>Car Rental:</strong> Affordable options available at the airport. Book early for the best rates. <br>
            - <strong>Taxis:</strong> Approx. 10-15€ to nearby hotels and 20-30€ to the city center. <br>
            - <strong>Bus:</strong> Bus Line 01X connects the airport to the city center for just 2€.
        `,
        accommodations: "Accommodation Options",
        accommodationsDescription: `
            <strong>Hotels Near the Venue:</strong> <br>
            - <a href="https://www.avalonhotel.gr/" target="_blank" class="text-decoration-underline">Avalon Hotel Thessaloniki</a>: Located 3 km from the airport, offering comfort, a pool, and free parking. <br>
            - <a href="https://www.athinaairporthotel.gr/" target="_blank" class="text-decoration-underline">Athina Airport Hotel</a>: Modern amenities, restaurant, and spa close to the airport. <br>
            - <a href="https://www.royal-hotel.gr/" target="_blank" class="text-decoration-underline">Royal Hotel Thessaloniki</a>: Luxurious boutique hotel with stunning views, 5 km from the venue.
        `,
        thingsToDo: "Things to Do",
        thingsToDoDescription: `
            - <strong>The White Tower:</strong> Thessaloniki’s iconic landmark. <br>
            - <strong>Aristotelous Square:</strong> The heart of Thessaloniki with cafes and shops. <br>
            - <strong>Ano Poli:</strong> Explore the cobblestone streets and enjoy city views. <br>
            - <strong>Long Sea Walk:</strong> Perfect for a scenic sunset stroll. <br>
            - <strong>Archaeological Museum of Thessaloniki:</strong> Learn about Macedonia’s rich history. <br>
        `,
        foodAndDrinks: "Food and Drinks",
        foodAndDrinksDescription: `
            - <strong>Trigona Panorama:</strong> Don’t miss Thessaloniki’s signature cream-filled pastries. <br>
            - <strong>Nea Diagonios:</strong> Known for the best gyros and souvlaki. <br>
            - <strong>To Elliniko:</strong> Authentic Greek cuisine in a cozy atmosphere. <br>
        `,
        venueDetails: "Wedding Venue",
        venueDetailsDescription: `
            <strong>Ktima Mironidi</strong> is the wedding venue, located near the airport for your convenience. Enjoy a tranquil and scenic location for the big day!
        `,
        giftHeader: "Gift? Don't Panic!",
        giftMainMessage: "Your presence at our wedding is the most precious gift we could ever ask for.",
        giftContributionMessage: "However, if you’d like to contribute, we’ve provided a few bank account options to support our honeymoon plans. ✈️✨",
        giftThankYou: "Thank you for being part of our special day!"
    },

    it: {
        flagClass: 'fi fi-it', // Italian flag
        header: "Benvenuti al nostro matrimonio",
        rsvpTitle: "RSVP",
        fullName: "Il tuo nome completo",
        inputFullName: "Inserisci il tuo nome",
        willYouAttend: "Parteciperai?",
        yes: "Sì",
        no: "No",
        guestCount: "Quanti ospiti aggiuntivi parteciperanno con te?",
        dietaryRestrictions: "Restrizioni dietetiche o allergie",
        songRequest: "Richieste musicali",
        inputsongRequest: "Quale canzone ti fara' ballare?",
        submit: "Conferma",
        footer: "Grazie per essere parte del nostro giorno speciale!",
        // -------------------------------------------------------------
        headerTravel: "Informazioni di viaggio utili ✈️",
        gettingIn: "Arrivare",
        gettingInDescription: "Ti consigliamo di volare all'Aeroporto di Salonicco 'Macedonia' (SKG), situato vicino alla sede del matrimonio.",
        gettingToCity: "Arrivare in centro città",
        gettingToCityDescription: `
            - <strong>Noleggio auto:</strong> Opzioni economiche disponibili in aeroporto. Prenota in anticipo per le migliori tariffe. <br>
            - <strong>Taxi:</strong> Circa 10-15€ per raggiungere gli hotel vicini e 20-30€ per il centro città. <br>
            - <strong>Autobus:</strong> La Linea 01X collega l'aeroporto al centro città per soli 2€.
        `,
        accommodations: "Alloggi",
        accommodationsDescription: `
            <strong>Hotel vicino alla sede:</strong> <br>
            - <a href="https://www.avalonhotel.gr/" target="_blank" class="text-decoration-underline">Avalon Hotel Salonicco</a>: Situato a 3 km dall'aeroporto, offre comfort, una piscina e parcheggio gratuito. <br>
            - <a href="https://www.athinaairporthotel.gr/" target="_blank" class="text-decoration-underline">Athina Airport Hotel</a>: Moderno con ristorante e spa vicino all'aeroporto. <br>
            - <a href="https://www.royal-hotel.gr/" target="_blank" class="text-decoration-underline">Royal Hotel Thessaloniki</a>: Boutique hotel di lusso con viste mozzafiato, a 5 km dalla sede.
        `,
        thingsToDo: "Cose da fare a Salonicco",
        thingsToDoDescription: `
            - <strong>Torre Bianca:</strong> Il simbolo di Salonicco con una vista panoramica. <br>
            - <strong>Piazza Aristotele:</strong> Il cuore della città con caffè e negozi. <br>
            - <strong>Ano Poli:</strong> Passeggia nelle stradine acciottolate con viste incredibili. <br>
            - <strong>La lunga passeggiata sul mare:</strong> Perfetta per una passeggiata al tramonto. <br>
            - <strong>Museo Archeologico di Salonicco:</strong> Scopri la storia della Macedonia. <br>
        `,
        foodAndDrinks: "Cibo e bevande",
        foodAndDrinksDescription: `
            - <strong>Trigona Panorama:</strong> Non perdere i dolci triangolari ripieni di crema. <br>
            - <strong>Nea Diagonios:</strong> Conosciuto per i migliori gyros e souvlaki. <br>
            - <strong>To Elliniko:</strong> Cucina greca autentica in un'atmosfera accogliente. <br>
        `,
        venueDetails: "Dettagli della sede",
        venueDetailsDescription: `
            <strong>Ktima Mironidi</strong> è la sede del matrimonio, situata vicino all'aeroporto per la tua comodità. Goditi un'ambientazione tranquilla e panoramica per il grande giorno!
        `,
        giftHeader: "Regalo? Don't Panic!",
        giftMainMessage: "La tua presenza al nostro matrimonio è il dono più prezioso che potremmo mai desiderare.",
        giftContributionMessage: "Tuttavia, se desideri contribuire, abbiamo fornito alcune opzioni di conto bancario per supportare i nostri piani per la luna di miele. ✈️✨",
        giftThankYou: "Grazie per aver fatto parte del nostro giorno speciale!"
    },

    el: {
        flagClass: 'fi fi-gr', // Greek flag
        header: "Καλώς ήρθατε στον γάμο μας",
        rsvpTitle: "RSVP",
        fullName: "Το πλήρες όνομά σας",
        inputFullName: "Το όνομά σας",
        willYouAttend: "Θα παρευρεθείτε;",
        yes: "Ναι",
        no: "Όχι",
        guestCount: "Πόσοι επιπλέον καλεσμένοι θα σας συνοδεύσουν;",
        dietaryRestrictions: "Διατροφικοί περιορισμοί ή αλλεργίες",
        songRequest: "Αιτήματα τραγουδιών",
        submit: "Υποβολή",
        footer: "Ευχαριστούμε που είστε μέρος της ξεχωριστής μας ημέρας!",
        // -----------------------------------------------------------------
        headerTravel: "Χρήσιμες Πληροφορίες Ταξιδιού ✈️",
        gettingIn: "Άφιξη",
        gettingInDescription: "Σας προτείνουμε να πετάξετε στο Αεροδρόμιο 'Μακεδονία' της Θεσσαλονίκης (SKG), που βρίσκεται κοντά στο χώρο της δεξίωσης.",
        gettingToCity: "Πρόσβαση στο Κέντρο της Πόλης",
        gettingToCityDescription: `
            - <strong>Ενοικίαση Αυτοκινήτου:</strong> Προσιτές επιλογές διαθέσιμες στο αεροδρόμιο. Κάντε κράτηση εκ των προτέρων για τις καλύτερες τιμές. <br>
            - <strong>Ταξί:</strong> Περίπου 10-15€ για τα κοντινά ξενοδοχεία και 20-30€ για το κέντρο της πόλης. <br>
            - <strong>Λεωφορείο:</strong> Η γραμμή 01Χ συνδέει το αεροδρόμιο με το κέντρο της πόλης με μόνο 2€.
        `,
        accommodations: "Διαμονή",
        accommodationsDescription: `
            <strong>Ξενοδοχεία κοντά στο χώρο της δεξίωσης:</strong> <br>
            - <a href="https://www.avalonhotel.gr/" target="_blank" class="text-decoration-underline">Avalon Hotel Thessaloniki</a>: Τοποθετημένο 3 χλμ από το αεροδρόμιο, με άνετα δωμάτια, πισίνα και δωρεάν πάρκινγκ. <br>
            - <a href="https://www.athinaairporthotel.gr/" target="_blank" class="text-decoration-underline">Athina Airport Hotel</a>: Μοντέρνο ξενοδοχείο με εστιατόριο και σπα κοντά στο αεροδρόμιο. <br>
            - <a href="https://www.royal-hotel.gr/" target="_blank" class="text-decoration-underline">Royal Hotel Thessaloniki</a>: Μπουτίκ ξενοδοχείο πολυτελείας με εκπληκτική θέα, 5 χλμ από το χώρο δεξίωσης.
        `,
        thingsToDo: "Δραστηριότητες στη Θεσσαλονίκη",
        thingsToDoDescription: `
            - <strong>Λευκός Πύργος:</strong> Το σύμβολο της Θεσσαλονίκης με πανοραμική θέα. <br>
            - <strong>Πλατεία Αριστοτέλους:</strong> Το κεντρικό σημείο της πόλης με καφετέριες και καταστήματα. <br>
            - <strong>Άνω Πόλη:</strong> Εξερευνήστε τα πλακόστρωτα σοκάκια και απολαύστε εκπληκτική θέα. <br>
            - <strong>Μακρύς Περίπατος στη Θάλασσα:</strong> Ιδανικός για βόλτα στο ηλιοβασίλεμα. <br>
            - <strong>Αρχαιολογικό Μουσείο Θεσσαλονίκης:</strong> Γνωρίστε την ιστορία της Μακεδονίας. <br>
        `,
        foodAndDrinks: "Φαγητό και Ποτά",
        foodAndDrinksDescription: `
            - <strong>Trigona Panorama:</strong> Δοκιμάστε τα διάσημα τρίγωνα με γέμιση κρέμας. <br>
            - <strong>Nea Diagonios:</strong> Φημισμένο για το καλύτερο γύρο και σουβλάκι. <br>
            - <strong>To Elliniko:</strong> Αυθεντική ελληνική κουζίνα σε ζεστό περιβάλλον. <br>
        `,
        venueDetails: "Πληροφορίες Χώρου",
        venueDetailsDescription: `
            <strong>Ktima Mironidi</strong> είναι ο χώρος της δεξίωσης, κοντά στο αεροδρόμιο για δική σας διευκόλυνση. Απολαύστε ένα ήρεμο και γραφικό περιβάλλον για τη μεγάλη ημέρα!
        `,
        giftHeader: "Δώρο; Don't Panic!",
        giftMainMessage: "Η παρουσία σας στο γάμο μας είναι το πιο πολύτιμο δώρο που θα μπορούσαμε να ζητήσουμε.",
        giftContributionMessage: "Ωστόσο, αν θέλετε να συμβάλετε, έχουμε παρέχει κάποιες επιλογές τραπεζικών λογαριασμών για να στηρίξετε τα σχέδια του μήνα του μέλιτος μας. ✈️✨",
        giftThankYou: "Σας ευχαριστούμε που είστε μέρος της ξεχωριστής ημέρας μας!"
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
                element.innerHTML = translations[lang][key];
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
