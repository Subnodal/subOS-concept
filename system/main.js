/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

const os = require("os");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const {app, protocol, BrowserWindow} = require("electron");
const minimist = require("minimist");

const communications = require("./communications");

exports.root = path.join("/", ...require.main.filename.split("/").slice(0, require.main.filename.split("/").length - 2));
exports.userFs = path.join(os.homedir(), "subOS");
exports.arguments = minimist(process.argv);

app.on("ready", function() {
    if (exports.arguments["user-fs"]) {
        exports.userFs = exports.arguments["user-fs"];
    }

    if (exports.arguments["reset"]) {
        if (fs.existsSync(exports.userFs)) {
            fs.rmdirSync(exports.userFs, {recursive: true});
        }
    } else if (!(exports.arguments["keep-changes"])) {
        fse.copySync(path.join(exports.root, "userfs"), exports.userFs);
    }

    // Register the os:// protocol for loading system files
    protocol.interceptFileProtocol("os", function(request, callback) {
        var url = request.url.substring(5);

        callback({path: path.join(exports.root, url)});
    });

    exports.mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        fullscreenable: true,
        webPreferences: {
            title: "subOS System Runtime",
            devTools: true,
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(exports.root, "system", "preload.js")
        },
        useContentSize: true
    });

    exports.mainWindow.removeMenu();
    exports.mainWindow.setMenuBarVisibility(false);

    exports.mainWindow.loadFile("backend/index.html");

    if (exports.arguments["debug-backend"]) {
        exports.mainWindow.webContents.openDevTools();
    }

    exports.mainWindow.on("closed", function() {
        exports.mainWindow = null;
    });
});

app.on("window-all-closed", function() {
    app.quit();
});