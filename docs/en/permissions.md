# Permissions
To ensure security among users and their running processes, subOS implements a
permissions system which is configurable by anyone who has access to the
permissions database file. Permissions are applied to three different entities:
the users, the groups that users are in, and the applications.

## The permissions database
The permissions database is a simple JSON file which lists the permissions for
different entities. It is stored in `/userfs/system/permissions.json` (the
groups of users are defined in `/userfs/system/groups.json`). Here is an example
of this file's contents (unminified and commented for easier reading):

```javascript
{
    "allUsers": {
        "paths": {
            "/public": ["read", "write"]
        }
    },
    "users": {
        "84eQNerjpYbT8Z0k": { // In the `owners` and `superusers` groups
            "paths": {
                "/users/alice": ["read", "write"]
            }
        },
        "IGkZW8eEkhc3_Dmy": { // In the `superusers` group
            "paths": {
                "/users/bob": ["read", "write"]
            }
        },
        "vLt-J-6rniLBCrlI": { // In the `protected` group
            "paths": {
                "/users/charlie": ["read", "write"]
            }
        }
    },
    "groups": {
        "owners": {
            "paths": {
                "/system/users.json": ["read", "write"],
                "/system/permissions.json": ["read", "write"]
            }
        },
        "superusers": {
            "paths": {
                "/packages": ["write"],
                "/applications": ["write"],
                "/users": ["read", "write"]
            },
            "actions": ["debug"]
        },
        "protected": {
            "actions": ["-camera!"],
            "paths": {
                "/users": ["-write!"]
            }
        }
    },
    "allApplications": {
        "actions": ["debug"]
    },
    "applications": {
        "com.subnodal.subos.camera": {
            "actions": ["camera"]
        }
    }
}
```

To determine whether an entity has the permission to access a path, each path
node step is checked against the permissions for a specific entity:

* All permissions are set to _denied_ as default, but are unlocked.
* If the node step has given the permission to do something, then mark that
  permission as _allowed_.
* If the node step does does not specify a permission to do something, then do
  not alter the permission mark.
* If the node step has not given the permission to do something (the permission
  label starts with `-`), then mark that permission as _denied_.
* If the node step's permission has a label that ends with `!`, then lock that
  permission.
* If the node step is the final node, then finalise all permissions.

The same applies to actions, however actions are not path-based.

The system defines some default permissions which are not stored in
`permissions.json` (to ensure that permissions can be added/removed between
system updates):

Path access for all users:
* `/`: `read`
* `/system`: `read`, `-write`
* `/system/users.json`: `-read`
* `/system/permissions.json`: `-read`
* `/users`: `-read`, `-write`

Action access for all users:
* `camera`
* `microphone`
* `notifications`
* `sensing`
* `connectivity`
* `location`

Action access for `com.subnodal.subos.startup`:
* `debug`

## Entity permission checking order
If a user is being checked for their permissions, then their group permissions
are checked, followed by their own permissions.

If an application is being checked for their permissiosn, then their user's
permissions are checked first, followed by their own permissions.