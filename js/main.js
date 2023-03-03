import createProjectsSwitch from "./createProjectsSwitch";
import makeStickyHeader from "./makeStickyHeader";

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