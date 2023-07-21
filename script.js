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


// Form handling and validation

// const form = document.getElementById('contact-form');

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form input values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Perform validation
//     let isValid = true;

//     if (name.trim() === '') {
//         isValid = false;
//         displayErrorMessage('name', 'Name is required');
//     } else {
//         removeErrorMessage('name');
//     }

//     if (email.trim() === '') {
//         isValid = false;
//         displayErrorMessage('email', 'Email is required');
//     } else if (!isValidEmail(email)) {
//         isValid = false;
//         displayErrorMessage('email', 'Invalid email format');
//     } else {
//         removeErrorMessage('email');
//     }

//     if (message.trim() === '') {
//         isValid = false;
//         displayErrorMessage('message', 'Message is required');
//     } else {
//         removeErrorMessage('message');
//     }

//     // If form is valid, submit data
//     if (isValid) {
//         // Perform form submission or AJAX request here
//         alert('Thank you for your message!')
//         console.log('Form submitted successfully');
//         form.reset(); // Reset form fields
//     }
// });

// function displayErrorMessage(fieldId, message) {
//     const field = document.getElementById(fieldId);
//     const errorElement = document.createElement('p');
//     errorElement.className = 'error-message';
//     errorElement.textContent = message;

//     const parentElement = field.parentElement;
//     parentElement.appendChild(errorElement);
// }

// function removeErrorMessage(fieldId) {
//     const field = document.getElementById(fieldId);
//     const parentElement = field.parentElement;
//     const errorElement = parentElement.querySelector('.error-message');

//     if (errorElement) {
//         parentElement.removeChild(errorElement);
//     }
// }

// function isValidEmail(email) {
//     // Basic email format validation using a regular expression
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("contact-form", function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Update the API endpoint URL
      const apiUrl = "https://portfolio-3j5t.onrender.com";

      fetch(`${apiUrl}/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((message) => {
          alert(message);
          contactForm.reset();
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while sending the message.");
        });
    });
  });