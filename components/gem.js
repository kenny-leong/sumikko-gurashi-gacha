export const createGemContainer = () => {
    //create gem container
    const gemContainer = document.createElement("div");
    gemContainer.className = "gem-container";
    gemContainer.style.display = "inline-flex";
    gemContainer.style.alignItems = "center";
    gemContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    gemContainer.style.border = "solid black 1px"
    gemContainer.style.borderRadius = "25px";
    gemContainer.style.paddingLeft = "15px";
    gemContainer.style.paddingRight = "20px";
    gemContainer.style.marginRight = "40px";

    const startingGems = createNumberDisplay();
    const gemImg = createGemImg();
    const plusBtn = createBtn();

    gemContainer.append(gemImg, startingGems, plusBtn);

    const headerContent = document.getElementById("right-header-container");
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
    number.style.marginLeft = "3px";
    number.style.marginRight = "5px";
    number.style.fontFamily = `Ubuntu`
    number.style.color = "white";
    number.style.fontSize = "20px"
    number.style.fontWeight = "bolder";

    numberDiv.appendChild(number);
    return numberDiv;
}

const createGemImg = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    const primogem = document.createElement("img");
    primogem.src = "/images/primogem.png";
    primogem.style.marginTop = "3px";
    primogem.style.height = "20px";

    imgContainer.appendChild(primogem);
    return imgContainer;
}

const createBtn = () => {
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const plusBtn = document.createElement("img");
    plusBtn.src = "/images/plus.png";
    plusBtn.style.marginTop = "2px";
    plusBtn.style.height = "33px";

    btnContainer.appendChild(plusBtn);
    return btnContainer;
}
