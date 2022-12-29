export const createBanner = () => {
    const bannerContainer = document.createElement("div");
    bannerContainer.className = 'banner-container';
    bannerContainer.style.display = 'flex';
    bannerContainer.style.alignItems = 'center';
    bannerContainer.style.justifyContent = 'center';
    bannerContainer.style.flexGrow = "1";

    const banner = document.createElement("img");
    banner.src = "/images/original.jpeg";
    banner.style.marginTop = "50px";
    banner.style.width = "70%";
    banner.style.height = "100%";
    banner.style.boxShadow = `0 0 10px 5px rgba(255, 204, 0, 0.5)`

    banner.addEventListener("mouseenter", () => {
        banner.style.transform = "scale(1.01)";
      });
    banner.addEventListener("mouseleave", () => {
        banner.style.transform = "scale(1)";
    });

    bannerContainer.appendChild(banner);
    document.body.appendChild(bannerContainer);


}
