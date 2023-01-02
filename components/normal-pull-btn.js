import { openPopup } from "./ten-pull-button.js";

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

    pullBtnContainer.addEventListener("click", () => {
        openPopup();
    });

    const wishText = createNormalPullText();
    const fateBallDiv = createFateBallOne();

    pullBtnContainer.append(wishText, fateBallDiv);

    return pullBtnContainer;
}

export function selectImgPull() {
    const imgDiv = document.createElement("div");
    imgDiv.id = "pull-img-div";
    imgDiv.style.display = "flex";
    imgDiv.style.flexDirection = "row";
    imgDiv.style.justifyContent = "center";
    imgDiv.style.alignItems = "center";
    imgDiv.style.width = "500px";
    imgDiv.style.height = "500px";

    const generatedPull = choose();

    let sourceImg;


    const img = document.createElement("img");

}

function chooseImg(character) {
    if (character == 'penguin-real') {
        return
    }
}

export function choose() {
    const fiveStar = ["penguin-real", "sumi", "neko-gray", "satou", "tokage-real", "harisenbon", "fukuro"];
    const fourStar = ["shirokuma", "tonkatsu", "penguin-?", "neko-tora", "tokage"];
    const threeStar = ["furoshiki", "zassou", "ebi", "tapioca", "hokori", "suzume", "slug", "obake", "yama", "mogura", "wata"];

    const allChars = [...fiveStar, ...fourStar, ...threeStar];

    //generate random num btwn 0-1;
    const randomNum = Math.random();

    //generate probabilities
    const chanceNums = [];
    const realPenguinChanceUp = 0.016;
    chanceNums.push(realPenguinChanceUp)

    for (let i=1; i<fiveStar.length; i++) {
        chanceNums.push(0.006);
    }

    for (let i=0; i<fourStar.length; i++) {
        chanceNums.push(0.025);
    }

    for (let i=1; i<threeStar.length; i++) {
        chanceNums.push(0.0747)
    }
    //adds total probability percentage to 100%
    chanceNums.push(0.076);


    let runningTotal = 0;
    for (let i=0; i<allChars.length; i++) {
        runningTotal += chanceNums[i];
        if (randomNum < runningTotal) {
            return allChars[i]
        }
    }
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
