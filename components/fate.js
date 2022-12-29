export const createFateContainer = () => {
    const fateContainer = document.createElement("div");
    fateContainer.className = "fate-container";
    fateContainer.style.display = "inline-flex";
    fateContainer.style.alignItems = "center";
    fateContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    fateContainer.style.border = "solid black 2px";
    fateContainer.style.borderRadius = "25px";
    fateContainer.style.paddingLeft = "20px";
    fateContainer.style.paddingRight = "20px";
    fateContainer.style.marginRight = "20px";

    const amt = createNumberDisplay();
    const fateBall = createFateImg();

    fateContainer.append(fateBall, amt);

    const headerContent = document.getElementById("header-content");
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
    number.style.fontFamily = `Ubuntu`
    number.style.color = "white";
    number.style.fontSize = "20px"

    numberDiv.appendChild(number);
    return numberDiv;
}

const createFateImg = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "fate-img-container";

    const fateBall = document.createElement("img");
    fateBall.src = "/images/fate-ball.png";
    fateBall.style.height = "25px";
    imgContainer.appendChild(fateBall);
    return imgContainer;
}
