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
        case "arguments":
            return Promise.resolve(main.arguments);
 
        case "file_exists":
            return file.exists(args.path);

        case "file_getInfo":
            return file.getInfo(args.path);

        case "file_rename":
            return file.rename(args.oldPath, args.newPath);

        case "file_readFolder":
            return file.readFolder(args.path);

        case "file_createFolder":
            return file.createFolder(args.path);

        case "file_deleteFolder":
            return file.deleteFolder(args.path);

        case "file_readFile":
            return file.readFile(args.path);
        
        case "file_readFileBinary":
            return file.readFileBinary(args.path, args.start, args.size);

        case "file_writeFile":
            return file.writeFile(args.path, args.data, args.append);

        case "file_writeFileBinary":
            return file.writeFileBinary(args.path, args.data, args.append);

        case "file_deleteFile":
            return file.deleteFile(args.path);

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