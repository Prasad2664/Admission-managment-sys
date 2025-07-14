// Handle form submission
document.getElementById("educationForm").onsubmit = async function(event) {
    event.preventDefault();

    const school = document.getElementById("school").value;
    const tenthPercentage = document.getElementById("tenthPercentage").value;
    const twelfthPercentage = document.getElementById("twelfthPercentage").value;
    const regId = document.getElementById("Reg_ID").value;

    const formData = {
        school: school,
        tenthPercentage: tenthPercentage,
        twelfthPercentage: twelfthPercentage,
        regId: regId
    };

    try {
        // Send the form data to the backend
        const response = await fetch('http://localhost:3000/api/education', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            // Display the submitted data
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
                <h3>Submitted Information:</h3>
                <p><strong>School/College:</strong> ${school}</p>
                <p><strong>10th Percentage:</strong> ${tenthPercentage}%</p>
                <p><strong>12th Percentage:</strong> ${twelfthPercentage}%</p>
                <p><strong>Registration ID:</strong> ${regId}</p>
            `;

            // Display success message
            const successMessage = document.createElement("p");
            successMessage.innerText = "Your previous information has been saved successfully. Now fill the admission form.";
            successMessage.style.color = "green";
            resultDiv.appendChild(successMessage);

            // Optionally, reset the form
            document.getElementById("educationForm").reset();

            // Redirect after short delay
            setTimeout(() => {
                window.location.href = './admission.html';
            }, 1500);
        } else {
            throw new Error(result.message || 'Something went wrong!');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
};
