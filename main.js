// Highlight the current section in the navigation menu while scrolling
const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

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
const messageInput = document.getElementById("message");

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
        displayError("message", "Message is required.");
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

document.addEventListener("DOMContentLoaded", function () {
    // Get elements that should animate
    const elementsToAnimate = document.querySelectorAll(".animate-on-load");

    // Function to trigger animations
    function triggerAnimations() {
        elementsToAnimate.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }, 200 * index); // Adjust the delay as needed
        });
    }

    // Trigger animations when the page loads
    triggerAnimations();
});

// Get references to the mobile menu button and the navigation links
const mobileMenuButton = document.getElementById("mobile-menu-button");
const navList = document.querySelector("nav ul");

// Add a click event listener to the mobile menu button
mobileMenuButton.addEventListener("click", function () {
    // Toggle the 'active' class on the navigation links
    navList.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const menuIcon = document.getElementById("menu-icon");

    mobileMenuButton.addEventListener("click", function () {
        menuIcon.textContent = (menuIcon.textContent === "☰") ? "✕" : "☰";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Update the copyright year in the footer
    document.getElementById("copyright-year").textContent = currentYear;
});
