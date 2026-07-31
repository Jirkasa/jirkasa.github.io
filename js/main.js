import createNavigationToggle from "./createNavigationToggle";
import SmoothScroll from "smooth-scroll";
import AOS from 'aos';
import MicroModal from "micromodal";
import projects from "./projects";
import ProjectsListApp from "./projects-list/ProjectsListApp";

createNavigationToggle(
    document.getElementById("NavigationToggleButton"),
    document.getElementById("Navigation"),
    "navigation-toggle-button--checked",
    "header__navigation--opened"
);

new SmoothScroll('a[href*="#"]', {
    offset: 48 + 36
});

AOS.init({
    once: true
});

const projectsList = new ProjectsListApp(
    document.getElementById("ProjectsContainer"),
    document.getElementById("ProjectsSortSelectButton"),
    document.getElementById("ProjectsSortSelectSelectedText"),
    document.getElementById("ProjectsSortSelectCollapsible"),
    document.getElementById("ProjectsSearchInput"),
    document.getElementById("ProjectsClearSearchButton"),
    document.getElementById("NoProjectsFoundMessage"),
    projects
);

MicroModal.init({
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    disableScroll: true,
    disableFocus: true,
    onClose: () => {
        projectsList.reset();
    }
});