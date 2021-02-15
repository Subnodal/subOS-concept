# Filesystem exposure
The functionality of the filesystem is exposed via a few IPC commands and is to
be consumed by the File API. All commands are `Promise`s since some actions
could be resource-intensive and so are backgrounded.

## File access status codes
These status codes should be defined in both the filesystem exposure as well as
the File API. File API will then read the status code and throw the appropriate
error, if any.

| Identifier     | Code | Meaning                                                      |
|----------------|------|--------------------------------------------------------------|
| `ACCESSIBLE`   |  `0` | The requested node is accessible per the given constraints   |
| `UNKNOWN`      | `-1` | The requested node could not be modified for unknown reasons |
| `NONEXISTENT`  | `-2` | The requested node does not exist                            |
| `NOT_READABLE` | `-3` | The requested node cannot be read                            |
| `NOT_WRITABLE` | `-4` | The requested node cannot be written to                      |
| `NOT_FILE`     | `-5` | The requested node is not a file                             |
| `NOT_FOLDER`   | `-6` | The requested node is not a folder                           |

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

## `file_rename`
Given an existing node path as argument `oldPath` and new node path as argument
`newPath`, rename an existing node sot hat it can be accessed via the specified
new path.

## `file_readFolder`
Given a folder path as argument `path`, list the names of the nodes in that
folder.

## `file_createFolder`
Given a folder path as argument `path`, create a new folder as that path.
Folders are created recursively, and so not all of the path needs to exist.

## `file_deleteFolder`
Given a folder path as argument `path`, delete the folder and its contents.

## `file_readFile`
Given a file path as argument `path`, read the text contents of that file.

## `file_readFileBinary`
Given a file path as argument `path`, read the binary contents of that file as
a `Buffer`.

## `file_writeFile`
Given a file path as argument `path` and textual data as argument `data`, write
the data to the file.

Set the `append` argument to `true` to append the data to the end of the file
instead of overwriting it.

## `file_writeFileBinary`
Given a file path as argument `path` and data in a `Buffer` as argument `data`,
write the data to the file.

Set the `append` argument to `true` to append the data to the end of the file
instead of overwriting it.

## `file_deleteFile`
Given a file path as argument `path`, delete the file.