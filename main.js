import { createRightHeaderContent } from './components/upper-right.js'
import { createLeftHeaderContent } from './components/upper-left.js'
import { createBanner } from './components/banner.js'
import { create10PullBtn } from './components/ten-pull-button.js'
import { createNormalPullBtn } from './components/normal-pull-btn.js'


const toggleLoadingScreen = (isVisible) => {
    if (isVisible) {
        const loadingScreen = document.createElement("div");
        loadingScreen.className = "loading-screen";
        loadingScreen.style.position = "fixed";
        loadingScreen.style.height = "100%";
        loadingScreen.style.width = "100%";
        loadingScreen.style.backgroundColor = "#fff";
        loadingScreen.style.display = "block";
        loadingScreen.style.top = "0";
        loadingScreen.style.left = "0";
        loadingScreen.style.zIndex = "9999";

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
    document.body.style.minHeight = "100vh";
}

const loadAudio = () => {
    const audio = document.createElement("audio");
    audio.id = "bg-audio";
    audio.src = "/audio/jade-moon-bg.mp3";

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
          audio.pause();
        } else {
          audio.play();
        }
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
    footer.style.flexDirection = "row";
    footer.style.justifyContent = "flex-end"
    footer.style.position = 'fixed';
    footer.style.bottom = "50px";
    footer.style.right = "100px";

    const lowerRightFooterDiv = document.createElement("div");
    lowerRightFooterDiv.id = "lower-right-footer-content";
    lowerRightFooterDiv.style.display = "flex";


    const pullBtnx10 = create10PullBtn();
    const normalPullBtn = createNormalPullBtn();

    lowerRightFooterDiv.append(normalPullBtn, pullBtnx10);
    footer.appendChild(lowerRightFooterDiv);
}


window.onload = () => {
    // uncomment on when load screen or audio wanted
    loadAudio();
    loadBackground();
    // showLoadScreen();
    createHeader();
    createLeftHeaderContent();
    createRightHeaderContent();
    createBanner();
    createFooter();
};
