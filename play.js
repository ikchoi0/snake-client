const { connect } = require("./client");

var stdin = process.stdin;

console.log("Connecting ...");
const conn = connect();
conn.on("data", (data) => {
  console.log(data);
});
conn.write("Name: LOL");

conn.write("Move: up");
// setTimeout(() => {
//       conn.write("Move: up");
// }, 100);
// // setInterval(() => {
// //   console.log('moving up');
// //   conn.write("Move: up");
// // }, 50);

