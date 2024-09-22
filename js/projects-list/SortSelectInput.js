import Collapsible from "../Collapsible";

/** Represents sort select input. */
class SortSelectInput {
    /**
     * Creates new sort select input.
     * @param {HTMLButtonElement} selectButton Button to open collapsible element.
     * @param {HTMLElement} selectedSortTextElement Element in which should be displayed currently chosen sort option.
     * @param {HTMLElement} selectCollapsible Collapsible element.
     * @param {function} onSortChange Function to be called when sort option is changed.
     */
    constructor(selectButton, selectedSortTextElement, selectCollapsible, onSortChange) {
        this._selectedType = "NAME"
        this._selectButton = selectButton;
        this._selectedSortTextElement = selectedSortTextElement;
        this._collapsible = new Collapsible(selectButton, selectCollapsible);
        this._onSortChange = onSortChange;

        const sortByNameButton = this._createOptionButton("Název");
        const sortByReleaseDateButton = this._createOptionButton("Datum vydání");
        const sortByTypeButton = this._createOptionButton("Typ");
        
        selectCollapsible.appendChild(sortByNameButton);
        selectCollapsible.appendChild(sortByReleaseDateButton);
        selectCollapsible.appendChild(sortByTypeButton);

        this.changeSelectedType(this._selectedType);

        document.addEventListener("click", event => this._onPageClick(event));
        sortByNameButton.addEventListener("click", () => this._onOptionButtonClick("NAME"));
        sortByReleaseDateButton.addEventListener("click", () => this._onOptionButtonClick("RELEASE_DATE"));
        sortByTypeButton.addEventListener("click", () => this._onOptionButtonClick("TYPE"));
    }

    /**
     * Returns type of currently selected sort option.
     * @returns {"NAME" | "RELEASE_DATE" | "TYPE"} Currently selected type of sort option.
     */
    getSelectedType() {
        return this._selectedType;
    }

    /**
     * Changes selected type of sort option.
     * @param {"NAME" | "RELEASE_DATE" | "TYPE"} type Type of sort option.
     */
    changeSelectedType(type) {
        switch(type) {
            case "NAME":
                this._selectedSortTextElement.innerText = "Název";
                break;
            case "RELEASE_DATE":
                this._selectedSortTextElement.innerText = "Datum vydání";
                break;
            case "TYPE":
                this._selectedSortTextElement.innerText = "Typ";
                break;
        }
        this._selectedType = type;
    }

    _onOptionButtonClick(type) {
        this.changeSelectedType(type);
        this._onSortChange(type);
    }

    _onPageClick(event) {
        if (event.target === this._selectButton) return;
        if (!this._collapsible.isOpened()) return;
        this._collapsible.close();
    }

    _createOptionButton(name) {
        const button = document.createElement("button");
        button.classList.add("projects-search__sort-select-option");
        button.innerText = name;
        return button;
    }
}

export default SortSelectInput;