export const createBanner = () => {
    const bannerContainer = document.createElement("div");
    bannerContainer.className = 'banner-container';
    bannerContainer.style.display = 'flex';
    bannerContainer.style.alignItems = 'center';
    bannerContainer.style.justifyContent = 'center';
    bannerContainer.style.flexGrow = "1";

    const banner = document.createElement("img");
    banner.src = "/images/reign-of-ice-banner.png";
    banner.style.marginTop = "50px";
    banner.style.width = "50%";
    banner.style.boxShadow = `0 0 10px 5px rgba(3, 138, 255, 0.5)`

    banner.addEventListener("mouseenter", () => {
        banner.style.transform = "scale(1.01)";
      });
    banner.addEventListener("mouseleave", () => {
        banner.style.transform = "scale(1)";
    });

    bannerContainer.appendChild(banner);
    document.body.appendChild(bannerContainer);


}
