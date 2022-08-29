export default function(checkboxElement, clickableElement, selectorForElementsInClickableElement) {
    if (!checkboxElement || !clickableElement) throw new Error('at least two parameters must be passed');

    clickableElement.addEventListener("click", function (e) {
        if (selectorForElementsInClickableElement) {
            const clickedEl = e.target.closest(selectorForElementsInClickableElement);
            if (!clickedEl) return;
        }

        checkboxElement.checked = false;
    });
}