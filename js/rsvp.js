export const rsvp = {
    init() {

        const guestCountElement = document.getElementById('guest-count');
        const additionalGuestsSection = document.getElementById('additional-guests-section');

        guestCountElement.addEventListener('change', () => {
            const guestCount = parseInt(guestCountElement.value);
            additionalGuestsSection.innerHTML = ''; // Clear previous fields

            for (let i = 1; i <= guestCount; i++) {
                const guestField = `
                    <div class="mb-3">
                        <label for="guest-${i}-name">Guest ${i} Name</label>
                        <input type="text" class="form-control" id="guest-${i}-name" name="guest_${i}_name" placeholder="Enter guest ${i}'s full name">
                    </div>
                `;
                additionalGuestsSection.innerHTML += guestField;
            }
        });

        // const form = document.querySelector('#rsvp-form');
        const alertWrapper = document.querySelector('#alert-wrapper');

        document.getElementById('rsvp-form').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page refresh
        
            // Capture and convert form data
            const formData = new FormData(this);
            // const data = Object.fromEntries(formData.entries());

            // Show a loading message
            alertWrapper.innerHTML = '<p>Saving your details...</p>';

            // Submit data to Google Sheets
            fetch('https://script.google.com/macros/s/AKfycbyNFhGKL0DaAEVfi3CgyCF0_xpC2puLYGPlPgYp9Ya3YOszYg_sALb92TqGoV7Xpb2t/exec', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.result === 'success') {
                        alertWrapper.innerHTML = '<p class="text-success">Thank you! Your RSVP has been saved.</p>';
                    } else {
                        alertWrapper.innerHTML = `<p class="text-danger">${result.message}</p>`;
                    }
                })
                .catch(() => {
                    alertWrapper.innerHTML = '<p class="text-danger">Server error. Please try again later.</p>';
                });
        });
    },
};
