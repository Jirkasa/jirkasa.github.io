import Collapsible from "../Collapsible";
import ProjectItemElementBuilder from "./ProjectItemElementBuilder";

/** Represents project item in projects list. */
class ProjectItem {
    /**
     * Creates new project item.
     * @param {object} project Project based on which should be project item created.
     */
    constructor(project) {
        const builder = new ProjectItemElementBuilder();
        builder.build(project);

        /**
         * Name of project.
         * @type {string}
         * @readonly
         */
        this.projectName = project.name;
        /**
         * Type of project.
         * @type {"WEBSITE" | "WEBAPP" | "GAME" | "LIBRARY"}
         * @readonly
         */
        this.type = project.type;

        this._rootElement = builder.getRootElement();
        this._collapsible = new Collapsible(
            builder.getButtonElement(),
            builder.getCollapsibleElement(),
            "projects-list__item-button--opened"
        );
    }

    /**
     * Closes collapsible of project item.
     */
    closeCollapsible() {
        if (!this._collapsible.isOpened()) return;
        this._collapsible.close();
    }

    /**
     * Appends project item to passed element.
     * @param {HTMLElement} element Element to which should be project item appended.
     */
    appendTo(element) {
        element.appendChild(this._rootElement);
    }

    /**
     * Removes project item from page.
     */
    remove() {
        this._rootElement.remove();
    }
}

export default ProjectItem;