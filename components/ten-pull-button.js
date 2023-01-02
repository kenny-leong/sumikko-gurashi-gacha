export const create10PullBtn = () => {
    const pullBtnContainer = document.createElement('div');
    pullBtnContainer.className = "pull-btn-x10";
    pullBtnContainer.style.display = "flex";
    pullBtnContainer.style.flexDirection = "column";
    pullBtnContainer.style.alignItems = "center"
    pullBtnContainer.style.width = "200px"
    pullBtnContainer.style.height = "50px";
    pullBtnContainer.style.backgroundColor = "#FFFFFF";
    pullBtnContainer.style.border = 'solid #A49A90 2px';
    pullBtnContainer.style.borderRadius = "25px";
    pullBtnContainer.style.marginLeft = "15px";

    pullBtnContainer.addEventListener("mouseenter", () => {
        pullBtnContainer.style.transform = "scale(1.02)";
      });
    pullBtnContainer.addEventListener("mouseleave", () => {
        pullBtnContainer.style.transform = "scale(1)";
    });

    pullBtnContainer.addEventListener("click", tenPullPopup);

    const wishText = createWishBtnText();
    const fateBallDiv = createFateBall10();

    pullBtnContainer.append(wishText, fateBallDiv);

    return pullBtnContainer;
}

function playSoundEffect() {
    const audio = document.createElement("audio");
    audio.id = "pull-effect";
    audio.src = "/audio/pull-effect.m4a";
    audio.play();
}

function tenPull() {
    const pullDiv = document.createElement("div");
    pullDiv.style.position = "fixed";
    pullDiv.style.backgroundColor = "#FFFAA0";
    pullDiv.style.top = "0";
    pullDiv.style.left = "0";
    pullDiv.style.right = "0"
    pullDiv.style.bottom = "0";
    pullDiv.style.display = "flex";
    pullDiv.style.flexDirection = "column";
    pullDiv.style.alignItems = "center";
    pullDiv.style.overflow = "scroll";

    const topDiv = document.createElement("div");
    topDiv.style.display = "flex";
    topDiv.style.justifyContent = "space-evenly";
    topDiv.style.marginBottom = "20px";
    topDiv.style.flexWrap = "wrap";
    topDiv.style.marginTop = "10%"

    const bottomDiv = document.createElement("div");
    bottomDiv.style.display = "flex";
    bottomDiv.style.justifyContent = "space-evenly";
    bottomDiv.style.flexWrap = "wrap";

    for (let i=0; i<5; i++) {
        const imgDiv = document.createElement("div");
        imgDiv.style.display = "flex";
        imgDiv.style.flexDirection = "column";
        imgDiv.style.alignItems = "center";
        imgDiv.style.margin = "15px";
        imgDiv.style.backgroundColor = "white";
        imgDiv.style.borderRadius = "25px";
        imgDiv.style.paddingBottom = "20px";
        imgDiv.style.width = "200px";
        imgDiv.style.paddingTop = "20px";

        const generatedPull = choose();
        const imgSrc = chooseImg(generatedPull);

        const stars = document.createElement("img");
        if (imgSrc.includes("three")) {
            stars.src = "/images/3star.png";
        } else if (imgSrc.includes("four")) {
            stars.src = "/images/4star.png";
        } else if (imgSrc.includes("five")) {
            stars.src = "/images/5star.png";
        }
        stars.style.width = "30%";

        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.width = "200%";
        img.style.minHeight = "30px";
        img.style.maxWidth = "50px";
        img.style.maxHeight = "50px";

        const name = document.createElement("span");
        name.id = "pull-char-name";
        name.style.fontFamily = "Sumikko";
        name.innerText = generatedPull;
        name.style.fontSize = "2em";
        name.style.color = "pink";

        imgDiv.append(name, img, stars);
        topDiv.append(imgDiv);
    }

    for (let i=0; i<5; i++) {
        const imgDiv = document.createElement("div");
        imgDiv.style.display = "flex";
        imgDiv.style.flexDirection = "column";
        imgDiv.style.alignItems = "center";
        imgDiv.style.margin = "15px";
        imgDiv.style.backgroundColor = "white";
        imgDiv.style.borderRadius = "25px";
        imgDiv.style.paddingBottom = "20px";
        imgDiv.style.width = "200px";
        imgDiv.style.paddingTop = "20px";


        const generatedPull = choose();
        const imgSrc = chooseImg(generatedPull);

        const stars = document.createElement("img");
        if (imgSrc.includes("three")) {
            stars.src = "/images/3star.png";
        } else if (imgSrc.includes("four")) {
            stars.src = "/images/4star.png";
        } else if (imgSrc.includes("five")) {
            stars.src = "/images/5star.png";
        }
        stars.style.width = "30%";


        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.width = "200%";
        img.style.minHeight = "30px";
        img.style.maxWidth = "50px";
        img.style.maxHeight = "50px";


        const name = document.createElement("span");
        name.id = "pull-char-name";
        name.style.fontFamily = "Sumikko";
        name.innerText = generatedPull;
        name.style.fontSize = "2em";
        name.style.color = "pink";

        imgDiv.append(name, img, stars);
        bottomDiv.append(imgDiv);
    }

    pullDiv.append(topDiv, bottomDiv);
    document.body.appendChild(pullDiv);
}

export function onePull() {
    const imgDiv = document.createElement("div");
    imgDiv.id = "pull-img-div";
    imgDiv.style.position = "fixed";
    imgDiv.style.top = "0";
    imgDiv.style.left = "0";
    imgDiv.style.right = "0"
    imgDiv.style.bottom = "0";
    imgDiv.style.display = "flex";
    imgDiv.style.flexDirection = "column";
    imgDiv.style.alignItems = "center";
    imgDiv.style.justifyContent = "center";
    imgDiv.style.padding = "100px";
    imgDiv.style.backgroundColor = "#FFFAA0";
    imgDiv.style.paddingTop = "15px";
    imgDiv.style.paddingBottom = "15px";

    const generatedPull = choose();
    const imgSrc = chooseImg(generatedPull);

    const img = document.createElement("img");
    img.src = imgSrc;
    img.id = "generated-img-id";
    img.style.width = "300%";
    img.style.maxWidth = "300px";
    img.style.borderRadius = "30px";
    img.style.padding = "20px";
    img.style.backgroundColor = "white";

    const name = document.createElement("h1");
    name.id = "pull-char-name";
    name.style.fontFamily = "Sumikko";
    name.innerText = generatedPull;
    name.style.fontSize = "4em";
    name.style.color = "pink";


    imgDiv.append(name, img);
    document.body.appendChild(imgDiv);
}



function chooseImg(character) {
    if (character == 'penguin-real') {
        return 'pull-characters/fiveStar/penguin-real.webp';
    } else if (character == 'sumi') {
        return 'pull-characters/fiveStar/sumi.jpeg';
    } else if (character == 'neko-gray') {
        return 'pull-characters/fiveStar/neko-gray.webp';
    } else if (character == 'satou') {
        return 'pull-characters/fiveStar/satou.webp';
    } else if (character == 'tokage-real') {
        return 'pull-characters/fiveStar/tokage-real.webp';
    } else if (character == 'harisenbon') {
        return 'pull-characters/fiveStar/harisenbon.webp';
    } else if (character == 'fukuro') {
        return 'pull-characters/fiveStar/fukuro.webp';
    } else if (character == "shirokuma") {
        return 'pull-characters/fourStar/shirokuma.webp';
    } else if (character == "tonkatsu") {
        return 'pull-characters/fourStar/tonkatsu.webp';
    } else if (character == "penguin-?") {
        return 'pull-characters/fourStar/penguin-question.webp';
    } else if (character == "neko-tora") {
        return 'pull-characters/fourStar/neko-tora.webp';
    } else if (character == "tokage") {
        return 'pull-characters/fourStar/tokage.webp';
    } else if (character == "furoshiki") {
        return 'pull-characters/threeStar/furoshiki.png';
    } else if (character == "zassou") {
        return 'pull-characters/threeStar/zassou.webp';
    } else if (character == "ebi") {
        return 'pull-characters/threeStar/ebi.webp';
    } else if (character == "tapioca") {
        return 'pull-characters/threeStar/tapioca.webp';
    } else if (character == "hokori") {
        return 'pull-characters/threeStar/hokori.webp';
    } else if (character == "suzume") {
        return 'pull-characters/threeStar/suzume.webp';
    } else if (character == "slug") {
        return 'pull-characters/threeStar/slug.webp';
    } else if (character == "obake") {
        return 'pull-characters/threeStar/obake.webp';
    } else if (character == "yama") {
        return 'pull-characters/threeStar/yama.webp';
    } else if (character == "mogura") {
        return 'pull-characters/threeStar/mogura.webp';
    } else if (character == "wata") {
        return 'pull-characters/threeStar/wata.webp';
    }
}

function choose() {
    const fiveStar = ["penguin-real", "sumi", "neko-gray", "satou", "tokage-real", "harisenbon", "fukuro"];
    const fourStar = ["shirokuma", "tonkatsu", "penguin-?", "neko-tora", "tokage"];
    const threeStar = ["furoshiki", "zassou", "ebi", "tapioca", "hokori", "suzume", "slug", "obake", "yama", "mogura", "wata"];

    const allChars = [...fiveStar, ...fourStar, ...threeStar];

    //generate random num btwn 0-1;
    const randomNum = Math.random();

    //generate probabilities
    const chanceNums = [];
    const realPenguinChanceUp = 0.016;
    chanceNums.push(realPenguinChanceUp)

    for (let i=1; i<fiveStar.length; i++) {
        chanceNums.push(0.006);
    }

    for (let i=0; i<fourStar.length; i++) {
        chanceNums.push(0.025);
    }

    for (let i=1; i<threeStar.length; i++) {
        chanceNums.push(0.0747)
    }
    //adds total probability percentage to 100%
    chanceNums.push(0.076);


    let runningTotal = 0;
    for (let i=0; i<allChars.length; i++) {
        runningTotal += chanceNums[i];
        if (randomNum < runningTotal) {
            return allChars[i]
        }
    }
}

export function onePullPopup() {
    const animationDiv = document.createElement("div");
    animationDiv.id = "animation-div";
    animationDiv.style.display = "flex";
    animationDiv.style.flexDirection = "row";
    animationDiv.style.justifyContent = "center";
    animationDiv.style.alignItems = "center";
    animationDiv.style.position = 'absolute';
    animationDiv.style.top = '0';
    animationDiv.style.left = '0';
    animationDiv.style.width = '100%';
    animationDiv.style.height = "100%";

    const animation = document.createElement("video");
    animation.src = "/pull-videos/pull-animation.mp4";
    animation.id = "animation-video";
    animation.style.objectFit = "fill";
    animation.style.width = "100%";
    animation.style.height = "100%";
    animation.addEventListener('ended', function() {
        // Hide the video element
        animationDiv.remove();
        playSoundEffect();
        onePull();
      });

    animationDiv.appendChild(animation);
    document.body.appendChild(animationDiv);

    animation.play();
}

function tenPullPopup() {
    const animationDiv = document.createElement("div");
    animationDiv.id = "animation-div";
    animationDiv.style.display = "flex";
    animationDiv.style.flexDirection = "row";
    animationDiv.style.justifyContent = "center";
    animationDiv.style.alignItems = "center";
    animationDiv.style.position = 'absolute';
    animationDiv.style.top = '0';
    animationDiv.style.left = '0';
    animationDiv.style.width = '100%';
    animationDiv.style.height = "100%";

    const animation = document.createElement("video");
    animation.src = "/pull-videos/pull-animation.mp4";
    animation.id = "animation-video";
    animation.style.objectFit = "fill";
    animation.style.width = "100%";
    animation.style.height = "100%";
    animation.addEventListener('ended', function() {
        // Hide the video element
        animationDiv.remove();
        playSoundEffect();
        tenPull();
      });

    animationDiv.appendChild(animation);
    document.body.appendChild(animationDiv);

    animation.play();
}


const createWishBtnText = () => {
    const wishTextDiv = document.createElement("div");
    wishTextDiv.className = "wish-text-div";
    wishTextDiv.style.marginBottom = "5px";
    wishTextDiv.style.marginTop = "3px";


    const wishText = document.createElement("span");
    wishText.innerText = "Wish x10";
    wishText.id = "wish-btn-text";
    wishText.style.fontFamily = "Sumikko";
    wishText.style.color = "#A49A90";
    wishText.style.fontSize = "15px";

    wishTextDiv.appendChild(wishText);
    return wishTextDiv;
}


const createFateBall10 = () => {
    const fateBallDiv = document.createElement("div");
    fateBallDiv.class = "fateball-10-div";
    fateBallDiv.style.display = "flex";
    fateBallDiv.style.alignItems = "center";

    const fateBallImg = document.createElement("img");
    fateBallImg.src = "/images/snail.png";
    fateBallImg.id = "10-pull-fateball";
    fateBallImg.style.height = "20px";
    fateBallImg.style.marginRight = "6px";

    const fateBallText = document.createElement("span");
    fateBallText.innerText = "x 10";
    fateBallText.id = "10-pull-text";
    fateBallText.style.fontFamily = "Genshin";
    fateBallText.style.color = "red";
    fateBallText.style.fontSize = "13px";

    fateBallDiv.append(fateBallImg, fateBallText);
    return fateBallDiv;
}
