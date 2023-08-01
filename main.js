
document.addEventListener("DOMContentLoaded", function() {
    const previousButton = document.getElementById("previous-btn");
    const nextButton = document.getElementById("next-btn");
    const projectsWrapper = document.getElementById("projects-wrapper");
    const projects = Array.from(projectsWrapper.getElementsByClassName("project"));
    let currentProjectIndex = 0;

    function showCurrentProjects() {
        for (let i = 0; i < projects.length; i++) {
            if (i >= currentProjectIndex && i < currentProjectIndex + 3) {
                projects[i].style.display = "block";
            } else {
                projects[i].style.display = "none";
            }
        }
    }

    function showNextProjects() {
        currentProjectIndex += 3;
        if (currentProjectIndex >= projects.length) {
            currentProjectIndex = 0;
        }
        showCurrentProjects();
    }

    function showPreviousProjects() {
        currentProjectIndex -= 3;
        if (currentProjectIndex < 0) {
            currentProjectIndex = Math.max(0, projects.length - 3);
        }
        showCurrentProjects();
    }

    nextButton.addEventListener("click", showNextProjects);
    previousButton.addEventListener("click", showPreviousProjects);

    showCurrentProjects();
});


/* Contact Form Validation */

    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("messages");

    contactForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Validate the form inputs
        if (!validateName() || !validateEmail() || !validateMessage()) {
            return;
        }

        // Proceed with form submission
        submitForm();
    });

    function validateName() {
        const nameValue = nameInput.value.trim();

        if (nameValue === "") {
            displayError("name", "Name is required.");
            return false;
        }

        // Check the length of the name
        if (nameValue.length < 2 || nameValue.length > 50) {
            displayError("name", "Name should be between 2 and 50 characters.");
            return false;
        }

        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            displayError("email", "Email is required.");
            return false;
        }

        // Simple email format validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(emailValue)) {
            displayError("email", "Invalid email format.");
            return false;
        }

        return true;
    }

    function validateMessage() {
        const messageValue = messageInput.value.trim();

        if (messageValue === "") {
            displayError("messages", "Message is required.");
            return false;
        }

        return true;
    }

    function displayError(inputName, errorMessage) {
        const errorElement = document.getElementById(`${inputName}-error`);
        errorElement.textContent = errorMessage;
    }

    function submitForm() {
        // Proceed with form submission
        contactForm.submit();
    }
