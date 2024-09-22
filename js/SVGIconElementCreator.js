/** Component for creation of SVG HTML elements. */
class SVGIconElementCreator {
    /**
     * Creates SVG HTML element.
     * @param {string} svgSpritePath Path to SVG sprite.
     * @param {string} iconName Name of icon.
     * @returns {string} Created HTML element.
     */
    static create(svgSpritePath, iconName) {
        return `
        <svg>
            <use xlink:href="${svgSpritePath}#${iconName}"></use>
        </svg>
        `;
    }
}

export default SVGIconElementCreator;