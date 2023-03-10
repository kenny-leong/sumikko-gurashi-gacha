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
    gemContainer.style.paddingTop = "5px";
    gemContainer.style.paddingBottom = "5px"

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

    const number = document.createElement("span");
    number.innerText = "1000";
    number.id = "number";
    number.style.marginLeft = "3px";
    number.style.marginRight = "5px";
    number.style.fontFamily = `Sumikko`
    number.style.color = "white";
    number.style.fontSize = "20px"
    number.style.fontWeight = "bolder";
    number.style.textShadow = "0 0 5px white";
    number.style.letterSpacing = "1px";

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
    plusBtn.style.marginTop = "3px";
    plusBtn.style.height = "24px";

    plusBtn.addEventListener("mouseenter", () => {
        plusBtn.style.transform = "scale(1.1)";
      });

    plusBtn.addEventListener("mouseleave", () => {
    plusBtn.style.transform = "scale(1)";
    });

    btnContainer.appendChild(plusBtn);
    return btnContainer;
}
