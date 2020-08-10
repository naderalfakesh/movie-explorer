const APP_BAR_HEIGHT = 64;
const CORRECTION = 40;

const BackToTop = (value = null) => {
    let target = window.innerHeight / 2 - APP_BAR_HEIGHT - CORRECTION;
    if (value !== null) {
        target = value;
    }
    window.scrollTo({
        top: target,
        behavior: "smooth",
    });
};

export default BackToTop;
