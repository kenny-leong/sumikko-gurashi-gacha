import { onePullPopup } from "./ten-pull-button.js";

export const createNormalPullBtn = () => {
    const pullBtnContainer = document.createElement('div');
    pullBtnContainer.className = "normal-pull-btn";
    pullBtnContainer.style.display = "flex";
    pullBtnContainer.style.flexDirection = "column";
    pullBtnContainer.style.alignItems = "center"
    pullBtnContainer.style.width = "200px"
    pullBtnContainer.style.height = "50px";
    pullBtnContainer.style.backgroundColor = "#FFFFFF";
    pullBtnContainer.style.border = 'solid #A49A90 2px';
    pullBtnContainer.style.borderRadius = "25px";

    pullBtnContainer.addEventListener("mouseenter", () => {
        pullBtnContainer.style.transform = "scale(1.02)";
      });
    pullBtnContainer.addEventListener("mouseleave", () => {
        pullBtnContainer.style.transform = "scale(1)";
    });

    pullBtnContainer.addEventListener("click", onePullPopup);

    const wishText = createNormalPullText();
    const fateBallDiv = createFateBallOne();

    pullBtnContainer.append(wishText, fateBallDiv);

    return pullBtnContainer;
}

const createNormalPullText = () => {
    const wishTextDiv = document.createElement("div");
    wishTextDiv.className = "normal-pull-text-container";
    wishTextDiv.style.marginBottom = "5px";
    wishTextDiv.style.marginTop = "3px";


    const wishText = document.createElement("span");
    wishText.innerText = "Wish x1";
    wishText.id = "normal-pull-text";
    wishText.style.fontFamily = "Sumikko";
    wishText.style.color = "#A49A90";
    wishText.style.fontSize = "15px";

    wishTextDiv.appendChild(wishText);
    return wishTextDiv;
}


const createFateBallOne = () => {
    const fateBallDiv = document.createElement("div");
    fateBallDiv.class = "fateball-normal-pull-container";
    fateBallDiv.style.display = "flex";
    fateBallDiv.style.alignItems = "center";

    const fateBallImg = document.createElement("img");
    fateBallImg.src = "/images/snail.png";
    fateBallImg.id = "normal-pull-fateball";
    fateBallImg.style.height = "20px";
    fateBallImg.style.marginRight = "6px";

    const fateBallText = document.createElement("span");
    fateBallText.innerText = "x 1";
    fateBallText.id = "normal-pull-fateball-text";
    fateBallText.style.fontFamily = "Genshin";
    fateBallText.style.color = "#A49A90";
    fateBallText.style.fontSize = "13px";

    fateBallDiv.append(fateBallImg, fateBallText);
    return fateBallDiv;
}
