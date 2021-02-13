/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

const path = require("path");
const {app, protocol, BrowserWindow} = require("electron");
const minimist = require("minimist");

exports.arguments = minimist(process.argv);

app.on("ready", function() {
    // Register the os:// protocol for loading system files
    protocol.interceptFileProtocol("os", function(request, callback) {
        var url = request.url.substring(5);

        console.log(path.join(require.main.filename, url));

        callback({path: path.join(...require.main.filename.split("/").slice(0, require.main.filename.split("/").length - 2), url)});
    });

    exports.mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        fullscreenable: true,
        webPreferences: {
            title: "subOS System Runtime",
            devTools: true
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