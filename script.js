// script.js
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
        const response = await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            username,
            email,
            phone,
            message
        }, "YOUR_USER_ID");

        if (response.status === 200) {
            responseMessage.innerText = 'Message sent successfully!';
            form.reset(); // Reset the form fields
        } else {
            responseMessage.innerText = 'Failed to send message. Please try again.';
        }
    } catch (error) {
        console.error("Error sending email:", error);
        responseMessage.innerText = 'Failed to send message. Please try again.';
    }
});
