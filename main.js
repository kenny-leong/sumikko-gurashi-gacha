import { createGemContainer } from './gem.js'


const loadBackground = () => {
    document.body.style.background = `url("/images/background2.jpg") no-repeat center center fixed`;
    document.body.style.backgroundSize = `cover`;
}


const createHeaderContent = () => {
    const headerContent = document.createElement("div");
    headerContent.id = "header-content";
    headerContent.style.display = "flex";
    headerContent.style.justifyContent = "flex-end";
    headerContent.style.marginTop = "30px";
    headerContent.style.marginRight = "80px";
    document.body.append(headerContent);

}








window.onload = async () => {
    loadBackground();
    createHeaderContent();
    createGemContainer();
};
