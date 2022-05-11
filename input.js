var stdin = process.stdin;

// setup interface to handle user input from stdin
const setupInput = function () {
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

};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
}