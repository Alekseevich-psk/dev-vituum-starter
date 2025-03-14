<p align="center">
  <a href="https://vituum.dev/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://avatars.githubusercontent.com/u/109584961" alt="Logo">
  </a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/vituum"><img src="https://img.shields.io/npm/v/vituum.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vituum.svg" alt="node compatility"></a>
</p>

# ⚡⚙️ Vituum

- ⚡ Vite Plugins
- 🚀️ Fast prototyping
- 💡 Template Engines
- ✉️ Email Templates

Small and fast static site generator for Vite

## 🪄 Запуск и работа

```sh
- git clone https://github.com/Alekseevich-psk/dev-vituum-starter.git
- pnpm i 
- pnpm run dev
- pnpm run build
```

## 🚩 Быстрое подключение шрифтов

-   Шрифты формата .ttf закидываем по адресу `"public/fonts/ttf/"`
-   Запускаем конвертацию в формат .woff(.woff2) `pnpm run ttfToWoff`
-   Подключаем шрифты в mixin scss `"public/styles/fonts.scss"` командой `pnpm run fontsInStyle`

## ❗️ WGET

-   Сверх простой асинхронный поиск удаленных файлов по протоколам http или https, вдохновленный wget js 
```js
    node tasks/wget url
```

## :point_right: Нюансы

-   Данную сборку использую для личных проектов, могут присутствовать наработки под быстрый старт проекта или тестовые модификации

## ⚠️ Сборка собрана на версии node.js - 23.0.0