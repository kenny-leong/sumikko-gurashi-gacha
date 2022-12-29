export const createBanner = () => {
    const bannerContainer = document.createElement("div");
    bannerContainer.className = 'banner-container';
    bannerContainer.style.display = 'flex';
    bannerContainer.style.alignItems = 'center';
    bannerContainer.style.justifyContent = 'center';

    const banner = document.createElement("img");
    banner.src = "/images/original.jpeg";
    banner.style.marginTop = "50px";
    banner.style.width = "50%";
    banner.style.height = "400px";
    banner.style.boxShadow = `0 0 10px 5px rgba(255, 204, 0, 0.5)`

    bannerContainer.appendChild(banner);
    document.body.appendChild(bannerContainer);


}
