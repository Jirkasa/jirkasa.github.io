export default class ElementsObserver {
    /**
     * creates new Elements Observer
     * @param {number} [threshold=0] threshold for Intersection Observer
     * @param {function} [onObserverNotSupported] callback for observer not supported
     * @param {HTMLElement} [root=null] root for Intersection Observer (default is viewport)
     * @returns {ElementsObserver} new ElementsObserver
     */
    constructor(threshold = 0, onObserverNotSupported = null, root = null) {
        this._observer = null;
        this._elements = [];

        // if Intersection Observer is not supported
        if (!window.IntersectionObserver) {
            onObserverNotSupported?.();
            return;
        }

        this._createObserver(threshold, root);
    }

    /**
     * add element to observe
     * @param {HTMLElement} element Element to observe
     * @param {'string'} cssClass CSS class
     * @param {('addOnEnter'|'removeOnEnter'|'addOnLeave'|'removeOnLeave'|'addOnEnterAndRemoveOnLeave'|'removeOnEnterAndAddOnLeave')} action Action to perform
     */
    observe(element, cssClass, action) {
        // return if Intersection Observer is not supported
        if (!window.IntersectionObserver) return;

        this._elements.push({
            element: element,
            cssClass: cssClass,
            action: action
        });

        this._observer.observe(element);
    }

    /**
     * creates Intersection Observer
     * @param {number} threshold threshold for Intersection Observer
     * @param {HTMLElement} root root for Intersection Observer
     */
    _createObserver(threshold, root) {
        const obsOptions = {
            root: root,
            threshold: threshold
        };

        this._observer = new IntersectionObserver(this._observerCallback.bind(this), obsOptions);
    }

    /**
     * called by Intersection Observer
     * @param {[IntersectionObserverEntry]} entries array of Intersection Observer entries
     */
    _observerCallback(entries) {
        for (let entry of entries) {

            // find index of element in _elements array
            const index = this._elements.findIndex(item => item.element === entry.target);
            if (index === -1) continue;

            const elementData = this._elements[index];

            // element is intersecting
            if (entry.isIntersecting) {
                switch (elementData.action) {
                    case "addOnEnter":
                        elementData.element.classList.add(elementData.cssClass);
                        this._unobserveElement(index);
                        break;
                    case "removeOnEnter":
                        elementData.element.classList.remove(elementData.cssClass);
                        this._unobserveElement(index);
                        break;
                    case "addOnEnterAndRemoveOnLeave":
                        elementData.element.classList.add(elementData.cssClass);
                        break;
                    case "removeOnEnterAndAddOnLeave":
                        elementData.element.classList.remove(elementData.cssClass);
                }

                continue;
            }
    
            // element is not intersecting
            switch (elementData.action) {
                case "addOnLeave":
                    elementData.element.classList.add(elementData.cssClass);
                    this._unobserveElement(index);
                    break;
                case "removeOnLeave":
                    elementData.element.classList.remove(elementData.cssClass);
                    this._unobserveElement(index);
                    break;
                case "addOnEnterAndRemoveOnLeave":
                    elementData.element.classList.remove(elementData.cssClass);
                    break;
                case "removeOnEnterAndAddOnLeave":
                    elementData.element.classList.add(elementData.cssClass);
            }
        }
    }

    /**
     * unobserves element by index
     * @param {number} index index of element in _elements array
     */
    _unobserveElement(index) {
        this._observer.unobserve(this._elements[index].element);
        this._elements.splice(index, 1);
    }
}