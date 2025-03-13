import { defineConfig } from "vite";
import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";
import path from "path";
import config from "./app-config";
import postcss from '@vituum/vite-plugin-postcss';

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    const buildOptions = {
        minify: "terser",
        terserOptions: {
            keep_fnames: true,
            keep_classnames: true,
            compress: {
                keep_classnames: true,
                keep_fnames: true,
            },
            mangle: true,
        },
        rollupOptions: {
            output: {
                entryFileNames: `js/[name].js`,
                assetFileNames: `[ext]/[name].[ext]`,
            },
        },
    };

    const plugins = [
        vituum({
            input: ["./src/styles/styles.scss", "./src/scripts/scripts.ts"],
        }),
        pug({
            root: "./src",
            options: {
                pretty: true,
                compileOptions: {
                    comments: true,
                },
            },
        }),
        postcss({
            autoprefixer: {
                overrideBrowserslist: ['last 6 versions', 'Android >= 4']
            }
        })
    ];

    return {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                },
            },
        },
        resolve: {
            alias: {
                ".pug": false,
                "~": path.resolve(__dirname, "src"),
                sections: path.resolve(__dirname, config.sections),
            },
            extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
        },
        server: {
            watch: {
                additionalPaths: (watcher) => {
                    watcher.add("src/**");
                },
            },
        },
        plugins: plugins,
        build: buildOptions,
    };
});
