/*
    subOS
 
    Copyright (C) Subnodal Technologies. All Rights Reserved.
 
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

// See /docs/en/system/file.md to learn more about this exposure

const fs = require("fs");
const path = require("path");

const main = require("./main");

const accessStatus = {
    ACCESSIBLE: 0,
    NONEXISTENT: -1,
    NOT_READABLE: -2,
    NOT_WRITABLE: -3,
    NOT_FILE: -4,
    NOT_FOLDER: -5
};

function getFilesystemPath(localPath) {
    var filesystemPath = path.join(main.userFs, localPath);

    if (filesystemPath.startsWith(main.userFs)) {
        return filesystemPath;
    }

    return main.userFs; // If path goes back too many times, limit it to the root path
}

function getAccessStatus(localPath, exists = true, read = true, write = false, type = null) {
    try {
        exists && fs.accessSync(getFilesystemPath(localPath), fs.constants.F_OK);
    } catch (e) {
        return accessStatus.NONEXISTENT;
    }

    try {
        read && fs.accessSync(getFilesystemPath(localPath), fs.constants.R_OK);
    } catch (e) {
        return accessStatus.NOT_READABLE;
    }

    try {
        write && fs.accessSync(getFilesystemPath(localPath), fs.constants.W_OK);
    } catch (e) {
        return accessStatus.NOT_WRITABLE;
    }

    if (fs.statSync(getFilesystemPath(localPath)).isFile() && type != null && type != "file") {
        return accessStatus.NOT_FILE;
    }

    if (fs.statSync(getFilesystemPath(localPath)).isDirectory() && type != null && type != "folder") {
        return accessStatus.NOT_FOLDER;
    }

    return accessStatus.ACCESSIBLE;
}

exports.exists = function(path) {
    return Promise.resolve(fs.existsSync(getFilesystemPath(path)));
};

exports.getInfo = function(path) {
    if (getAccessStatus(path, true, true, false, null) != accessStatus.ACCESSIBLE) {
        return Promise.reject(getAccessStatus(path, true, true, false, null));
    }

    var stats = fs.statSync(getFilesystemPath(path));

    return Promise.resolve({
        type: stats.isDirectory() ? "folder" : "file",
        size: stats.size,
        writable: getAccessStatus(path, true, true, true, null) != accessStatus.NOT_WRITABLE,
        created: stats.birthtime,
        lastRead: stats.atime,
        lastWritten: stats.mtime,
        lastInfoChange: stats.ctime,
    });
};

exports.readFolder = function(path) {
    if (getAccessStatus(path, true, true, false, "folder") != accessStatus.ACCESSIBLE) {
        return Promise.reject(getAccessStatus(path, true, true, false, "folder"));
    }

    return Promise.resolve(fs.readdirSync(getFilesystemPath(path)));
};

exports.readFile = function(path) {
    if (getAccessStatus(path, true, true, false, "file") != accessStatus.ACCESSIBLE) {
        return Promise.reject(getAccessStatus(path, true, true, false, "file"));
    }

    return fs.readFileSync(getFilesystemPath(path), "utf-8");
};

exports.readFileBinary = function(path, start, size) {
    if (getAccessStatus(path, true, true, false, "file") != accessStatus.ACCESSIBLE) {
        return Promise.reject(getAccessStatus(path, true, true, false, "file"));
    }

    var stream = fs.createReadStream(path, {start, end: start + size});
    var buffer = new Buffer.alloc(size);
    var bufferPointer = 0;

    return new Promise(function(resolve, reject) {
        stream.on("data", function(chunk) {
            for (var i = 0; i < chunk.length; i++) {
                buffer[bufferPointer] = chunk[i];
    
                bufferPointer++;
            }
        });

        stream.on("end", function() {
            resolve(buffer);
        });
    });
};