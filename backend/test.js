/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

namespace("com.subnodal.subos.backend.test", function(exports) {
    var subTest = require("com.subnodal.subtest");

    var tests = {};
    var artefactGenerators = [];
    var cleanUpListeners = [];

    function addNamespaceTests(namespace) {
        var namespaceTests = require(namespace).tests;

        for (var test in namespaceTests) {
            tests[namespace.replace(/\./g, "_") + "__" + test] = namespaceTests[test];
        }

        if (typeof(require(namespace).generateArtefacts) == "function") {
            artefactGenerators.push(require(namespace).generateArtefacts);
        }

        if (typeof(require(namespace).cleanUp) == "function") {
            cleanUpListeners.push(require(namespace).cleanUp);
        }
    }

    // Place tests here ─ each test package should be invoked through `addNamespaceTests`
    addNamespaceTests("com.subnodal.subos.backend.packages.test");
    addNamespaceTests("com.subnodal.subos.backend.processes.test");

    window.addEventListener("load", function() {
        system.execute("arguments").then(function(args) {
            if (!args.test) {
                return;
            }

            subTest.registerUpdateCallback(function(tests) {
                var passedTests = 0;
                var totalTests = 0;

                for (var test in tests) {
                    tests[test].passCondition.passed && passedTests++;
                    totalTests++;
                }

                if (passedTests == totalTests) {
                    // We're done here, let's clean up

                    cleanUpListeners.forEach((i) => i());

                    console.log("Began cleaning up all tests");
                }
            });

            Promise.all(artefactGenerators.map((i) => i())).then(function() {
                console.log("Generated artefacts, now ready to test");

                subTest.runTestsOnWeb(tests);
            });
        });
    });
});