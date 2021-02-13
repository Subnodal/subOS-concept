# Filesystem exposure
The functionality of the filesystem is exposed via a few IPC commands and is to
be consumed by the File API. All commands are `Promise`s since some actions
could be resource-intensive and so are backgrounded.

## File access status codes
These status codes should be defined in both the filesystem exposure as well as
the File API. File API will then read the status code and throw the appropriate
error, if any.

| Identifier     | Code | Meaning                                                    |
|----------------|------|------------------------------------------------------------|
| `ACCESSIBLE`   |  `0` | The requested node is accessible per the given constraints |
| `NONEXISTENT`  | `-1` | The requested node does not exist                          |
| `NOT_READABLE` | `-2` | The requested node cannot be read                          |
| `NOT_WRITABLE` | `-3` | The requested node cannot be written to                    |
| `NOT_FILE`     | `-4` | The requested node is not a file                           |
| `NOT_FOLDER`   | `-5` | The requested node is not a folder                         |

## `file_getInfo`
Given a node path as argument `path`, get the associated information about the
node. 

A `Promise` is returned containing an object formatted with the following
schema:

```javascript
{
    type: "file" || "folder", // The type of node
    size: Number, // The size of the node's contents in bytes, excluding the node's name and info
    writable: Boolean, // Whether the file can be written to
    created: Date, // The date at which the node was created
    lastRead: Date, // The date at which the node was last read
    lastWritten: Date, // The date at which the node was last written to
    lastInfoChange: Date // The date at which the info about the node was last changed
}
```

* When the node is created, the other dates will be the same date as `created`
* `lastRead` updates on its own
* `lastWritten` updates both `lastRead` and `lastInfoChange` in addition to
  itself
* `lastInfoChange` updates `lastRead` in addition to itself
* If the node's type is `"folder"`, then it will be the size of one filesystem
  block (usually 4,096 bytes in size) and not the size of the node's contents
  since folders simply exist as links

## `file_readFolder`
Given a folder path as argument `path`, list the names of the nodes in that
folder.