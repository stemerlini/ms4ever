export const rsvp = {
    init() {
        document.getElementById('guest-count').addEventListener('change', function () {
            const guestCount = parseInt(this.value || '0');
            const additionalGuestsSection = document.getElementById('additional-guests-section');
            additionalGuestsSection.innerHTML = ''; // Clear existing guest fields

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

        document.getElementById('rsvp-form').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from refreshing the page            

            // Collect form data
            const formData = new FormData(this);
            const urlEncodedData = new URLSearchParams(formData);
        
            // Send data to Google Apps Script
            fetch('https://script.google.com/macros/s/AKfycbxrxHdVnFG6EsJaWqYEp_jIrvm--PxZCAH7R5USaoHZgTubbKE5cKJ4tjgUZnKSbFSvLA/exec', {
            method: 'POST',
            body: urlEncodedData,
            })
            .then((response) => response.json())
            .then((result) => {
                console.log('Server response:', result);
        
                // Display a success or error message
                const alertWrapper = document.getElementById('alert-wrapper');
                if (result.status === 'success') {
                alertWrapper.innerHTML = '<div class="alert alert-success">Thank you! Your RSVP has been submitted.</div>';
                // Close the modal after 1 second
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('rsvpModal'));
                    modal.hide();
                }, 700);
                } else {
                alertWrapper.innerHTML = `<div class="alert alert-danger">Error: ${result.message}</div>`;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                const alertWrapper = document.getElementById('alert-wrapper');
                alertWrapper.innerHTML = '<div class="alert alert-danger">An error occurred. Please try again later.</div>';
            });
        });
    }
};