import SVGIconElementCreator from "../SVGIconElementCreator";

/** Component to build elements of project item. */
class ProjectItemElementBuilder {
    constructor() {
        this._rootElement = null;
        this._buttonElement = null;
        this._collapsibleElement = null;
    }

    /**
     * Builds elements of project item based on passed project.
     * @param {object} project Project.
     */
    build(project) {
        this._rootElement = document.createElement("div");
        this._rootElement.classList.add("projects-list__item");

        this._buttonElement = document.createElement("button");
        this._buttonElement.classList.add("projects-list__item-button");
        this._rootElement.appendChild(this._buttonElement);

        const nameContainer = document.createElement("div");
        nameContainer.classList.add("projects-list__item-name");
        this._buttonElement.appendChild(nameContainer);

        const icon = document.createElement("div");
        icon.classList.add("projects-list__item-icon");
        switch (project.type) {
            case "WEBSITE":
                icon.innerHTML = SVGIconElementCreator.create("./assets/icon-sprite.svg", "globe");
                break;
            case "WEBAPP":
                icon.innerHTML = SVGIconElementCreator.create("./assets/icon-sprite.svg", "sidebar");
                break;
            case "GAME":
                icon.innerHTML = SVGIconElementCreator.create("./assets/icon-sprite.svg", "gamepad");
                break;
            case "LIBRARY":
                icon.innerHTML = SVGIconElementCreator.create("./assets/icon-sprite.svg", "package");
                break;
        }
        nameContainer.appendChild(icon);

        const projectName = document.createElement("div");
        projectName.classList.add("projects-list__project-name");
        projectName.innerText = project.name;
        if (project.deprecated) {
            projectName.classList.add("projects-list__project-name--deprecated");
        }
        nameContainer.appendChild(projectName);

        const dropdownIcon = document.createElement("div");
        dropdownIcon.classList.add("projects-list__dropdown-icon");
        dropdownIcon.innerHTML = SVGIconElementCreator.create("./assets/icon-sprite.svg", "arrow-down");
        this._buttonElement.appendChild(dropdownIcon);

        this._collapsibleElement = document.createElement("div");
        this._collapsibleElement.classList.add("projects-list__collapsible");
        this._rootElement.appendChild(this._collapsibleElement);

        const contentElement = document.createElement("div");
        contentElement.classList.add("projects-list__item-content");
        this._collapsibleElement.appendChild(contentElement);

        const horizontalRule = document.createElement("hr");
        horizontalRule.classList.add("projects-list__horizontal-rule", "u-mb-2");
        contentElement.appendChild(horizontalRule);

        if (project.notice) {
            const noticeMessage = document.createElement("p");
            noticeMessage.classList.add("paragraph", "paragraph--warning", "u-mb-2");
            noticeMessage.innerText = project.notice;
            contentElement.appendChild(noticeMessage);
        }

        const usedTechnologies = document.createElement("p");
        usedTechnologies.classList.add("paragraph", "u-mb-2");
        usedTechnologies.innerText = "Použité technologie: ";
        contentElement.appendChild(usedTechnologies);

        let isFirst = true;
        for (let technologyName of project.technologies) {
            if (!isFirst) {
                const commaElement = document.createElement("span");
                commaElement.innerText = ", ";
                usedTechnologies.appendChild(commaElement);
            }
            const technologyElement = document.createElement("span");
            technologyElement.classList.add("highlight");
            technologyElement.innerText = technologyName;
            usedTechnologies.appendChild(technologyElement);
            isFirst = false;
        }

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("projects-list__item-buttons");
        contentElement.appendChild(buttonsContainer);

        if (project.webURL) {
            const button = this._createButton("Navštívit web", "search", project.webURL);
            buttonsContainer.appendChild(button);
        }
        if (project.documentationURL) {
            const button = this._createButton("Navštívit dokumentaci", "search", project.documentationURL);
            buttonsContainer.appendChild(button);
        }
        if (project.sourceCodeURL) {
            const button = this._createButton("Zdrojový kód", "embed", project.sourceCodeURL);
            button.classList.add("button-primary--bigger-icon", "button-primary--outlined");
            buttonsContainer.appendChild(button);
        }
    }

    /**
     * Return root element of project item.
     * @returns {HTMLElement} Root element of project item.
     */
    getRootElement() {
        return this._rootElement;
    }

    /**
     * Returns button element of project item.
     * @returns {HTMLElement} Button element of project item.
     */
    getButtonElement() {
        return this._buttonElement;
    }

    /**
     * Return collapsible element of project item.
     * @returns {HTMLElement} Collapsible element of project item.
     */
    getCollapsibleElement() {
        return this._collapsibleElement;
    }

    _createButton(text, iconName, url) {
        const button = document.createElement("a");
        button.classList.add("button-primary", "button-primary--small");
        button.setAttribute("href", url);
        button.setAttribute("target", "_blank");
        button.innerHTML = SVGIconElementCreator.create("./assets/icon-sprite.svg", iconName);

        const textElement = document.createElement("span");
        textElement.innerText = text;
        button.appendChild(textElement);

        return button;
    }
}

export default ProjectItemElementBuilder;