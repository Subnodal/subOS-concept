# subOS
Main repository for the components of subOS, an operating system built by
Subnodal.

Licenced by the [Subnodal Open-Source Licence](LICENCE.md).

## Specifications
The development of subOS will be done in accordance to the subOS Redesign
Proposal, which is
[viewable at the Subnodal website](https://subnodal.com/media/subOSProposal.pdf).
Specifically, refer to the _Project roadmap_ section to learn about the
development process of subOS, in addition to the _Ensuring that everybody can
get involved_ section to learn how to contribute to the subOS project.

## Testdriving subOS
To run a sandboxed subOS instance on your system, you will need to install the
dependencies of subOS by running in the root directory of this project:

```bash
$ npm install
```

Then, you can start subOS by running:

```bash
$ npm start -- --user-fs ~/path/to/user/fs
```

The `--user-fs` argument points to the user filesystem where you want system
files to be stored. If omitted, then it will be a folder called `subOS` in your
home directory. If the path does not exist, then it will be created.

Use the `--debug-backend` argument to launch DevTools for debugging the backend
and HCI layers.

Use the `--reset` argument to clear the user filesystem and reload all system
files (thus resetting the filesystem state). Use `--keep-changes` if you want to
keep all user changes to system files intact when relaunching (this argument
will not be effective if `--reset` is supplied).


## Contributing
Opportunities for contributing to the subOS codebase are currently quite
limited. We plan to expand our opportunities later on in development once we've
implemented the basic functionality of subOS. In the meantime, feel free to
submit issues to this repository with the **enhancement** label to suggest
changes.

We currently have no RFC process and so we do not currently have a method for
making any new feature requests official.