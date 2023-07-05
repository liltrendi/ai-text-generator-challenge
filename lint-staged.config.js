module.exports = {
    // this will check Typescript files
    "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

    // This will lint and format TypeScript and                                             //JavaScript files
    "**/*.(ts|tsx|js)": filenames => [
        `yarn eslint --fix ${filenames.join(" ")}`,
        `yarn prettier --write ${filenames.join(" ")}`,
        `npm test -- --watchAll=false --bail ./src`,
    ],

    // this will Format MarkDown and JSON
    "**/*.(md|json)": filenames =>
        `yarn prettier --write ${filenames.join(" ")}`,
};
