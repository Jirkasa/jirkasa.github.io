/**
 * Creates toggle for navigation.
 * @param {Element} navigationToggleButton Button to be used to toggle navigation.
 * @param {Element} navigation Navigation to be toggled.
 * @param {string} navigationOpenedButtonCSSClass CSS class to add to button when navigation is opened.
 * @param {string} navigationOpenedCSSClass CSS class to add to navigation when navigation is opened.
 */
function createNavigationToggle(navigationToggleButton, navigation, navigationOpenedButtonCSSClass, navigationOpenedCSSClass) {
    let opened = false;
    const links = navigation.querySelectorAll("a");

    const mql = window.matchMedia('(max-width: 46.875em)');

    const updateTabIndices = () => {
        if (mql.matches && !opened) {
            for (let link of links) {
                link.setAttribute("tabindex", -1);
            }
        } else {
            for (let link of links) {
                link.removeAttribute("tabindex");
            }
        }
    }

    mql.onchange = updateTabIndices;
    updateTabIndices();

    navigationToggleButton.addEventListener("click", () => {
        opened = !opened;
        navigationToggleButton.classList.toggle(navigationOpenedButtonCSSClass);
        navigation.classList.toggle(navigationOpenedCSSClass);
        updateTabIndices();
    });

    navigation.addEventListener("click", (evt) => {
        if (evt.target.tagName === "A") {
            opened = false;
            navigationToggleButton.classList.remove(navigationOpenedButtonCSSClass);
            navigation.classList.remove(navigationOpenedCSSClass);
            updateTabIndices();
        }
    });
}

export default createNavigationToggle;