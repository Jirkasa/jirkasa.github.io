/**
 * Creates switch for projects.
 * @param {Element} projectsContainer Element that servers as container for projects.
 * @param {Element} switchButton Button that is used as switch.
 * @param {string} switchButtonOnCSSClass CSS class to be applied to switch button when switched.
 */
function createProjectsSwitch(projectsContainer, switchButton, switchButtonOnCSSClass) {
    const projects = [];
    for (let project of projectsContainer.children) {
        projects.push(project);
    }

    let displayAllProjects = false;

    const updateProjectsVisibility = () => {
        for (let project of projects) {
            project.remove();
        }

        for (let project of projects) {
            if (project.dataset.isProjectBest !== "true") {
                if (displayAllProjects) {
                    projectsContainer.appendChild(project);
                }
            } else {
                projectsContainer.appendChild(project);
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