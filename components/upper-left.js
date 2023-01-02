export const createLeftHeaderContent = () => {
    //create sparkle container
    const sparkleContainer = document.createElement("div");
    sparkleContainer.className = "sparkle-container";
    sparkleContainer.style.display = "inline-flex";
    sparkleContainer.style.alignItems = "center";
    sparkleContainer.style.marginLeft = "30px";
    sparkleContainer.style.marginTop = "20px";
    sparkleContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    sparkleContainer.style.borderRadius = "25px";
    sparkleContainer.style.paddingRight = "16px";
    sparkleContainer.style.paddingLeft = "16px";
    sparkleContainer.style.marginTop = "40px";

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
    sparkle.src = "/images/logo.webp";
    sparkle.style.height = "40px";

    sparkle.addEventListener("mouseenter", () => {
        sparkle.style.transform = "scale(3)";
    })

    sparkle.addEventListener("mouseleave", () => {
        sparkle.style.transform = "scale(1.0)";
    })

    imgContainer.appendChild(sparkle);
    return imgContainer;
}

const createWishDisplay = () => {
    const wishDiv = document.createElement("div");
    wishDiv.className = "wish-div";

    const wish = document.createElement("p");
    wish.innerText = "ねがいごとをする ( Make a wish )";
    wish.id = "wish-text";
    wish.style.marginLeft = "15px";
    wish.style.fontFamily = "Sumikko";
    wish.style.color = "#FC0";
    wish.style.fontSize = "17px";
    wish.style.textShadow = "#FC0 2px 0 10px";
    wish.style.letterSpacing = "2px";

    wish.addEventListener("mouseenter", () => {
        wish.style.color = "pink";
      });

    wish.addEventListener("mouseleave", () => {
        wish.style.color = "white";
    });

    wishDiv.appendChild(wish);
    return wishDiv;
}
