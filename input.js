var stdin = process.stdin;
let connection;

const { MOVE_KEYS } = require('./constants');
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
  let messageToSend = "Hellolol";
  if (data === "\u0003") {
    process.exit();
  }
  if (Object.keys(MOVE_KEYS).includes(data)){
    connection.write(MOVE_KEYS[data]);
  }
};
stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
};
