export const createFateContainer = () => {
    const fateContainer = document.createElement("div");
    fateContainer.className = "fate-container";
    fateContainer.style.display = "inline-flex";
    fateContainer.style.alignItems = "center";
    fateContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    fateContainer.style.border = "solid black 1px";
    fateContainer.style.borderRadius = "25px";
    fateContainer.style.paddingLeft = "20px";
    fateContainer.style.paddingRight = "10px";
    fateContainer.style.marginLeft = "20px";
    fateContainer.style.marginRight = "20px";

    const amt = createNumberDisplay();
    const fateBall = createFateImg();

    fateContainer.append(fateBall, amt);

    const headerContent = document.getElementById("right-header-container");
    headerContent.appendChild(fateContainer);

}

const createNumberDisplay = () => {
    const numberDiv = document.createElement("div");
    numberDiv.className = "number-div";
    numberDiv.style.marginLeft = "5px";
    numberDiv.style.marginRight = "10px";

    const number = document.createElement("p");
    number.innerText = "0";
    number.id = "number";
    number.style.marginLeft = "5px";
    number.style.fontFamily = `Genshin`;
    number.style.color = "white";
    number.style.fontSize = "20px";
    number.style.fontWeight = "bolder";
    number.style.textShadow = "0 0 5px white";

    numberDiv.appendChild(number);
    return numberDiv;
}

const createFateImg = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "fate-img-container";

    const fateBall = document.createElement("img");
    fateBall.className= "fate-ball"
    fateBall.src = "/images/fate-ball.png";
    fateBall.style.marginTop = "3px";
    fateBall.style.height = "30px";

    imgContainer.appendChild(fateBall);
    return imgContainer;
}
