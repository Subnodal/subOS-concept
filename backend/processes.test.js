/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

namespace("com.subnodal.subos.backend.processes.test", function(exports) {
    var subTest = require("com.subnodal.subtest");
    var processes = require("com.subnodal.subos.backend.processes");

    const TEST_PACKAGE_IDENTIFIER = "com.subnodal.subos.meta.testprocess";
    const TEST_PACKAGE_CODE = `
        console.log("Hello, world!");
    `;

    exports.generateArtefacts = function() {
        return system.execute("file_exists", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`}).then(function(exists) {
            var cleanUpPromise = Promise.resolve();

            if (exists) {
                console.log("Process package artefact exists, so it will be regenerated");

                cleanUpPromise = system.execute("file_deleteFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`});
            }

            return cleanUpPromise.then(function() {
                return system.execute("file_createFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`});
            }).then(function() {
                return system.execute("file_createFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}/0`});
            }).then(function() {
                return system.execute("file_writeFile", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}/0/subpack.json`, data: JSON.stringify({
                    identifier: TEST_PACKAGE_IDENTIFIER,
                    version: "0.1.0",
                    versionNumber: 0,
                    modules: [
                        "main.js"
                    ]
                })});
            }).then(function() {
                return system.execute("file_writeFile", {
                    path: `/packages/${TEST_PACKAGE_IDENTIFIER}/0/main.js`,
                    data: TEST_PACKAGE_CODE
                })
            });
        }).catch(function(e) {
            console.error(e);

            return Promise.reject();
        });
    };

    exports.cleanUp = function() {
        return system.execute("file_deleteFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`});
    };

    var createProcessSuccess = new subTest.Test(function() {
        new processes.Process(TEST_PACKAGE_IDENTIFIER);
    }).shouldRun();

    var loadProcessSuccess = new subTest.Test(function() {
        var process = new processes.Process(TEST_PACKAGE_IDENTIFIER);

        return process.load();
    }).shouldResolve().after(createProcessSuccess);

    var startProcessSuccess = new subTest.Test(function() {
        var process = new processes.Process(TEST_PACKAGE_IDENTIFIER);

        return process.load().then(function() {
            process.start();
        });
    }).shouldResolve().after(loadProcessSuccess);

    var stopProcessSuccess = new subTest.Test(function() {
        var process = new processes.Process(TEST_PACKAGE_IDENTIFIER);

        return process.load().then(function() {
            process.start();
            process.stop();
        });
    }).shouldResolve().after(startProcessSuccess);

    exports.tests = {
        createProcessSuccess,
        loadProcessSuccess,
        startProcessSuccess,
        stopProcessSuccess
    };
});