/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

const {ipcMain} = require("electron");

const main = require("./main");
const file = require("./file");

function handleCommand(command, args) {
    switch (command) {        
        case "file_exists":
            return file.exists(args.path);

        case "file_getInfo":
            return file.getInfo(args.path);

        case "file_readFolder":
            return file.readFolder(args.path);

        default:
            return Promise.reject();
    }
}

ipcMain.on("toSystem", function(event, data) {
    handleCommand(data.command, data.arguments).then(function(response) {
        main.mainWindow.webContents.send("fromSystem", {
            id: data.id,
            response
        });
    }).catch(function(error) {
        main.mainWindow.webContents.send("fromSystem", {
            id: data.id,
            error
        });
    });
});