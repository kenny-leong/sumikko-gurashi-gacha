import { createRightHeaderContent } from './components/upper-right.js'
import { createLeftHeaderContent } from './components/upper-left.js'
import { createBanner } from './components/banner.js'


const toggleLoadingScreen = (isVisible) => {
    if (isVisible) {
        const loadingScreen = document.createElement("div");
        loadingScreen.id = "loading-screen";
        loadingScreen.style.position = "fixed";
        loadingScreen.style.height = "100%";
        loadingScreen.style.width = "100%";
        loadingScreen.style.backgroundColor = "#fff";
        loadingScreen.style.display = "block";
        loadingScreen.style.top = "0";
        loadingScreen.style.left = "0";
        loadingScreen.style.zIndex = "999999";

        const loadingText = document.createElement("p");
        loadingText.innerText = "Loading....";
        loadingText.id = "loading-text";
        loadingText.style.fontSize = "50px";
        loadingText.style.textAlign = "center";
        loadingText.style.marginTop = "30%"
        loadingText.style.color = "white";
        loadingText.style.fontFamily = "Genshin";

        loadingScreen.appendChild(loadingText);
        document.body.appendChild(loadingScreen);
    } else {
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "none";
    }
}

const showLoadScreen = () => {
    toggleLoadingScreen(true);
    setTimeout(function() {
        toggleLoadingScreen(false);
      }, 5000);
}


const loadBackground = () => {
    document.body.style.background = `url("/images/bg-3.jpeg") no-repeat center center fixed`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.cursor = "url('/images/cursor.png'), auto";
}

const loadAudio = () => {
    const audio = document.createElement("audio");
    audio.id = "bg-audio";
    audio.src = "/audio/bg-audio.m4a";

    document.body.addEventListener("mouseenter", () => {
        audio.play();
      });
    document.body.addEventListener("mouseleave", () => {
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


window.onload = () => {
    loadAudio();
    showLoadScreen();
    loadBackground();
    createHeader();
    createLeftHeaderContent();
    createRightHeaderContent();
    createBanner();
};
