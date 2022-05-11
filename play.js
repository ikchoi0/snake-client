const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();


// setInterval(() => {
//   console.log('moving up');
//   conn.write("Move: up");
// }, 500);

setupInput(conn);
