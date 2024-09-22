import ProjectItem from "./ProjectItem";
import SortSelectInput from "./SortSelectInput";

/** Represents projects list app. */
class ProjectsListApp {
    /**
     * Creates new projects list app.
     * @param {HTMLElement} projectsContainer Container for project items.
     * @param {HTMLButtonElement} sortSelectButton Sort select input button.
     * @param {HTMLElement} sortSelectSelectedTextElement Element that displays currently chosen sort option.
     * @param {HTMLElement} sortSelectCollapsible Sort select input collapsible.
     * @param {HTMLInputElement} searchInput Search input.
     * @param {HTMLButtonElement} clearSearchButton Button to clear search input.
     * @param {HTMLElement} noProjectsFoundElement Element to be displayed when no projects are found for search.
     * @param {Array<object>} projects Projects to be displayed in list.
     */
    constructor(projectsContainer, sortSelectButton, sortSelectSelectedTextElement, sortSelectCollapsible, searchInput, clearSearchButton, noProjectsFoundElement, projects) {
        this._projectsContainer = projectsContainer;
        this._projectItems = [];
        this._sortSelect = new SortSelectInput(sortSelectButton, sortSelectSelectedTextElement, sortSelectCollapsible, () => this._updateProjectItemsList());
        this._searchInput = searchInput;
        this._clearSearchButton = clearSearchButton;
        this._noProjectsFoundElement = noProjectsFoundElement;

        for (let project of projects) {
            const projectItem = new ProjectItem(project);
            projectItem.appendTo(projectsContainer);
            this._projectItems.push(projectItem);
        }

        this._sortSelect.changeSelectedType("RELEASE_DATE");
        this._clearSearchButton.setAttribute("tabindex", "-1");
        this._noProjectsFoundElement.style.setProperty("display", "none");
        
        this._searchInput.addEventListener("input", () => this._onSearchInputChange());
        this._clearSearchButton.addEventListener("click", () => this._onClearSearchButtonClick());
    }

    /**
     * Resets list to initial state.
     */
    reset() {
        for (let projectItem of this._projectItems) {
            projectItem.closeCollapsible();
        }
        this._searchInput.value = "";
        this._clearSearchButton.classList.remove("projects-search__clear-search-button--visible");
        this._clearSearchButton.setAttribute("tabindex", "-1");
        this._sortSelect.changeSelectedType("RELEASE_DATE");
        this._updateProjectItemsList();
    }

    _onSearchInputChange() {
        if (this._searchInput.value.trim().length > 0) {
            this._clearSearchButton.classList.add("projects-search__clear-search-button--visible");
            this._clearSearchButton.setAttribute("tabindex", "0");
        } else {
            this._clearSearchButton.classList.remove("projects-search__clear-search-button--visible");
            this._clearSearchButton.setAttribute("tabindex", "-1");
        }

        this._updateProjectItemsList();
    }

    _onClearSearchButtonClick() {
        this._clearSearchButton.classList.remove("projects-search__clear-search-button--visible");
        this._clearSearchButton.setAttribute("tabindex", "-1");
        this._searchInput.value = "";
        this._updateProjectItemsList();
    }

    _updateProjectItemsList() {
        for (let projectItem of this._projectItems) {
            projectItem.remove();
        }

        let sortedProjectItems;
        if (this._sortSelect.getSelectedType() == "NAME") {
            sortedProjectItems = this._projectItems.slice();
            sortedProjectItems.sort((item1, item2) => {
                return item1.projectName.localeCompare(item2.projectName, 'cs');
            });
        } else if (this._sortSelect.getSelectedType() == "TYPE") {
            sortedProjectItems = [];

            for (let projectItem of this._projectItems) {
                if (projectItem.type === "WEBSITE") {
                    sortedProjectItems.push(projectItem);
                }
            }
            for (let projectItem of this._projectItems) {
                if (projectItem.type === "WEBAPP") {
                    sortedProjectItems.push(projectItem);
                }
            }
            for (let projectItem of this._projectItems) {
                if (projectItem.type === "GAME") {
                    sortedProjectItems.push(projectItem);
                }
            }
            for (let projectItem of this._projectItems) {
                if (projectItem.type === "LIBRARY") {
                    sortedProjectItems.push(projectItem);
                }
            }
        } else {
            sortedProjectItems = this._projectItems;
        }

        const searchText = this._searchInput.value.trim().toLowerCase();

        let hasResults = false;
        for (let projectItem of sortedProjectItems) {
            if (searchText.length !== 0 && !projectItem.projectName.toLowerCase().includes(searchText)) continue;
            projectItem.appendTo(this._projectsContainer);
            hasResults = true;
        }

        if (hasResults) {
            this._projectsContainer.style.removeProperty("display");
            this._noProjectsFoundElement.style.setProperty("display", "none");
        } else {
            this._projectsContainer.style.setProperty("display", "none");
            this._noProjectsFoundElement.style.removeProperty("display");
        }
    }
}

export default ProjectsListApp;