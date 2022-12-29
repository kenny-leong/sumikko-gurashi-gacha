export const create10PullBtn = () => {
    const pullBtnContainer = document.createElement('div');
    pullBtnContainer.className = "pull-btn-x10";
    pullBtnContainer.style.display = "flex";
    pullBtnContainer.style.flexDirection = "column";
    pullBtnContainer.style.alignItems = "center";
    pullBtnContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    pullBtnContainer.style.border = 'solid black 1px';
    pullBtnContainer.style.borderRadius = "25px";

    const wishText = createWishBtnText();

}

const createWishBtnText = () => {
    const wishTextDiv = document.createElement("div");
    wishTextDiv.className = "wish-text-div";

    const wishText = document.createElement("p");
    wishText.innerText = "Wish x10";
    wishText.id = "wish-btn-text";
    wishText.style.fontFamily = "Genshin";
    wishText.style.color = "white";
    wishText.fontSize = "20px";

    wishTextDiv.appendChild(wishText);
    return wishTextDiv;
}


const createFateBall10 = () => {
    const fateBallDiv = document.createElement("div");
    fateBallDiv.class = "fateball-10-div";

    const fateBallImg = document.createElement("img");
    fateBallImg.src = "/images/fate-ball.png";
    fateBallImg.height = "30px";


}
