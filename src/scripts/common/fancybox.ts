import { Fancybox as FancyboxModule } from "@fancyapps/ui";
const Fancybox = ((window as any).Fancybox = FancyboxModule);

const ru = {
    CLOSE: "Закрыть",
    NEXT: "Далее",
    PREV: "Назад",
    ERROR: "Запрос не может быть выполнен. <br/> Пожалуйста попробуйте позже.",
    PLAY_START: "Начать слайдшоу",
    PLAY_STOP: "Пауза",
    FULL_SCREEN: "На весь экран",
    THUMBS: "Превью",
    DOWNLOAD: "Скачать",
    SHARE: "Поделиться",
    ZOOM: "Приблизить",
    TOGGLE_SLIDESHOW: "Переключить слайдшоу",
    TOGGLE_ZOOM_LEVEL: "Переключить уровень приближения",
    TOGGLE_FULL_SCREEN_MODE: "Переключить полноэкранное режим",
    TOGGLE_THUMBNAILS: "Переключить превью",
};

Fancybox.bind("[data-fancybox]", {
    l10n: ru,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    l10n: ru,
});