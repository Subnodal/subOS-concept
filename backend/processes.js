/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

// @namespace com.subnodal.subos.backend.processes
namespace("com.subnodal.subos.backend.processes", function(exports) {
    var users = require("com.subnodal.subos.backend.users");
    var packages = require("com.subnodal.subos.backend.packages");

    /*
        @name processList
        @type var <[Process]>
        A list containing all running and stopped processes. Processes can be
        accessed with their Process ID (PID) by their indexes.
    */
    exports.processList = [];

    /*
        @name Process
        @type class
        A process under a specific user which runs application code.
        @param packageIdentifier <String> The identifier of the package to use when running this process
        @param userIdentifier <String> The identifier of the user who is running this process
        @param parentProcess <Number> The PID of the process which started this process, or `null` if running as a top-level process
    */
    /*
        @name Process.packageIdentifier
        @type prop <String>
    */
    /*
        @name Process.userIdentifier
        @type prop <String>
    */
    /*
        @name Process.parentProcess
        @type prop <Number | null>
    */
    /*
        @name Process.pid
        @type prop <Number>
        The PID of this process.
    */
    /*
        @name Process.running
        @type prop <Boolean>
        Whether this process is currently running or not.
    */
    /*
        @name Process.code
        @type prop <null | String>
        The package code to run for this process.
    */
    exports.Process = class {
        constructor(packageIdentifier, userIdentifier = users.SYSTEM_USER_IDENTIFIER, parentProcess = null) {
            this.packageIdentifier = packageIdentifier;
            this.userIdentifier = userIdentifier;
            this.parentProcess = parentProcess;

            this.pid = exports.processList.length;
            this.running = false;
            this.code = null;

            this.worker = null;

            exports.processList.push(this);
        }

        /*
            @name Process.load
            @type method
            Load or update the package code for this process.
            @returns <Promise> `Promise` which is resolved if the process package has been loaded
        */
        load(versionNumber = null, devDependencies = false, maxDependencyDepth) {
            var thisScope = this;

            return packages.bundlePackage(this.packageIdentifier, versionNumber, devDependencies, maxDependencyDepth).then(function(code) {
                thisScope.code = code;
            });
        }

        /*
            @name Process.start
            @type method
            Start this process and execute the package code.
        */
        start() {
            if (this.code == null) {
                throw new Error("Process must be loaded first before it is started");
            }

            if (typeof(this.code) != "string") {
                throw new TypeError("Process package code is not properly loaded");
            }

            var blob = new Blob([this.code], {type: "script/javascript"});

            this.worker = new Worker(URL.createObjectURL(blob));
            this.running = true;
        }

        /*
            @name Process.stop
            @type method
            Immediately stop this process. Any running code will be stopped.
        */
        stop() {
            this.worker.terminate();

            this.worker = null;
            this.running = false;
        }
    };
});
// @endnamespace