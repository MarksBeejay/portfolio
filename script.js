// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active'); // Toggle the 'active' class on click
});


// JavaScript interactions and functionality

// Example: Changing the text of an element
const heading = document.querySelector('h1');
heading.textContent = `Hi, I'm Makanjuola Bolaji`;

const footer = document.querySelector('footer');
footer.textContent = `2023 Makanjuola Bolaji. All rights reserved.`;

// Example: Handling a button click event
const button = document.querySelector('.btn');
button.addEventListener('click', function () {
    alert('Thank you for visiting!');
});



    // document.addEventListener("DOMContentLoaded", function() {
    //     const contactForm = document.getElementById("submit");

    //     contactForm.addEventListener("submit", function(event) {
    //         event.preventDefault();
    
    //         const formData = new FormData(contactForm);
    //         const data = Object.fromEntries(formData.entries());

    //         // Update the API endpoint URL
    //         const apiUrl = 'https://portfolio-3j5t.onrender.com';

    //         fetch(`${apiUrl}/send-email`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         })
    //         .then(response => response.text())
    //         .then(message => {
    //             alert(message);
    //             contactForm.reset();
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             alert("An error occurred while sending the message.");
    //         });
    //     });
    // });
    

    function sendFormData(name, email, message) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
    
        // Make a POST request to the backend API
        fetch('https://portfolio-3j5t.onrender.com/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend API (optional)
            console.log(data);
            if (data.success) {
                // If the email was sent successfully, show a success message or perform any other action you want
                alert('Your message has been sent successfully!');
            } else {
                // If there was an error with sending the email, show an error message or perform any other error handling
                alert('Error sending the message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any network or server errors here
        });
    }
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
    
        // Get form input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        // Perform validation (if needed)
    
        // If form is valid, submit data
        sendFormData(name, email, message);
    });
        
    