import {Swiper as SwiperModule} from "swiper";
const Swiper = ((window as any).Swiper = SwiperModule);

import { Pagination, Navigation, Autoplay } from "swiper/modules";

(() => {
    const wrappers = document.querySelectorAll(".slider") as NodeList;
    if (wrappers.length === 0) return;

    wrappers.forEach((wrapper) => {
        const elWrap = wrapper as HTMLElement;

        const slider: HTMLElement | null = elWrap.querySelector(".swiper-container");
        const elPagination: HTMLElement | null = elWrap.querySelector(".swiper-pagination");
        const btnPrev: HTMLElement | null = elWrap.querySelector(".sl-arrows__arrow--prev");
        const btnNext: HTMLElement | null = elWrap.querySelector(".sl-arrows__arrow--next");

        if (slider !== null) {
            new Swiper(slider, {
                slidesPerView: "auto",
                modules: [Pagination, Navigation, Autoplay],
                // mousewheel: true,
                navigation: {
                    prevEl: btnPrev,
                    nextEl: btnNext,
                },
                pagination: {
                    el: elPagination,
                    type: "bullets",
                },
            });
        }
    });
})();
