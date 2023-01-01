export const createLeftHeaderContent = () => {
    //create sparkle container
    const sparkleContainer = document.createElement("div");
    sparkleContainer.className = "sparkle-container";
    sparkleContainer.style.display = "inline-flex";
    sparkleContainer.style.alignItems = "center";
    sparkleContainer.style.marginLeft = "30px";
    sparkleContainer.style.marginTop = "20px";
    sparkleContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    sparkleContainer.style.borderRadius = "25px";
    sparkleContainer.style.paddingRight = "16px";
    sparkleContainer.style.paddingLeft = "16px";

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
    sparkle.style.height = "50px";
    imgContainer.appendChild(sparkle);
    return imgContainer;
}

const createWishDisplay = () => {
    const wishDiv = document.createElement("div");
    wishDiv.className = "wish-div";

    const wish = document.createElement("p");
    wish.innerText = "願い事をする (Make a wish)";
    wish.id = "wish-text";
    wish.style.marginLeft = "25px";
    wish.style.fontFamily = "Genshin";
    wish.style.color = "white";
    wish.style.fontSize = "30px";
    wish.style.textShadow = "#FC0 1px 0 10px";
    wish.style.letterSpacing = "2px";

    wish.addEventListener("mouseenter", () => {
        wish.style.color = "lightpink";
      });

    wish.addEventListener("mouseleave", () => {
        wish.style.color = "white";
    });

    wishDiv.appendChild(wish);
    return wishDiv;
}
