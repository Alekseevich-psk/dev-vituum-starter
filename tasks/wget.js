import scrape from "website-scraper";

import fs from "fs";
import { hideBin } from "yargs/helpers";
import appConfig from "./../app-config.js";

const wget = async () => {
    const pathToFolder = appConfig.pathWget;
    const url = hideBin(process.argv)[0];

    const options = {
        urls: [url],
        directory: pathToFolder,
        maxDepth: 1,
    };

    if (fs.existsSync(pathToFolder)) {
        fs.rmSync(pathToFolder, { recursive: true, force: true });
    }

    scrape(options).then((result) => {
        console.log("wget - success!");
    });
};

export default wget();
