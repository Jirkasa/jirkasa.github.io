/**
 * Creates toggle for navigation.
 * @param {Element} navigationToggleButton Button to be used to toggle navigation.
 * @param {Element} navigation Navigation to be toggled.
 * @param {string} navigationOpenedButtonCSSClass CSS class to add to button when navigation is opened.
 * @param {string} navigationOpenedCSSClass CSS class to add to navigation when navigation is opened.
 */
function createNavigationToggle(navigationToggleButton, navigation, navigationOpenedButtonCSSClass, navigationOpenedCSSClass) {
    navigationToggleButton.addEventListener("click", () => {
        navigationToggleButton.classList.toggle(navigationOpenedButtonCSSClass);
        navigation.classList.toggle(navigationOpenedCSSClass);
    });

    navigation.addEventListener("click", (evt) => {
        if (evt.target.tagName === "A") {
            navigationToggleButton.classList.remove(navigationOpenedButtonCSSClass);
            navigation.classList.remove(navigationOpenedCSSClass);
        }
    });
}

export default createNavigationToggle;