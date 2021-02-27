# Applications
Like all opreating systems, subOS is able to run both first- and third-party
software programs as _applications_. An _application_ is an executable program,
and a _process_ is a running instance of that application.

Applications are stored in the `/applications` folder of the user filesystem
(`/userfs/applications` in the repo). An application is contained in a folder
which is named as the application's package identifier (eg.
`com.example.myapp`), and inside that folder, an application manifest and
launcher icon is contained. The application manifest is a JSON file named
`manifest.json` and the icon can be named either `icon.svg` or `icon.png`,
depending on the file format. Inclusion of an icon is optional; if the icon is
not present, a default icon will be used instead.

Here is an example of an application manifest (unminified and commented for
easier reading):

```javascript
{
    "identifier": "com.example.myapp",
    "name": { // Can be localised
        "en_GB": "My Example Application",
        "fr_FR": "Mon exemple d'application"
    },
    "description": { // Can be localised
        "en_GB": "This is an example application.",
        "fr_FR": "Ceci est un exemple d'application."
    },
    "defaultLocale": "en_GB", // If the system locale doesn't match a locale for app name/description
    "actions": ["camera"], // List of actions app needs to function (optional)
    "displayInLauncher": true // If `true`, app will display in the app launcher for users to open
}
```

The application's package identifier must match an identifier of an installed
subPack package, so if the identifier is `com.example.myapp`, then the
`/packages/com.example.myapp` package folder must be present.

## Launching applications
One application process can launch another, and can send and receive
inter-process messages with that child process. If the parent process is
terminated, the child process will not be terminated, but it can detect if it
has been orphaned ─ or when its parent process is no longer running. This allows
applications to launch other applications where the user can close the first
application and continue to work in the second.

## Process IDs
Like other operating systems, subOS uses a numerical process ID (PID) system,
starting at `0` for the first process, and then incrementing the identifier for
each new process, so as to enumerate each process in chronological order.

### Process `0`
The startup process is given the PID `0`, and is run by the system user. The
application for this process is chosen through the `/userfs/system/boot.json`
file; the application's package identifier is read from the `startup` keypair
value.

The startup process is by default set to be the `com.subnodal.subos.startup`
application. This process is responsible for starting other applications, such
as the desktop environment.