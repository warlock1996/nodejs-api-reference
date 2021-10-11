const { spawn, exec, fork } = require("child_process");

const childProcess = fork("./child_process.js");

childProcess.send("hi from parent");

childProcess.on("message", (message) => {
  console.log(message);
  if (message > 10) {
    childProcess.send("stopCount");
  }
});
