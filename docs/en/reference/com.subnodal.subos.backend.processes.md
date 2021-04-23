# com.subnodal.subos.backend.processes
## 🎛️ `Process`
`class` · A process under a specific user which runs application code.

**Parameters:**
* **`packageIdentifier`** (`String`): The identifier of the package to use when running this process
* **`userIdentifier`** (`String`): The identifier of the user who is running this process
* **`parentProcess`** (`Number`): The PID of the process which started this process, or `null` if running as a top-level process

## 🔡️ `Process.code`
`prop <null | String>` · The package code to run for this process.

## ⏩️ `Process.load`
`method` · Load or update the package code for this process.

**Returns:** `Promise` · `Promise` which is resolved if the process package has been loaded

## 🔡️ `Process.packageIdentifier`
`prop <String>`

## 🔡️ `Process.parentProcess`
`prop <Number | null>`

## 🔡️ `Process.pid`
`prop <Number>` · The PID of this process.

## 🔡️ `Process.running`
`prop <Boolean>` · Whether this process is currently running or not.

## ⏩️ `Process.start`
`method` · Start this process and execute the package code.

## ⏩️ `Process.stop`
`method` · Immediately stop this process. Any running code will be stopped.

## 🔡️ `Process.userIdentifier`
`prop <String>`

## 🔠️ `processList`
`var <[Process]>` · A list containing all running and stopped processes. Processes can be accessed with their Process ID (PID) by their indexes.