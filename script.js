document.getElementById('admissionForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const collegename = document.getElementById('College').value;
    const application_id = document.getElementById('Application-ID').value;
    const degree = document.getElementById('degree').value;
    const course = document.getElementById('Courses').value;
    const personalStatement = document.getElementById('personalStatement').value;

    // Validate form fields
    if (
        fullName === '' || email === '' || phone === '' || dob === '' || gender === '' ||
        address === '' || collegename === '' || application_id === '' || degree === '' ||
        course === '' || personalStatement === ''
    ) {
        displayMessage('Please fill out all fields.', 'error');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/admission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName,
                email,
                phone,
                dob,
                gender,
                address,
                collegename,
                application_id,
                degree,
                course,
                personalStatement
            })
        });

        const result = await response.json();
        console.log('Server response:', result);

        if (response.ok) {
            displayMessage('Application successfully submitted!', 'success');
            document.getElementById('admissionForm').reset();
        } else {
            displayMessage(result.message || 'Something went wrong!', 'error');
        }

    } catch (error) {
        console.error('Fetch error:', error);
        displayMessage('Error submitting the form. Please try again.', 'error');
    }
});

// Function to display a message after submission
function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.className = type === 'success' ? 'success' : 'error';

    // Automatically remove message after 3 seconds
    setTimeout(() => {
        messageDiv.innerHTML = '';
        messageDiv.className = '';
    }, 3000);
}
