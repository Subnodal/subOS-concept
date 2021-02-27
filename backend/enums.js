/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

// @namespace com.subnodal.subos.backend.enums
namespace("com.subnodal.subos.backend.enums", function(exports) {
    /*
        @name fileAccessStatus
        @type const <{*}>
        Enum for file access statuses. Enum is a copy of `accessStatus` in
        `/system/file.js`. See `/docs/en/system/file.md` for more information.
    */
    /*
        @name fileAccessStatus.ACCESSIBLE
        @type const <*>
        The requested node is accessible per the given constraints.
    */
    /*
        @name fileAccessStatus.UNKNOWN
        @type const <*>
        The requested node could not be modified for unknown reasons.
    */
    /*
        @name fileAccessStatus.NONEXISTENT
        @type const <*>
        The requested node does not exist.
    */
    /*
        @name fileAccessStatus.NOT_READABLE
        @type const <*>
        The requested node cannot be read.
    */
    /*
        @name fileAccessStatus.NOR_WRITABLE
        @type const <*>
        The requested node cannot be written to.
    */
    /*
        @name fileAccessStatus.NOT_FILE
        @type const <*>
        The requested node is not a file.
    */
    /*
        @name fileAccessStatus.NOT_FOLDER
        @type const <*>
        The requested node is not a folder.
    */
    exports.fileAccessStatus = {
        ACCESSIBLE: 0,
        UNKNOWN: -1,
        NONEXISTENT: -2,
        NOT_READABLE: -3,
        NOT_WRITABLE: -4,
        NOT_FILE: -5,
        NOT_FOLDER: -6,
        ALREADY_EXISTS: -7
    };
});
// @endnamespace