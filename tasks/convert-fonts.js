"use strict";

import fs from "fs";
import path from "path";

import appConfig from "./../app-config.js";
import ttf2woff from "ttf2woff";
import ttf2woff2 from "ttf2woff2";

const ttfToWoff = async () => {
    fs.readdir(appConfig.pathFonts.ttf, (err, files) => {
        files.forEach((file) => {
            if (path.extname(file).toLowerCase() === ".ttf") {
                const ttfBuffer = fs.readFileSync(appConfig.pathFonts.ttf + file);

                fs.writeFileSync(
                    appConfig.pathFonts.woff + file.replace(".ttf", ".woff"),
                    ttf2woff(ttfBuffer)
                );

                fs.writeFileSync(
                    appConfig.pathFonts.woff + file.replace(".ttf", ".woff2"),
                    ttf2woff2(file)
                );
            }
        });

        if (err) console.log(err);
    });
};

export default ttfToWoff();
