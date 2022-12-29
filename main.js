import { createRightHeaderContent } from './components/upper-right.js'
import { createLeftHeaderContent } from './components/upper-left.js'
import { createBanner } from './components/banner.js'


const loadBackground = () => {
    document.body.style.background = `url("/images/bg-3.jpeg") no-repeat center center fixed`;
    document.body.style.backgroundSize = `cover`;
}

const loadAudio = () => {
    const audio = document.createElement("audio");
    audio.src = "/audio/genshin.mp3";
    audio.volume = "0.5";

    window.addEventListener("focus", () => {
        audio.play();
      });
    window.addEventListener("blur", () => {
    audio.pause();
    });
}

const createHeader = () => {
    const header = document.createElement("div");
    header.id = "main-header";
    document.body.appendChild(header);
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = 'center';
}

const createFooter = () => {
    const footer = document.createElement("div");
    footer.id = "main-footer";
    document.body.appendChild(footer);
    footer.style.display = "flex";
    footer.style.justifyContent = "space-between";
    footer.style.alignItems = 'center';
}



window.onload = async () => {
    loadBackground();
    loadAudio();
    createHeader();
    createLeftHeaderContent();
    createRightHeaderContent();
    createBanner();
};
