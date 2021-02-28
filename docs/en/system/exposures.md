# Exposures
An exposure in subOS is a command that bridges the the functionality of the
system and backend layers. Exposures are similar to syscalls in other operating
systems, in that high-level code can be granted access to lower-level
functionality.

Exposures are callable from the backend layer through the `system.execute`
command provided in the backend layer (defined in /system/communications.js).
Native APIs such as the File API and Requests API are then used as an
abstraction of the exposures which can be used in processes. Processes otherwise
have no access to the exposures.

Here is an example of how an exposure is called from within the backend layer:

```javascript
system.execute("file_readFolder", {path: "/users/charlie"}).then(function(data) {
    // Do something with `data`
}).catch(function(error) {
    // Handle an error code
});
```

As you can see, `system.execute` returns a `Promise` which is then resolved when
the called exposure command has completed successfully (or is rejected if there
was a problem).

Read more about function-specific exposures:
* [Filesystem exposure](file.md)

Non-function-specific exposures:
* `arguments` returns a `Promise` which resolves with an object containing the
  arguments supplied to subOS at boot.

## Exposure security
Exposures do not do any type checking. Type checking is done in the backend
layer when an in-process API dispatches a request. Exposures _do_, however,
implement some error handling to ensure that behaviour across target platforms
is uniform.