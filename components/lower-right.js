import { create10PullBtn } from "./components/10-pull-button.js";

export const createRightFooterContent = () => {
    const footerContent = document.createElement("div");
    footerContent.id = "right-footer-container";
    // footerContent.style.display = "flex";
    // footerContent.style.justifyContent = "flex-end";

    const mainFooter = document.getElementById("main-footer");
    mainFooter.appendChild(footerContent);

    create10PullBtn();
}
