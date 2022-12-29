export const createRightHeaderContent = () => {
    const headerContent = document.createElement("div");
    headerContent.id = "header-content";
    headerContent.style.display = "flex";
    headerContent.style.justifyContent = "flex-end";
    headerContent.style.marginTop = "30px";
    document.body.append(headerContent);
}
