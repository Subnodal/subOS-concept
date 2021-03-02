# Unit testing subOS features
Testing subOS is a very important procedure, and it ensures that the operating
system is robust, secure and bug-free. We encourage developers to test every
aspect of their code to ensure that there is complete code coverage. Pull
requests which feature extensive tests are more trustworthy and are more likely
to be accepted and merged into the main branch.

Key terminology:
* **Subject code** refers to the code that we are testing against.
* **Test code** refers to the code which contains unit tests that invoke the
  subject code and test the various functions in it.
* **Artefacts** refer to example files or other generated setups which are used
  to test the subject code with (for example, configuration files which are read
  by the subject code).

We use [subTest](https://github.com/Subnodal/subTest) as a means of testing the
components of subOS. It allows us to write tests for many situations ─ whether
we are testing to see if a function returns a specific value, to testing whether
a returned `Promise` is rejected. Files designed specifically for testing are
given the filename extension `.test.js` to distinguish them from their subjects.
The test file should be in the same folder as its subject file, and both the
subject file and test file should share the same pre-extension name.

Ensure that your tests are included within the master test file at
[/backend/test.js](/backend/test.js). Use `addNamespaceTests` to pull in your
namespace tests like so:

```javascript
addNamespaceTests("com.subnodal.subos.mypackage.test");
```

## Namespace definition in test code
The test code's namespace will look a bit like this:

```javascript
namespace("com.subnodal.subos.mypackage.test", function(exports) {
    var subTest = require("com.subnodal.subtest");
    var mypackage = require("com.subnodal.subos.mypackage");

    exports.generateArtefacts = function() { // Optional
        return system.execute("file_writeFile", { /* ... */ });
    };

    exports.cleanUp = function() { // Optional
        return system.execute("file_deleteFile", { /* ... */ });
    };

    // Unit tests go here:
    var unitTest1 = new subTest.Test(function() {
        return mypackage.doSomething();
    }).shouldEqual("Hello, world!");

    // ...

    exports.tests = {
        unitTest1,
        unitTest2,
        unitTest3
        // ...
    };
});
```

Breaking this down, you will notice that the namespace's identifier ends with
`.test`, with the rest of the identifier being the identifier of the subject
namespace. This namespace also exports an object named `tests`, which contains
a list of tests. Note how this uses ES6 syntax with brace brackets (`{}`) to
identify each test, since this allows subTest to display the identifier of each
test in the console.

If artefacts should be generated to run the tests with, then the namespace can
export the functions `generateArtefacts` and `cleanUp` which contain code to
generate those artefacts and remove them respectively.

For a reference of what you can do with subTest, take a look at
[the subTest reference](https://github.com/Subnodal/subTest/blob/main/docs/en/reference/com.subnodal.subtest.md).