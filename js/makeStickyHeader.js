/**
 * Makes sticky header.
 * @param {Element} headerContainerElement Container of header element.
 * @param {Element} headerElement Header element.
 * @param {string} stickyCSSClass CSS class to be added to header element when header should become sticky (when it is no longer fully in viewport).
 */
function makeStickyHeader(headerContainerElement, headerElement, stickyCSSClass) {
    if (!headerContainerElement) throw new Error('no header container element was passed');
    if (!headerElement) throw new Error('no header element was passed');
    if (!stickyCSSClass) throw new Error('no sticky CSS class for header was passed');

    const obsCallback = function([entry]) {
        if (!entry.isIntersecting) {
            headerElement.classList.add(stickyCSSClass);
        } else {
            headerElement.classList.remove(stickyCSSClass);
        }
    }

    const obsOptions = {
        root: null, // intersection will be with viewport
        threshold: 0.99
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(headerContainerElement);
}

export default makeStickyHeader;