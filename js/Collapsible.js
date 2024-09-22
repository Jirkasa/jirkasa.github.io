const DELAY_TIMEOUT = 5;
const ANIMATION_SPEED = 200;
const ANIMATION_EASING_FUNCTION = "ease-in-out";

/**
 * Represents collapsible.
 */
class Collapsible {
    /**
     * Creates new collapsible.
     * @param {HTMLElement} buttonElement Button element.
     * @param {HTMLElement} collapsibleElement Collapsible element.
     * @param {string} collapsibleOpenedButtonCSSClass CSS class to be added to button when collapsible is opened.
     * @param {string} collapsibleOpenedCollapsibleCSSClass CSS class to be added to collapsible when it is opened.
     */
    constructor(buttonElement, collapsibleElement, collapsibleOpenedButtonCSSClass, collapsibleOpenedCollapsibleCSSClass) {
        this._buttonElement = buttonElement;
        this._collapsibleElement = collapsibleElement;
        this._opened = false;
        this._isAnimating = false;
        this._animationTimeoutId = null;
        this._delayTimeoutId = null;

        this._collapsibleOpenedButtonCSSClass = collapsibleOpenedButtonCSSClass;
        this._collapsibleOpenedCollapsibleCSSClass = collapsibleOpenedCollapsibleCSSClass;

        this._buttonElement.addEventListener("click", () => this._onButtonClick());

        this.close(false);
    }

    /**
     * Opens collapsible.
     * @param {boolean} animate Determines whether animation should be used.
     */
    open(animate = true) {
        // clear potential previous animation
        this._clearTimeouts();
        this._isAnimating = false;

        this._opened = true;

        // add CSS modifier classes
        if (this._collapsibleOpenedButtonCSSClass !== null) {
            this._buttonElement.classList.add(this._collapsibleOpenedButtonCSSClass);
        }
        if (this._collapsibleOpenedCollapsibleCSSClass) {
            this._collapsibleElement.classList.add(this._collapsibleOpenedCollapsibleCSSClass);
        }

        // change visibility
        this._collapsibleElement.style.setProperty("visibility", "visible");

        if (animate) {
            this._isAnimating = true;

            // get height of collapsible element
            const height = this._getCollapsibleElementHeight();
            this._collapsibleElement.style.setProperty("max-height", "0px");

            // set properties for animation
            this._collapsibleElement.style.setProperty("overflow", "hidden");
            this._collapsibleElement.style.setProperty("transition", `${ANIMATION_SPEED}ms ${ANIMATION_EASING_FUNCTION}`);
            // max-height is changed after small delay to trigger CSS animation
            this._delayTimeoutId = window.setTimeout(() => {
                this._collapsibleElement.style.setProperty("max-height", height + "px");
                this._delayTimeoutId = null;
            }, DELAY_TIMEOUT);

            // wait for CSS animation to complete
            this._animationTimeoutId = window.setTimeout(() => {
                this._isAnimating = false;

                // add/remove CSS properties after animation has been completed
                this._collapsibleElement.style.setProperty("max-height", "none");
                this._collapsibleElement.style.removeProperty("transition");
                this._collapsibleElement.style.removeProperty("overflow");

                this._animationTimeoutId = null;
            }, ANIMATION_SPEED);
        } else {
            this._collapsibleElement.style.setProperty("max-height", "none");
            this._collapsibleElement.style.removeProperty("overflow");
        }
    }

    /**
     * Closes collapsible.
     * @param {boolean} animate Determines whether animation should be used.
     */
    close(animate = true) {
        // clear potential previous animation
        this._clearTimeouts();
        this._isAnimating = false;

        this._opened = false;

        // remove CSS modifier classes
        if (this._collapsibleOpenedButtonCSSClass !== null) {
            this._buttonElement.classList.remove(this._collapsibleOpenedButtonCSSClass);
        }
        if (this._collapsibleOpenedCollapsibleCSSClass) {
            this._collapsibleElement.classList.remove(this._collapsibleOpenedCollapsibleCSSClass);
        }

        // change visibility and add overflow hidden
        this._collapsibleElement.style.setProperty("visibility", "hidden");
        this._collapsibleElement.style.setProperty("overflow", "hidden");

        if (animate) {
            this._isAnimating = true;

            // set properties for animation
            this._collapsibleElement.style.setProperty("transition", `${ANIMATION_SPEED}ms ${ANIMATION_EASING_FUNCTION}`);
            this._collapsibleElement.style.setProperty("max-height", this._getCollapsibleElementHeight() + "px");
            // max-height is changed after small delay to trigger CSS animation
            this._delayTimeoutId = window.setTimeout(() => {
                this._collapsibleElement.style.setProperty("max-height", "0px");
                this._delayTimeoutId = null;
            }, DELAY_TIMEOUT);

            // wait for CSS animation to complete
            this._animationTimeoutId = window.setTimeout(() => {
                this._isAnimating = false;

                // remove CSS properties after animation has been completed
                this._collapsibleElement.style.removeProperty("transition");

                this._animationTimeoutId = null;
            }, ANIMATION_SPEED);
        } else {
            this._collapsibleElement.style.setProperty("max-height", "0px");
        }
    }

    /**
     * Checks whether collapsible is opened.
     * @returns {boolean} Indicates whether collapsible is opened.
     */
    isOpened() {
        return this._opened;
    }

    _onButtonClick() {
        if (this._isAnimating) return;

        if (this._opened) {
            this.close();
        } else {
            this.open();
        }
    }

    _clearTimeouts() {
        if (this._animationTimeoutId !== null) {
            window.clearTimeout(this._animationTimeoutId);
        }
        if (this._delayTimeoutId !== null) {
            window.clearTimeout(this._delayTimeoutId);
        }
    }

    _getCollapsibleElementHeight() {
        this._collapsibleElement.style.setProperty("max-height", "none");
        const height = this._collapsibleElement.clientHeight;
        this._collapsibleElement.style.removeProperty("max-height");

        return height;
    }
}

export default Collapsible;