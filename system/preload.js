/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

const {contextBridge, ipcRenderer} = require("electron");

var commandCallbackQueue = {};

function generateKey(length = 16, digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_") {
    var key = "";

    for (var i = 0; i < length; i++) {
        key += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return key;
};

ipcRenderer.on("fromSystem", function(event, data) {
    if (data.error) {
        commandCallbackQueue[data.id].reject(data.error);
    }

    commandCallbackQueue[data.id].resolve(data.response);

    delete commandCallbackQueue[data.id];
});

contextBridge.exposeInMainWorld("system", {
    execute: function(command, args) {
        return new Promise(function(resolve, reject) {
            var generatedKey = generateKey();

            ipcRenderer.send("toSystem", {
                id: generatedKey,
                command,
                arguments: args
            });

            commandCallbackQueue[generatedKey] = {resolve, reject};
        });
    }
});