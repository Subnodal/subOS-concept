# Users
subOS is a multi-user operating system. Users are defined as individuals who use
a particular computer. There is only one exception, and that is the system user,
who starts non-user-specific processes.

Unlike UNIX operating systems, programs are not reserved their own seperate
users ─ we like to follow the concept of _one human per user_ in that users
should be easily identifiable as to who they are. (Don't worry though, that
doesn't limit you to creating users for your pets or inanimate objects, too!)

## Usernames
Save for the system user, all users have their own usernames. The username of a
user points to their user folder name ─ for example, the user `charlie` will
have a folder path of `/users/charlie`.

The system user does not have its own username since it does not have its own
user folder (the system user is not limited by permissions, and therefore has
full access to the root filesystem) and so that no usernames are reserved.

In addition to usernames, users are given their own identifiers so that users
can easily be renamed, and the system user can also be identified without having
a username. A user identifier is generally a 16-charater string using Base64
digits, though the specifications of user identifiers may vary. It is advisory
that applications should store data in relation to a user identifier instead
of a username to prevent issues from arising when a user changes their username.

When a user changes their username, the following happens:

1. The user signs out, with all of their processes terminated. This is to
   prevent cases where a process is still referencing a location in the user's
   old folder path.
2. The user's username is changed on the database of identifiers and their
   respective usernames (stored as a JSON file in `/userfs/system/users.json`).
3. The user's folder is renamed to match their new username.
4. The user will then be asked to sign back in again with their new credentials.

The user's folder is not named after the user's identifier but instead the
user's username to make it easier for a user to identify their own folder.

The system user is given the identifier `0000000000000000`, though this
identifier should not be relied upon when testing whether the current user is
the system user.

### Username conventions
Usernames must contain any of the characters `a`-`z`, `A`-`Z`, `0`-`9`, or
special symbols `-` or `_`. A username must be at least 1 character long, and at
most 127 characters long (for compatibility with most filesystems as well as
applications which may append a file extension to the end of a username when
saving a file).

Generally, usernames should match the first name of the individual who's using
it, all lowercase (eg. `charlie`). Otherwise, any naming convention may be used.
subOS will usually assign the email address before the `@` symbol to a new
user's username for easy identification.

## Permissions
Users are bound by the permissions of their groups and themselves. To learn more
about permissions, see [the permissions system](permissions.md).