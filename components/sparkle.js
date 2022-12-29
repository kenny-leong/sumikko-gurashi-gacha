export const createSparkleContainer = () => {
    //create sparkle container
    const sparkleContainer = document.createElement("div");
    sparkleContainer.className = "sparkle-container";
    sparkleContainer.style.display = "inline-flex";
    sparkleContainer.style.alignItems = "center";
    sparkleContainer.style.marginLeft = "30px";

    const sparkleImg = createSparkleImg();
    const wishText = createWishDisplay();

    sparkleContainer.append(sparkleImg, wishText);

    const header = document.getElementById("main-header");
    header.appendChild(sparkleContainer);

}

const createSparkleImg = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "sparkle-div";

    const sparkle = document.createElement("img");
    sparkle.src = "/images/sparkle.png";
    sparkle.style.height = "30px";

    imgContainer.appendChild(sparkle);
    return imgContainer;
}

const createWishDisplay = () => {
    const wishDiv = document.createElement("div");
    wishDiv.className = "wish-div";

    const wish = document.createElement("p");
    wish.innerText = "Wish";
    wish.id = "wish-text";
    wish.style.fontFamily = "Ubuntu";
    wish.style.color = "white";
    wish.style.fontSize = "25px";
    wish.style.fontWeight = "bolder";

    wishDiv.appendChild(wish);
    return wishDiv;
}
