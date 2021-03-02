/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

namespace("com.subnodal.subos.backend.packages.test", function(exports) {
    var subTest = require("com.subnodal.subtest");
    var packages = require("com.subnodal.subos.backend.packages");

    const TEST_PACKAGE_IDENTIFIER = "com.subnodal.subos.meta.testpackage";
    const TEST_PACKAGE_VERNUM_OLDEST = 0;
    const TEST_PACKAGE_VERNUM_INVALID_MANIFEST = 1;
    const TEST_PACKAGE_VERNUM_LATEST = 2;

    function createTestPackageContents(versionNumber) {
        switch (versionNumber) {
            case TEST_PACKAGE_VERNUM_OLDEST:
                return system.execute("file_writeFile", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}/${versionNumber}/subpack.json`, data: JSON.stringify({
                    identifier: TEST_PACKAGE_IDENTIFIER,
                    version: "0.1.0",
                    versionNumber
                })});

            case TEST_PACKAGE_VERNUM_INVALID_MANIFEST:
                return system.execute("file_writeFile", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}/${versionNumber}/subpack.json`, data: `Invalid!`});

            case TEST_PACKAGE_VERNUM_LATEST:
                return system.execute("file_writeFile", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}/${versionNumber}/subpack.json`, data: JSON.stringify({
                    identifier: TEST_PACKAGE_IDENTIFIER,
                    version: "0.1.2",
                    versionNumber
                })});
        }
    }

    exports.generateArtefacts = function() {
        return system.execute("file_exists", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`}).then(function(exists) {
            var cleanUpPromise = Promise.resolve();

            if (exists) {
                console.log("Package artefacts exist, so they will be regenerated");

                cleanUpPromise = system.execute("file_deleteFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`});
            } else {}

            cleanUpPromise = cleanUpPromise.then(function() {
                return system.execute("file_createFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`});
            })

            return cleanUpPromise.then(() => Promise.all([
                TEST_PACKAGE_VERNUM_OLDEST,
                TEST_PACKAGE_VERNUM_INVALID_MANIFEST,
                TEST_PACKAGE_VERNUM_LATEST
            ].map(function(versionNumber) {
                return system.execute("file_createFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}/${versionNumber}`}).then(function() {
                    return createTestPackageContents(versionNumber);
                });
            })));
        });
    };

    exports.cleanUp = function() {
        return system.execute("file_deleteFolder", {path: `/packages/${TEST_PACKAGE_IDENTIFIER}`});
    };

    var namespaceIdentifierValidationBasic = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.mypackage")).shouldEqual(true);
    var namespaceIdentifierValidationMultiLevel = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.mysubdomain.mypackage.myfeature")).shouldEqual(true);
    var namespaceIdentifierValidationWithHyphens = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example-site.my-package")).shouldEqual(true);
    var namespaceIdentifierValidationEmpty = new subTest.Test(() => packages.namespaceIdentifierIsValid("")).shouldEqual(false);
    var namespaceIdentifierValidationTooLong = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.idjustliketointerjectforamomentwhatyourereferringtoaslinuxisinfactgnuslashlinuxorasiverecentlytakentocallingitgnupluslinux")).shouldEqual(false);
    var namespaceIdentifierValidationInvalidChars = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.my_package")).shouldEqual(false);
    var namespaceIdentifierValidationUpperCaseChars = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.MYPACKAGE")).shouldEqual(false);
    var namespaceIdentifierValidationConsecutiveFullStops = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example..mypackage")).shouldEqual(false);
    var namespaceIdentifierValidationConsecutiveHyphens = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.my--package")).shouldEqual(false);
    var namespaceIdentifierValidationBeginningFullStop = new subTest.Test(() => packages.namespaceIdentifierIsValid(".com.example.mypackage")).shouldEqual(false);
    var namespaceIdentifierValidationEndingFullStop = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.mypackage.")).shouldEqual(false);
    var namespaceIdentifierValidationBeginningHyphen = new subTest.Test(() => packages.namespaceIdentifierIsValid("-com.example.mypackage")).shouldEqual(false);
    var namespaceIdentifierValidationEndingHyphen = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.mypackage-")).shouldEqual(false);
    var namespaceIdentifierValidationConsecutiveFullStopHyphen = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.-mypackage")).shouldEqual(false);
    var namespaceIdentifierValidationConsecutiveHyphenFullStop = new subTest.Test(() => packages.namespaceIdentifierIsValid("com.example.mypackage-")).shouldEqual(false);
    var namespaceIdentifierValidationAtLeastTopLevel = new subTest.Test(() => packages.namespaceIdentifierIsValid("example")).shouldEqual(false);

    // TODO: Write tests for selecting package versions

    var getPackagePathSuccess = new subTest.Test(function() {
        return packages.getPackagePath(TEST_PACKAGE_IDENTIFIER);
    }).shouldResolveTo(`/packages/${TEST_PACKAGE_IDENTIFIER}/${TEST_PACKAGE_VERNUM_LATEST}`).after(namespaceIdentifierValidationBasic);

    var getPackagePathInvalid = new subTest.Test(function() {
        return packages.getPackagePath("com.example.my_package");
    }).shouldReject().after(namespaceIdentifierValidationBasic);

    var getPackagePathModule = new subTest.Test(function() {
        return packages.getPackagePath(TEST_PACKAGE_IDENTIFIER + ".testmodule");
    }).shouldResolveTo(`/packages/${TEST_PACKAGE_IDENTIFIER}/${TEST_PACKAGE_VERNUM_LATEST}`).after(namespaceIdentifierValidationBasic);

    var getPackagePathHighLevelModule = new subTest.Test(function() {
        return packages.getPackagePath(TEST_PACKAGE_IDENTIFIER + ".testmodule.anotherlevel.highlevel.reallyhighlevel");
    }).shouldResolveTo(`/packages/${TEST_PACKAGE_IDENTIFIER}/${TEST_PACKAGE_VERNUM_LATEST}`).after(namespaceIdentifierValidationBasic);

    var getPackagePathNonexistent = new subTest.Test(function() {
        return packages.getPackagePath("com.subnodal.subos.meta.nonexistentpackage");
    }).shouldReject().after(getPackagePathSuccess);

    var getPackageManifestSuccess = new subTest.Test(function() {
        return packages.getPackageManifest(TEST_PACKAGE_IDENTIFIER).then(function(manifest) {
            return Promise.resolve(manifest.identifier);
        });
    }).shouldResolveTo(TEST_PACKAGE_IDENTIFIER).after(getPackagePathSuccess);

    var getPackageManifestNonexistent = new subTest.Test(function() {
        return packages.getPackageManifest("com.example.nonexistentpackage");
    }).shouldReject().after(getPackagePathSuccess);

    // TODO: Write more manifest tests, such as handling situation when manifest contains invalid JSON or doesn't exist

    // It's quite hard to test bundled packages due to their output

    var bundlePackageNonexistent = new subTest.Test(function() {
        return packages.bundlePackage("com.example.nonexistentpackage");
    }).shouldReject().after(getPackagePathSuccess);

    exports.tests = {
        namespaceIdentifierValidationBasic,
        namespaceIdentifierValidationMultiLevel,
        namespaceIdentifierValidationWithHyphens,
        namespaceIdentifierValidationEmpty,
        namespaceIdentifierValidationTooLong,
        namespaceIdentifierValidationInvalidChars,
        namespaceIdentifierValidationUpperCaseChars,
        namespaceIdentifierValidationConsecutiveFullStops,
        namespaceIdentifierValidationConsecutiveHyphens,
        namespaceIdentifierValidationBeginningFullStop,
        namespaceIdentifierValidationEndingFullStop,
        namespaceIdentifierValidationBeginningHyphen,
        namespaceIdentifierValidationEndingHyphen,
        namespaceIdentifierValidationConsecutiveFullStopHyphen,
        namespaceIdentifierValidationConsecutiveHyphenFullStop,
        namespaceIdentifierValidationAtLeastTopLevel,
        getPackagePathSuccess,
        getPackagePathInvalid,
        getPackagePathModule,
        getPackagePathHighLevelModule,
        getPackagePathNonexistent,
        getPackageManifestSuccess,
        getPackageManifestNonexistent,
        bundlePackageNonexistent
    };
});