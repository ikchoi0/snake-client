var stdin = process.stdin;
let connecttion;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (data) {
  // your code here
  if (data === "\u0003") {
    process.exit();
  }
  let command = "";
  if (data === "w") {
    command = "up";
  }
  if (data === "a") {
    command = "left";
  }
  if (data === "s") {
    command = "down";
  }
  if (data === "d") {
    command = "right";
  }
  connection.write(`Move: ${command}`);
};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
};
