import createNavigationToggle from "./createNavigationToggle";
import createProjectsSwitch from "./createProjectsSwitch";
import makeStickyHeader from "./makeStickyHeader";
import SmoothScroll from "smooth-scroll";

makeStickyHeader(
    document.getElementById("HeaderContainer"),
    document.getElementById("Header"),
    "header--fixed"
);

createProjectsSwitch(
    document.getElementById("ProjectsContainer"),
    document.getElementById("ProjectsSwitch"),
    "switch__input--on"
);

createNavigationToggle(
    document.getElementById("NavigationToggleButton"),
    document.getElementById("Navigation"),
    "navigation-toggle-button--checked",
    "header__navigation--opened"
);

new SmoothScroll('a[href*="#"]', {
    offset: 48
});