export const create10PullBtn = () => {
    const pullBtnContainer = document.createElement('div');
    pullBtnContainer.className = "pull-btn-x10";
    pullBtnContainer.style.display = "flex";
    pullBtnContainer.style.flexDirection = "column";
    pullBtnContainer.style.alignItems = "center"
    pullBtnContainer.style.width = "200px"
    pullBtnContainer.style.height = "50px";
    pullBtnContainer.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    pullBtnContainer.style.border = 'solid black 1px';
    pullBtnContainer.style.borderRadius = "25px";

    const wishText = createWishBtnText();
    const fateBallDiv = createFateBall10();

    pullBtnContainer.append(wishText, fateBallDiv);

    const rightFooter = document.getElementById("right-footer-container");

    document.body.appendChild(pullBtnContainer);
}

const createWishBtnText = () => {
    const wishTextDiv = document.createElement("div");
    wishTextDiv.className = "wish-text-div";
    wishTextDiv.style.marginBottom = "5px";
    wishTextDiv.style.marginTop = "3px";


    const wishText = document.createElement("span");
    wishText.innerText = "Wish x10";
    wishText.id = "wish-btn-text";
    wishText.style.fontFamily = "Genshin";
    wishText.style.color = "#A49A90";
    wishText.style.fontSize = "13px";

    wishTextDiv.appendChild(wishText);
    return wishTextDiv;
}


const createFateBall10 = () => {
    const fateBallDiv = document.createElement("div");
    fateBallDiv.class = "fateball-10-div";
    fateBallDiv.style.display = "flex";
    fateBallDiv.style.alignItems = "center";



    const fateBallImg = document.createElement("img");
    fateBallImg.src = "/images/fate-ball.png";
    fateBallImg.id = "10-pull-fateball";
    fateBallImg.style.height = "20px";
    fateBallImg.style.marginRight = "10px";

    const fateBallText = document.createElement("span");
    fateBallText.innerText = "x 10";
    fateBallText.id = "10-pull-text";
    fateBallText.style.fontFamily = "Genshin";
    fateBallText.style.color = "red";
    fateBallText.style.fontSize = "13px";

    fateBallDiv.append(fateBallImg, fateBallText);
    return fateBallDiv;
}
