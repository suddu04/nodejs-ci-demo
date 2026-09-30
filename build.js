const fs = require("fs");

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

fs.copyFileSync(
    "src/index.js",
    "dist/app.js"
);

console.log("Build completed successfully");