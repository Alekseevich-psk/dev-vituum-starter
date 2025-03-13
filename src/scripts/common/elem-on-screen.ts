function isElementVisible(element: HTMLElement, threshold: number = 0): Promise<boolean> {
    return new Promise((resolve) => {
        
        let options = {
            root: null, // область видимости
            rootMargin: "0px",
            threshold: threshold, // порог пересечения
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                resolve(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(element);
    });
}

const sections: NodeList = document.querySelectorAll("[data-anim-section]");
sections.forEach((section) => {
    const elem = section as HTMLElement;

    isElementVisible(elem).then((isVisible) => {
        if (isVisible) {
            elem.classList.add("start-anim");
        }
    });
});

export default isElementVisible;
