/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

// @namespace com.subnodal.subos.backend.packages
namespace("com.subnodal.subos.backend.packages", function(exports) {
    var enums = require("com.subnodal.subos.backend.enums");

    /*
        @name packageContentsRetrievalStatus
        @type const <{*}>
        Enum for package contents retrieval statuses when accessing a package's
        manifest or modules.
    */
    /*
        @name packageContentsRetrievalStatus.SUCCESSFUL
        @type const <*>
        The requested package contents was retrieved successfully.
    */
    /*
        @name packageContentsRetrievalStatus.UNKNOWN
        @type const <*>
        The requested package contents could not be retrieved due to an unknown
        reason.
    */
    /*
        @name packageContentsRetrievalStatus.NONEXISTENT
        @type const <*>
        The requested package contents could not be retrieved because either the
        package does not exist, or the requested contents of that package
        doesn't exist.
    */
    /*
        @name packageContentsRetrievalStatus.MALFORMED
        @type const <*>
        The requested package contents could not be retrieved because it was
        badly formatted.
    */
    exports.packageContentsRetrievalStatus = {
        SUCCESSFUL: 0,
        UNKNOWN: -1,
        NONEXISTENT: -2,
        MALFORMED: -3
    };

    /*
        @name namespaceIdentifierIsValid
        Determine whether a given namespace identifier conforms to the
        subModules identifier style.
            ~~~~
            With similar requirements to ARPANET hostnames, a namespace
            identifier must only include lowercase Latin letters (`a`-`z`),
            numbers (`0`-`9`), full stops (`.`) and hyphens (`-`). Each level
            must have at least one character in it, and cannot start or end with
            a hyphen. A level cannot contain consecutive hyphens (`--`). The
            identifier must have at least a top level and a hostname (eg.
            `com.example`). To prevent confusion, an identifier cannot contain
            any uppercase, non-Latin or diacriticised characters.
        @param identifier <String> The namespace identifier to validate
        @returns <Boolean> Whether the given namespace identifier is valid
    */
    exports.namespaceIdentifierIsValid = function(identifier) {
        // Identifier must only include allowed characters
        if (!/^[a-z0-9.-]+$/.test(identifier)) {
            return false;
        }

        // Identifier cannot have consecutive full stops or hyphens
        if (/\.\./.test(identifier) || /--/.test(identifier)) {
            return false;
        }

        // Identifier cannot have full stops or hyphens next to each other
        // This is to prevent a level from having a hyphen at the start or end
        if (/\.-/.test(identifier) || /-\./.test(identifier)) {
            return false;
        }

        // Identifier cannot start or end with a hyphen
        if (/^-/.test(identifier) || /-$/.test(identifier)) {
            return false;
        }

        // Identifier must have at least a top level and a hostname
        if (identifier.split(".").length < 2) {
            return false;
        }

        return true;
    };

    /*
        @name getPackagePath
        Get the path of a package from a given module namespace identifier. Can
        be an identifier which references a module of a package, and not just
        the package identifier itself.
            ~~~~
            If the returned `Promise` is rejected, an object containing an enum
            value from `(com.subnodal.subos.backend.enums).fileAccessStatus` is
            supplied as a reason.
        @param identifier <String> The namespace identifier of the package to get
        @returns <Promise> `Promise` which is resolved with the path, or rejected if the package path could not be determined
    */
    exports.getPackagePath = function(identifier, _originalIdentifier = null) {
        if (!exports.namespaceIdentifierIsValid(identifier)) {
            return Promise.reject({code: enums.fileAccessStatus.UNKNOWN, message: "Namespace identifier is invalid"});
        }

        if (_originalIdentifier == null) {
            _originalIdentifier = identifier;
        }

        return system.execute("file_readFolder", {path: "/packages/" + identifier}).then(function(data) {
            return Promise.resolve("/packages/" + identifier);
        }).catch(function(error) {
            if (error != enums.fileAccessStatus.NONEXISTENT || identifier.split(".").length == 2) {
                return Promise.reject({code: error, path: "/packages/" + _originalIdentifier, message: "Package path could not be resolved"});
            }

            identifier = identifier.split(".");

            identifier.pop();

            identifier = identifier.join(".");

            return exports.getPackagePath(identifier, _originalIdentifier); // Find package by parent identifier
        });
    };

    /*
        @name getPackageManifest
        Get the manifest of a package from a given namespace identifier. Can be
        an identifier which references a module of a package, and not just the
        identifier itself.
            ~~~~
            If the returned `Promise` is rejected, an object containing an enum
            value from `packageContentsRetrievalStatus` is supplied as a reason.
        @param identifier <String> The namespace identifier of the package to get the manifest of
        @returns <Promise> `Promise` which is resolved with the manifest contents, or rejected if the package contents could not be retrieved
    */
    exports.getPackageManifest = function(identifier) {
        return exports.getPackagePath(identifier).then(function(path) {
            return system.execute("file_readFile", {path: path + "/subpack.json"});
        }).catch(function(error) {
            return Promise.reject({
                code: (
                    error.code == enums.fileAccessStatus.NONEXISTENT ?
                    exports.packageContentsRetrievalStatus.NONEXISTENT :
                    exports.packageContentsRetrievalStatus.UNKNOWN
                ),
                message: "Package path could not be resolved when retrieving package contents"
            });
        }).then(function(data) {
            try {
                return Promise.resolve(JSON.parse(data));
            } catch (e) {
                return Promise.reject({code: exports.packageContentsRetrievalStatus.MALFORMED, message: "Syntax error when parsing manifest's JSON contents"});
            }
        });
    };

    function getDependencyPromise(dependencyPath, devDependencies, maxDependencyDepth) {
        if (dependencyPath.startsWith("http://") || dependencyPath.startsWith("https://")) {
            // TODO: Implement URL-based module dependencies
            // Dependent on a requests exposure
            throw new Error("URL-based module dependencies are not implemented yet");
        }

        if (dependencyPath.startsWith("subpack://")) {
            if (maxDependencyDepth == 0) {
                return Promise.resolve(""); // Silently don't bundle; there could be a circular dependency
            }

            return exports.bundlePackage(dependencyPath.split("/")[2], devDependencies, maxDependencyDepth - 1);
        }

        return system.execute("file_readFile", {path: packagePath + "/" + dependencyPath}).catch(function() {
            return Promise.reject(exports.packageContentsRetrievalStatus.UNKNOWN);
        });
    }

    function getModulePromise(packagePath, modulePath) {
        return system.execute("file_readFile", {path: packagePath + "/" + modulePath}).catch(function() {
            return Promise.reject(exports.packageContentsRetrievalStatus.UNKNOWN);
        });
    }

    /*
        @name bundlePackage
        Get the bundled JavaScript code from a package with a given namespace
        identifier. Can be an identifier which references a module of a package,
        and not just the identifier itself.
            ~~~~
            If the returned `Promise` is rejected, an object containing an enum
            value from `packageContentsRetrievalStatus` is supplied as a reason.
        @param identifier <String> The namespace identifier of the package to bundle
        @param devDependencies <Boolean = false> Whether to include dev dependencies when bundling
        @param maxDependencyDepth <Number = 10> The maximum recursion depth allowed for bundling dependencies
        @returns <Promise> `Promise` which is resolved with bundled JavaScript code, or rejected if the bundle could not be retrieved
    */
    exports.bundlePackage = function(identifier, devDependencies = false, maxDependencyDepth = 10) {
        var packagePath;

        return exports.getPackagePath(identifier).then(function(path) {
            packagePath = path;

            return exports.getPackageManifest(identifier);
        }).then(function(data) {
            var allModules = [];

            data.dependencies = data.dependencies || [];
            data.devDependencies = data.devDependencies || [];
            data.modules = data.modules || [];

            if (typeof(data.dependencies) != "object") {
                return Promise.reject({code: exports.packageContentsRetrievalStatus.MALFORMED, path: packagePath + "/subpack.json", message: "`dependencies` is not a list of dependencies"});
            }

            if (typeof(data.devDependencies) != "object") {
                return Promise.reject({code: exports.packageContentsRetrievalStatus.MALFORMED, path: packagePath + "/subpack.json", message: "`devDependencies` is not a list of dev dependencies"});
            }

            if (typeof(data.dependencies) != "object") {
                return Promise.reject({code: exports.packageContentsRetrievalStatus.MALFORMED, path: packagePath + "/subpack.json", message: "`modules` is not a list of modules"});
            }

            allModules = allModules.concat(data.dependencies.map((modulePath) => getDependencyPromise(modulePath, devDependencies, maxDependencyDepth)));

            if (devDependencies) {
                allModules = allModules.concat(data.devDependencies.map((modulePath) => getDependencyPromise(modulePath, devDependencies, maxDependencyDepth)));
            }

            allModules = allModules.concat(data.modules.map((modulePath) => getModulePromise(packagePath, modulePath)));

            return Promise.all(allModules);
        }).then(function(modules) {
            return Promise.resolve(modules.join(""));
        }).catch(function(error) {
            return Promise.reject({path: packagePath, ...error});
        });
    };
});
// @endnamespace