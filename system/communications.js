/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

const {ipcMain} = require("electron");

const main = require("./main");

function handleCommand(command, args) {
    return Promise.resolve("Hello!");
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