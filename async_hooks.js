const async_hooks = require("async_hooks");
const fs = require("fs");
const http = require("http");
const { fd } = process.stdout;

let indent = 0;
async_hooks
  .createHook({
    init(asyncId, type, triggerAsyncId, resource) {
      fs.writeSync(fd, `${type}(${asyncId}): trigger: ${triggerAsyncId}\n`);
    },
  })
  .enable();

fs.writeFile(
  "data.txt",
  new Uint8Array(Buffer.from("Hello Node.js")),
  (err) => {
    if (err) throw new Error("error while writing to file");
  }
);

console.log(Buffer.from([1, 2, 3]).constants.MAX_LENGTH);
