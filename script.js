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
        const response = await emailjs.send("service_cpbkelb", "template_s6h1azk", {
            username,
            email,
            phone,
            message
        }, "Tsmi7J7tz2o_Beo4q");

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
