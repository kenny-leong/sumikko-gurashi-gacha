import { createGemContainer } from './components/gem.js'
import { createFateContainer } from './components/fate.js'
import { createRightHeaderContent } from './components/upper-right.js'


const loadBackground = () => {
    document.body.style.background = `url("/images/background2.jpg") no-repeat center center fixed`;
    document.body.style.backgroundSize = `cover`;
}



window.onload = async () => {
    loadBackground();
    createRightHeaderContent();
    createGemContainer();
    createFateContainer();
};
