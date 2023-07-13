
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
            currentProjectIndex = Math.max(0, projects.length - (projects.length % 4));
        }
        showCurrentProjects();
    }

    nextButton.addEventListener("click", showNextProjects);
    previousButton.addEventListener("click", showPreviousProjects);

    showCurrentProjects();
});
