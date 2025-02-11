import { defineConfig } from "vite";
import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

    const buildOptions = {
        minify: "terser",
        terserOptions: {
            format: {
                beautify: true,
                comments: true,
            },
        },
        rollupOptions: {
            output: {
                entryFileNames: `js/[name].js`,
                assetFileNames: `[ext]/[name].[ext]`,
            },
        },
    };

    const plugins = [
        vituum(),
        pug({
            root: "./src",
            options: {
                pretty: true,
                compileOptions: {
                    comments: true,
                },
            },
        }),
    ];

    return {
        plugins: plugins,
        build: buildOptions,
    };
});
