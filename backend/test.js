/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

namespace("com.subnodal.subos.backend.test", function(exports) {
    var subTest = require("com.subnodal.subtest");

    var tests = {};

    function addNamespaceTests(namespace) {
        var namespaceTests = require(namespace).tests;

        for (var test in namespaceTests) {
            tests[namespace.replace(/\./g, "_") + "__" + test] = namespaceTests[test];
        }
    }

    // Place tests here ─ each test package should be invoked through `addNamespaceTests`
    addNamespaceTests("com.subnodal.subos.backend.packages.test");

    window.addEventListener("load", function() {
        system.execute("arguments").then(function(args) {
            if (!args.test) {
                return;
            }

            subTest.runTestsOnWeb(tests);
        })
    });
});