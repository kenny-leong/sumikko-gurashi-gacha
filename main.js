import { createGemContainer } from './components/gem.js'
import { createFateContainer } from './components/fate.js'
import { createRightHeaderContainer } from './components/upper-right.js'
import { createSparkleContainer } from './components/sparkle.js'
import { createBanner } from './components/banner.js'


const loadBackground = () => {
    document.body.style.background = `url("/images/bg-3.jpeg") no-repeat center center fixed`;
    document.body.style.backgroundSize = `cover`;
}

const createHeader = () => {
    const header = document.createElement("div");
    header.id = "main-header";
    document.body.appendChild(header);
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = 'center';
}



window.onload = async () => {
    loadBackground();
    createHeader();
    createSparkleContainer();
    createRightHeaderContainer();
    createGemContainer();
    createFateContainer();
    createBanner();
};
