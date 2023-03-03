/**
 * Creates switch for projects.
 * @param {Element} projectsContainer Element that servers as container for projects.
 * @param {Element} switchButton Button that is used as switch.
 * @param {string} switchButtonOnCSSClass CSS class to be applied to switch button when switched.
 */
function createProjectsSwitch(projectsContainer, switchButton, switchButtonOnCSSClass) {
    let displayAllProjects = false;

    const updateProjectsVisibility = () => {
        for (let project of projectsContainer.children) {
            if (project.dataset.isProjectBest !== "true") {
                project.style.display = displayAllProjects ? "flex" : "none";
            }
        }
    }
    updateProjectsVisibility();

    switchButton.addEventListener("click", () => {
        displayAllProjects = !displayAllProjects;

        if (displayAllProjects) {
            switchButton.classList.add(switchButtonOnCSSClass);
        } else {
            switchButton.classList.remove(switchButtonOnCSSClass);
        }

        updateProjectsVisibility();
    });
}

export default createProjectsSwitch;