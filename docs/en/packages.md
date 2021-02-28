# Packages
subOS uses package management as a way of maintaining various system components.
A **package** is a collection of code namespaces such as libraries which can be
accessed by any application through the subPack package manager and built-in
APIs.

Packages are stored in the `/packages` folder of the user filesystem
(`/userfs/packages` in the repo). A package is contained in a folder which is
named as the package's root namespace identifier (eg. `com.example.mymodule`)
and contains a manifest file (named `subpack.json`) along with the relevant
JavaScript module files.

Please see
[the subPack documentation](https://github.com/Subnodal/subPack/blob/main/README.md#writing-subpackjson)
to learn how to format the `subpack.json` file.

> **Note:** The use of HTTP URLs in the `dependencies` keypair value list inside
> of `subpack.json` is discouraged. If a URL dependency is used, it will be
> cached in `/packages/.urlcache` and used until the module is updated. This is
> to ensure that URL dependencies are available when there is no connection to
> the internet, or if the URL destination no longer works.

subOS supports the `subpack://` URI scheme for retrieving dependencies which are
other installed packages. These dependency packages are installed by subPack
along with their dependent package. Dependencies that resolve to other packages
cannot be defined in the `modules` keypair value list inside of `subpack.json`,
but they can exist in the `devDependencies` keypair value list.

## subPack and its API
subPack is the built-in package manager for subOS. The equivalent for non-subOS
operating systems is available in the
[subPack repository for Node.js](https://github.com/Subnodal/subPack).

subPack's responsibility is to install and uninstall packages, bundle packages
into standalone minified JavaScript files, and automatically import required
packages for applications when they are executed.

When scanning packages to match a given namespace identifier, subPack will first
search for the full identifier, and then remove each suffix step if the current
identifier cannot be found. So, for example, if an application requires a module
called `com.example.mymodule.myspecificfunction`, then subPack will first search
for `com.example.mymodule.myspecificfunction`, and then if that's not found, it
will search for `com.example.mymodule`, and so on. This is because one package
can have multiple namespaces, each with different identifiers which extend the
package's own identifier.