/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

namespace("com.subnodal.subos.backend.packages.test", function(exports) {
    var subTest = require("com.subnodal.subtest");
    var packages = require("com.subnodal.subos.backend.packages");

    // TODO: Generate artefact packages to test against so we can cover all conditions

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
        return packages.getPackagePath("com.subnodal.subos.startup");
    }).shouldResolveTo("/packages/com.subnodal.subos.startup/0");

    var getPackagePathInvalid = new subTest.Test(function() {
        return packages.getPackagePath("com.example.my_package");
    }).shouldReject();

    var getPackagePathModule = new subTest.Test(function() {
        return packages.getPackagePath("com.subnodal.subos.startup.example");
    }).shouldResolveTo("/packages/com.subnodal.subos.startup/0"); // TODO: This will fail when com.subnodal.subos.startup is updated

    var getPackagePathHighLevelModule = new subTest.Test(function() {
        return packages.getPackagePath("com.subnodal.subos.startup.example.highlevel.bottomlevel");
    }).shouldResolveTo("/packages/com.subnodal.subos.startup/0"); // TODO: This will fail when com.subnodal.subos.startup is updated

    var getPackagePathNonexistent = new subTest.Test(function() {
        return packages.getPackagePath("com.example.nonexistentpackage");
    }).shouldReject();

    var getPackageManifestSuccess = new subTest.Test(function() {
        return packages.getPackageManifest("com.subnodal.subos.startup").then(function(manifest) {
            return Promise.resolve(manifest.identifier);
        });
    }).shouldResolveTo("com.subnodal.subos.startup");

    var getPackageManifestNonexistent = new subTest.Test(function() {
        return packages.getPackageManifest("com.example.nonexistentpackage");
    }).shouldReject();

    // TODO: Write more manifest tests, such as handling situation when manifest contains invalid JSON or doesn't exist

    // It's quite hard to test bundled packages due to their output

    var bundlePackageNonexistent = new subTest.Test(function() {
        return packages.bundlePackage("com.example.nonexistentpackage");
    }).shouldReject();

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