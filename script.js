document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validation-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateForm();
    });
    
    function validateForm() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.querySelector('.error-message');
        
        let valid = true;
        errorMessage.textContent = '';
        
        if (!email.includes('@')) {
            errorMessage.textContent += 'Please enter a valid email address.\n';
            valid = false;
        }
        
        if (password.length < 8) {
            errorMessage.textContent += 'Password must be at least 8 characters long.\n';
            valid = false;
        }
        
        if (valid) {
            alert('Form submitted successfully!');
            // You can add code here to actually submit the form data if needed
        }
    }
});
