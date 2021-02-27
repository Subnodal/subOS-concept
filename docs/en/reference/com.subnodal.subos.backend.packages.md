# com.subnodal.subos.backend.packages
## ▶️ `getPackageManifest`
`function` · Get the manifest of a package from a given namespace identifier. Can be an identifier which references a module of a package, and not just the identifier itself.


If the returned `Promise` is rejected, an object containing an enum
value from `packageContentsRetrievalStatus` is supplied as a reason.

**Parameters:**
* **`identifier`** (`String`): The namespace identifier of the package to get the manifest of

**Returns:** `Promise` · `Promise` which is resolved with the manifest contents, or rejected if the package contents could not be retrieved

## ▶️ `getPackagePath`
`function` · Get the path of a package from a given module namespace identifier. Can be an identifier which references a module of a package, and not just the package identifier itself.


If the returned `Promise` is rejected, an object containing an enum
value from `(com.subnodal.subos.backend.enums).fileAccessStatus` is
supplied as a reason.

**Parameters:**
* **`identifier`** (`String`): The namespace identifier of the package to get

**Returns:** `Promise` · `Promise` which is resolved with the path, or rejected if the package path could not be determined

## ▶️ `namespaceIdentifierIsValid`
`function` · Determine whether a given namespace identifier conforms to the subModules identifier style.


With similar requirements to ARPANET hostnames, a namespace
identifier must only include lowercase Latin letters (`a`-`z`),
numbers (`0`-`9`), full stops (`.`) and hyphens (`-`). Each level
must have at least one character in it, and cannot start or end with
a hyphen. A level cannot contain consecutive hyphens (`--`). The
identifier must have at least a top level and a hostname (eg.
`com.example`). To prevent confusion, an identifier cannot contain
any uppercase, non-Latin or diacriticised characters.

**Parameters:**
* **`identifier`** (`String`): The namespace identifier to validate

**Returns:** `Boolean` · Whether the given namespace identifier is valid

## 🔒️ `packageContentsRetrievalStatus`
`const <{*}>` · Enum for package contents retrieval statuses when accessing a package's manifest or modules.

## 🔒️ `packageContentsRetrievalStatus.MALFORMED`
`const <*>` · The requested package contents could not be retrieved because it was badly formatted.

## 🔒️ `packageContentsRetrievalStatus.NONEXISTENT`
`const <*>` · The requested package contents could not be retrieved because either the package does not exist, or the requested contents of that package doesn't exist.

## 🔒️ `packageContentsRetrievalStatus.SUCCESSFUL`
`const <*>` · The requested package contents was retrieved successfully.

## 🔒️ `packageContentsRetrievalStatus.UNKNOWN`
`const <*>` · The requested package contents could not be retrieved due to an unknown reason.