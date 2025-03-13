import { Fancybox as FancyboxModule } from "@fancyapps/ui";
const Fancybox = ((window as any).Fancybox = FancyboxModule);

const buttonsForOpenPopup = document.querySelectorAll('[data-popup="order-popup"]') as NodeList;

buttonsForOpenPopup.forEach(button => {
    (button as HTMLElement).addEventListener("click", () => {
        Fancybox.show([{ src: "#order-popup", type: "inline" }]);
    });
});