export const createGemContainer = () => {
    //create gem container
    const gemContainer = document.createElement("div");
    gemContainer.className = "gem-container";
    gemContainer.style.display = "inline-flex";
    gemContainer.style.alignItems = "center";
    gemContainer.style.backgroundColor = "rgba(0, 0, 0, 0.50)"
    gemContainer.style.border = "solid black 1px"
    gemContainer.style.borderBottomWidth = "0px"
    gemContainer.style.borderRadius = "25px";
    gemContainer.style.paddingLeft = "20px";
    gemContainer.style.paddingRight = "20px";

    const startingGems = createNumberDisplay();
    const gemImg = createGemImg();
    const plusBtn = createBtn();

    gemContainer.append(gemImg, startingGems, plusBtn);

    const headerContent = document.getElementById("header-content");
    headerContent.appendChild(gemContainer);
}

const createNumberDisplay = () => {
    const numberDiv = document.createElement("div");
    numberDiv.className = "number-div";
    numberDiv.style.marginLeft = "5px";
    numberDiv.style.marginRight = "10px";

    const number = document.createElement("p");
    number.innerText = "2000";
    number.id = "number";
    number.style.fontFamily = `Ubuntu`
    number.style.color = "white";
    number.style.fontSize = "20px"

    numberDiv.appendChild(number);
    return numberDiv;
}

const createGemImg = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    const primogem = document.createElement("img");
    primogem.src = "/images/primogem.png";
    primogem.style.height = "25px";

    imgContainer.appendChild(primogem);
    return imgContainer;
}

const createBtn = () => {
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const plusBtn = document.createElement("img");
    plusBtn.src = "/images/add.png";
    plusBtn.style.height = "35px";

    btnContainer.appendChild(plusBtn);
    return btnContainer;
}
