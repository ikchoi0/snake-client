const { connect } = require("./client");

var stdin = process.stdin;

console.log("Connecting ...");
const conn = connect();
conn.on("data", (data) => {
  console.log(data);
});
conn.write("Name: LOL");

// setInterval(() => {
//   console.log('moving up');
//   conn.write("Move: up");
// }, 500);

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
  if (data === "w") {
    conn.write("Move: up");
  }
};
setupInput();
stdin.on("data", handleUserInput);
