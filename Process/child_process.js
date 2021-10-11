process.on("message", (message) => {
  console.log("child_process.js", message);
});

process.on("message", (message) => {
  if (message === "stopCount") {
    clearInterval(interval);
    process.exit(0);
  }
});

let count = 0;

let interval = setInterval(() => {
  process.send(count++);
}, 1000);
