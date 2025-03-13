(function () {
    const preloader = document.querySelector(".preloader");
    if (!preloader) return;

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 1000);
    });
})();
