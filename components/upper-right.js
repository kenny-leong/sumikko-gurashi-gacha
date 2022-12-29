export const createRightHeaderContent = () => {
    const headerContent = document.createElement("div");
    headerContent.id = "right-header-container";
    headerContent.style.display = "flex";
    headerContent.style.justifyContent = "flex-end";
    headerContent.style.marginTop = "30px";

    const mainHeader = document.getElementById("main-header");
    mainHeader.appendChild(headerContent);
}
